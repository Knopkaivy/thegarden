import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = (state) => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                ...state,
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 30)
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade
                        onReveal={() => this.percentage()}
                    >
                        <div className='discount_percentage'>
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Lorem ipsum dolor amet kinfolk cardigan four loko pop-up mustache portland franzen lyft chartreuse hammock master cleanse craft beer. Aesthetic tote bag gluten-free, woke waistcoat try-hard glossier polaroid banjo knausgaard.</p>
                            <MyButton 
                                text='Attend'
                                bck='#ffa800'
                                color='#ffffff'
                                link='#'
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;