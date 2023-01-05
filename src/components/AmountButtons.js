import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

function AmountButtons({ increase, decrease, amount }) {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  h2{
    margin-bottom: 0;
  }
  button{
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2, button{
    margin-bottom: 0.75rem;
  }
`;

export default AmountButtons;
