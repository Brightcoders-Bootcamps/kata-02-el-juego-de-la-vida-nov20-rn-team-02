import React, {useState} from 'react';
import {View,  StyleSheet, TouchableOpacity} from 'react-native';
import {initialGrid} from '../utils';

function Grid() {
  const [grid, setGrid] = useState(() => {
    return initialGrid();
  });
  
  return (
    <View style={styles.container}>
      {grid.map((rows, i) =>
        rows.map((col, j) => <TouchableOpacity key={`${i}${j}`} style={styles.box} />),
      )}
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
  box: {
    width: 41,
    height: 41,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'gray',
    flexWrap: 'nowrap',
  },
});
export default Grid;
