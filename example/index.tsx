import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Frame } from './components/Frame';
import { FadeIn } from './components/FadeIn';
import { Raise } from './components/Raise';
import './styles.css';
import { LetterDash } from './components/LetterDash';
import { Filling } from './components/Filling';
import { Reveal } from './components/Reveal';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Frame bg="#F56565" color="#F7FAFC" title="Fade In">
        <FadeIn />
      </Frame>
      <Frame bg="#ED8936" color="#F7FAFC" title="Raise">
        <Raise />
      </Frame>
      <Frame bg="#48BB78" color="#F7FAFC" title="Letter Dash">
        <LetterDash />
      </Frame>
      <Frame bg="#38B2AC" color="#F7FAFC" title="Filling">
        <Filling bgColor="#38B2AC" />
      </Frame>
      <Frame bg="#4299E1" color="#F7FAFC" title="Reveal">
        <Reveal bgColor="#4299E1" />
      </Frame>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
