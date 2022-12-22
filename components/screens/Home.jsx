import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { AppContext } from '../../context/context';

const renderContainerItems = ({ item }) => {
  return <Text style={styles.cardListItems}>{item.name}</Text>;
};

const Home = () => {
  const [state, dispatch] = useContext(AppContext);
  console.log(state.containers);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <FlatList
          style={styles.cardList}
          data={item.items}
          keyExtractor={(item) => item.id}
          renderItem={renderContainerItems}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>This is the home screen</Text>
      <FlatList
        data={state.containers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={state.containers}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#37423D',
    borderRadius: 7,
  },
  cardTitle: {
    fontSize: 20,
    color: '#37423D',
  },
  cardDescription: {
    color: '#778F84',
    fontStyle: 'italic',
  },
  cardList: {
    flexDirection: 'row',
  },
  cardListItems: {
    marginRight: 12,
    color: '#778F84',
  },
});
