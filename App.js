import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import FriendList from "./src/screens/FriendList";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import WorkShop1 from "./src/screens/WorkShop1";
const navigator = createStackNavigator(
  {
     Home: HomeScreen,
     Components: ComponentsScreen,
     List: ListScreen,
     DummyFriend: FriendList,
     Image: ImageScreen,
     Counter: CounterScreen,
     Color: ColorScreen,
     Square:SquareScreen,
     Workshop:WorkShop1

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "REACT NATIVE",
    },
  }
);

export default createAppContainer(navigator);
