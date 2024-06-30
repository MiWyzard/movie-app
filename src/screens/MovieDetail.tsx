import React, { useEffect, useState, ReactNode, ReactElement } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import MovieList from '../components/movies/MovieList';
import { Movie, MovieListProps } from '../types/app';
import axios from 'axios';
import { API_URL, API_ACCESS_TOKEN } from '@env';
import { LinearGradient } from 'expo-linear-gradient'
import {FontAwesome} from "@expo/vector-icons"

type Props = {
  route: any,
};


const Row = ({ children }: {children: ReactNode}) => (
  <View style={styles.row}>{children}</View>
)

export default function MovieDetail({ route }: Props): React.JSX.Element {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = route.params;

  const movieRecommended: MovieListProps = {
    title: 'Recommendation',
    path: `movie/${id}/recommendations`,
    coverType: 'poster',
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  const getMovieDetail = async (): Promise<void> => {
    try {
      const response = await axios.get(`${API_URL}movie/${id}`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${API_ACCESS_TOKEN}`
        }
      });
      setMovie(response.data);
    } catch (error) {
      console.log("🚀 ~ getMovieDetail ~ error:", error);
    }
  };

  return (
    <ScrollView>
      {movie && (
        <View>
        <ImageBackground
        resizeMode='cover'
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImage}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        }}
      >
          <LinearGradient
          colors={['#00000000', 'rgba(0, 0, 0, 0.7)']}
          locations={[0.6, 0.8]}
          style={styles.gradientStyle}
          >
            <Text style={styles.movieTitle}>
              {movie.title}
            </Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color={"yellow"}/>
              <Text style={styles.rating}>
                {movie.vote_average.toFixed(1)}
              </Text>
            </View>
          </LinearGradient>
      </ImageBackground>
      <View style={{margin: 20}}>
        <View>
          <Text>
            {movie.overview}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Row>
            <View>
              <Text style={styles.titleText}>Original Language</Text>
              <Text>{movie.original_language}</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Popularity</Text>
              <Text>{movie.popularity}</Text>
            </View>
          </Row>
          <Row>
            <View>
              <Text style={styles.titleText}>Release date</Text>
              <Text>{movie.popularity}</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Vote count</Text>
              <Text>{movie.popularity}</Text>
            </View>
          </Row>
        </View>
        </View>
      </View>
      )}
      <MovieList
        key={movieRecommended.title}
        title={movieRecommended.title}
        path={movieRecommended.path}
        coverType={movieRecommended.coverType}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  backgroundImage: {
    marginRight: 4,
    height: 200
  },
  backgroundImageStyle: {
    borderRadius: 8,
  },
  movieTitle: {
    color: 'white',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  gradientStyle: {
    padding: 8,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    color: 'yellow',
    fontWeight: '700',
  },
})
