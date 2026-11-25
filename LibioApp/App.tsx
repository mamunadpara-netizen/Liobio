import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://liobio.com' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 0, 
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
  },
});

export default App;