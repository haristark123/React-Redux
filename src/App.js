import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/header'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div >  
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/products/:productId' exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
