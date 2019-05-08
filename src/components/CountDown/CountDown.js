import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.startCount,
        };
    }

    render() {
        return (
            <div>
                <p className='countdown'>{this.state.count}</p>
                <button className='start' onClick={this.startCountDown}>Start</button>
                <button className='reset' onClick={this.resetCountDown}>Reset</button>
            </div>
        );
    }

    startCountDown = () =>
        this.intervalHandle = setInterval(this.tick, 1000);

    tick = () => {
        if(this.state.count <= 0) {
            clearInterval(this.intervalHandle);
        } else {
            this.setState(state => ({ count: state.count - 1 }));
        }
    };

    resetCountDown = () =>
        this.setState({ count: 3 });

}

CountDown.propTypes = {
    startCount: PropTypes.number.isRequired,
};


export default CountDown;
