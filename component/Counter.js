import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <View>
        <Text>Count =  {this.state.count}</Text>
        <Button title="+" onPress={this.incrementCount}/>
        <Button title="-" onPress={this.decrementCount}/>
      </View>
        
    );
  }
}

export default Counter;