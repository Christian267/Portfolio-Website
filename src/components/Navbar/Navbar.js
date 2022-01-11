import { React } from 'react';
import {Nav,
     Bars,
     NavbarContainer,
     NavLogo,
     NavMenu,
     NavItem,
     ScrollLink,
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
                            <ScrollLink to='projects' smooth={true} duration={500} spy={true} exact='true'>
                                Projects
                            </ScrollLink>
                        </NavItem>
                        <NavItem>
                            <ScrollLink to='skills' smooth={true} duration={500} spy={true} exact='true'>
                                Skills
                            </ScrollLink>
                        </NavItem>
                        <NavItem>
                            <ScrollLink to='contact' smooth={true} duration={500} spy={true} exact='true'>
                                Contact
                            </ScrollLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
                    <NavBtn>
                        <NavBtnLink to='/resume'>
                            Resume 
                        </NavBtnLink>
                    </NavBtn>
            </Nav>
        </>
    );
};