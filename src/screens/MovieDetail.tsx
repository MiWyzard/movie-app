import React, { useEffect, useState } from 'react'
import { View, Text} from 'react-native'
import MovieList from '../components/movies/MovieList';
import { Movie, MovieListProps } from '../types/app';
import axios from 'axios';
import { API_URL, API_ACCESS_TOKEN} from '@env';
import MovieItem from '../components/movies/MovieItem';

const movieRecommeded:MovieListProps = 
  {
    title: 'Recommendation',
    path:'movie/533535/recommendations?language=en-US&page=1',
    coverType: 'poster',
  }

type Props = {
  route: any,
}

export default function MovieDetail({ route } : Props): React.JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([])
  const {id} = route.params;
  useEffect(() => {
    console.log("🚀 ~ MovieDetail ~ id:", id)
    getMovieDetail()
  }, [])

  const getMovieDetail = async() : Promise<void> => {
    try {
        const response = await axios.get(`${API_URL}movie/${id}`, {headers: {"Accept": "application/json", "Authorization" : `Bearer ${API_ACCESS_TOKEN}`}})    
        console.log("🚀 ~ getMovieDetail ~ response:", response)
        setMovies(response.data.results);
    } catch (error) {
        console.log("🚀 ~ getMovieList ~ error:", error)
    }
  }

  return (
    <View>
      <Text style={{ marginBottom: 8 }}>Movie ID: {id}</Text>
      {/* <MovieItem
        movie={movies[0]}
        size={{ width: 280, height: 160 }}
        coverType="poster"
      /> */}
      <MovieList
        key={movieRecommeded.title}
        title={movieRecommeded.title}
        path={movieRecommeded.path}
        coverType={movieRecommeded.coverType}
      />
    </View>
  )
}