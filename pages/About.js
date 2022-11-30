import { View, Text, Image, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/buah-sayur2.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Wiki Buah - Sayur</Text>
      </View>
      <View style={styles.itemListContent}>
        <Text style={styles.itemListText}>
          {'Aplikasi yang berisi info buah dan sayur walaupun infonya tidak begitu lengkap'}
        </Text>
        <Text style={styles.itemListText}>
          {'Aplikasi ini dibuat demi memenuhi Tugas Besar Praktikum PPB 2022'}
        </Text>
        <Text style={styles.credit}>
          {'Dibuat dengan lemas dan kepala menguap :v'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#98de8c',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 30,
  },
  headerImage: {
    marginTop: 20,
    height: 200,
    width: 200,
    borderColor: '#00F645',
    borderRadius:40
  },
  headerText: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  itemListContent: {
    alignItems: 'center',
    marginTop: 55,
    marginHorizontal: 55,
  },
  itemListText: {
    color: '#626262',
    marginVertical: 0,
    fontWeight: 'reguler',
    fontSize: 19,
    textAlign: 'center',
  },
  credit:{
    color: '#626262',
    marginTop:50,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'right',
  }
});

export default About;