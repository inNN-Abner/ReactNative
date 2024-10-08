import { TextInput, StyleSheet } from "react-native"

interface StyledInputProps{
    placeholder: string
    onChangeText: (text: string) => void //funcao q recebe string e retorna um void
}

export default function StyledInput({placeholder, onChangeText}: StyledInputProps){
    return(
        <TextInput  
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input:{
        width:'75%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    }
})