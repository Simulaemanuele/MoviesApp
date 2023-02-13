import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from './Navbar';
import Search from '../screens/Search';
const Stack = createNativeStackNavigator();
class MainNavigation extends React.PureComponent {
  state = {};
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        {
          <Stack.Screen
            name="Detail"
            /* @ts-ignore */
            component={Detail}
            options={{
              headerTransparent: true,
              header: ({navigation}) => <Navbar navigation={navigation} />,
            }}
          />
        }

        {
          <Stack.Screen
            name="Search"
            /* @ts-ignore */
            component={Search}
            options={{
              headerTransparent: true,
              header: ({navigation}) => <Navbar navigation={navigation} />,
            }}
          />
        }
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
