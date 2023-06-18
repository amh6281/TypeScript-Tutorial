type StateType = {
  theme: string;
  fontSize: number;
};

type ActionType = {
  type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
  payload: number;
};

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};
