import React, { PureComponent } from 'react';

import Counter from './counter';
import store from '../../reducers/Counter';

class CounterContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.increment = () => {
            store.dispatch({ type: 'INCREMENT' });
        };
        
        this.decrement = () => {
            store.dispatch({ type: 'DECREMENT' });
        };
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    
    render() {
        return (
            <Counter 
                counter={ store.getState() } 
                increment={ this.increment } 
                decrement={ this.decrement } 
            />
        );
    }
}

export default CounterContainer;