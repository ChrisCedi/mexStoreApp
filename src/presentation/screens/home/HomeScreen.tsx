import React from 'react';
import {Text, Layout, Button, Icon} from '@ui-kitten/components';

export const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HomeScreen</Text>

      <Button accessoryLeft={<Icon name="facebook" />}>Cerrar sesión</Button>
    </Layout>
  );
};
