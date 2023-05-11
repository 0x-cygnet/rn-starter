import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

//FlatList - turns an array into a list of elements
//FlatLists need two input props:
// 1) the array we want to convert
// 2) a "renderItem" prop - a function used to turn each individual item into a JSX element

const ListScreen = function () {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];

  const addKey = [
    { name: "Friend #1", key: "1a" }, //this is the first way of adding a key
    { name: "Friend #2", key: "2b" },
  ];

  return (
    //Flatlist very much works like a loop - whatever happens in renderItem happens for each
    //element in the input variable - "friends" in this case

    <FlatList
      //---------------------------------------------------------------
      //The horizontal prop causes the flatlist to spit the array out horizontally instead of vertically
      //just writing "horizontal" is the same as horizontal={true}
      horizontal
      //The "horizontal" prop also causes a horizontal scroll bar to be visible at the bottom of the page
      //if you don't want to have that, you can add this next prop: showsHorizontalScrollIndicator
      showsHorizontalScrollIndicator={false}
      //--------------------------------------------------------------
      //this is the second way of adding a key - keyExtractor (this way is a runtime key injection)
      //in this example, since "name" is a string AND unique to the array, we can use it as they key too
      keyExtractor={(friend) => friend.name}
      data={friends}
      //------------------------------------------------------------
      // renderItem={(element) => {}     This is the way to get the entire element output
      //elements have several properties:
      // - item (the first item in the array)
      // - index

      //console logging "element" would look like this:
      //element === { item: {name: 'Friend #1'}, index: 0}

      //this is how we directly get the item property, instead of the entire element
      renderItem={({ item }) => {
        //console logging item will get us this:
        //item === {name: 'Friend #1'}

        //now we can have renderItem output what we want to do with
        return <Text style={styles.textStyle}>{item.name}</Text>;

        //Currently, we don't have a "key" property for the array, so every time react needs
        //to change or update the data or display, it needs to rebuild the flatlist.
        //by adding in a key, we tell react how to associate the array with the flatlist,
        //allowing us to update it without rebuilding it each time.

        //NOTE: keys MUST be strings, and must be UNIQUE within that array

        //There are two ways of adding keys, both are equally valid:
        // 1) add a key to each object in the original array
        // 2) add a keyExtractor prop to the FlatList, and assign a key that way

        //While both are valid, the second is generally preferred to keep the view-side of things clean
      }}
    />
  );
};

//we're using marginVertical to expand the output to take up more than the display of the screen with the list
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
