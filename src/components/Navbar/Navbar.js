import { React } from 'react';
import {Nav,
     Bars,
     NavbarContainer,
     NavLogo,
     NavMenu,
     NavItem,
     NavLink,
     NavBtn,
     NavBtnLink 
} from './NavbarElements';

export const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h1>Christian Benitez</h1>
                    </NavLogo>
                    <Bars onClick={toggle}/>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about'>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='resume'>
                                Resume
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='skills'>
                                Skills
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='projects'>
                                Projects
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Contact</NavBtnLink>
                    </NavBtn>
            </Nav>
        </>
    );
};