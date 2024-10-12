import React from 'react';
import { connect } from 'react-redux'; 

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div className="container mt-5">
                <h2>Counter</h2>
                <div className="bg-info p-3 text-center">
                    <span className="border d-inline-block p-2 text-white">{this.props.count}</span>
                    <button 
                        className="btn btn-light mx-2"
                        style={{ borderColor: 'black' }} 
                        onClick={this.decrement}
                    >
                        -
                    </button>
                    <button 
                        className="btn btn-light mx-2"
                        style={{ borderColor: 'black' }} 
                        onClick={this.increment}
                    >
                        +
                    </button>
                    <button 
                        className="btn btn-light mx-2"
                        style={{ borderColor: 'black' }} 
                        onClick={() => this.props.dispatch({ type: 'RESET' })}
                    >
                        reset
                    </button>
                </div>
            </div>
        );
    }
}

// Add the mapStateToProps function: 
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);
