import createDataContext from "./createDataContext";

const goalReducer = (state, action) => {
    switch (action.type) {
        case "add_goal":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999999).toString(),
                    title: `Goal #${state.length + 1}`
                }
            ];
        case "delete_goal":
            return state.filter(goal => goal.id !== action.payload);
        default:
            return state;
    }
};

const addGoal = dispatch => {
    return () => {
        dispatch({ type: "add_goal" });
    };
};

const deleteGoal = dispatch => {
    return id => {
        dispatch({ type: "delete_goal", payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    goalReducer,
    { addGoal, deleteGoal },
    []
);
