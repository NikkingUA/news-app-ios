import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from '.././theme/colors';

const Header = () => {


    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titleHeader}>Home</Text>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    titleHeader: {
        fontWeight: 'bold',
        fontSize: 25,
        height: 100,
        paddingTop: 50,
        paddingBottom: 30,
        color: 'white'
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#1E90FF',
    }
});

export default Header; 