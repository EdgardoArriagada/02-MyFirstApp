import {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components/shared/PrimaryButton';

export const CounterScreen: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={s.container}>
      <Text style={s.title}>{counter}</Text>
      <PrimaryButton
        onPress={() => setCounter(c => c + 1)}
        onLongPress={() => setCounter(0)}>
        Hola amigo
      </PrimaryButton>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
