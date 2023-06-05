import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//This is how we add new pages - we have to import the components
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

//exercise imports
import Exercise1Screen from "./src/screens/Exercise1Screen";
import FlatlistExerciseScreen from "./src/screens/FlatlistExerciseScreen";

//the stackNavigator is what decides what to show on the screen at any given time
//To add new "pages", add them to the first object{} [also called the Route object]
//To set the homepage, update "initialRouteName" to be whichever component you want
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercise1: Exercise1Screen,
    List: ListScreen,
    Exercise2: FlatlistExerciseScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
