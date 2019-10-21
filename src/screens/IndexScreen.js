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
    const { state, deleteGoal, getGoals } = useContext(GoalContext);

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
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteGoal(item.id)}
                                >
                                    <EvilIcons
                                        name="trash"
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
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
        fontSize: 30
    }
});

export default IndexScreen;
