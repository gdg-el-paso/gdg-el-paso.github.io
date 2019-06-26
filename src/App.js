// Copyright GDG El Paso
// Contributors: Bryan Ramos

import React from 'react';
import AndroidRobot from './androidRobot.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';

// implement css flexbox for center align of elements vertically and full height DOM
const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
` 
// Site under construction banner (:
const SiteBanner = styled.div`
    background: #075b9a;
    padding: 1.25rem;
    color: #fff;
    text-align: center;
    font-size: 17px;
`
// Main Content Div
const Main = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
`
// Bounded Container
const Bounds = styled.div`
    display: flex;
    margin: 0 60px;
    @media (max-width: 48em) { 
        margin: 0 12px;
    }
`
// Container for Headline and Description
const HeroWrapper = styled.div`
  width: 50%;
  text-align: left;
`
const Headline = styled.h1`
  font-size: 50px;
  margin: 0px 0 0px 0;
  padding: 0;
  line-height: 1.1;
  font-weight: 500;
  @media screen and (min-width: 48em) {
    font-size: 68px;
    font-weight: 500;
    letter-spacing: -0.6px;
    line-height: 1.2;
  }
`
const SubHeadline = styled.h1`
  font-size: 30px;
  line-height: 1.1;
  font-weight: 400;
  @media screen and (max-width: 48em) {
    font-size: 20px;
    line-height: 1.3;
  }
`
const Copyright = styled.h4`
  margin-top: 24px;
  color: rgba(61, 65, 68, 0.3);
  font-size: 20px;
  font-weight: 400;
`
const SocialIcons = styled.ul`
  margin: 0 0 0 5px;
  padding: 0;
  li {
    display: inline-block;
    margin-right: 12px;
    font-size: 40px;
  }
`

const Android = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    img {
        height: 400px;
    }
`;

function App() {
  return (
    <div className="App">
        <FlexBox>
            <Header /> 
            <SiteBanner>
                Our site is under active construction!
            </SiteBanner>
            <Main>
                <Bounds>
                    <HeroWrapper>
                        <Headline>Google Developer Group El Paso</Headline>
                        <SubHeadline>We are a group of students and industry professionals who love writing code and developing and we strive to share our passion with others!</SubHeadline>
                        <SocialIcons>
                            <li><a href="https://www.facebook.com/gdgelpaso/"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="https://github.com/gdg-el-paso/"><i class="fab fa-github"></i></a></li>
                            <li><a href="https://www.instagram.com/gdgelpaso"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.meetup.com/GDG-El-Paso/"><i class="fab fa-meetup"></i></a></li>
                        </SocialIcons>  
                    </HeroWrapper>
                    <Android><img src={AndroidRobot}></img></Android>
                </Bounds>
            </Main>
            <Bounds>
                <Copyright>Copyright 2019 GDG El Paso</Copyright>
            </Bounds>
        </FlexBox>
    </div>
  );
}

export default App;
