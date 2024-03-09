import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen: FC = () => {
  return (
    <View style={s.container}>
      <View style={s.box1} />
      <View style={s.box2} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#4846d6',
    borderWidth: 10,
    borderColor: 'white',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
  },
});
