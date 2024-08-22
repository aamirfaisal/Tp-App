import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Loader from '../../components/Loader';
import { styles } from './style';
import { IMAGES } from '../../assests/images';
import { truncateText } from '../../utils/Helper';
import { SCREEN } from '../../enums/AppEnums';
import { Result } from '../../Apis';

const Home = (props: any) => {
  const { navigation } = props;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const fetchPosts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(Result);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('URL not found');
        } else {
          throw new Error('Network response was not ok');
        }
      }
      const data = await response.json();
      console.log("Line::::::", data.results);

      const mappedData = data.results.map((item: any) => ({
        title: `${item.name.first} ${item.name.last}`,
        body: item.email,
        userId: item.login.username,
        pic: item.picture.thumbnail,
        fullData: item,
      }));
      setPosts(mappedData);
    } catch (error: any) {
      if (error.message === 'URL not found') {
        setError('URL is incorrect. Please check the URL.');
      } else if (error.message === 'Network request failed') {
        setError('Your network is disconnected. Please check your internet connection.');
      } else {
        setError('Unable to resolve the URL. Please check the URL spelling.');
      }
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const capitalizeWords = (text: string) => {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREEN.DETAILSCREEN, {
        fullData: item.fullData, 
      })}
      style={styles.card}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <View style={{ width: '80%' }}>
            <Text style={styles.title}>{truncateText(capitalizeWords(item.title), 30)}</Text>
            <Text style={styles.body}>{item.body}</Text>
            {/* <Text style={styles.userId}>User ID: {item.userId}</Text> */}
          </View>
          <Image source={{ uri: item.pic }} style={styles.image} />
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Users</Text>
      </View>

      {error && (
        <View style={styles.errorcontainer}>
          <Image source={IMAGES.NotFound} style={styles.errorimage} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <FlatList
        data={loading ? Array(10).fill({}) : posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
      />

      <TouchableOpacity onPress={fetchPosts} style={styles.RefreshContainer}>
        <Image source={IMAGES.RefreshIcon} style={styles.RefreshIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
