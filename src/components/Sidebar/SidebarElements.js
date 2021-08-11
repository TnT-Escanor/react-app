import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    
    ${({ isOpen }) => isOpen = false};
    display: none;

    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 999;
        width: 100%;
        min-height: fit-content ;
        background: #fff;
        display: flex;
        flex-direction: column;
        top: 0px;
        left: 0;
        transition: 0.3s ease-in-out;
        opacity: ${({ isOpen }) => isOpen ? '100%' : '0'};
        left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    }
    
`

export const SidebarLogo = styled.a`
    display: none;

    @media screen and (max-width: 768px) {
        color: #000;
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 15px
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    backgroung: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fef;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 40px);
    padding-top: 15px;
    text-align: center;
    @media screen and (max-width = 768px){
        grid-template-rows: repeat(6, 80px);
    }
`

export const SidebarLinks = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    trasition: 0.2s ease-in-out;
    color: #000,
    cursor: pointer;
    padding-left: 10px;
    font-weight: 700;
    border-bottom:  1px solid #DBD9D9;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.3rem;
    text-decoration: none;
    list-style: none;
    trasition: 0.2s ease-in-out;
    color: #000,
    cursor: pointer;
    border-bottom:  1px solid #DBD9D9;
    font-weight: 700;
    padding-left: 10px;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-inout;
    }
`
