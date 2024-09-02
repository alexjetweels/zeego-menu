import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native';

export async function downloadImage(url: string) {
  try {
    // Define the path where the image will be saved
    const fileUri = `${FileSystem.documentDirectory}${url.split('/').pop()}`;

    // Start the download
    const { uri } = await FileSystem.downloadAsync(url, fileUri);

    // Request media library permissions
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Media library permissions are required to save the image.'
      );
      return;
    }

    //Save the image to the Photos app
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.createAlbumAsync('Download', asset, false);

    // Log or handle the successful download
    Alert.alert('Download complete', 'Image saved to Photos app');
  } catch (error: any) {
    // Handle the error
    Alert.alert('Download failed', error.message);
  }
}
