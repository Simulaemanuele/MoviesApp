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
import {dimensions} from '../services/constants';
import {styles} from '../styles/mainStyles';

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

export default Home;
