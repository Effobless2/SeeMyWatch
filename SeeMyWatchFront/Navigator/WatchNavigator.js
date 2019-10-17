import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Main from '../Screens/WatchCustomizingScreen'
import Rendu from '../Screens/ARView';

const MainNavigator = createMaterialBottomTabNavigator(
    {
        Main: {screen: Main},
        ARView: {screen: Rendu},
    },
    {
        initialRouteName: 'Main',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
  );
  
  
  export default MainNavigator;