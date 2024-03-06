import {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';

export const App: FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CounterScreen />
      {/* <HelloWorldScreen /> */}
    </SafeAreaView>
  );
};
