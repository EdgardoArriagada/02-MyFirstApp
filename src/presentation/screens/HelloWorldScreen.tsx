import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HelloWorldScreen: FC = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Hello</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
