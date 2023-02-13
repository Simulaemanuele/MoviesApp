import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/mainStyles';
import {ErrorComponentProps} from '../types/generic.types';

const defaultProps = {
  errorText1: 'Oops! Something went wrong.',
  errorText2: 'Check your connection and restart the app.',
};

class Error extends React.PureComponent<ErrorComponentProps> {
  static defaultProps: {errorText1: string; errorText2: string};
  render() {
    const {errorText1, errorText2} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{errorText1}</Text>
        <Text style={styles.text}>{errorText2}</Text>
      </View>
    );
  }
}

Error.defaultProps = defaultProps;

export default Error;
