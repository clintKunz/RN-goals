import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/GoalContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

const GoalScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const goal = state.find(goal => goal.id === navigation.getParam("id"));
    return (
        <View>
            <Text>
                {goal.title} - {goal.description}
            </Text>
        </View>
    );
};

GoalScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Edit", {
                        id: navigation.getParam("id")
                    })
                }
            >
                <EvilIcons name="pencil" size={40} style={{ marginRight: 5 }} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default GoalScreen;
