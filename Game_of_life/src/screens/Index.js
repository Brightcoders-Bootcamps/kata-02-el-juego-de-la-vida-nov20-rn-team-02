import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Grid from '../components/Grid';
import Buttons from '../components/Buttons';
function Index() {
  const [game, setGame] = useState(false);
  return (
    <View>
      <Grid game={game} setGame={setGame} />
      
    </View>
  );
}
const styles = StyleSheet.create({});
export default Index;
