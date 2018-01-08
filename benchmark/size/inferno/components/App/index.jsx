'use strict';
import Inferno from 'inferno';
import Component from 'inferno-component';

function renderColor(color) {
    var style = {
        backgroundColor: color
    };

    return <li className="color" style={style}>
            {color}
        </li>
}

function renderColors(colors) {
    if (colors.length) {
        return (<ul>{colors.map(renderColor)}</ul>);
    } else {
        return <div>No colors!</div>
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            colors: props.colors,
            clickCount: 0
        }

        this.handleButtonClick = function() {
            this.setState({
                clickCount: this.state.clickCount + 1
            });
        }.bind(this);
    }

    render() {
        var colors = this.state.colors;
        var name = this.state.name;
        var clickCount = this.state.clickCount;
        var handleButtonClick = this.handleButtonClick;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <div className="colors">
                    {renderColors(colors)}
                </div>
                <button type="button" onClick={handleButtonClick}>
                    You clicked the button {clickCount} time(s)
                </button>
            </div>
        );
    }
};