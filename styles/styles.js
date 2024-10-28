import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: 'tomato',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'tomato',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#d67e73",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#d93c27",
    fontSize: 20
  },
  continueButton: {
    width: '20%',
    backgroundColor: '#ea7e70',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  disabledButton: {
    opacity: 0.5, 
  },
  rules: {
    alignItems: 'center',
    width: '90%',
    padding: 10,
    borderWidth: 4,
    borderRadius: 30,
    borderStyle: 'dotted',
    borderColor: 'tomato',
    marginBottom: 5,
  },
  dicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
    width: '90%'
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
    width: '90%'
  },

  txtMin: {
    fontSize: 16,
    marginBottom: 3,
  },
  txtMed: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtInput: { 
    borderWidth: 1, 
    width: '50%',
    marginBottom: 10,
  },
});