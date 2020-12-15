import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
function Buttons() {
  const [game, setGame] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>setGame(!game)} >
        <Text style={styles.text}>{!game ? 'Start' : 'Stop'}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 450,
    margin: 15,
    paddingHorizontal: 70,
  },
  btn: {
    width: 270,
    backgroundColor: '#52ca00',
    borderRadius: 10,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default Buttons;
