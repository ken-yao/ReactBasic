import React from "react";
import ReactDOM from "react-dom";
import BasicPage from './Page/BasicPage';
import PropsPage from './Page/PropsPage';
import StatePage from './Page/StatePage';
import EventPage from './Page/EventPage';
import OutputhtmlPage from './Page/OutputhtmlPage';
import RefsPage from './Page/RefsPage';
import StylesPage from './Page/StylesPage';
import LifecyclePage from './Page/LifecyclePage';

const app = document.getElementById('app');

ReactDOM.render(
    <LifecyclePage />,
    app
);