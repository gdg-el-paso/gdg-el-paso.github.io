import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

// main site header
const MainHeader = styled.header`
    background: #fff;
    position: relative;
    width: 100%;
    height: 65px;
    button {
        line-height: 1;
        border: none;
        background: none;
    }
`
// Wrapping bounds container for header
const Bounds = styled.div` 
    height: 100%;
    margin: 0 60px;
    @media (max-width: 48em) { 
        margin: 0 12px;
    }
`
// implement flex box for center align of elements vertically
const FlexBox = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
` 
// logo placeholder - WILL REMOVE
const Logo = styled.h2`
    margin: 0;
    flex: 0 0 auto;
    margin-right: 12px;
    @media screen and (max-width: 48em) {
        margin-right: 6px;
    }
    a {
        text-decoration: none;
    }
    img {
        width: 211px;
        max-width: 211px;
        display: block;
        height: auto;
    }
`
const SiteNavigationWrapper = styled.nav`
    flex: 1 1 0;
    text-align: left;
    display: flex;
    justify-content: flex-end;
    ul {
        list-style-type: none;
    }
    @media screen and (max-width: 40em) {
        ul {
            display: none;
        }
    }
    ul li {
        display: inline-block;
        margin-right: 12px;
    }
    a {
        text-decoration: none;
    }
`

class Header extends React.Component {
    render() {
        return (
            <MainHeader>
                <Bounds>
                    <FlexBox>
                        <Logo>
                            <a href="https://gdgelpaso.org" rel="GDG El Paso Home">
                                <img src={logo} alt="GDG El Paso" />
                            </a>
                        </Logo>
                        <SiteNavigationWrapper>
                            <ul>
                                <li><a href="https://gdgelpaso.org">Home</a></li>
                                <li><a href="#coming-soon">Our Story</a></li>
                                <li><a href="#coming-soon">Join GDG</a></li>
                            </ul>
                        </SiteNavigationWrapper>
                    </FlexBox>
                </Bounds>
            </MainHeader>
        );
    }
}

export default Header;