import React, { useContext } from "react";
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
    const { state, addGoal, deleteGoal } = useContext(GoalContext);

    return (
        <View>
            <Button title="Add Goal" onPress={addGoal} />
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
