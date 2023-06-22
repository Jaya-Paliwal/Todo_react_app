import './App.css';
import Heading from './components/Heading';
import Content from './components/Content';
import Header from './components/Header';
import style from './style/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div className="container">
      <Heading>TODO List</Heading>
      <div className={style.app__wrapper}>
        <Header />
        <Content />
      </div>
    </div>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          fontSize: '1.4rem',
        },
      }}
    />
  </>
  );
}

export default App;
