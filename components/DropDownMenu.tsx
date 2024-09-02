import { Ionicons } from '@expo/vector-icons';
import { Button, Text, View } from 'react-native';
import * as DropdownZeego from 'zeego/dropdown-menu';

export type DropDownMenuProps = {
  items: Array<{
    key: string;
    title: string;
    icon: string;
    iconAndroid?: string;
  }>;

  onSelect: (value: string) => void;
};

const DropDownMenu = ({ items, onSelect }: DropDownMenuProps) => {
  return (
    <DropdownZeego.Root>
      <DropdownZeego.Trigger>
        <Ionicons name='ellipsis-horizontal' size={24} />
      </DropdownZeego.Trigger>
      <DropdownZeego.Content
        loop={false}
        side='bottom'
        align='start'
        alignOffset={0}
        avoidCollisions={false}
        collisionPadding={8}
        sideOffset={5}
      >
        <DropdownZeego.Item key='cars'>
          <DropdownZeego.ItemTitle>Menu Item</DropdownZeego.ItemTitle>
        </DropdownZeego.Item>

        <DropdownZeego.Group>
          {items.map((item) => (
            <DropdownZeego.Item
              key={item.key}
              onSelect={() => onSelect(item.key)}
            >
              <DropdownZeego.ItemTitle>{item.title}</DropdownZeego.ItemTitle>
              <DropdownZeego.ItemIcon
                ios={{ name: item.icon }}
                androidIconName={item.iconAndroid}
              />
            </DropdownZeego.Item>
          ))}
        </DropdownZeego.Group>
      </DropdownZeego.Content>
    </DropdownZeego.Root>
  );
};

export default DropDownMenu;
