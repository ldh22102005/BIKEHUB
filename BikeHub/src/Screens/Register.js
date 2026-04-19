import React from 'react';
import {
    View, 
    StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Register() {
    return (
        <SafeAreaView style={style.vung_ngoai_cung}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}> 
                    
                    {/* 1. Header để ở ngoài, không bị dính paddingHorizontal: 20 */}
                    <View style={style.hop_header}>
                        <TouchableOpacity style={style.nut_back_absolute}>
                            <MaterialCommunityIcons name="arrow-left" size={24} color="#00352c" />
                        </TouchableOpacity>
                        <Text style={style.text_logo}>BIKEHUB</Text>
                    </View>

                    {/* 2. Phần nội dung dưới này mới cần padding để không bị sát mép */}
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <View style={style.vung_tieu_de}>
                            <Text style={style.ten_tieu_de}> TẠO TÀI KHOẢN</Text>
                            <Text style={style.mo_ta}>dang lam phan dang ky cua bai </Text>
                        </View>   
                    </View>

                    <View style={style.hop_form}>
                        <Text style={style.nhan_input}>Họ và tên </Text>
                        <TextInput style={style.o_input} placeholder="Nguyễn Văn A"></TextInput>
                        <Text style={style.nhan_input}>Email </Text>
                        <TextInput style={style.o_input} placeholder="example@gmail.com"  keyboardType="email-address" placeholderTextColor="#999"></TextInput>
                        <Text style={style.nhan_input}>Mật khẩu </Text>
                        <TextInput style={style.o_input} placeholder="••••••••" secureTextEntry></TextInput>
                        <MaterialCommunityIcons name="eye-outline" size={20} color="#999" />
                    </View>
                    
                    

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
vung_ngoai_cung: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
hop_header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Giúp chữ BIKEHUB luôn ở giữa
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    paddingHorizontal: 20,
},
nut_back_absolute: {
    position: 'absolute',
    left:0,             
    zIndex: 1,
},
text_logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00352C',
    letterSpacing: 1,
},
mo_ta:{
    fontSize:14,
    fontWeight:'bold',
    marginTop:10,
},


   
});