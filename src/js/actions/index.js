

import { ADD_ARTICLE, CHANGE_CURRENT_TITLE,REMOVE_ARTICLE } from "../constants/action-types";

export const addArticle= article =>({type:ADD_ARTICLE,payload:article});
export const changeCurrentTitle= title =>({type:CHANGE_CURRENT_TITLE,payload:title});
export const removeArticle= title =>({type:REMOVE_ARTICLE,payload:title});