import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

class Pricing extends Component {

    state = {
        prices: [50, 75, 100],
        positions: ['Karesansui', 'Roji', 'Tsubo-niwa'],
        desc: [
            'Lorem ipsum dolor amet knausgaard master cleanse chartreuse vegan poke echo park ennui fam hella.',
            'Lorem ipsum dolor amet knausgaard master cleanse chartreuse vegan poke echo park ennui fam hella.',
            'Lorem ipsum dolor amet knausgaard master cleanse chartreuse vegan poke echo park ennui fam hella.'
        ],
        linkto: ['#', '#', '#'],
        delay: [500, 0, 500]
    }

    showBoxes = () => {
        return(
            this.state.prices.map((box, i) => (
                <Zoom 
                    key={i}
                    delay={this.state.delay[i]}>
                    <div className='pricing_item'>
                        <div className='pricing_inner_wrapper'>
                            <div className='pricing_title'>
                                <span>${box}</span>
                                <span>{this.state.positions[i]}</span>
                            </div>
                            <div className='pricing_description'>
                                <span>{this.state.desc[i]}</span>
                            </div>
                            <div className='pricing_buttons'>
                                <MyButton 
                                    text='Attend'
                                    bck='#ffa800'
                                    color='#ffffff'
                                    link={this.state.linkto[i]}
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>
            ))
        )
    }

    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Cover Charge</h2>
                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;