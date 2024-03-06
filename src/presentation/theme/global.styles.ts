import {Platform, StyleSheet} from 'react-native';

const isIos = Platform.OS === 'ios';

export const gs = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'black',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: isIos ? 0 : 25,
  },
});
