import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export const SingleList = () => {
    const [ inputText, setInputText ] = useState("");
  const [ items, setItems ] = useState<string[]>([]);

  const handleInput = (text: string) => {
    setInputText(text);
  }

  const addItem = () => {
    setItems(currentItems => [...currentItems, inputText]);
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput 
          placeholder="Item to add..."
          onChangeText={ handleInput }
        />
        <Button 
          title="Add"
          onPress={ addItem }
        />
      </View>
      <View>
        { items.map((item) => <Text key={ item }>{ item }</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '70%',
      marginRight: 8
    }
  });