import React, {Component} from 'react'

export default class Contador2 extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div id={'card'}>
                <p>{this.state.count}</p>
                <div className={'buttons'}>
                    <button onClick={this.increment}>Sumar</button>
                    <button onClick={this.decrement}>Restar</button>
                </div>
            </div>
        )
    }
}

