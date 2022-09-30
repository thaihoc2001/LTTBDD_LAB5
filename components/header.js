import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderScreenOne() {
  return (
    <View style={styles.header}>
        <View style={styles.groupIcon}>
            <View  style={{paddingRight: 50}}>
                <Icon name="arrow-left" size={30} color="#fff" light />
            </View>
            <View>
                <Text style={{fontSize: 30, color: '#fff'}}>Chat</Text>
            </View>
            <View style={{paddingLeft: 50}}>
                <Icon name="cart-plus" size={30} color="#fff" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    width: '100%',
    // position: 'absolute',
    // top: 0,
    height: '10%',
    backgroundColor: '#1BA9FF',
  },
  groupIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40
  }
});
