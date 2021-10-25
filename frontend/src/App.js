import { useState, useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';
import Create from './components/Create';
import NewsItemDetails from './components/NewsItemDetails';

function App() {
  const [ news, setNews ] = useState(null);

  useEffect(() => {
    Axios.get('/display_news')
    .then(res => {
        // console.log(res.data);
        setNews(res.data);
    })
    .catch( err => console.log(err));
  }, []);

    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">{news && <News newsItems={news} /> }</Route>
          <Route path="/news/:id" component={NewsItemDetails} />
          <Route path="/create" component={Create} />
        </Switch>
        <Footer />
      </Router>
    );
}

export default App;
