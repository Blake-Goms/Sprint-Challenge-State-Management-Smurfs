import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
//  ABOVE IS CONTEXT API ^^^^^^^^^^^^^^^



// BELOW IS REDUX 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './reducer/index';

// const store = createStore(reducer, applyMiddleware(thunk));

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );