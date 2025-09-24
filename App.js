import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles/styles";

const Stack = createNativeStackNavigator();

const resultadosIniciais = {
  Chupaulo: 0,
  Samuel: 0,
  Carioca: 0,
  William: 0,
};

const imagensCeguetas = {
  Chupaulo: require('./assets/ceguetas/Chupaulo.jpg'),
  Samuel: require('./assets/ceguetas/Samuel.jpg'),
  Carioca: require('./assets/ceguetas/Carioca.jpg'),
  William: require('./assets/ceguetas/William.jpg'),
};

const perguntas = [
  {
    pergunta: "Qual cor você prefere?",
    opcoes: [
      { letra: "a", texto: "Azul", resposta: "Chupaulo" },
      { letra: "b", texto: "Roxo", resposta: "Samuel" },
      { letra: "c", texto: "Laranja", resposta: "Carioca" },
      { letra: "d", texto: "Vermelho", resposta: "William" },
    ],
  },
  {
    pergunta: "Você viu uma bola na quadra. O que faria?",
    opcoes: [
      { letra: "a", texto: "Verificar se ela é boa para fazer curva", resposta: "Carioca" },
      { letra: "b", texto: "Esconder a bola na bolsa", resposta: "Chupaulo" },
      { letra: "c", texto: "Fingir que vai chutar e tocar", resposta: "Samuel" },
      { letra: "d", texto: "Isolar a bola", resposta: "William" },
    ],
  },
  {
    pergunta: "Tem um celular em cima da mesa. O que você faz?",
    opcoes: [
      { letra: "a", texto: "Derrubá-lo", resposta: "Chupaulo" },
      { letra: "b", texto: "Jogar xadrez", resposta: "Carioca" },
      { letra: "c", texto: "Ouvir rap de anime", resposta: "William" },
      { letra: "d", texto: "Não tem celular", resposta: "Samuel" },
    ],
  },
  {
    pergunta: "Qual sua posição favorita no futsal?",
    opcoes: [
      { letra: "a", texto: "Goleiro", resposta: "William" },
      { letra: "b", texto: "Fixo", resposta: "Chupaulo" },
      { letra: "c", texto: "Ala", resposta: "Carioca" },
      { letra: "d", texto: "Pivô", resposta: "Samuel" },
    ],
  },
  {
    pergunta: "Você recebe a bola na defesa. O que faz?",
    opcoes: [
      { letra: "a", texto: "Deixa a bola passar", resposta: "Chupaulo" },
      { letra: "b", texto: "Chuta no gol", resposta: "William" },
      { letra: "c", texto: "Dribla", resposta: "Carioca" },
      { letra: "d", texto: "Passa para a pessoa errada", resposta: "Samuel" },
    ],
  },
  {
    pergunta: "Qual professor você seria?",
    opcoes: [
      { letra: "a", texto: "Helder", resposta: "William" },
      { letra: "b", texto: "Emerson", resposta: "Carioca" },
      { letra: "c", texto: "Cristiane Mota", resposta: "Samuel" },
      { letra: "d", texto: "Luiz Flávio", resposta: "Chupaulo" },
    ],
  },
  {
    pergunta: "Em um seriado, você seria:",
    opcoes: [
      { letra: "a", texto: "O nerd", resposta: "Samuel" },
      { letra: "b", texto: "O valentão", resposta: "William" },
      { letra: "c", texto: "A donzela", resposta: "Chupaulo" },
      { letra: "d", texto: "O cachorro", resposta: "Carioca" },
    ],
  },
  {
    pergunta: "Você vê duas meninas jogando tênis de mesa. O que faz?",
    opcoes: [
      { letra: "a", texto: "Chuta a mesa para assustá-las", resposta: "Chupaulo" },
      { letra: "b", texto: "Joga vôlei", resposta: "Carioca" },
      { letra: "c", texto: "Joga futsal", resposta: "William" },
      { letra: "d", texto: "Ignora", resposta: "Samuel" },
    ],
  },
  {
    pergunta: "Quem é seu maior rival?",
    opcoes: [
      { letra: "a", texto: "Chicão", resposta: "William" },
      { letra: "b", texto: "Mulheres", resposta: "Chupaulo" },
      { letra: "c", texto: "Ortiz", resposta: "Carioca" },
      { letra: "d", texto: "Pedro", resposta: "Samuel" },
    ],
  },
  {
    pergunta: "Você está na aula do Bale. O que acontece?",
    opcoes: [
      { letra: "a", texto: "Não pega o caderno e é expulso", resposta: "William" },
      { letra: "b", texto: "Recebe uma ligação e é expulso", resposta: "Chupaulo" },
      { letra: "c", texto: "Falta na aula", resposta: "Carioca" },
      { letra: "d", texto: "Liga para o Chupaulo", resposta: "Samuel" },
    ],
  },
  {
    pergunta: "Você faltou à aula porque:",
    opcoes: [
      { letra: "a", texto: "Perdeu o horário", resposta: "Carioca" },
      { letra: "b", texto: "Estava com mulheres", resposta: "Samuel" },
      { letra: "c", texto: "Estourou o limite de faltas", resposta: "William" },
      { letra: "d", texto: "Não recebeu o pé de meia", resposta: "Chupaulo" },
    ],
  },
];


