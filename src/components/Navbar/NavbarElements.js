import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { NavLink as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fafaff;
  height: 80px;
  display: flex;
  justify-content: start;
  padding: 0.5rem calc((90vw - 1000px) / 2);
  width: 95%;
  margin-right: 5%;
  align-items: start;
  font-size: 1rem;
  font-weight: bold;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 850px) {
      transition: 0.8 all ease;
      margin-right: 0;
  }

`;


export const NavbarContainer = styled.div `
  display: flex;
  justify-content: start;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 0px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
  color: #221e41;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin: 20px;
  font-weight: bold;
  text-decoration: none;
`

export const ScrollLink = styled(LinkS)`
  color: #63607A;
  opacity: 0.7;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #221e41;
    opacity: 1;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #00ADFF;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: .5em;
    right: 5%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin: 0 4px;
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 4px;
  background: #00ADFF;
  margin: 20px;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(1.05);
  }
`;