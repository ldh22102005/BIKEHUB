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
    Image
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
    return (
        <SafeAreaView style={style.vung_ngoai_cung}>
            {/* Bước 1: TouchableWithoutFeedback phải bọc ngoài cùng */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                
                {/* Bước 2: Phải có 1 thẻ View duy nhất chứa tất cả nội dung bên trong */}
                <View style={{ flex: 1 }}>
                    
                    {/* Header */}
                    <View style={style.hop_header}>
                        <MaterialCommunityIcons name="menu" size={24} color="#00352C" />
                        <Text style={style.text_logo}>BIKEHUB</Text>
                        <MaterialCommunityIcons name="shopping-outline" size={24} color="#00352C" />
                    </View>

                    {/* Phần Main */}
                    <View style={style.hop_main}>
                        <View style={style.hop_chao_mung}>
                            <Text style={style.tieu_de}>Welcome BIKEHUB</Text>
                            <Text style={style.mo_ta}>Bắt đầu làm dự án cuối kỳ</Text>
                        </View>

                        {/* Phần Tab */}
                        <View style={style.hop_tab}>
                            <View style={[style.nut_tab, style.nut_active]}>
                                <Text style={style.text_nut_active}>ĐĂNG NHẬP</Text>
                            </View>
                            <View style={style.nut_tab}>
                                <Text style={style.text_nut_no}>ĐĂNG KÝ</Text>
                            </View>
                        </View>

                        <View style={style.hop_form}>
                            <Text style={style.nhap_input}>TÀI KHOẢN</Text>
                            <TextInput
                                style={style.o_input}
                                placeholder="email@vidu.com"
                                keyboardType="email-address"
                            />

                            <Text style={[style.nhap_input, { marginTop: 20 }]}>MẬT KHẨU</Text>
                            <View style={style.khung_input_pass}>
                                <TextInput
                                    style={{ flex: 1 }}
                                    placeholder="*****"
                                    secureTextEntry={true}
                                />
                                <MaterialCommunityIcons name="eye-outline" size={20} color="#666" />
                            </View>

                            <TouchableOpacity style={style.nut_dang_nhap}>
                                <Text style={style.text_nut_dang_nhap}>ĐĂNG NHẬP</Text>
                            </TouchableOpacity>

                            <Text style={style.text_hoac}>HOẶC ĐĂNG NHẬP VỚI</Text>
                            <View style={style.hang_social}>
                                <Image 
                                source={{ uri: 'https://pngimg.com/uploads/google/google_PNG19635.png' }} style={{ width: 40, height: 40 }} />
                                <MaterialCommunityIcons name="facebook" size={40} color="#4267B2" style={{ marginHorizontal: 30 }} />
                                <MaterialCommunityIcons name="apple" size={40} color="#000" />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

// Phần Style bên dưới của Hoàng đã rất tốt, giữ nguyên nhé!
const style = StyleSheet.create({
    vung_ngoai_cung: {
        flex: 1,
        backgroundColor: "#F9F9FB",
    },
    hop_header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
    },
    text_logo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00352C',
        letterSpacing: 1,
    },
    hop_main: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        paddingHorizontal: 16,
        paddingVertical: 30,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    hop_chao_mung: {
        alignItems: 'center',
        marginBottom: 20,
    },
    tieu_de: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#00352C",
    },
    mo_ta: {
        fontSize: 14,
        color: "#666",
        textAlign: 'center',
        marginTop: 8,
    },
    hop_tab: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#E8e8e8',
        borderRadius: 25,
        padding: 4,
        marginBottom: 30,
    },
    nut_tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
    },
    nut_active: {
        backgroundColor: '#00352C',
    },
    text_nut_active: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    text_nut_no: {
        color: '#888',
        fontWeight: 'bold',
        fontSize: 12
    },
    hop_form: {
        width: '100%',
    },
    nhap_input: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#666",
        marginBottom: 5,
        marginLeft: 7,
    },
    o_input: {
        width: '100%',
        height: 50,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 15,
        color: "#333",
    },
    khung_input_pass: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
    },
    nut_dang_nhap: {
        backgroundColor: '#00352C',
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    text_nut_dang_nhap: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text_hoac: {
        textAlign: 'center',
        color: '#888',
        marginVertical: 20,
        fontSize: 12,
    },
    hang_social: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        gap:40,
    },
});