import { View, Text, FlatList, ScrollView, SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';

const data = [
    { id: 1, src: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg', title: 'News' },
    { id: 2, src: 'https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_960_720.jpg', title: 'Hello World' },
    { id: 3, src: 'https://cdn.pixabay.com/photo/2020/08/08/02/56/hacker-5471975_960_720.png', title: 'JavaScript' }
];


const Item = ({ src, title }) => (
    <View style={styles.list}>
        <ImageBackground style={styles.list} imageStyle={{ borderRadius: 20 }} source={{ uri: src }} resizeMode="cover" >
            <Text style={styles.titleText}>{title}</Text>
        </ImageBackground>
    </View>
);

const HomePage = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} src={item.src} />
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}



const styles = StyleSheet.create({
    list: {
        margin: 5,
        height: 229,
        width: 400,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        backgroundColor: 'rgba(44, 34, 44, 0.5)',
        width: '100%',
        height: 60,
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 40
    }
});

export default HomePage;