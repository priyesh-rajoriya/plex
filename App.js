import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Badge,
  Card,
  CardItem,
  Body
} from "native-base";

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
      data: [
        {
          title: "Experience in Motor Telerehabilitation",
          time: "45.23"
        },
        {
          title: "Neuromodulation",
          time: "22.20"
        },
        {
          title: "Community based Rehabilitation",
          time: "15.09"
        }
      ]
    };
  }
  AllVideos() {
    if (this.state.AllVideos == false) {
      this.setState({ AllVideos: true });
    } else if (this.state.AllVideos == true) {
      this.setState({ AllVideos: false });
    }
  }
  Day1() {
    if (this.state.Day1 == false) {
      this.setState({ Day1: true });
    } else if (this.state.Day1 == true) {
      this.setState({ Day1: false });
    }
  }
  Day2() {
    if (this.state.Day2 == false) {
      this.setState({ Day2: true });
    } else if (this.state.Day2 == true) {
      this.setState({ Day2: false });
    }
  }
  Day3() {
    if (this.state.Day3 == false) {
      this.setState({ Day3: true });
    } else if (this.state.Day3 == true) {
      this.setState({ Day3: false });
    }
  }
  Day4() {
    if (this.state.Day4 == false) {
      this.setState({ Day4: true });
    } else if (this.state.Day4 == true) {
      this.setState({ Day4: false });
    }
  }
  NationalFaculty() {
    if (this.state.NationalFaculty == false) {
      this.setState({ NationalFaculty: true });
    } else if (this.state.NationalFaculty == true) {
      this.setState({ NationalFaculty: false });
    }
  }
  InternationalFaculty() {
    if (this.state.InternationalFaculty == false) {
      this.setState({ InternationalFaculty: true });
    } else if (this.state.InternationalFaculty == true) {
      this.setState({ InternationalFaculty: false });
    }
  }

  render() {
    return (
      <View style={{ height: "100%", width: "100%", backgroundColor: "#FFF" }}>
        <ScrollView>
          <View>
            <Image
              style={{
                height: 150,
                width: "100%"
              }}
              source={require("./src/images/wcnr_coverimage.png")}
            />
          </View>
          <View style={{ marginTop: 10, left: 10 }}>
            <Text style={{ fontWeight: "400", fontSize: 18, color: "#0000ba" }}>
              WCNR 2018
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 6, left: 10 }}>
            <Text style={{ fontSize: 10, color: "#4fa579" }}>265 VIDEOS</Text>
            <Text style={{ fontSize: 10, color: "#4fa579", left: 8 }}>
              702 VIEWS
            </Text>
            <Text style={{ fontSize: 10, color: "#4fa579", left: 15 }}>
              79 SUBSCRIBERS
            </Text>
          </View>

          <View style={{ width: "90%" }}>
            <Text
              style={{ fontSize: 12, color: "black", marginTop: 8, left: 10 }}
            >
              10th World Congress for Neurorehabilitation was organised by the
              Indian Federation of Neurorehabilitation in Mumbai. The theme of
              the Congress: From Neuro Technologies to Community Care had been
              chosen...
            </Text>
          </View>

          <View
            style={{ fontSize: 15, color: "grey", marginTop: 15, left: 10 }}
          >
            <Text>FREE PREVIEW</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              left: 10,
              width: "95%",
              height: 150,
              flexDirection: "row"
            }}
          >
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <View>
                  <ScrollView>
                    <Card style={{ flex: 1, height: 70, flexDirection: "row" }}>
                      <Image
                        style={{ height: 70, width: 60, left: 5 }}
                        source={require("./src/images/icons8-video-on-demand-50.png")}
                      />
                      <Text style={{ marginLeft: 10, top: 10 }}>
                        {item.title}
                      </Text>
                    </Card>
                  </ScrollView>
                </View>
              )}
            />
          </View>

          <View
            style={{
              height: 30,
              width: "100%",
              left: 10,
              marginTop: 15,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                backgroundColor: "#FF3800",
                height: 30,
                padding: 5,
                width: "60%",
                alignSelf: "center"
              }}
            >
              SUBSCRIBE FOR 400
            </Text>
            <Text
              style={{
                backgroundColor: "lightgrey",
                height: 30,
                padding: 5,
                width: "35%"
              }}
            >
              SHARE
            </Text>
          </View>

          <View>
            <Text style={{ left: 10, fontWeight: "400", color: "#000000" }}>
              ALL VIDEOS
            </Text>
          </View>

          <View style={{ left: 10, top: 10, flexDirection: "row" }}>
            {/* <Image source={require('../Image/filter.png.png')} /> */}
            <Text style={{ color: "#808080" }}>FILTER:</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              left: 10,
              width: "95%",
              height: 150,
              flexDirection: "row"
            }}
          >
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <Card
                  style={{
                    flex: 1,
                    height: 70,
                    flexDirection: "row",
                    height: 80
                  }}
                >
                  <Image
                    style={{ height: 70, width: 60, left: 5 }}
                    source={require("./src/images/icons8-video-on-demand-50.png")}
                  />
                  <Text style={{ marginLeft: 10, top: 10, color: "green" }}>
                    {item.title}
                  </Text>
                </Card>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
