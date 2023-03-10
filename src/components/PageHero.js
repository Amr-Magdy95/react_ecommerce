import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageHero({ title, product }) {
  return (
    <Wrapper className="section-center">
      <div>
        <h3>
          <Link to="/">Home</Link>/{product && <Link to="/products">Products/</Link>} {title}
        </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  min-height:20vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--clr-primay-1);
  a{
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover{
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
