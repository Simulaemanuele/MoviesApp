import * as React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import Error from '../components/Error';
import {searchMovieTv} from '../services/service';
import {styles} from '../styles/mainStyles';
import {SearchMovieProps, SearchTvProps} from '../types/response.type';

const Search = ({navigation}: any) => {
  const [text, onChangeText] = React.useState<string>();
  const [searchResult, setSearchResults] = React.useState<
    SearchMovieProps[] & SearchTvProps[]
  >();
  const [error, setError] = React.useState<boolean>(false);

  const onSubmit = (query: string | undefined) => {
    Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(error => {
        setError(true);
        throw error;
      });
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={'Search Movie or Tv Show'}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search-outline'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchItem}>
          {/*Searched items results*/}
          {searchResult && searchResult.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResult}
              renderItem={({item}) => (
                <Card
                  navigation={navigation}
                  /*@ts-ignore*/
                  item={item}
                />
              )}
              /*@ts-ignore*/
              keyExtractor={(item, idx) => item?.results?.id + String(idx)}
            />
          )}

          {/*When searched but not results*/}
          {searchResult && searchResult.length == 0 && (
            <View style={[styles.empty, {paddingTop: 20}]}>
              <Text>No results matching your criteria.</Text>
              <Text>Try different keywords.</Text>
            </View>
          )}

          {/*When nothing is searched*/}
          {!searchResult && (
            <View style={styles.empty}>
              <Text>Type something to start searching.</Text>
            </View>
          )}

          {/*Error*/}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;
