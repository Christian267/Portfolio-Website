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
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='resume'>
                        Resume
                    </SidebarLink>
                    <SidebarLink to='skills'>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='projects'>
                        Projects
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/contact'>Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
