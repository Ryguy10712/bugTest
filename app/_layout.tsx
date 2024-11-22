import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>This is _layout.tsx, which is the entrypoint when handled by expo router</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RootLayout
