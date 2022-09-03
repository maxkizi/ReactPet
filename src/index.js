import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)