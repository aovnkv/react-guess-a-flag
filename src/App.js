import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import Message from './Message';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      userChoice: undefined,
      optionSubmitted: false
    };
  }
  getRandomEl = arr => {
    const r = Math.floor(Math.random() * arr.length);
    return arr[r];
  };

  shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

  checkAnswer = () => {
    this.setState({ optionSubmitted: true });
  };

  handleContinue = () => {
    const { countries } = this.state;
    const options = this.shuffleArray(countries).slice(0, 4);
    const correctOption = this.getRandomEl(options);
    const userChoice = undefined;
    const optionSubmitted = false;
    const form = document.getElementsByClassName('inputGroup')[0];
    form.reset();
    this.setState({
      options,
      correctOption,
      userChoice,
      optionSubmitted
    });
  };

  handleChange = e => {
    this.setState({ userChoice: e.target.value });
  };

  render() {
    const { options, userChoice, correctOption, optionSubmitted } = this.state;
    let inputs, flag, button, messageBlock;
    if (correctOption !== undefined) {
      let opts = options.map(opt => ({
        ...opt,
        checked: userChoice === opt.name,
        disabled: optionSubmitted
      }));
      inputs = opts.map((option, index) => (
        <Input key={index} option={option} handleChange={this.handleChange} />
      ));
      button = (
        <Button
          handleSubmit={
            optionSubmitted ? this.handleContinue : this.checkAnswer
          }
          text={optionSubmitted ? 'Continue' : 'Guess'}
          disabled={!userChoice}
        />
      );
      messageBlock = (
        <Message
          optionSubmitted={optionSubmitted}
          correct={userChoice === correctOption.name}
          correctOption={correctOption}
          userChoice={userChoice}
        />
      );
      flag = <img src={correctOption.flag} alt={correctOption.name} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h2>Guess the right country for a flag</h2>
        </header>
        <div className="App-content">
          <form className="inputGroup">{inputs}</form>
          <div>
            {button}
            {messageBlock}
          </div>
          <div className="flag">{flag}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const countriesData = 'https://restcountries.eu/rest/v2/all';
    fetch(countriesData)
      .then(data => data.json())
      .then(countries => {
        const options = this.shuffleArray(countries).slice(0, 4);
        const correctOption = this.getRandomEl(options);
        this.setState({ countries, options, correctOption });
      })
      .catch(console.warn);
  }
}

export default App;
