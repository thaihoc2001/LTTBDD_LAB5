import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image} from 'react-native';
import Footer from './footer';
import HeaderScreenOne from './header';
import { Button } from "@react-native-material/core";

const DATA = [
    {
        id: 'sp1',
        title: 'Ca nau lau, nau mi mini',
        urlImg: require('../assets/images/ca_nau_lau.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
    {
        id: 'sp2',
        title: '1KG kho ga bo toi',
        urlImg: require('../assets/images/ga_bo_toi.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
    {
        id: 'sp3',
        title: 'Xe can cau da nang',
        urlImg: require('../assets/images/xa_can_cau.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
    {
        id: 'sp4',
        title: 'Shop do choi mo hinh',
        urlImg: require('../assets/images/do_choi_dang_mo_hinh.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
    {
        id: 'sp5',
        title: 'Lanh dao da nang',
        urlImg: require('../assets/images/lanh_dao_gian_don.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
    {
        id: 'sp6',
        title: 'Hieu long tre con',
        urlImg: require('../assets/images/hieu_long_con_tre.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
    {
        id: 'sp7',
        title: 'Donal Trump thien tai lanh dai',
        urlImg: require('../assets/images/trump_1.png'),
        shopName: 'Shop Devang',
        isSelect: false
    },
];

const Item = ({ product }) => (
    <View style={styles.item}>
        <View style={{flex: 3}}>
            <Image
                style={styles.productImage}
                source={product.urlImg}
            />
        </View>
        <View style={styles.rightItem}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.shopName}>{product.shopName}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
            <Button title="Chat" color="error" />
        </View>
    </View>
);

export default function HomeChat() {
    const renderItem = ({ item }) => (
        <Item product={item}/>
    );
    return (
        <View style={styles.container}>
            <HeaderScreenOne style={{ flex: 1 }}></HeaderScreenOne>
            <Text style={{color: 'secondary', paddingHorizontal: 30, paddingVertical: 10, fontSize: 15, borderBottomColor: 'gray',borderBottomWidth: 1}}>
                Ban co thac mac gi san pham vua xem. Dung ngai chat voi shop!
            </Text>
            <SafeAreaView style={styles.listItem}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <Footer></Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#E5E5E5'
    },
    listItem: {
        marginTop: 20,
        width: '100%',
    },
    productImage: {
        width: 100,
        height: 100
    },
    item: {
        marginBottom: 5,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    rightItem: {
        marginLeft: 20,
        flex: 5
    },
    title: {
        marginTop: 5,
        fontSize: 18
    },
    shopName: {
        marginTop: 20,
        fontSize: 18,
        color: 'red'
    }
});
