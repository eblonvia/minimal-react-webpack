import { ADD_ARTICLE, CHANGE_CURRENT_TITLE, REMOVE_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: [],
    currentTitle: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case CHANGE_CURRENT_TITLE:
            return Object.assign({}, state, { currentTitle: action.payload })

        case REMOVE_ARTICLE:
            let arr = state.articles.filter( art=> art.title!=action.payload);
            return { ...state, articles: [...arr] };
        default:
            return state;
    }
};

export default rootReducer;