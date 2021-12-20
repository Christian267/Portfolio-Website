import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 90%;
  height: 500px;
  margin-top: 80px;
  margin-left: 5%;
  background: #fafaff;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 5%), inset 0 -1px 1px 0 rgb(0 0 0 / 10%);
  opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
  top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};

  @media screen and (min-width: 850px) {
    top: -100%;
    opacity: 0;
    transition: 0.8 all ease;
}
`;

export const CloseIcon = styled(FaTimes)`
  color: #221e41;
`;

export const Icon = styled.div`
  postion: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div `
  color: #221e41;
`

export const SidebarMenu = styled.ul `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 60px);
  }
`


export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #63607A;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
      color: #221e41;
      transition: 0.2s ease-in-out;
      opacity: 1;

  }
`;


export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 4px;
  background: #00ADFF;
  white-space: nowrap;
  margin: 20px;
  padding: 12px 36px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
      transition: all 0.2s ease-in-out;
      filter: brightness(1.05);
  }
`