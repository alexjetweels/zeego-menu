import DropDownMenu from '@/components/DropDownMenu';
import ImageWIthContext from '@/components/ImageWIthContext';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { useEffect } from 'react';

export default function App() {
  const handleDropDownSelect = (value: string) => {
    console.log(value);
  };
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: true,
          headerRight: () => (
            <DropDownMenu
              items={[
                {
                  key: '1',
                  title: 'About the app',
                  icon: 'info.circle',
                  iconAndroid: 'ic_dialog_info',
                },
                {
                  key: '2',
                  title: 'FAQ',
                  icon: 'questionmark.circle',
                  iconAndroid: 'btn_star',
                },
              ]}
              onSelect={handleDropDownSelect}
            />
          ),
        }}
      />

      <ImageWIthContext />
    </View>
  );
}
