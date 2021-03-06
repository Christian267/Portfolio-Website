import React from 'react'
import { SidebarContainer,
     Icon,
     CloseIcon,
     SidebarWrapper,
     SidebarMenu,
     SidebarLink,
     SideBtnWrap,
     SidebarRoute 
} from './TopbarElements'

export const Topbar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='header' onClick={toggle} smooth={true} duration={500} spy={true} exact='true'>
                        About
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle} smooth={true} duration={500} spy={true} exact='true'>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle} smooth={true} duration={500} spy={true} exact='true'>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle} smooth={true} duration={500} spy={true} exact='true'>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/resume'>Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
