import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, StatusBar} from 'react-native';
import { Badge, Chip, Divider, ActivityIndicator, Avatar} from 'react-native-paper';
import * as Linking from 'expo-linking';

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
          <View style={styles.staticContainer}>
            <View>
              <Text style={styles.firstTitle}>Samuel ASSANI{'\n'}</Text>
              <Text style={styles.firstTitle}>Développeur </Text>
              <Text style={styles.firstTitle}>RUBY ON RAILS | REACT NATIVE</Text>
            </View>
            <View style={styles.staticContact}>
              <Chip mode={'outlined'} icon="gmail" Type="flat" onPress={() => Linking.openURL()}> samuel.assani.pro@gmail.com</Chip>
              <Chip mode={'outlined'} icon="cellphone-basic" onPress={() => Linking.openURL('')}>0777796311</Chip>
              <Chip mode={'outlined'} icon="github"onPress={() => Linking.openURL('https://github.com/sassani134')}>Mon Github</Chip>
              <Chip mode={'outlined'} icon="stack-overflow" onPress={() => Linking.openURL('https://stackoverflow.com/users/9699439/sassani134')}>mon stackoverflow</Chip>
              <Chip mode={'outlined'} icon="linkedin" onPress={() => Linking.openURL('https://www.linkedin.com/in/samuel-assani-330244178/')}>Mon Linkedin</Chip>
              <Chip mode={'outlined'} icon="map-marker">Grenoble</Chip>

            </View>
          </View>

          <Divider />

          <View style={styles.employment}>
            <Text style={styles.titleText}>Experiences professionelles</Text>
            {data.employment.map(employment => (
            <View key={employment.id}>
              <Text style={styles.subTitleText}>{"\n"}{employment.title}{"\n"}</Text>
              <Text>{employment.soustitle}</Text>
              <Text>{employment.body}</Text>
              <Text>{employment.lieux}</Text>
              <Text>{employment.debut}</Text>
            </View>
          ))}
          </View>
          <Divider />

          <View style={styles.certificat}>
            <Text style={styles.titleText}>Certificat</Text>
            {data.certificat.map(certificat => (
            <View key={certificat.id}>
              <Text style={styles.subTitleText}>{certificat.title}</Text>
              <Text>{certificat.body}</Text>
              <Text>{certificat.debut}</Text>
            </View>
          ))}
          </View>
          <Divider />

          <View style={styles.competence} >
            <Text style={styles.titleText}>Competence</Text>
            {data.competence.map(competence => (
            <View key={competence.id}>
              <Text>{competence.title}</Text>
              <Badge>{competence.point}</Badge>
            </View>
          ))}
          </View>
          <Divider />

          
          <View style={styles.interet}>
            <Text style={styles.titleText}>Interet</Text>
            {data.interet.map(interet => (
              <Chip key={interet.id} mode={'outlined'}>{interet.title}</Chip>
            ))}
          </View>
          <Divider />

          <View style={styles.contact}>
            <Text style={styles.titleText}>Contact</Text>
          {data.contact.map(contact => (
            <View key={contact.id}>
              <Text>{"\n"} {contact.title}: {"\n"}</Text>
              <Text>{contact.body}</Text>
            </View>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 25
  },
  staticContainer:{
    flexDirection: 'row',
  },
  staticContact:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    alignSelf:'flex-end',
  },
  employment:{
    flex: 3,
    justifyContent: 'space-between',
  },
  certificat: {
    flex: 1,

  },
  competence:{
    flex: 1,

  },
  contact: {
    flex: 1,

  },
  interet: {
    flex: 1,
    alignContent: 'space-between',
  },
  firstTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  secondTitle: {

  },
  titleText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2F4F4F',
    
  },
  subTitleText:{
    fontWeight: '900',
    fontSize: 15,
    color: "#708090"
  },

});
