import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//This is how we add new pages - we have to import the components
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";

//the stackNavigator is what decides what to show on the screen at any given time
//To add new "pages", add them to the first object{}
//To set the homepage, update "initialRouteName" to be whichever component you want
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercise: ExerciseScreen,
  },
  {
    initialRouteName: "Exercise",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
