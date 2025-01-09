import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Icon } from "../assets/arrow-right.svg";

function CatogeriesForMen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => {
        setItems(data.categoriesformen);
      })

      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Container>
        <TitleWrapper>
          <HeadIcon />
          <Heading>Categories For Men</Heading>
        </TitleWrapper>
        <CardContainer>
          {items.map((item) => (
            <Card key={item.id}>
              <ImageWrapper to={`/product/${item.id}`}>
                <Image src={item.image} alt={item.title} />
              </ImageWrapper>
              <InfoWrapper>
                <TextWrapper>
                  <Title>{item.title}</Title>
                  <Explore>Explore Now!</Explore>
                </TextWrapper>
                <Button>
                  <IconArrow>
                    <StyledIcon />
                  </IconArrow>
                </Button>
              </InfoWrapper>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
f`;

const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`;
const HeadIcon = styled.span`
  width: 6px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;
const Heading = styled.h3`
  color: #3c4242;
  font-size: 34px;
  margin: 0px;
  font-weight: 700;
  line-height: 33.5px;
  letter-spacing: 0.02em;
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: calc(22% - 0px);
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  color: #3c4242;
  @media (max-width: 980px) {
    width: calc(30% - 0px);
  }
  @media (max-width: 680px) {
    width: calc(28% - 0px);
  }
  @media (max-width: 480px) {
    width: calc(45% - 0px);
  }
  @media (max-width: 320px) {
    width: calc(43% - 0px);
  }
`;

const ImageWrapper = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1); /* Zooms the wrapper */
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
`;
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
const TextWrapper = styled.div``;
const Title = styled(Link)`
  display: inline-block;
  margin: 0px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
  line-height: 19.2px;
  color: #3c4242;
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0px;
    margin-bottom: 5px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
const Explore = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 27.93px;
  letter-spacing: -0.04em;
  text-align: left;
  margin: 0px;
  color: #807d7e;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const IconArrow = styled.span``;
const StyledIcon = styled(Icon)`
  fill: #797979;
  width: 18px;
  height: 18px;

  &:hover {
    fill: #797979; // Changes the color on hover
    transform: scale(1.1); // Slightly enlarges the icon on hover
    transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;
  }
`;
export default CatogeriesForMen;
