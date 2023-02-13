import * as React from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Star from 'react-native-star-view';
import dateformat from 'dateformat';
import {getMovie} from '../services/service';
import {DetailScreenProps} from '../types/generic.types';
import {GetMovieByIdProps} from '../types/response.type';
import {styles} from '../styles/mainStyles';
import placeholderImage from '../assets/images/placeholder.png';
import PlayButton from '../components/PlayButton';
import {Pressable} from 'react-native';
import Video from '../components/Video';

const Detail = ({route, navigation}: DetailScreenProps) => {
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = React.useState<GetMovieByIdProps>();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {loaded && (
        <View>
          <ScrollView>
            <Image
              style={styles.detailImage}
              source={
                movieDetail?.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetail?.poster_path,
                    }
                  : placeholderImage
              }
              resizeMode="cover"
            />
            <View style={styles.centerContainer}>
              <View style={styles.playButton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetail?.title}</Text>
              {movieDetail?.genres && (
                <View style={styles.genresContainer}>
                  {movieDetail.genres.map(genre => {
                    return (
                      <Text style={styles.genre} key={genre.id}>
                        {genre.name}
                      </Text>
                    );
                  })}
                </View>
              )}
              <Star score={Number(movieDetail?.vote_average) / 2} />
              <Text style={styles.overview}>{movieDetail?.overview}</Text>
              <Text style={styles.releaseDate}>
                {'Release date: ' +
                  dateformat(movieDetail?.release_date, 'dd/mm/yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType={'slide'}
            visible={modalVisible}>
            <View style={styles.videoModal}>
              <Video onClose={videoShown} />
            </View>
          </Modal>
        </View>
      )}
      {!loaded && <ActivityIndicator size="large" color="red" />}
    </>
  );
};

export default Detail;
