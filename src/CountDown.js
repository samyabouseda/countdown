import React, {Component} from 'react';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3,
        }
    }

    render() {
        return (
            <div>
                <p className='countdown'>{this.state.count}</p>
            </div>
        );
    }
}

export default CountDown;
