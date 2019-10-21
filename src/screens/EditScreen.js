import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/GoalContext";

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const goal = state.find(goal => goal.id === navigation.getParam("id"));
    const [title, setTitle] = useState(goal.title);
    const [description, setDescription] = useState(goal.description);
    const { updateGoal } = useContext(Context);

    return (
        <View style={{ margin: 20 }}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
                value={description}
                onChangeText={description => setDescription(description)}
                style={styles.input}
            />
            <Button
                title="Update Goal"
                onPress={() => {
                    updateGoal(goal.id, { title, description }, () => {
                        navigation.pop();
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "black",
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    }
});

export default EditScreen;
