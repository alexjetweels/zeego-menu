import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import * as ContextMenu from 'zeego/context-menu';

function ImageWIthContext() {
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
        <ContextMenu.Item key='1' onSelect={() => console.log('press items')}>
          <ContextMenu.ItemTitle>Menu 1</ContextMenu.ItemTitle>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

export default ImageWIthContext;
