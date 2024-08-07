import { View, Image } from 'react-native';

export default function ImageProfissional() {
 return (
  <View className='items-center '>

    <Image
      className='h-80 w-11/12 rounded-3xl'
      source={require('../images/Sobrancelha.jpg')}
      
      />
  </View>
  );
}