import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy  Paola</Text>
        <Text style={styles.colorText1}>CocaCola</Text>
        <Text style={styles.colorText2}>Doritos</Text>
        <Text style={styles.colorText3}>Salchipapa</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomePaola');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colorText1:{
         color:'red',
         fontSize:20,
    },
    colorText2:{
        color:'green',
        fontSize:20,
   },
   colorText3:{
    color:'blue',
    fontSize:20,
}
  });