import "./QuoteBox.css"
import  { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuoteBox() {



  const [currentQuote, setCurrentQuote] = useState({
    id: null,
    author: "Auteur par défaut",
    quote: "Cliquez sur le bouton pour obtenir une citation."
  });

  const getNewQuote = async () => {
    try {
      const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const quotes = response.data.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
      setCurrentQuote(newQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    
    getNewQuote();
  }, []);



  return (
    <div id="quote-box" className="quoteBox container m-auto">
          <div className="top-quote mt-3 row ">
            <div  className=" text-center row ">
            <i className="bi bi-quote col-2"></i>
              <h1 className=" text-center mt-4" id="text" >{currentQuote.quote}</h1>
            </div>
              <div id="author" className="authorSection row">
                  <h5 className="aut mt-4"> - {currentQuote.author}</h5>
              </div>
          </div>
          <div className="botom-quote  row my-3 ">
          <div className="col  ">
              <a className="btn btn-primary  twit" href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
                  <i className="bi bi-twitter"></i>
              </a>
              <div className="btn btn-primary twit  " >tumblt</div>
          </div>
         
       
          <div className="col d-flex flex-row-reverse ">
          <div className="btn btn-primary  me-5" id="new-quote" onClick={getNewQuote} >new-quote</div>

          </div>
              
          </div>
        
    </div>
  )
}
