import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState([]);
    const [totalPersonagens, setTotalPersonagens] = useState(1);
    var Resultado;

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setTotalPersonagens(json.info.count);
            })
    }, []);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + returnRandomNumber())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }, [totalPersonagens]);

    function BuscarPerson() {
        fetch('https://rickandmortyapi.com/api/character/' + returnRandomNumber())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }

    async function handlePersonagemVivoOuMorto(resposta) {
        const isAlive = personagem.status === 'Alive';
        if (resposta === isAlive) {
            var Resultado='O personagem está morto!';
        } else {
            var Resultado='O personagem está vivo!';
        }
        console.log(Resultado);
        
        BuscarPerson();
    }

    function Resultado(Resultado){
        return Resultado;
    }

    const returnRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;

        // canoot return 0
        if (randomNumber === 0) {
            return 1;
        }
        return randomNumber;
    }

    return (
        <View style={styles.container}>
        <View style={{ border: "3px solid black", alignItems: "Center", padding: 30, borderRadius: 10}}>
            <Text style={styles.title}>Rick and Morty Game</Text>
            <Text style={styles.subtitle}>Você sabe este personagem está vivo?</Text>
            {personagem && (
                <View>
                    <View style={{alignItems: "center", justifyContent: "center", textAlign: "center",}}>
                        <Image source={{ uri: personagem.image }} style={{ width: 200, height: 200, marginTop: 20,}} />
                    </View>
                    <Text style={{ fontSize: 25, textAlign: "center", marginVertical: 20 }}>
                        Como o/a {personagem.name} está?
                    </Text>
                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center"}}>
                        <View style={{ alignItems: "center", marginRight: 20}}>
                        <Button
                            mode="contained"
                            onPress={() => handlePersonagemVivoOuMorto(true)}
                        >Vivo</Button>
                        </View>
                        <Button
                            mode="contained"
                            onPress={() => handlePersonagemVivoOuMorto(false)}
                        >Morto</Button>
                        <Text>{Resultado}</Text>
                    </View>
                </View>
            )}
        </View>
        </View>
    );
}