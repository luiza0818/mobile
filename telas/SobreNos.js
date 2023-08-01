import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Cabecalho from '../../src/componentes/Cabecalho';
import Contatos from '../src/componentes/contatos';
import Texto from '../../src/componentes/Texto';
import Carrossel from '../../src/mocks/Carrossel'

import Imagem from '../assets/Imagem.png';


export default function SobreNos() {
    return (
        <View style={styles.container}>
            <Cabecalho />
            <ScrollView>
                <Texto style={styles.titulo}> {Carrossel.Imagens.sobre} </Texto>
                <View style={styles.item}>
                    <Texto style={styles.textoConteudo}> {Carrossel.SobreNos.descritivo} </Texto>
                    <Image style={styles.imagem} source={Imagem} />
                </View>

                <View style={styles.line} />

                <Texto style={styles.titulo}> {Carrossel.SobreNos.prod} </Texto>
                <View style={styles.item}>
                    <Texto style={styles.textoConteudo}> {Carrossel.SobreNos.descprod} </Texto>
                    <Image style={styles.imagem} source={Imagem} />
                </View>

                <View style={styles.line} />

                <Contatos/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        marginTop: 0,
    },
    titulo: {
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: "bold",
        color: '#660066',
    },
    Cabecalho: {
        paddingTop: 0,
    },
    imagem: {
        borderRadius: 8,
    },
    textoConteudo: {
        fontSize: 16,
        marginLeft: 5,
        marginRight: 5,
        width: 225,
        textAlign: "center",
    },
    line: {
        borderBottomColor: '#660066',
        borderBottomWidth: 2,
    },
});