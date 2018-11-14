/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import ShowTitle from './components/ShowTitle';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    data: []
  }

    fetchData = async () => {

      console.log("test");
      
      const urlAddress = `https://eol-feeds.eonline.com/arf/page/landing/frontdoor.json`;


      try {
        const data = await fetch(urlAddress);
        const data2 = await data.json();

        console.log('data2: ' + data2)

        console.log(data2);

        console.log("data Before: ", this.state.data);
  
        this.setState({ data: data2.body.widgets[1].contentData.categoryGridItems })
  
        let condition = this.state.data.length > 0 ? "data" : "no data"
  
        console.log("data: ", condition);
  
        console.log("data aftet: ", this.state.data);

      } catch(error) {
        console.log('error: ' + error)
      }
      


    }


    componentDidMount() {

      console.log("does it rerun?")

      this.fetchData()
    }

  render() {

    
    return (
      <View style={styles.container}>


        {
           this.state.data.length > 0 ? <ShowTitle title={this.state.data[1].title} /> : null




        }
        <Text style={styles.welcome} > Welcome </Text>
        <FlatList
              data={this.state.data}
              renderItem={({item, separators}) => (
                <View style={{backgroundColor: 'white', marginTop: 30, width: 250, alignSelf: 'center' }}>
                  <ShowTitle title={item.title} />
                </View>
              )}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
