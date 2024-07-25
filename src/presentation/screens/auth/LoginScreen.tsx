import React from 'react';
import {Input, Layout, Text, Button} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions} from 'react-native';
import {MyIcon} from '../../components/ui/MyIcon';

export const LoginScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text>Ingresar</Text>
        </Layout>

        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={<MyIcon name="lock-outline" />}
            style={{marginBottom: 20}}
          />
        </Layout>
        <Layout style={{marginTop: 10}} />
        <Layout>
          <Button
            onPress={() => {}}
            accessoryRight={<MyIcon name="arrow-forward-outline" />}>
            Ingresar
          </Button>
        </Layout>
        <Layout
          style={{
            paddingTop: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿No tienes cuenta? </Text>
          <Text status="primary" onPress={() => {}}>
            Crea una aquí
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
