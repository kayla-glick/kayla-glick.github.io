import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './utils/store-scroll';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.addEventListener('load', () => {
  document.documentElement.classList.add('ready')
  window.removeEventListener('load', () => {})

  new ScrollSpy(document.querySelector('main') as HTMLElement, {
    target: '#site-header'
  });
})

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
