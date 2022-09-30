import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  return (
    <View style={styles.footer}>
        <View style={styles.groupIcon}>
            <View>
                <Icon name="bars" size={30} color="#000" />
            </View>
            <View>
                <Icon name="home" size={30} color="#000" />
            </View>
            <View>
                <Icon name="backward" size={30} color="#000" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '8%',
    backgroundColor: '#1BA9FF',
  },
  groupIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15
  }
});
