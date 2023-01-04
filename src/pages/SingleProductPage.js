import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct
  } = useProductsContext();

  useEffect( ()=>{
    fetchSingleProduct(`${url}${id}`);
  }, [id])

  useEffect( ()=>{
    setTimeout( ()=>{
      history.push('/');
    }, 3000)

  },[error])
  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }

  return <Wrapper>SingleProductPage</Wrapper>;
}

const Wrapper = styled.main``;

export default SingleProductPage;
