import React, {useRef, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {startGame, initialGrid} from '../utils';


function Buttons({game, setGame, setGrid}) {
  const gameRef = useRef(game);
  gameRef.current = game;
  const run = useCallback(() => startGame(gameRef.current, setGrid), []);
  const autoRun = () =>{
    run()
    setInterval(autoRun, 1000)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {          
          setGame(true);
          run()                  
        }}>
        <Text style={styles.text}>{!game ? 'Start' : 'Next'}</Text>
      </TouchableOpacity>
      {game ? (
        <>
          <TouchableOpacity
          style={styles.btn}
          onPress={() => {          
            if(game){
              autoRun()
            }                 
          }}>
          <Text style={styles.text}>Auto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {                              
            setGame(false)
            setGrid(initialGrid())
          }}>
            <Text style={styles.text}>Reset</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    margin: 15,
    paddingHorizontal: 70,
  },
  btn: {
    width: 270,
    backgroundColor: '#52ca00',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default Buttons;
