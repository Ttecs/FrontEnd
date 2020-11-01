import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Form from './Pages/Form/Form';
import ResultList from './Pages/ResultList/ResultList';
import DetailedResult from './Pages/DetailedResult/DetailedResult';
import Payment from './Pages/Checkout/Payment';
import Thank from './Pages/ThankYou/Thank';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch> 
      <Route path='/result'> <ResultList /> </Route> 
      <Route path='/thank'> <Thank /> </Route> 
      <Route path='/detailedresult' component={DetailedResult} />
      <Route path='/payment' component={Payment} />
      <Route path='/'>  <Form /> </Route>
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
