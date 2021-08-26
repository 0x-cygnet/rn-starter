import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BlankScreen from "./src/screens/BlankScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImagesScreen from "./src/screens/ImagesScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Blank: BlankScreen,
    List: ListScreen,
    Images: ImagesScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
