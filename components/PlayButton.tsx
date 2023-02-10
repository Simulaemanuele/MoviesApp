import * as React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../screens/Home';

class PlayButton extends React.PureComponent {
  render() {
    return (
      <Pressable style={styles.button}>
        <Icon name={'caret-forward-outline'} size={30} />
      </Pressable>
    );
  }
}

export default PlayButton;
