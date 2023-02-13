import * as React from 'react';
import {SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/mainStyles';

const Search = ({navigation}: any) => {
  const [text, onChangeText] = React.useState<string>();

  const onSubmit = (query: string | undefined) => {
    console.log(query);
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
      </SafeAreaView>
    </>
  );
};

export default Search;
