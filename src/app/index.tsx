import { View, ScrollView} from "react-native";
import Header from "../components/header/Header";
import Constants from 'expo-constants'
import ImageProfissional from "../components/ImageProfissional";
import { Servicos } from "../components/Servicos";
import Agendamento from "../components/Agendamento";
import Sobre from "../components/Sobre";

// Deixa a aplicação sempre com a altua da status bar 
const statusBarHeight = Constants.statusBarHeight; 

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} >
      <View style={{marginTop: statusBarHeight + 8}} className="bg-fuchsia-50">
        <Header/>   
        <ImageProfissional/>
        <Servicos/>
        <Agendamento/>
        <Sobre/>
      </View>
    </ScrollView>
  );
}
