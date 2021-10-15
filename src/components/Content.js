import React from 'react'
import imageOne from '../images/egg.jpg'
import imageTwo from '../images/egg2.jpg'
import imageThree from '../images/egg3.jpg'

function Content() {
    return (
        <>
        <div className="menu-card">
            <img src={imageOne} alt="egg" className="h-full rounded mb-20 shadow"/>
            <div className="center-content">
            <h2 className="text-2xl mb-2">Egg Muffins</h2>
            <p className="mb-2">çıtır çıtır, lezzetli ve besleyici</p>
            <span>16TL</span>
            </div>
            
        </div>
        <div className="menu-card">
        <img src={imageTwo} alt="egg" className="h-full rounded mb-20 shadow"/>
        <div className="center-content">
        <h2 className="text-2xl mb-2">Egg Salata</h2>
        <p className="mb-2">çıtır çıtır, lezzetli ve besleyici</p>
        <span>18TL</span>
        
    </div>
    </div>
    <div className="menu-card">
        <img src={imageThree} alt="egg" className="h-full rounded mb-20 shadow"/>
        <div className="center-content">
        <h2 className="text-2xl mb-2">Egg Salata</h2>
        <p className="mb-2">çıtır çıtır, lezzetli ve besleyici</p>
        <span>18TL</span>
        </div>
        
    </div>
    </>
    )
}

export default Content
