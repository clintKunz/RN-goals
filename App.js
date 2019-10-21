import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/GoalContext";
import GoalScreen from "./src/screens/GoalScreen";

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Goal: GoalScreen
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
