import React, { useEffect, useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context as GoalContext } from "../context/GoalContext";

const IndexScreen = ({ navigation }) => {
    const { state, deleteGoal, getGoals, toggleGoal } = useContext(GoalContext);

    const colorObj = {
        "Spiritual": "#1C99AA",
        "Social": "#B1A918",
        "Physical": "#C83C47",
        "Intellectual": "#DA752F"
    };

    useEffect(() => {
        getGoals();

        const listener = navigation.addListener("didFocus", () => {
            getGoals();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                data={state}
                keyExtractor={goal => goal.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Goal", { id: item.id })
                            }
                        >
                            <View style={[styles.row, { backgroundColor: colorObj[item.category] }]}>
                                <Text style={[styles.title, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>{item.title}</Text>
                                <View>
                                <TouchableOpacity onPress={() => toggleGoal(item.id, item)}>
                                    <EvilIcons name="check" style={styles.icon} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => deleteGoal(item.id)}
                                >
                                    <EvilIcons
                                        name="trash"
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <EvilIcons name="plus" size={35} style={{ marginRight: 10 }} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginBottom: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 40
    }
});

export default IndexScreen;
