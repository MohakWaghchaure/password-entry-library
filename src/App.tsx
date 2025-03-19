import React from 'react';
import 'bootstrap-grid';
import './App.scss';

function App() {
  return (
    <div className="App body-wrapper">
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='card-container'>
              <div className='header-wrapper'>
                <h1>Create a Strong Password</h1>
                <p>Follow the rules below to secure your account</p>
              </div>
              <div className='form-wrapper'>
                <form>
                  <div className='input-wrapper'>
                    <label>Password</label>
                    <input type="password"></input>
                  </div>
                  <div className='input-wrapper'>
                    <label>Confirm Password</label>
                    <input type="password"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='background-container'></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
