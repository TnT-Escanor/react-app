import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #fff;
    height: auto;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center
    font-size: 1rem;
    position: sticky;
    top: 0;
    padding: 12px;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 0 0px;    
`

export const NavLogo = styled.a`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        color: #000;
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 15px
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        position: static;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    @media screen and (max-width: 768px) {
        display: none;   
    }
`

export const NavItem = styled.li`
    height: auto;
`

export const NavLink = styled(LinkR)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Exo';
    font-size: 1.2rem;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Exo';
    font-size: 1.2rem;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

