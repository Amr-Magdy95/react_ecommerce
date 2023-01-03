import React from "react";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import styled from "styled-components";

function AboutPage() {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus risus, feugiat nec lobortis sollicitudin, fringilla a arcu.
            Mauris scelerisque quam quis mauris fringilla convallis. Sed mattis
            nibh mi, sit.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45rem;
    margin: 0 auto;
    margin-top: 0 auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
