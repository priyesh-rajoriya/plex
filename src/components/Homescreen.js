import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from "react-native";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllVideos: false,
      Day1: false,
      Day2: false,
      Day3: false,
      Day4: false,
      NationalFaculty: false,
      InternationalFaculty: false,
    };
  }
  AllVideos() {
    if (this.state.AllVideos == false) {
      this.setState({ AllVideos: true })
    } else if (this.state.AllVideos == true) {
      this.setState({ AllVideos: false })
    }
  }
  Day1() {
    if (this.state.Day1 == false) {
      this.setState({ Day1: true })
    } else if (this.state.Day1 == true) {
      this.setState({ Day1: false })
    }
  }
  Day2() {
    if (this.state.Day2 == false) {
      this.setState({ Day2: true })
    } else if (this.state.Day2 == true) {
      this.setState({ Day2: false })
    }
  }
  Day3() {
    if (this.state.Day3 == false) {
      this.setState({ Day3: true })
    } else if (this.state.Day3 == true) {
      this.setState({ Day3: false })
    }
  }
  Day4() {
    if (this.state.Day4 == false) {
      this.setState({ Day4: true })
    } else if (this.state.Day4 == true) {
      this.setState({ Day4: false })
    }
  }
  NationalFaculty() {
    if (this.state.NationalFaculty == false) {
      this.setState({ NationalFaculty: true })
    } else if (this.state.NationalFaculty == true) {
      this.setState({ NationalFaculty: false })
    }
  }
  InternationalFaculty() {
    if (this.state.InternationalFaculty == false) {
      this.setState({ InternationalFaculty: true })
    } else if (this.state.InternationalFaculty == true) {
      this.setState({ InternationalFaculty: false })
    }
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>

        <View>
          {/* <Image style={{
            height: 80,
            width: '100%'
          }}
            source={require('.')} /> */}
        </View>
        <View style={{ marginTop: 10, left: 10 }}>
          <Text style={{ fontWeight: '400', fontSize: 18, color: '#7fb7ea' }}>
            WCNR 2018
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 8, left: 10 }}>
          <Text style={{ fontSize: 14, color: '#4fa579' }}>
            265 VIDEOS
        </Text>
          <Text style={{ fontSize: 14, color: '#4fa579' }}>
            702 VIEWS
        </Text>
          <Text style={{ fontSize: 14, color: '#4fa579' }}>
            79 SUBSCRIBERS
        </Text>
        </View>

        <View>
          <Text style={{ fontSize: 14, color: 'black' }}>
            10th World Congress for Neurorehabilitation was organised by the
            Indian Federation of Neurorehabilitation in Mumbai. The theme of
            the Congress: From Neuro Technologies to Community Care had been chosen...
          </Text>
        </View>

        <View style={{ fontSize: 15, color: '#808080' }}>
          <Text>
            FREE PREVIEW
        </Text>
        </View>

        <View>
          <Flatlist>

          </Flatlist>
        </View>

        <View style={{ height: 30, width: 150, color: '#e97632' }}>
          <Text>
            SUBSCRIBE FOR 400
        </Text>
        </View>

        <View>
          <Text style={{ left: 10, fontWeight: '400', color: '#000000' }}>
            ALL VIDEOS
          </Text>
        </View>

        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>
          {/* <Image source={require('../Image/filter.png.png')} /> */}
          <Text style={{ color: '#808080' }}>
            FILTER:
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});

export default HomeScreen;
