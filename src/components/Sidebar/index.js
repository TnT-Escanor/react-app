import React, {useEffect,useState} from 'react';
import { SidebarContainer, SidebarMenu,SidebarLinks, SidebarWrapper, SidebarLink, SidebarLogo , Icon, CloseIcon} from './SidebarElements';
import {Menu, Dropdown, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons'

const Sidebar = ({isOpen,toggle}) => {

    const [isVietnamese, setIsVietnamese] = useState('Việt Nam');
    const [imgLang, setImgLang] = useState('../../logo512.png')

    /*Hàm xác định language */
    useEffect(() => {
        // Update the document title using the browser API
        console.log(isVietnamese);
    }, [isVietnamese]);

     /* Xử lý nút chuyển ngôn ngữ */ 
     const onClick = ({ key }) => {
        if (key === "VN") {
            // console.log("isVietnamese");
            setIsVietnamese('Việt Nam');
            setImgLang('../../logo512.png');
            //  console.log(isVietnamese);
        }

        else {
            // console.log("isEndlist");
            setIsVietnamese('English');
            setImgLang('../../vnnic-logo-f.png');
            //  console.log(isVietnamese);
        }
        // console.log(isVietnamese);
    }

    /*menu ngôn ngữ */ 
    const menuLang = (
        <Menu onClick={onClick}>
            <Menu.Item key="VN" style={{ span: { display: 'flex', alignItems: 'center' }, alignItems: 'center' }}> <img src='../../logo512.png' alt='' style={{ width: '16px', height: '100%', marginRight: '4px' }} /> Việt Nam</Menu.Item>
            <Menu.Item key="ENG" style={{ span: { display: 'flex', alignItems: 'center' }, alignItems: 'center' }}> <img src='../../logo1.jpg' alt='' style={{ width: '16px', height: '100%', marginRight: '4px' }} /> English</Menu.Item>
        </Menu>
    )

    return (
        <>
        <SidebarContainer isOpen={isOpen} onclick={toggle}>
            <SidebarLogo href='https://vnix.vn/'><img src='../../logo1.jpg' alt='' style={{ width: '75%', height: 'auto' }} /></SidebarLogo>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='/home' onClick={toggle}>Trang chủ</SidebarLinks>
                    <SidebarLink to='registrar' onClick={toggle}>Nhà Đăng Ký</SidebarLink>
                    <SidebarLink to='blog' onClick={toggle}>Blog</SidebarLink>
                    <div style={{ margin: "auto", width: "100%", marginTop:'5%' }}>
                        <Dropdown overlay={menuLang}>
                            <Button shape="square" style={{ marginRight: "0.5em", display:'center', alignItems: 'center', fontWeight: '500' }}> <img src={imgLang} alt='' style={{ width: '16px', marginRight: '4px' }} /> {isVietnamese}<DownOutlined /></Button>
                        </Dropdown>
                    </div>
                </SidebarMenu>
            </SidebarWrapper> 
        </SidebarContainer>
        
        </>
    );
};

export default Sidebar;