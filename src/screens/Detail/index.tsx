import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style';
import { truncateText } from '../../utils/Helper';
import { IMAGES } from '../../assests/images';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONT } from '../../enums/StyleGuide';

const DetailScreen = ({ route }) => {
    const navigation = useNavigation()
    const { fullData } = route.params;

    const capitalizeWords = (text) => {
        return text.replace(/\b\w/g, char => char.toUpperCase());
    };


    return (
        <View style={styles.container}>

            <ImageBackground source={{ uri: fullData.picture.large }} style={{ width: '100%', height: 350 }}>
                <View style={styles.HeaderIconsStyle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={IMAGES.LeftArrow} style={styles.IconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={IMAGES.SaveIcon} style={styles.IconStyle} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.SubContainer}>
                <Text style={styles.FreelanceText}>FREELANCE</Text>
                <Text style={styles.TitleTextStyle}>
                    {`${fullData.name.title} ${fullData.name.first} ${fullData.name.last}`}
                </Text>


                <View style={styles.ProfileSection}>
                    <Image source={{ uri: fullData.picture.medium }} style={styles.ProfileImage} />
                    <Text style={styles.ProfileText}>{fullData.login.username}  |  {new Date(fullData.registered.date).toISOString().split('T')[0]}</Text>
                </View>

                <View style={styles.IconSection}>
                    <Image source={IMAGES.email} style={styles.IconStyle} />
                    <Text style={styles.ProfileText}>{fullData.email}</Text>
                </View>

                <View style={styles.IconSection}>
                    <Image source={IMAGES.phone} style={styles.IconStyle} />
                    <Text style={styles.ProfileText}>{fullData.cell}</Text>
                </View>

                <View style={styles.IconSection}>
                    <Image source={IMAGES.location} style={styles.IconStyle} />
                    <Text style={styles.ProfileText}>{fullData.location.city},{fullData.location.state}, {fullData.location.country}</Text>
                </View>

                <View style={styles.IconSection}>
                    <Image source={IMAGES.calender} style={styles.IconStyle} />
                    <Text style={styles.ProfileText}>
                        {new Date(fullData.dob.date).toISOString().split('T')[0]}({fullData.dob.age})
                    </Text>
                </View>

                <View style={styles.IconSection}>
                    <Image source={IMAGES.gender} style={styles.IconStyle} />
                    <Text style={styles.ProfileText}>{fullData.gender}</Text>
                </View>

                {/* <Text style={styles.DetailStyle}>{fullData.email}</Text> */}
            </View>
        </View>
    )
}

export default DetailScreen