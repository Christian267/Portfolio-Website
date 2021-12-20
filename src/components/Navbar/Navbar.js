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
                            <NavLink to='projects' smooth={true} duration={500} spy={true} exact='true'>
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='skills' smooth={true} duration={500} spy={true} exact='true'>
                                Skills
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='resume' smooth={true} duration={500} spy={true} exact='true'>
                                Resume
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
                    <NavBtn>
                        <NavBtnLink to='contact' smooth={true} duration={500} spy={true} exact='true'>
                            Contact 
                        </NavBtnLink>
                    </NavBtn>
            </Nav>
        </>
    );
};