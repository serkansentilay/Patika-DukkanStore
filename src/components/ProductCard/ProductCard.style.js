import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        color: '#000',
        textAlign: 'right'
    },
})
