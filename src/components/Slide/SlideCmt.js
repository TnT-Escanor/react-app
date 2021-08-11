import React, { useState } from 'react'
import './Slide.css'
import BtnSlider from './BtnSlide'
import dataSlider from './data'
import { useMediaQuery } from 'react-responsive'

export default function SlideCommment() {

    const [slideIndex, setSlideIndex] = useState(1)
    const matches = useMediaQuery({ query: '(max-width: 768px)' });
    // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }
    if (matches === false) {
        return (
            <>
                <div style={{ margin: '1% 5% 1% 5%', width: '90%', display: 'inline-flex' }}>
                    <div className="container-slider-cmt" style={{ width: '60%' }}>
                        <div className='slideCmt active-anim-cmt'>
                            <img
                                src={`../../Content4.png`}
                                alt=''
                                style={{ width: '75%' }}
                            />
                        </div>
                    </div>
                    <div className="container-slider-cmt" style={{ float: 'right' }}>
                        {dataSlider.map((obj, index) => {
                            // console.log(matches);
                            if (1) {
                                return (
                                    <>
                                        <div
                                            key={obj.id}
                                            className={slideIndex === index + 1 ? "slideCmt active-anim-cmt" : "slideCmt"}
                                        >
                                            <div className="slide-column" style={{ float: 'left' }}>
                                                <div className="slide-card">
                                                    <div className='slide-logo'>
                                                        <img src="https://microlancer.lancerassets.com/v2/avatars/74/c1d56008ae11e5985a9fe42fd62f9f/medium_metro-logo-2.jpg" alt='' />
                                                        <div className='slide-column2'>
                                                            <h1>{obj.name}</h1>
                                                            <h2>{obj.job}</h2>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <br></br>
                                                    <div class="profile-bio">
                                                        <p>We Create Bootstrap Based Responsive WordPress themes and HTML5 WebSite Templates ,
                                                            Proudly serving over 5000 WordPress themes to entrepreneurs, businesses, creatives, photographers &amp; the like. Build your website today with us.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-column" style={{ float: 'right' }}>
                                                <div className="slide-card">
                                                    <div className='slide-logo'>
                                                        <img src="../../logo192.png" alt='' />
                                                        <div className='slide-column2'>
                                                            <h1>{obj.id === dataSlider.length ? dataSlider[0].name : dataSlider[obj.id].name}</h1>
                                                            <h2>{obj.id === dataSlider.length ? dataSlider[0].job : dataSlider[obj.id].job}</h2>
                                                            {/* {console.log(dataSlider[5].title)} */}
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <br></br>
                                                    <div class="profile-bio">
                                                        <p>We Create Bootstrap Based Responsive WordPress themes and HTML5 WebSite Templates ,
                                                            Proudly serving over 5000 WordPress themes to entrepreneurs, businesses, creatives, photographers &amp; the like. Build your website today with us.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                    </div>

                </div>
                <div style={{ marginTop: '5%', marginRight: '23%', marginLeft: '23%', minHeight: '10%', borderBottom: '2px solid darkgray' }}></div>
            </>
        )
    }
    else{
        return (
            <>
                <div style={{ margin: '1% 5% 1% 5%', width: '90%', display: 'inline-flex' }}>
                    <div className="container-slider-cmt" style={{ float: 'right' }}>
                        {dataSlider.map((obj, index) => {
                            // console.log(matches);
                            if (1) {
                                return (
                                    <>
                                        <div
                                            key={obj.id}
                                            className={slideIndex === index + 1 ? "slideCmt active-anim-cmt" : "slideCmt"}
                                        >
                                            <div className="slide-column" style={{ justifyContent:'center',float:'none'}}>
                                                <div className="slide-card">
                                                    <div className='slide-logo'>
                                                        <img src="https://microlancer.lancerassets.com/v2/avatars/74/c1d56008ae11e5985a9fe42fd62f9f/medium_metro-logo-2.jpg" alt='' />
                                                        <div className='slide-column2'>
                                                            <h1>{obj.name}</h1>
                                                            <h2>{obj.job}</h2>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <br></br>
                                                    <div class="profile-bio">
                                                        <p>We Create Bootstrap Based Responsive WordPress themes and HTML5 WebSite Templates ,
                                                            Proudly serving over 5000 WordPress themes to entrepreneurs, businesses, creatives, photographers &amp; the like. Build your website today with us.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <BtnSlider style={{marginRight:'-5%'}} moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                    </div>

                </div>
                <div style={{ marginTop: '5%', marginRight: '23%', marginLeft: '23%', minHeight: '10%', borderBottom: '2px solid darkgray' }}></div>
            </>
        )
    }
}