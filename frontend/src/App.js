import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Contact from './components/Contact';
import './styles/App.scss';
import AddContact from './screens/AddContact'

function App() {
  return (
    <Router>
      <Header />
      <Container className="App">
        <Switch>
          <Route exact path='/' component={Contact} />
          <Route exaxt path='/add' component={AddContact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
