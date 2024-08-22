import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../enums/StyleGuide";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white
    },
    HeaderIconsStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '5%',
        paddingHorizontal: '5%'
    },
    IconStyle: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    SubContainer: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        bottom: '5%',
        backgroundColor: COLOR.white
    },
    FreelanceText: {
        fontSize: 18,
        fontFamily: FONT.bold,
        color: COLOR.red,
        paddingLeft: '5%',
        marginTop: '10%'
    },
    TitleTextStyle: {
        fontSize: 20,
        fontFamily: FONT.semiBold,
        color: COLOR.dark,
        paddingHorizontal: '5%'
    },
    ProfileSection: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        alignItems: 'center',
        gap: 10,
        marginTop: '4%'
    },
    IconSection: {
        flexDirection: 'row',
        paddingHorizontal: '5%',
        alignItems: 'center',
        gap: 20,
        marginTop: '4%'
    },
    ProfileImage: {
        height: 40,
        width: 40,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    ProfileText: {
        fontSize: 14,
        fontFamily: FONT.regular,
        color: COLOR.garylight
    },
    DetailStyle: {
        fontSize: 14,
        fontFamily: FONT.regular,
        color: COLOR.gary,
        paddingHorizontal: '5%',
        marginTop: '3%'
    }

});