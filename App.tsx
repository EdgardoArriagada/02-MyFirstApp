import {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';

export const App: FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HelloWorldScreen />
    </SafeAreaView>
  );
};
