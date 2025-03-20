import React, { useState } from 'react';
import 'bootstrap-grid';
import './App.scss';
import Background from './components/Background';
import FormComponent from './components/FormComponent';

function App() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [copyPassword, setCopyPassword] = useState<string>('');


  return (
    <div className="App body-wrapper">
      <div className='container'>
        <div className='main-wrapper'>
          <Background></Background>
          <FormComponent setOverlay={setOverlay} setCopyPassword={setCopyPassword}></FormComponent>
          {overlay && <div className='overly-screen'>
            <div className='success-screen'>
              <div className='message-text'>
                <div className='text'>Password Successfully Created!</div>
                <div className='password'>{copyPassword}</div>
              </div>
              <div className='close-btn' onClick={() => setOverlay(false)}></div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
