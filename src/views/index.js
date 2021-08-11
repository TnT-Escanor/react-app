import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slide from '../components/Slide/Slide';
import SlideCommment from '../components/Slide/SlideCmt'
// import {Carousel} from 'antd';

const Home = () => {
    const [isOpen,setIsOpen] =  useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}></Navbar>
            <>
            <div style={{margin: "1% 5% 1% 5%"}}>
                <div style={{ fontWeight: 'bolder', textAlign: 'center', color: '#133c8b', fontSize: '2.2rem', fontFamily: 'Arial', marginBottom: '3%' }}>LỢI THẾ CỦA TÊN MIỀN QUỐC GIA</div>
                <div style={{textAlign:'center', width:'100%', marginLeft:'1%'}}>
                    <img src="../../Capture1.png" alt='' style={{maxWidth:'100%',maxHeight:'100%'}}/>
                </div>    
                <div style={{ marginTop: '5%', marginRight: '20%', marginLeft: '20%', minHeight: '10%', borderBottom: '2px solid darkgray' }}></div>
            </div>
            </>
            <SlideCommment/>
            <Slide/>          
            <Footer/>
        </>
    )
}

export default Home;
