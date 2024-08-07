import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export function Servicos() {
  return (
    <>
        <Text className={'text-center font-bold text-4xl my-5'}>Serviços</Text>
         <View className='flex-row justify-center items-center'>   
          <View className='items-center justify-center rounded-3xl bg-rose-100 p-2 px-4 m-2'>
            <Image 
              source={require('../../../assets/images/teste2.jpeg')} 
              className='w-3/4 h-28 rounded-full'
            />         
            <Text>Descrição da Imagem 1</Text>
            <MaterialIcons name="timer" size={20} color="gray" />
            <Button title="Agende aqui" onPress={() => alert('Botão 1 Pressionado')} />
          </View>
            <View className='items-center justify-center rounded-3xl bg-rose-100 p-2 px-4 m-2'>
              <Image 
                source={require('../../../assets/images/teste2.jpeg')} 
                className='w-3/4 h-28 rounded-full'
              /> 
            <Text>Descrição da Imagem 2</Text>
            <MaterialIcons name="timer" size={20} color="gray" />
            <Button title="Agende aqui" onPress={() => alert('Botão 2 Pressionado')} />
            </View>
          </View>

          {/* Segundo Card */}
          <View className='flex-row justify-center items-center'>   
          <View className='items-center justify-center rounded-3xl bg-rose-100 p-2 px-4 m-2'>
            <Image 
              source={require('../../../assets/images/teste2.jpeg')} 
              className='w-3/4 h-28 rounded-full'
            />         
            <Text>Descrição da Imagem 1</Text>
            <MaterialIcons name="timer" size={20} color="gray" />
            <Button title="Agende aqui" onPress={() => alert('Botão 1 Pressionado')} />
          </View>
            <View className='items-center justify-center rounded-3xl bg-rose-100 p-2 px-4 m-2'>
              <Image 
                source={require('../../../assets/images/teste2.jpeg')} 
                className='w-3/4 h-28 rounded-full'
              /> 
            <Text>Descrição da Imagem 2</Text>
            <MaterialIcons name="timer" size={20} color="gray" />
            <Button title="Agende aqui" onPress={() => alert('Botão 2 Pressionado')} />
            </View>
          </View>
      </>
    );
}
