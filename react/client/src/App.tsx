import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {connect} from "react-redux";
import "./App.css";
import {reducers, StoreState} from "./components/reducers";
import {deleteTodos, fetchTodos, Todo} from "./components/reducers/actions";
import {useEffect} from "react";

interface AppProps {
  todo: Todo[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
  // deleteTodos: typeof deleteTodos;
}

function App({todo, fetchTodos, deleteTodos}: AppProps) {
  useEffect(() => {
    console.log("fetching todos");

    fetchTodos();

    console.log("fetching todos done", todo);
  }, []);
  const renderList = (): JSX.Element[] => {
    return todo.map((todo: Todo) => {
      return (
        <li onClick={() => deleteTodos(todo.id)} key={todo.id}>
          {todo.title}
        </li>
      );
    });
  };
  console.log("rendering app", todo);
  return (
    // <Provider store={store}>
    <div>
      <h2>Testing Purspose</h2>
      <ul>{renderList()}</ul>
    </div>
    // </Provider>
  );
}
const mapStateToProps = ({todos}: StoreState): {todo: Todo[]} => {
  return {todo: todos};
};
export default connect(mapStateToProps, {fetchTodos, deleteTodos})(App);
