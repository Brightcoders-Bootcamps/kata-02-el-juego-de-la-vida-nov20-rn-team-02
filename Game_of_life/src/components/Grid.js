import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {initialGrid, GenerateNewGrid} from '../utils';
import Buttons from './Buttons';

function Grid({game, setGame}) {
  const [grid, setGrid] = useState(() => {
    return initialGrid();
  });
  const gameRef = useRef(game);
  gameRef.current = game;

  return (
    <View style={styles.container}>
      {grid.map((rows, i) =>
        rows.map((col, j) => (
          <TouchableOpacity
            key={`${i}${j}`}
            style={{
              width: 41,
              height: 41,
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor: grid[i][j] ? '#52ca00' : 'grey',
              flexWrap: 'nowrap',
            }}
            onPress={() => {
              setGrid(GenerateNewGrid(grid, i, j));
            }}
          />
        )),
      )}

      <Buttons game={game} setGame={setGame} setGrid={setGrid} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
export default Grid;
