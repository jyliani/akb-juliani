import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20, // jarak antar elemen
      }}
    >

      {/* Segitiga di bagian atas */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 60,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
        }}
      />

      {/* Bentuk Pil (Oval Horizontal) */}
      <View
        style={{
          backgroundColor: "pink",
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ 
          fontSize: 20,
          color: "bulue",
          }}>105841104922</Text>
      </View>

      {/* Persegi Panjang (Nama) */}
      <View
        style={{
          backgroundColor: "lightblue",
          width: 200,
          paddingVertical: 15,
          alignItems: "center",
          
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          JULIANI
        </Text>
      </View>

    
    </View>
  );
}



// TUGAS!!
// 1. tAMBAHKAN BENTUK SEGITIGA,  BENTUK PIL DAN PERSEGI PANJANG.
// 2. DIDALAM SEGI PANJANG. BERISI NAMA.
// 3. DIDALAM BENTUK PIL BERISI NIM.
// 4. TERSERAH MAU BUAT BER URUT ATAU TIDAK.