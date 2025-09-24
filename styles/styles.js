import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ff4da6',
    marginBottom: 24,
    textAlign: 'center',
    textShadowColor: '#ff4da6',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

  perguntaContainer: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#ff4da6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },

  perguntaTexto: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ff80bf',
    textAlign: 'center',
  },

  opcoesContainer: {
    width: '100%',
    marginTop: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  optionCard: {
    flexBasis: '48%',
    backgroundColor: '#292929',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },

  optionCardSelected: {
    backgroundColor: '#ff4da6',
    borderColor: '#ff1a75',
    shadowColor: '#ff1a75',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 12,
  },

  optionCardText: {
    color: '#ddd',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },

  optionCardTextSelected: {
    color: 'white',
  },

  button: {
    backgroundColor: '#ff4da6',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 24,
    shadowColor: '#ff4da6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 8,
  },

  buttonPressed: {
    backgroundColor: '#e60073',
    shadowColor: '#e60073',
    shadowOpacity: 1,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },

  progressoTexto: {
    marginTop: 14,
    fontSize: 14,
    color: '#eee',
    fontWeight: '600',
    letterSpacing: 1,
  },

  resultadoContainer: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  resultadoBox: {
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#ff4da6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
  },

  resultadoTitulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ff4da6',
    marginBottom: 20,
    textAlign: 'center',
  },

  resultadoImagem: {
    width: 260,
    height: 260,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#ff4da6',
  }
});

export default styles;
