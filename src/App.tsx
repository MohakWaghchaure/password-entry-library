import React from 'react';
import 'bootstrap-grid';
import './App.scss';
import Background from './components/Background';
import FormComponent from './components/FormComponent';

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <div className="App body-wrapper">
      <div className='container'>
        <div className='main-wrapper'>
          <Background></Background>
          <FormComponent></FormComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
