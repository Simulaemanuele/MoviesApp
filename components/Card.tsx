import * as React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../styles/mainStyles';
import {
  GetMovieByIdProps,
  ResultsMovieProps,
  ResultsTVProps,
  SearchMovieProps,
  SearchTvProps,
} from '../types/response.type';

import placeholderImage from '../assets/images/placeholder.png';

import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
class Card extends React.PureComponent<{
  navigation: any;
  item: ResultsMovieProps &
    ResultsTVProps &
    GetMovieByIdProps &
    SearchMovieProps &
    SearchTvProps;
}> {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {movieId: item.id})}
        style={styles.container}>
        <Image
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
          resizeMode="cover"
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item?.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

export default Card;
