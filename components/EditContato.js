import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Platform,Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import ButtonNavegacao from './ButtonNavegacao';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Paletas from '../color/Paletas';
import Dimensoes from '../dimensions/Dimensoes';

const EditContato = (props) => {
    const [nome, setNome] = useState (props.nome);
    const [fone, setFone] = useState(props.fone);
    const mudouNome = (nome) => {setNome (nome);}
    const mudouFone = (fone) => {setFone(fone);}

    function limpaEnvia(){
        props.handleSaveClick(nome, fone);
        setFone('');
        setNome('');
    }

    return (
        <View style={styles.item}>
            <View style={styles.displayFlex}>
                <Text style={styles.text}>NOME : </Text><TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={mudouNome}/>
                </View> 
            <View style={styles.displayFlex}>    
                <Text style={styles.text}>TELEFONE : </Text><TextInput style={styles.input} placeholder="Telefone" value={fone} onChangeText={mudouFone} keyboardType={'numeric'}/>
            </View> 
            <View style={styles.buttons}> 
                <View style={styles.buttons}> 
                    <Button title="Salvar" onPress={limpaEnvia} color={Paletas.principal}/>
                </View>
                <View style={styles.buttons}>     
                    <Button title="Pagina Principal" onPress={() => props.voltar()} color={Paletas.cinza}/>
                </View>
            </View>
        </View>
    );
}

EditContato.navigationOptions = dadosNav => {
    return {
    headerTitle: "Editar",
    headerRight:
    <HeaderButtons
    HeaderButtonComponent={ButtonNavegacao}>
    <Item
        title="Editar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => { dadosNav.navigation.navigate("Editar") }} />
    </HeaderButtons>
    }
}

const styles = StyleSheet.create({
buttons: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-around',
    margin: 6
},
component: {
   backgroundColor: Paletas.planoFundo 
},
input:{
    marginBottom: Dimensoes.quinze,
    color: Paletas.preto,
    padding: Dimensoes.dois,
    borderColor: Paletas.preto,
    margin:Dimensoes.cinco,
    backgroundColor: Paletas.cinza
},
item:{
color: Paletas.cinza,
padding: Dimensoes.dez,
borderColor: Paletas.preto,
margin:Dimensoes.cinco,
},
text:{
display:'flex',
fontWeight: "bold",
color: Paletas.preto,
fontSize: Dimensoes.quinze,
textAlign: 'left',
},
displayFlex: {
textAlign: 'left'
}
});

export default withNavigation(EditContato);