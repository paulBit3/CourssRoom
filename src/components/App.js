import React, { Fragment } from 'react';

// import logo from '.././logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'semantic-ui-css/semantic.min.css';

//sweet alert
import Swal from 'sweetalert2';


//enabling frontend routing with react router
import CoreRouter from './CoreRouter';





const App = () => {
  return (
    <Fragment>
      <CoreRouter/>
    </Fragment>
  );
}

export default App;
