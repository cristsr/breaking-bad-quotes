import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    const result = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quotes = await result.json();
    setQuote(quotes[0]);
  }

  useEffect(() => {
    getQuote();
  }, [])


  return (
    <Container>
      <Quote quote={quote}/>
      <Button onClick={getQuote}>
        Get Quote
      </Button>
    </Container>
  );
}

export default App;
