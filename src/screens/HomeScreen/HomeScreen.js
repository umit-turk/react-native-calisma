import React from 'react';
import { SafeAreaView} from 'react-native';
import {styles} from './styles';
import DashboardDagıtıcı from '../../components/DashboardDagıtıcı/DashboardDagıtıcı'
import DashboardYonetici from '../../components/DashBoardYonetici/DashboardYonetici'

export default function HomeScreen() {

  const manager = true;
  
  return (
    <SafeAreaView style={styles.container}>
      {
        manager ? <DashboardYonetici /> : <DashboardDagıtıcı />
      }
    </SafeAreaView>
  );
}
