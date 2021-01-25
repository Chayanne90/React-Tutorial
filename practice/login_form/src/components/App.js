import React from 'react';
import Button from './Button';
import '.././style.css'


const App = () => {
  return (

    <div>

      <div className=" container-sm">
        <h5 className="welcome"><center>Welcome To My App</center></h5>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>

          <div className="mb-3">
            <input type="password" className="form-control" id="password" placeholder="password" />
          </div>
          <div className="buttons">
            <Button color="btn-login btn btn-primary" text="Log In" />
            <Button color=" btn-cancel btn btn-danger" text="Cancel" />
          </div>

        </form>
      </div>

    </div>


  );
}

export default App;