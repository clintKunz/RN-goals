import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const goalReducer = (state, action) => {
    switch (action.type) {
        case "get_goals":
            return action.payload;
        case "delete_goal":
            return state.filter(goal => goal.id !== action.payload);
        case "update_goal":
            return state.map(goal =>
                goal.id === action.payload.id ? action.payload : goal
            );
        default:
            return state;
    }
};

const getGoals = dispatch => {
    return async () => {
        const response = await jsonServer.get("/goals");
        dispatch({ type: "get_goals", payload: response.data });
    };
};

const addGoal = dispatch => {
    return async (title, description, callback) => {
        try {
            const response = await jsonServer.post("/goals", {
                title,
                description
            });
            if (callback) callback();
        } catch (err) {
            console.log(err);
        }
    };
};

const deleteGoal = dispatch => {
    return async id => {
        try {
            const response = await jsonServer.delete(`/goals/${id}`);
            dispatch({ type: "delete_goal", payload: id });
        } catch (err) {
            console.log(err);
        }
    };
};

const updateGoal = dispatch => {
    return async (id, goal, callback) => {
        try {
            const response = await jsonServer.put(`/goals/${id}`, { ...goal });
            dispatch({ type: "update_goal", payload: { id, ...goal } });
            if (callback) callback();
        } catch (err) {
            console.log(err);
        }
    };
};

export const { Context, Provider } = createDataContext(
    goalReducer,
    { getGoals, addGoal, deleteGoal, updateGoal },
    []
);
