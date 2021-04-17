import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense } from 'react';
import Preloader from './components/prloader';
const App = React.lazy(() => import('./App'));

const centerCSS = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: '-50px',
      marginLeft: '-50px'
}

ReactDOM.render(
  
  <React.StrictMode>
    <Suspense fallback={<div style={centerCSS}><Preloader/></div>}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
