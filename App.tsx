/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Calendar from './src/components/compounds/calendar';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const map = new Map() 
  map.set("22-10-2023", {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#7089",
    borderWidth: 5,
    borderColor: "#7089",
    marginHorizontal: 10
  })
  map.set("23-10-2023", {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2089",
    borderWidth: 5,
    borderColor: "#7489",
    marginHorizontal: 10
  })
  map.set("24-10-2023", {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#476",
    borderWidth: 5,
    borderColor: "#124",
    marginHorizontal: 10
  })
  return (
    <View style={{marginTop: 100, alignContent: "center", alignItems: "center"}}>
      <Calendar markerList={map} locale='de' /> 
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
