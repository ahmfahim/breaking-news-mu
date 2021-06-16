import './App.css';
import { useState, useEffect } from 'react';
import News from './components/News/News';
import Header from './components/Header/Header';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e8ed1069b50348e3aa443f9010917047';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <Header></Header>
      {
        articles.map(article => <News article={article}></News>)
      }
      
    </div>
  );
}

export default App;
