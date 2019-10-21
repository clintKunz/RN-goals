import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/GoalContext";
import GoalScreen from "./src/screens/GoalScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Goal: GoalScreen,
        Create: CreateScreen,
        Edit: EditScreen
    },
    {
        initialRouteName: "Index",
        defaultNavigationOptions: {
            title: "Goals"
        }
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
};
