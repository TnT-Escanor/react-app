import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavLink } from './NavbarElements';
import { Carousel, Layout, Dropdown, Menu, Button, Input, Select, Space } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import './Carousel.css';
// import { set } from 'immer/dist/internal';


const Navbar = ({ toggle }) => {

    const { Option } = Select;
    const { Search } = Input;
    const [isVietnamese, setIsVietnamese] = useState('Việt Nam');
    const [imgLang, setImgLang] = useState('../../logo512.png')

    /*Hàm xác định language */
    useEffect(() => {
        // Update the document title using the browser API
        console.log(isVietnamese);
    }, [isVietnamese]);


    const onSearch = value => console.log(value);

    /*Các option lĩnh vực */
    /* fas = fashion, med = medicine, archi = architect, fin = financy, cons = construction */
    const selectAfter = (
        <Select defaultValue="Lĩnh Vực" className="select-after">
            <Option value="store">Cửa hàng trực tuyến</Option>
            <Option value="it">Công nghệ thông tin</Option>
            <Option value="fas">Thời trang</Option>
            <Option value="beauty">Mỹ phẩm/Làm đẹp</Option>
            <Option value="food">Nhà hàng/Cafe</Option>
            <Option value="hotel">Khách sạn/Du lịch</Option>
            <Option value="art">Nghệ thuật</Option>
            <Option value="med">Y tế/Sức khoẻ</Option>
            <Option value="sport">Thể thao</Option>
            <Option value="archi">Kiến trúc/Nội thất</Option>
            <Option value="fin">Tài chính</Option>
            <Option value="cons">Xây dựng/BĐS</Option>
            <Option value="blog">Blog</Option>
            <Option value="help">Tư vấn</Option>
        </Select>
    );

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
            {/*Menu navbar dưới dạng mobile sẽ chuyển qua sidebar*/}
            <Nav>
                <NavbarContainer>
                    <NavLogo href='https://vnix.vn/'><img src='../../vnnic-logo-f.png' alt='' style={{ width: '100%', height: '100%' }} /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu >
                        <NavItem>
                            <NavLink to="/">Trang chủ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="registrar">Nhà Đăng Ký</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog">Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <div style={{ margin: "auto", width: "100%" }}>
                                <Dropdown overlay={menuLang}>
                                    <Button shape="round" style={{ marginRight: "0.5em", display: 'center', alignItems: 'center' }}> <img src={imgLang} alt='' style={{ width: '16px', marginRight: '4px' }} /> {isVietnamese}<DownOutlined /></Button>
                                </Dropdown>
                            </div>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            {/*Trình chiếu và form nhập */}
            <Layout className='layout' style={{ position: 'relative' }}>
                {
                    <>
                        <Carousel style={{ marginTop: 0 }} autoplay="true">
                            <div>
                                <h1 style={{
                                    textAlign: 'center',
                                    height: `${window.innerHeight * 0.55 - 50}px`,
                                    color: '#fff',
                                    lineHeight: `${window.innerHeight * 0.55 - 50}px`,
                                    background: '#364d79',
                                }}>Welcome to VNNIC</h1>
                            </div>
                            <div>
                                <img
                                    alt="Landing 1"
                                    src="../../logo512.png"
                                    style={{ verticalAlign: 'middle', width: '100%' }}
                                ></img>
                            </div>
                        </Carousel>
                        <Space direction="vertical" className='inputForm'>
                            <Search addonBefore={selectAfter} prefix={<SearchOutlined />} placeholder="Nhập tên miền bạn muốn đăng ký" allowClear enterButton="Đăng ký" size="large" onSearch={onSearch} />
                        </Space>
                    </>
                }
            </Layout>
            <div className="parent">
                <div className="row">
                    <div className="alter-row">
                        <div className="column">
                            <div className="card">
                                <div className="logo"><img src='../../vnnic-logo-f.png' alt='' style={{ width: '100%', height: '100%' }} /></div>
                                <br></br>
                                <div className="title">Cách đăng ký tên miền</div>
                                <br></br>
                                <a className="btn" href="#">Xem thêm &#10230; </a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="logo"><img src='../../vnnic-logo-f.png' alt='' style={{ width: '100%', height: '100%' }} /></div>
                                <br></br>
                                <div className="title">Các nhà đăng ký tên miền chính thức</div>
                                <br></br>
                                <a className="btn" href="#">Xem thêm &#10230; </a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="logo"><img src='../../vnnic-logo-f.png' alt='' style={{ width: '100%', height: '100%' }} /></div>
                                <br></br>
                                <div className="title">Cách đăng ký tên miền</div>
                                <br></br>
                                <a className="btn" href="#">Xem thêm &#10230; </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span style={{ fontWeight: 'bolder', color: '#133c8b', fontSize: '2.2rem', fontFamily: 'Arial', marginLeft: '1.5%' }}>VÌ SAO NÊN SỞ HỮU TÊN MIỀN?</span>
                <div className='content'>
                    <div className='column' style={{ width: '85%', margin: 0 }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ maxWidth: '70px', maxHeight: '70px', background: '#ff6347', borderRadius: '50%' }}>
                                <img src='../../logo192.png' alt='' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <div className='column' style={{ width: '100%' }}>
                                <div style={{ color: '#ff6347', fontSize: '1.6rem', fontWeight: 'bold' }}>Xây dựng website</div>
                                <div style={{ marginTop: '2%', fontWeight: '550', fontSize: '1.2rem', color: 'gray' }}>Đối với các doanh nghiệp, tổ chức hay cá nhân, website đã trở thành một công cụ quan trọngtrong việc tạo dựng sự hiện diện và hoạt động quảng bá trên Internet.
                                    Sở hữu một tên miền gắn với thương hiệu là điều không thể thiếu trog việc xây dựng website.
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ maxWidth: '70px', maxHeight: '70px', background: '#ff6347', borderRadius: '50%' }}>
                                <img src='../../logo192.png' alt='' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <div className='column' style={{ width: '100%' }}>
                                <div style={{ color: '#ff6347', fontSize: '1.6rem', fontWeight: 'bold' }}>Xây dựng website</div>
                                <div style={{ marginTop: '2%', fontWeight: '550', fontSize: '1.2rem', color: 'gray' }}>Đối với các doanh nghiệp, tổ chức hay cá nhân, website đã trở thành một công cụ quan trọngtrong việc tạo dựng sự hiện diện và hoạt động quảng bá trên Internet.
                                    Sở hữu một tên miền gắn với thương hiệu là điều không thể thiếu trog việc xây dựng website.
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ maxWidth: '70px', maxHeight: '70px', background: '#ff6347', borderRadius: '50%' }}>
                                <img src='../../logo192.png' alt='' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <div className='column' style={{ width: '100%' }}>
                                <div style={{ color: '#ff6347', fontSize: '1.6rem', fontWeight: 'bold' }}>Xây dựng website</div>
                                <div style={{ marginTop: '2%', fontWeight: '550', fontSize: '1.2rem', color: 'gray' }}>Đối với các doanh nghiệp, tổ chức hay cá nhân, website đã trở thành một công cụ quan trọngtrong việc tạo dựng sự hiện diện và hoạt động quảng bá trên Internet.
                                    Sở hữu một tên miền gắn với thương hiệu là điều không thể thiếu trog việc xây dựng website.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src='../../Content1.png' alt='' style={{ top: '10%', width: '100%' }} />
                    </div>
                </div>
                <div style={{ marginTop: '5%', marginRight: '23%', marginLeft: '23%', minHeight: '10%', borderBottom: '2px solid darkgray' }}></div>
            </div>
        </>
    )
};

export default Navbar;