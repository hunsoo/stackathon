import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {Container, Header, Left, Button, Icon, Body, Title, Content, Footer, Text} from 'native-base';
//import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View>

      </View>

      // <ScrollView style={styles.container}>
      //   {/* Go ahead and delete ExpoLinksView and replace it with your
      //      * content, we just wanted to provide you with some helpful links */}
      //   {/* <ExpoLinksView /> */}
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
