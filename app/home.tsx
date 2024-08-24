import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import ImageTurma from '../components/images'

export default function Home(){
return ( 
    <View>
        <Text> Login com sucesso! </Text>
        
        <ImageTurma url="https://static.wikia.nocookie.net/monica/images/1/17/Monica.gif/revision/latest?cb=20090307005857&path-prefix=pt-br" 
            desc="Mônica é uma menina de sete anos que vive no Bairro do Limoeiro, local fictício que serve de cenário para a maioria das histórias que protagoniza. 
            Ela vive com sua mãe Luísa Fernandes, uma dona de casa, e seu pai Sousa, que trabalha em uma companhia de negócios e tem sua aparência baseada no Mauricio de Sousa real."
        />

        <ImageTurma url="https://static.wikia.nocookie.net/monica/images/7/70/Cebolinha.gif/revision/latest?cb=20070902170748&path-prefix=pt-br" 
            desc="Em 1960, nascia o Cebolinha, inspirado em um galotinho da infância de Mauricio de Sousa, em Mogi das Cruzes. 
            Ele apareceu pela primeira vez na Revista Zaz Traz. 
            Em 1963, além de ganhar novos personagens em suas tiras, também ganhou uma versão em cores na Folhinha de S. Paulo."
        />
        <ImageTurma url="https://static.wikia.nocookie.net/monica/images/3/36/Casc%C3%A3o.gif/revision/latest?cb=20071212151343&path-prefix=pt-br" 
            desc="Cascão é um personagem de HQ criado por Maurício de Sousa em 1961. 
            Foi inspirado em um menino que Maurício conheceu em Mogi das Cruzes, que tinha esse apelido por ser muito sujo. 
            Sua principal característica é sua mania de não tomar banho e sua paixão pela sujeira."/>

        <ImageTurma url="https://static.wikia.nocookie.net/monica/images/f/f6/Magali.gif/revision/latest?cb=20071212153353&path-prefix=pt-br" 
            desc="A Magali é a personagem mais comilona e bem humorada do Bairro do Limoeiro. Com seu vestido amarelo, 
            vive com fome e acompanha a Mônica nas aventuras, sempre defendendo a amiga de Cebolinha e Cascão. 
            Sua comida preferida no mundo é melancia! 
            Ela também adora brincar com seu gatinho Mingau."/>


        <Link href='/'> S A I R</Link>

    </View>
)
}