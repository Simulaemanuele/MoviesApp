import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from '../styles/mainStyles';

import {ResultsMovieProps, ResultsTVProps} from '../types/response.type';
import Card from './Card';

type ListProps = {
  navigation: any;
  title: string;
  content: (ResultsMovieProps[] & ResultsTVProps[]) | undefined;
};

class List extends React.PureComponent<ListProps> {
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            renderItem={({item}) => (
              //@ts-ignore
              <Card navigation={navigation} item={item} />
            )}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}

export default List;