function HomeScreen({ navigation }) {
  const [perguntaIndex, setPerguntaIndex] = useState(0);
  const [resultadosLocais, setResultadosLocais] = useState({ ...resultadosIniciais });
  const [selectedOption, setSelectedOption] = useState(null);

  const perguntaAtual = perguntas[perguntaIndex];

  const responder = (resposta) => {
    const novosResultados = { ...resultadosLocais };
    novosResultados[resposta]++;
    setResultadosLocais(novosResultados);
    setSelectedOption(null);

    if (perguntaIndex < perguntas.length - 1) {
      setPerguntaIndex(perguntaIndex + 1);
    } else {
      navigation.navigate('Resultado', { resultados: novosResultados });
      setPerguntaIndex(0);
      setResultadosLocais({ ...resultadosIniciais });
    }
  };

  // NOVA função para voltar pergunta
  const voltarPergunta = () => {
    if (perguntaIndex > 0) {
      // Se já tiver uma opção selecionada na pergunta atual, desconta do resultado
      if (selectedOption !== null) {
        // Achar a resposta da opção selecionada
        const opcaoSelecionada = perguntaAtual.opcoes.find(op => op.letra === selectedOption);
        if (opcaoSelecionada) {
          const novosResultados = { ...resultadosLocais };
          novosResultados[opcaoSelecionada.resposta] = Math.max(0, novosResultados[opcaoSelecionada.resposta] - 1);
          setResultadosLocais(novosResultados);
        }
      }
      setSelectedOption(null);
      setPerguntaIndex(perguntaIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz: Qual Cegueta Você Seria?</Text>

      <View style={styles.perguntaContainer}>
        <Text style={styles.perguntaTexto}>{perguntaAtual.pergunta}</Text>
      </View>

      <View style={styles.opcoesContainer}>
        {perguntaAtual.opcoes.map((opcao) => {
          const isSelected = selectedOption === opcao.letra;

          return (
            <Pressable
              key={opcao.letra}
              onPress={() => {
                setSelectedOption(opcao.letra);
                setTimeout(() => responder(opcao.resposta), 300);
              }}
              style={({ pressed }) => [
                styles.optionCard,
                isSelected && styles.optionCardSelected,
                pressed && !isSelected && { backgroundColor: '#3a3a3a', borderColor: '#ff80bf', shadowColor: '#ff80bf', shadowOpacity: 0.7, shadowRadius: 10 },
              ]}
            >
              <Text style={[styles.optionCardText, isSelected && styles.optionCardTextSelected]}>
                {opcao.texto}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.progressoTexto}>
        Pergunta {perguntaIndex + 1} de {perguntas.length}
      </Text>

      {/* Botão para voltar, aparece só se não for a primeira pergunta */}
      {perguntaIndex > 0 && (
        <Pressable
          onPress={voltarPergunta}
          style={({ pressed }) => [
            styles.button,
            { marginTop: 20, backgroundColor: '#444' },
            pressed && { backgroundColor: '#666' },
          ]}
        >
          <Text style={styles.buttonText}>Voltar Pergunta</Text>
        </Pressable>
      )}
    </View>
  );
}


function ResultadoScreen({ route, navigation }) {
  const { resultados } = route.params;

  // Pega o resultado com maior pontuação
  const cegueta = Object.keys(resultados).reduce((a, b) => (resultados[a] >= resultados[b] ? a : b));
  const imagem = imagensCeguetas[cegueta] || null;

  return (
    <View style={styles.resultadoContainer}>
      <View style={styles.resultadoBox}>
        <Text style={styles.resultadoTitulo}>Você é o Cegueta: {cegueta}!</Text>

        {imagem && <Image source={imagem} style={styles.resultadoImagem} resizeMode="contain" />}

        <Pressable
          onPress={() => navigation.navigate('Início')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Refazer Quiz</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Início"
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#ff4da6',
          headerTitleStyle: { fontWeight: '800', fontSize: 24 },
        }}
      >
        <Stack.Screen name="Início" component={HomeScreen} options={{ title: 'Quiz Ceguetas' }} />
        <Stack.Screen name="Resultado" component={ResultadoScreen} options={{ title: 'Seu Resultado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}