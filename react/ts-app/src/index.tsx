import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import Hello from './components/hello'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  // <Hello name="nihao" enthusiasmLevel={4} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
