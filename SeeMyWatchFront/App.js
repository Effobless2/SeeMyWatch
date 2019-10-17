import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FormActivity from './Screens/FormActivity';
import WatchNav from './Navigator/WatchNavigator';
console.disableYellowBox = true
const MainNavigator = createStackNavigator({
  Login: {screen: FormActivity},
  Home: {screen: WatchNav},
});

const App = createAppContainer(MainNavigator);

export default App;