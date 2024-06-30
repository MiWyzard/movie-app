import React from 'react'
import {ScrollView, View, StatusBar, StyleSheet} from 'react-native'
import type {MovieListProps} from '../types/app'
import MovieList from '../components/movies/MovieList'

const movieLists: MovieListProps[] = [
  {
    title: 'Now Playing in Theater',
    path: 'movie/now_playing?language=en-US&page=1',
    coverType: 'backdrop',
  },
  {
    title: 'Upcoming Movies',
    path: 'movie/upcoming?language=en-US&page=1',
    coverType: 'poster',
  },
  {
    title: 'Top Rated Movies',
    path: 'movie/top_rated?language=en-US&page=1',
    coverType: 'poster',
  },
  {
    title: 'Popular Movies',
    path: 'movie/popular?language=en-US&page=1',
    coverType: 'poster',
  },
]


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight ?? 32,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
})


export default function Home(): React.JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
        {movieLists.map((movieLists) => (
          <MovieList
            key={movieLists.title}
            title={movieLists.title}
            path={movieLists.path}
            coverType={movieLists.coverType}
          />
        ))}
        <StatusBar translucent={false} />
      </View>
    </ScrollView>
  )
}
