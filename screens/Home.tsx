import * as React from 'react';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
  getFamilyMovies,
  getDocumentaryMovies,
} from '../services/service';
import {
  ResultsMovieProps,
  ResultsTVProps,
  StringArray,
} from '../types/response.type';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

import {SliderBoxComponent} from '../components/SliderBoxComponent';
import List from '../components/List';
import Error from '../components/Error';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export const dimensions = Dimensions.get('screen');

const Home = ({navigation}: any) => {
  console.log(dimensions);
  const [moviesImage, setMoviesImage] = React.useState<StringArray>();
  const [popularMovies, setPopularMovies] =
    React.useState<ResultsMovieProps[]>();
  const [familyMovies, setFamilyMovies] = React.useState<ResultsMovieProps[]>();
  const [documentaryMovies, setDocumentaryMovies] =
    React.useState<ResultsMovieProps[]>();
  const [popularTv, setPopularTv] = React.useState<ResultsTVProps[]>();
  const [error, setError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTV(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  React.useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const movieImagesArray: StringArray = [];
          upcomingMoviesData.forEach((movie: ResultsMovieProps) => {
            return movieImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImage(movieImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
          setLoaded(true);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded && !error && (
        <ScrollView>
          {moviesImage && (
            <View style={styles.sliderContainer}>
              <SliderBoxComponent images={moviesImage} />
            </View>
          )}

          {/* Popular Movies */}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}

          {/* Popular Tv Shows */}
          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Tv Shows"
                content={popularTv}
              />
            </View>
          )}

          {/* Family Movies */}
          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Family Movies"
                content={familyMovies}
              />
            </View>
          )}

          {/* Documentary Movies */}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Documentary Movies"
                content={documentaryMovies}
              />
            </View>
          )}
        </ScrollView>
      )}

      {!loaded && <ActivityIndicator size="large" color="red" />}
      {error && <Error />}
    </>
  );
};

export const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: 'black',
  },
  list: {
    marginTop: 25,
  },
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  detailImage: {
    height: dimensions.height / 2.5,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
    color: 'black',
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
  },
  releaseDate: {
    fontWeight: 'bold',
  },
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: '#4481FC',
  },
  playButton: {
    position: 'absolute',
    top: -40,
    right: 20,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
