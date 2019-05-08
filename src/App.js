import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        }
    }

    makeIncrementer = amount => () =>
        this.setState(prevState => ({
            count: prevState.count + amount,
        }));

    increment = this.makeIncrementer(1);

    decrement = this.makeIncrementer(-1);

    reset = () =>
        this.setState({ count: 0 });

    render() {
        return (
            <div>
              <p>Count: {this.state.count}</p>
              <button className="increment" onClick={this.increment}>Increment</button>
              <button className="decrement" onClick={this.decrement}>Decrement</button>
              <button className="reset" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default App;
