import React, { Component } from 'react';
import "./Scroller.css"
import $ from 'jquery'; 
import img1 from './images/Halloween001.png';
import img2 from './images/Banner Halloween 03.jpg';
import img3 from './images/Banner Halloween 02.jpg';
import img4 from './images/Banner Halloween 06.jpg';
import img5 from './images/Halloween1.png';
import img6 from './images/Halloween4.png';
import img7 from './images/Halloween002.png';
class Scroller extends Component{

    constructor(){
        super()
        this.scroll = this.scroll.bind(this)
    }
    
    scroll(direction){
        let fee = document.getElementById('pos').scrollLeft;
        let pos =  fee + direction*$('.image').width()+direction*5;
        console.log(pos)
        $('.image-container').animate( { scrollLeft: pos}, 400)

      }

    render(){
        return(
            <div className='main'>
                <div className='wapper'>
                    <a className='prev' onClick={this.scroll.bind(null,-1)}>&#10094;</a>
                    <div className='image-container' id='pos'>
                    <img src={img1} alt="Logo" className='image'/>;
                    <img src={img2} alt="Logo" className='image'/>;
                    <img src={img3} alt="Logo" className='image'/>;
                    <img src={img4} alt="Logo" className='image'/>;
                    <img src={img5} alt="Logo" className='image'/>;
                    <img src={img6} alt="Logo" className='image'/>;
                    <img src={img7} alt="Logo" className='image'/>;
                    
                    </div>
                    <a className='next' onClick={this.scroll.bind(null,1)}>&#10095;</a> 
                </div>
            </div>
        );
    }
}
export default Scroller