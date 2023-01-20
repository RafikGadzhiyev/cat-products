import styled, { createGlobalStyle } from "styled-components";
import { Product } from "./components/Product";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    font-size: 20px;
    background-image: url('./Background image.svg');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a,
  button {
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
  }
`
const ProductThought = styled.span`
  text-align: center;
  color: var(--descriptionColor);
  font-size: .9rem;
`

const BuyButton = styled.a`
  color: #1698d9;
  text-decoration: underline;
  text-decoration-style: dotted;
`

const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-block: 2.5rem;
  padding: .25rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ProductsContainer>
        <Product
          type="man"
          topText="Сказочное заморское яство"
          flavor='с фуа-гра'
          total={10}
          mouseAmount={1}
          weight={0.5}
        >
          <ProductThought>Чего сидишь? Порадуй котэ, <BuyButton href="#1">купи</BuyButton></ProductThought>
        </Product>
        <Product
          type="man"
          topText="Сказочное заморское яство"
          flavor='с рыбой'
          total={40}
          mouseAmount={2}
          weight={2}
        >
          <ProductThought>Чего сидишь? Порадуй котэ, <BuyButton href="#1">купи</BuyButton></ProductThought>
        </Product>
        <Product
          type="man"
          topText="Сказочное заморское яство"
          flavor='с курой'
          total={100}
          mouseAmount={5}
          weight={5}
        >
          <ProductThought>Чего сидишь? Порадуй котэ, <BuyButton href="#1">купи</BuyButton></ProductThought>
        </Product>
      </ProductsContainer>
      <ProductsContainer>
        <Product
          type="woman"
          topText="Сказочное заморское яство"
          flavor='с фуа-гра'
          total={10}
          mouseAmount={1}
          weight={0.5}
        >
          <ProductThought>Печень утки разварная с артишоками.</ProductThought>
        </Product>
        <Product
          type="woman"
          topText="Сказочное заморское яство"
          flavor='с рыбой'
          total={40}
          mouseAmount={2}
          weight={2}
        >
          <ProductThought>Головы щучьи с чесноком да свежайшая сёмгушка.</ProductThought>
        </Product>
        <Product
          type="woman"
          topText="Сказочное заморское яство"
          flavor='с курой'
          total={100}
          mouseAmount={5}
          weight={5}
        >
          <ProductThought>Филе из цыплят с трюфелями в бульоне.</ProductThought>
        </Product>
      </ProductsContainer>
      <ProductsContainer>
        <Product
          type="not-in-stock"
          topText="Сказочное заморское яство"
          flavor='с фуа-гра'
          total={10}
          mouseAmount={1}
          weight={0.5}
        >
          <ProductThought>Печалька, с фуа-гра закончился.</ProductThought>
        </Product>
        <Product
          type="not-in-stock"
          topText="Сказочное заморское яство"
          flavor='с рыбой'
          total={40}
          mouseAmount={2}
          weight={2}
        >
          <ProductThought>Печалька, с рыбой закончился.</ProductThought>
        </Product>
        <Product
          type="not-in-stock"
          topText="Сказочное заморское яство"
          flavor='с курой'
          total={100}
          mouseAmount={5}
          weight={5}
        >
          <ProductThought>Печалька, с курой закончился.</ProductThought>
        </Product>
      </ProductsContainer>
    </>
  );
}

export default App;
