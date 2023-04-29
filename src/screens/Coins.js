import { Pressable, StyleSheet, Text, ScrollView, useColorScheme, View, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import ScreenWrapper from '../ScreenWrapper'
import Colors from '../constants/Colors'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import AppContext from '../hooks/useContext'
import Step from '../components/Step'
import PaymentMethod from '../components/PaymentMethod'
import Activity from '../components/Activity'
import CustomButton from '../components/CustomButton'

export default function Coins({navigation}) {

  const PointPrise = 0.2

  
  
  const deviceMode = useColorScheme()

  const {styleColors, displayMode, appData} = useContext(AppContext)


  const mode = displayMode=="auto" ? deviceMode : displayMode


  const [coins, setCoins] = useState(135)
  const Icon = <FontAwesome5 name='coins' size={20} color={styleColors.color}/>

  const handlePay=()=>{
    navigation.navigate('Pay')

  }
  return (
    <ScreenWrapper scroll drawer drawerIconColor={Colors.lighter}> 
      
        
        <View style={styles.upperContainer}>
          <View style={[styles.flex, styles.jCenter, styles.aCenter]}>
            <FontAwesome5 name='coins' size={17} color={Colors.lighter}/>
            <Text style={styles.upperTitle}>Your credit</Text>            
          </View>


          <View style={styles.coinsContainer}>
            <FontAwesome5 name='coins' size={19} color={"#FFD233"} style={{alignSelf:"center"}}/>
            <Text style={styles.coinsNumber}>{appData.user.coins}</Text>
            <Text style={styles.coinsText}>coins</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>


          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color:styleColors.color,}]}>Last Activities</Text>
            <Pressable onPress={()=>navigation.navigate('History')}>
              <Text style={styles.moreTitle}>show more</Text>
            </Pressable>
          </View>

          <Activity 
            type='chatgpt'
            title="Chat with ChatGPT"
            details="14 message"
            amont={15}
            />
          <Activity 
            type='imagegen'
            title="Image generator"
            details="4 images"
            amont={12}
            />
          <Activity 
            type='voicegen'
            title="AI Voiceover "
            details="26 sec"
            amont={5}
            />
          <Activity 
            type='payment'
            title="Payment"
            details="+20 coins"
            plus
            amont={20}
            />
          <Activity 
            type='payment'
            title="Trial coins"
            details="+16 coins"
            plus
            amont={16}
          />
      </View>

      <View style={styles.buttonContainer}>

        <CustomButton label='Buy Coins' style={{marginBottom:1}} onPress={handlePay}/>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    width:'100%',
    paddingHorizontal:15,
    // position:"absolute",
    // bottom:0,
    top:55,
  },
  viewContainer:{
    paddingHorizontal:15,
  },
  coinsText:{
    fontSize:15,
    // letterSpacing:.523,
    opacity:.8,
    // paddingBottom:5,
    // margin:0,
    color:Colors.yellow,
    fontWeight:"400",
  },
  coinsNumber:{
    fontSize:33,
    marginHorizontal:7,
    // letterSpacing:.523,
    // marginBottom:10,
    color:Colors.lighter,
    fontWeight:"500",
  },
  coinsContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor:"rgba(180, 181, 255, 0.13)",
    paddingHorizontal:22,
    paddingVertical:13,
    marginTop:11,
    width:"60%",
    borderRadius:9,
  },
  upperTitle:{
    fontSize:19,
    // letterSpacing:.523,
    margin:11,
    marginBottom:10,
    // paddingBottom:5,
    // margin:0,
    color:Colors.lighter,
    fontWeight:"500",
  },
  upperContainer:{
    // justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.primary,
    paddingVertical:22,
    paddingBottom:30,
    paddingTop:44,
    borderBottomLeftRadius:44,
    borderBottomRightRadius:44,
  },
  title:{
    fontSize:21,
    marginTop:18,
    marginBottom:9,
    fontWeight:"500",
  },
  moreTitle:{
    fontSize:14,
    marginTop:18,
    marginBottom:9,
    color:Colors.red,
  },
  titleContainer:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
  },
  flex:{flexDirection:'row'},
  jCenter:{justifyContent:"center"},
  aCenter:{alignItems:"center"},
})