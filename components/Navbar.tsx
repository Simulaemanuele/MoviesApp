import * as React from 'react';
import {Image} from 'react-native';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import movieApp from '../assets/images/movieAppIcon.jpg';
import {styles} from '../screens/Home';

class Navbar extends React.PureComponent<{navigation: any; main: boolean}> {
  static defaultProps: {main: false};
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Image style={styles.logo} source={movieApp} resizeMode={'cover'} />
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon name={'search-outline'} size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name={'chevron-back'} size={40} color={'#fff'} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default Navbar;
