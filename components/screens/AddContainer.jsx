import React, { Reducer, useContext, useReducer, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';
import { AppContext } from '../../context/context';
import uuid from 'react-native-uuid';

// import { ACTION } from '../../context/context';

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const AddContainer = () => {
  const [newContainerName, setNewContainerName] = useState('');
  const [newContainerDesc, setNewContainerDesc] = useState('');
  const [item, setItem] = useState('');
  const [newContainerItems, setNewContainerItems] = useState([]);

  const handleNameInput = (value) => {
    setNewContainerName(value);
  };

  const handleDescriptionInput = (value) => {
    setNewContainerDesc(value);
  };

  const handleItems = (value) => {
    setItem(value);
  };

  const handleAddItem = () => {
    setNewContainerItems((newContainerItems) => [
      ...newContainerItems,
      { id: uuid.v4(), name: item },
    ]);
    setItem('');
  };

  const [state, dispatch] = useContext(AppContext);
  const handleAddContainer = () => {
    dispatch({
      type: 'add',
      payload: {
        id: uuid.v4(),
        name: newContainerName,
        description: newContainerDesc,
        items: newContainerItems,
      },
    });
    setNewContainerName('');
    setNewContainerDesc('');
    setItem('');
    setNewContainerItems([]);
  };

  const renderItem = ({ item }) => <Item title={item.name} />;

  return (
    <View style={styles.container}>
      <Text style={styles.flexChild}>Add new container.</Text>
      <TextInput
        style={styles.flexChild}
        placeholder='Title'
        value={newContainerName}
        onChangeText={(value) => handleNameInput(value)}
      />
      <TextInput
        style={styles.flexChild}
        placeholder='Description'
        value={newContainerDesc}
        onChangeText={(value) => handleDescriptionInput(value)}
      />
      <View>
        <TextInput
          style={styles.flexChild}
          placeholder='Add Items'
          value={item}
          onChangeText={(value) => handleItems(value)}
        />
        <Button title='Add Item' onPress={() => handleAddItem()}></Button>
      </View>
      <Button title='Create Container' onPress={() => handleAddContainer()} />

      <Text style={styles.flexChild}>
        New Container Name: {newContainerName}
      </Text>
      <Text style={styles.flexChild}>
        New Container Description : {newContainerDesc}
      </Text>
      <FlatList
        style={styles.flexChild}
        data={newContainerItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  flexChild: {
    flex: 0,
  },
});

export default AddContainer;
