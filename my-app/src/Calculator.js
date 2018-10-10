import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handlerCelsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handlerFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }
 
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

        let BoilingVerdict = (props) => {
            
            console.log(props.celsius)
            if (props.celsius >= 100) {
                return <p>水会烧开</p>
            } else {
                return <p>水不会少开</p>
            }
        } 

        return(
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handlerCelsiusChange}/>
                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handlerFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
           </div>
        )
    }
}

class TemperatureInput extends Calculator {

    handlerChange = (event) => {
       this.props.onTemperatureChange(event.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handlerChange}  />
            </fieldset>
        )
    }
}
export default Calculator;