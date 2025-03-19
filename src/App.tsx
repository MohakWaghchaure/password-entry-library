import React from 'react';
import 'bootstrap-grid';
import './App.scss';
import background001 from './images/background/background001.svg'

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <div className="App body-wrapper">
      <div className='container'>
        <div className='main-wrapper'>
          <div className='background-container'>
            <img src={background001} alt={'background'} width={500} />
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='header-wrapper'>
                <h1>Create a Strong Password</h1>
                <p>Follow the rules below to secure your account</p>
              </div>
              <div className='form-wrapper'>
                <form onSubmit={handleSubmit}>
                  <div className='input-wrapper'>
                    <label>Password</label>
                    <input type="password"></input>
                  </div>
                  <div className='input-wrapper'>
                    <label>Confirm Password</label>
                    <input type="password"></input>
                  </div>
                  <div className='password-strength'>
                    <div>Strength</div>
                    <div></div>
                  </div>
                  <div className='checklist-wrapper'>
                    <div>Minimum 6 characters</div>
                    <div>One uppercase letter</div>
                    <div>One lowercase letter</div>
                    <div>One number</div>
                    <div>One special character</div>
                  </div>
                  <div className='buttons-wrapper'>
                    <button className='button btn-submit' type='submit'>Submit</button>
                    <button className='button btn-reset' type='reset'>Reset</button>
                  </div>
                  {/* <div className='error-container'>
                    <div>Error message</div>
                    <div></div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App;
