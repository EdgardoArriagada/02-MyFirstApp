import {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {IconProps} from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import {PositionScreen} from './src/presentation/screens/PositionScreen';

const Icon: FC<IconProps> = props => <IonIcon {...props} />;

export const App: FC = () => {
  return (
    <PaperProvider
      settings={{
        icon: Icon,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <CounterScreen /> */}
        {/* <HelloWorldScreen /> */}
        {/* <CounterM3Screen /> */}
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
