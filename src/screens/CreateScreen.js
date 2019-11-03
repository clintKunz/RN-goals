import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button, Picker } from "react-native";
import { Context } from "../context/GoalContext";

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Spiritual");
    const { addGoal } = useContext(Context);

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
            <Picker
                selectedValue={category}
                style={{ height: 50, width: 100 }}
                onValueChange={category => setCategory(category)}>
                <Picker.Item label="Spiritual" value="Spiritual" />
                <Picker.Item label="Social" value="Social" />
                <Picker.Item label="Physical" value="Physical" />
                <Picker.Item label="Intellectual" value="Intellectual" />
            </Picker>
            <Button
                title="Add Goal"
                onPress={() => {
                    addGoal(title, description, category, () => {
                        navigation.navigate("Index");
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

export default CreateScreen;
