import { downloadImage } from '@/utils/download';
import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import * as ContextMenu from 'zeego/context-menu';

function ImageWIthContext() {
  const handleDownLoad = async () => {
    await downloadImage('https://galaxies.dev/img/projects/star-wars-api.webp');
  };
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Pressable>
          <Image
            source={{
              uri: 'https://galaxies.dev/img/projects/star-wars-api.webp',
            }}
            height={300}
          />
        </Pressable>
      </ContextMenu.Trigger>

      <ContextMenu.Content
        loop={true}
        alignOffset={10}
        avoidCollisions={true}
        collisionPadding={20}
      >
        <ContextMenu.Item key='1' onSelect={handleDownLoad}>
          <ContextMenu.ItemIcon ios={{ name: 'square.and.arrow.down' }} />

          <ContextMenu.ItemTitle>Download</ContextMenu.ItemTitle>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

export default ImageWIthContext;
