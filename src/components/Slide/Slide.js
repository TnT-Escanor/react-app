import React, { useState } from 'react'
import './Slide.css'
import BtnSlider from './BtnSlide'
import dataSlider from './data'
import { useMediaQuery } from 'react-responsive'

export default function Slide() {

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

    return (
        <>
            <div style={{ margin: '1% 5% 1% 5%', width: '90%' }}>
                <div style={{ fontWeight: 'bolder', textAlign: 'center', color: '#133c8b', fontSize: '2.2rem', fontFamily: 'Arial', marginBottom: '3%' }}>BLOG</div>
                <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                        // console.log(matches);
                        if (matches === false) {
                            return (
                                <>
                                    <div
                                        key={obj.id}
                                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                                        style={{ paddingBottom: '5%', paddingTop: '1%' }}
                                    >   
                                        <div style={{position:'relative',width:'100%', height:'100%', marginTop:"1%"}}>
                                        <img
                                            src={index + 1 === 1 ? `../../Content${dataSlider.length}.png` : `../../Content${index}.png`}
                                            alt= ''
                                        />
                                        </div>
                                        <div style={{position:'relative',width:'100%', height:'100%', justifyContent: 'center'}}>
                                            <img
                                            src={`../../Content${index + 1}.png`}
                                            alt= ''
                                            style={{ width: "100%", height: "110%"}}
                                            />
                                            <div className='column' style={{position:'absolute', bottom : '0', left : '10%', width: '70%', height:'50%', textAlign:'left'}}>
                                                <div style={{height:'fit-content',width:'fit-content',background:'#FF6347',color:'#fff', fontSize:'1.2rem', paddingLeft:'2%',paddingRight:'2%'}}>{obj.title}</div>
                                                <div style={{height:'70%',width:'100%',background:'#F1F1F1', fontWeight:'500', fontSize:'1.3rem', paddingLeft:'3%',paddingRight:'4%', paddingTop:'2%'}}>{obj.describe}</div></div>
                                        </div>
                                        <div style={{position:'relative',width:'100%', height:'100%', marginTop:"1%"}}>
                                        <img
                                            src={index + 1 === dataSlider.length ? `../../Content1.png` : `../../Content${index + 2}.png`}
                                            alt= ''
                                            
                                        />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <div
                                        key={obj.id}
                                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                                        style={{ padding: '5%' }}
                                    >
                                        <div style={{position:'relative',width:'100%', height:'100%', justifyContent: 'center'}}>
                                            <img
                                            src={`../../Content${index + 1}.png`}
                                            alt= ''
                                            style={{ width: "100%", height: "110%"}}
                                            />
                                            <div className='column' style={{position:'absolute', bottom : '0', left : '10%', width: '70%', height:'50%', textAlign:'left'}}>
                                                <div style={{height:'fit-content',width:'fit-content',background:'#FF6347',color:'#fff', fontSize:'1.2rem', paddingLeft:'2%',paddingRight:'2%'}}>{obj.title}</div>
                                                <div style={{height:'70%',width:'100%',background:'#F1F1F1', fontWeight:'500', fontSize:'1.3rem', paddingLeft:'3%',paddingRight:'4%', paddingTop:'2%'}}>{obj.describe}</div></div>
                                        </div>
                                    </div>
                                </>)
                        }
                    })}
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                </div>
                <div style={{ marginTop: '5%', marginRight: '20%', marginLeft: '20%', minHeight: '10%', borderBottom: '2px solid darkgray' }}></div>
            </div>
            <div>
                <div style={{ fontWeight: 'bolder', textAlign: 'center', color: '#133c8b', fontSize: '2.2rem', fontFamily: 'Arial', marginBottom: '3%' }}>THỐNG KÊ</div>
                <div className="row" style={{bottom:0}}>
                    <div className="alter-row-tk">
                        <div className="column-thong-ke">
                            <div className="card-tk" style={{boxShadow:'none'}}>
                                <div className="title-thong-ke">530,000</div>
                                <div className="logo"><img src='../../capture.png' alt='' style={{ width: '80%', height: '100%' }} /></div>
                                <div className="cnt-thong-ke">Tên miền .VN đã cấp phát</div>
                            </div>
                        </div>
                        <div className="column-thong-ke">
                            <div className="card-tk" style={{boxShadow:'none'}}>
                                <div className="title-thong-ke">9</div>
                                <div className="logo"><img src='../../capture.png' alt='' style={{ width: '80%', height: '100%' }} /></div>
                                <div className="cnt-thong-ke">Nhà đăng ký trong nước</div>
                            </div>
                        </div>
                        <div className="column-thong-ke">
                            <div className="card-tk" style={{boxShadow:'none'}}>
                                <div className="title-thong-ke">6</div>
                                <div className="logo"><img src='../../capture.png' alt='' style={{ width: '80%', height: '100%' }} /></div>
                                <div className="cnt-thong-ke">Nhà đăng ký quốc tế</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}