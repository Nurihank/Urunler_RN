import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { OnboardFlow } from 'react-native-onboard';
export default function OnboardingScreen() {
  const navigation = useNavigation()

  const handleDone = ()=>{
    navigation.navigate("Ana Sayfa")
  }

  return (
    <OnboardFlow
      onDone={handleDone}
      pages={[
        {
          title: 'UYGULAMAYA HOŞGELDİN',
          subtitle: 'Aradığın her kamp ürünü '+'\n'+'bu uygulamada',
          imageUri: 'https://frigade.com/img/example1.png',
        },
        {
          title: 'HER TÜRLÜ KAMP ÜRÜNÜ',
          subtitle: 'İstediğin kategoriye tıkla'+'\n'+' binlerce ürüne anında erişebilirsin'+'\n'+' aradığın her türlü ürün bu uygulamada',
          imageUri: 'https://frigade.com/img/example2.png',
          
        }
      ]}
      type={'fullscreen'}
      
      
    />
  );
}

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: '#d3d3d3',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#666',
        paddingHorizontal: 30,
        textAlign: 'center',
    },
});
