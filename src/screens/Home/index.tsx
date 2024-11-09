import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "@/src/components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de remover o participante ${name}!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 8 de Novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant
        name="Pedro"
        onRemove={() => handleParticipantRemove("Pedro")}
      />
      {/* <Participant name="Henrique" />
      <Participant name="Diego" />
      <Participant name="Yuri" /> */}
    </View>
  );
}
