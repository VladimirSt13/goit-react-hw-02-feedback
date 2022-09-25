import { Component } from 'react';
import { Container, Button, Title, List } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlClickFeedback = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, value) => (sum += value), 0);

  render() {
    const a = 'abc';
    console.log(a);
    return (
      <Container>
        <Title>Please leave feedback</Title>
        {Object.keys(this.state).map(key => (
          <Button key={key} onClick={() => this.handlClickFeedback(key)}>
            {key}
          </Button>
        ))}
        <Title>Statistics</Title>
        <List>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              {key}: {this.state[key]}
            </li>
          ))}
          <li>Total: {this.countTotalFeedback()}</li>
        </List>
      </Container>
    );
  }
}

// handleClick = (key) => {
// this.setState(prevState => {
//   return {
//     [key]: prevState[key] +1,
//   }})
// }
// {Object.keys(this.state).map => <button key={key} onClick{()=> this.handleClick(key)}>{key</button>}
