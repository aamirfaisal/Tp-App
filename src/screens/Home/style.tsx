import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: '2%',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: FONT.bold,
        color: COLOR.dark
    },
    card: {
        width: '95%',
        backgroundColor: COLOR.white,
        borderRadius: 8,
        paddingVertical: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: '3%',
        justifyContent: 'space-between',
        elevation: 5,
        marginBottom: '2%'
    },
    title: {
        fontSize: 16,
        fontFamily: FONT.medium,
        color: COLOR.dark,
    },
    body: {
        fontSize: 14,
        fontFamily: FONT.regular,
        color: COLOR.dark,
    },
    userId: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: COLOR.dark
    },
    image: {
        height: 65,
        width: 65,
        resizeMode: 'cover',
        borderRadius: 100
    },
    errorcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        fontSize: 16,
        color: COLOR.red,
        textAlign: 'center',
        fontFamily: FONT.bold,
        width: '80%',
        marginTop: '5%'
    },
    errorimage: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    RefreshContainer: {
        position: 'absolute',
        backgroundColor: COLOR.white,
        height: 60,
        width: 60,
        borderRadius: 50,
        bottom: '8%',
        right: '10%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RefreshIcon: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    }
});