import * as React from 'react';
import {View} from 'react-native';
import StatusBar from '../../components/StatusBar';

import {Counter} from 'ui-native';

function HomeScreen() {
  return (
    <View>
      <StatusBar />
      <Counter />
    </View>
  );
}

export default HomeScreen;
