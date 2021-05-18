import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Platform, FlatList, StyleSheet, Text, Dimensions } from 'react-native';
import { Header, Button } from 'react-native-elements';
 import Ionicons from '@expo/vector-icons/Ionicons';
import Grid from '../components/Grid';

function Images() {
    const [images, setImages] = useState([]);
    const dim = Dimensions.get('screen');

    const isPortrait = (width, height) =>
        width < height ? 'portrait' : 'landscape';

    const [_, changeOrientation] = useState(isPortrait(dim.width, dim.height));
    Dimensions.addEventListener('change', () => {
        const dim = Dimensions.get('screen');
        changeOrientation(isPortrait(dim.width, dim.height));
    });

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Access to camera roll is needed!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });

        if (!result.cancelled) {
            setImages([...images, result.uri]);
        }
    };
    return (
        <View style={styles.container}>
            <Header
                containerStyle={styles.header}
                centerComponent={<Text style={styles.text}>Images</Text>}
                rightComponent={<Button
                    containerStyle={styles.button}
                    onPress={pickImage}
                    type='clear'
                    icon={<Ionicons name='add' size={30} color='#007AFF' />} />}
            />

            <FlatList
                columnWrapperStyle={{
                    height: (dim.width / 5) * 3,
                }}
                numColumns={7}
                data={images}
                renderItem={({ item, index }) => (
                    <Grid
                        index={index}
                        sideLength={dim.width / 5 - 1.8}
                        uri={item}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#ffffff',
        height: '13%',
        maxHeight: 90,
        justifyContent: 'center'
    },
    button: {
        marginTop: -17
    },
    text: {
        fontSize: 17,
        fontWeight: '600'
    }
});

export default Images;