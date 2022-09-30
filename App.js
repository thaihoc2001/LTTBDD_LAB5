import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeChat from './components/home-chat';

export default function App() {
  return (
    <View>
      <HomeChat></HomeChat>
    </View>
  );
}

const styles = StyleSheet.create({
});
