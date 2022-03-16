import axios from "axios";
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}
export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data = await response.data;
    dispatch<FetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: data,
    });
  };
};
export const deleteTodos = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: id,
  };
};
