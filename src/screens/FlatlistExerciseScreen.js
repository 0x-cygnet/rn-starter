import react from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatlistExerciseScreen = function () {
  const friends = [
    { name: "Friend 1", age: "20" },
    { name: "Friend 2", age: "45" },
    { name: "Friend 3", age: "32" },
    { name: "Friend 4", age: "27" },
    { name: "Friend 5", age: "53" },
    { name: "Friend 6", age: "55" },
    { name: "Friend 7", age: "30" },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 5,
    fontSize: 25,
    borderWidth: 2,
    padding: 10,
  },
});

export default FlatlistExerciseScreen;
