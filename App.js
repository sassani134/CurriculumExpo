import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button} from 'react-native';

export default function App() {

  const [isLoading, setLoading ] = useState(true);
  const [data, setData] =useState({});

  useEffect(() => {
    console.log("Data has changed", data);
  },[data]);
  

  useEffect(() =>{
    fetch('https://curriculum-rails.herokuapp.com/home/index.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false));
  }, []);




  return (
    <View style={styles.container}>
      {isLoading ? 
      
      <ActivityIndicator/>
      :
        <Button 
        onPress={() => console.log("test",data, "fin")}
        title="test"
        />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
