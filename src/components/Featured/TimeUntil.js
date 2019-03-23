import React, { Component } from 'react';
import Slide from 'react-reveal';

class TimeUntil extends Component {

    state = {
        deadline: 'Oct, 16, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(state){
        const time = Date.parse(state.deadline) - Date.parse(new Date());
        if(time > 0) {
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const seconds = Math.floor((time / 1000) % 60);
            this.setState({
                ...state,
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentWillMount() {
        setInterval(() => this.getTimeUntil(this.state), 1000)
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className='countdown_wrapper'>
                    <div className='countdown_top'>
                        Next event starts in
                    </div>
                    <div className='countdown_bottom'>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.days}</div>
                            <div className='countdown_tag'>Days</div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.hours}</div>
                            <div className='countdown_tag'>Hours</div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.minutes}</div>
                            <div className='countdown_tag'>Minutes</div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.seconds}</div>
                            <div className='countdown_tag'>Sec</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeUntil;