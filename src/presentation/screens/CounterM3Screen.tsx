import {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {gs} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen: FC = () => {
  const [count, setCounter] = useState(0);
  return (
    <View style={gs.centerContainer}>
      <Text style={gs.title}>{count}</Text>
      <FAB style={gs.fab} icon="add" onPress={() => setCounter(s => s + 1)} />
    </View>
  );
};
