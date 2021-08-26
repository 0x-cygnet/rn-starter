import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

const friends = [
    { id: '1', name: 'Friend #1', age : 20 },
    { id: '2', name: 'Friend #2', age : 21 },
    { id: '3', name: 'Friend #3', age : 22 },
    { id: '4', name: 'Friend #4', age : 23 },
    { id: '5', name: 'Friend #5', age : 24 },
    { id: '6', name: 'Friend #6', age : 25 },
    { id: '7', name: 'Friend #7', age : 26 },
]

const BlankScreen = () => {
    const logo = './../images/logo-md.png';
    return (
    <View>
        <Text style={styles.header}>List</Text>
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={ (friend) => friend.id }
            showsVerticalScrollIndicator={false}
            data={friends}
            renderItem={ ( {item} ) => {
                return <Text style={styles.listItem}>{item.name} - {item.age}</Text>
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: '10%',
        fontSize: 30,
    }
});

export default BlankScreen;
