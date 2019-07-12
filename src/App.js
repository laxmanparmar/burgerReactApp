import React from 'react';

import './App.css';


import BurgerBuilder from './container/BurgerBuilder';
import {Route,Switch} from 'react-router-dom';
import Checkout from './Components/CheckOut/CheckOut';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
   <Layout>
     <div className="App">
      <Switch>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/BurgerBuilder" component={BurgerBuilder}/>
        <Route path="/" exact component={BurgerBuilder}/>
        
      </Switch>

        {/* <BurgerBuilder/> */}
    </div>
   </Layout>
    
   
  );
}

export default App;
