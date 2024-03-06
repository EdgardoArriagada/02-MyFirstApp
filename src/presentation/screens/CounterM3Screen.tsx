import {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {gs} from '../theme/global.styles';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen: FC = () => {
  const [count, setCounter] = useState(0);
  return (
    <View style={gs.centerContainer}>
      <Text style={gs.title}>{count}</Text>
      <Icon name="accessibility-outline" size={25}  />
      <FAB style={gs.fab} label="+1" onPress={() => setCounter(s => s + 1)} />
    </View>
  );
};
