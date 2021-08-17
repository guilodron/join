import { Dimensions } from "react-native";
const {height, width} = Dimensions.get('window')

// Essas funções garantem uma fidelidade maior com o design em diferents 
// tamanhos de tela
const baseWidth = 375;
const baseHeight = 812;

export const scaleWidth = (val) => (width/baseWidth)*val

export const scaleHeight = (val) => (height/baseHeight)*val