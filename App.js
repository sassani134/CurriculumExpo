import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Button} from 'react-native';

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
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView >
      {isLoading ? 
      
      <ActivityIndicator/>
      :
        <View style={styles.container} >
          <View>
          {data.employment.map(employment => (
            <View key={employment.id}>
              <Text>{employment.title}</Text>
              <Text>{employment.soustitle}</Text>
              <Text>{employment.body}</Text>
              <Text>{employment.lieux}</Text>              
            </View>
          ))}
          </View>

          <View>
          {data.certificat.map(certificat => (
            <View key={certificat.id}>
              <Text>{certificat.title}</Text>
              <Text>{certificat.body}</Text>
            </View>
          ))}
          </View>

          <View>
          {data.competence.map(competence => (
            <View key={competence.id}>
              <Text>{competence.title}</Text>
              <Text>{competence.point}</Text>
            </View>
          ))}
          </View>
          <View>
          {data.contact.map(contact => (
            <View key={contact.id}>
              <Text>{contact.title}</Text>
              <Text>{contact.body}</Text>
            </View>
          ))}
          </View>
          
          <View>
          {data.interet.map(interet => (
            <Text key={interet.id}>{interet.title}</Text>
          ))}
          </View>
        </View>
    
      }
      <StatusBar style="auto" />
    </ScrollView>
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
