import * as React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../styles/mainStyles';
import Colors from '../theme/Colors';

Icon.loadFont();

class PlayButton extends React.PureComponent<{handlePress: () => void}> {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={'caret-forward-outline'} size={30} color={Colors.white} />
      </Pressable>
    );
  }
}

export default PlayButton;
