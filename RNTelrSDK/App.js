
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
  Alert,
  TextInput
} from 'react-native';

import TelrSdk from './TelrSdk';

const App = () => {

  const [telrModalVisible, setTelrModalVisible] = useState(false);

  const [paymentRequest, setPaymentRequest] = useState(null);

  const [billing_name_first, setBilling_name_first] = React.useState("");

  const [billing_name_last, setBilling_name_last] = React.useState("");

  const [tran_amount, setTran_amount] = React.useState("");



  const telrModalClose = () => {
    setTelrModalVisible(false)
    Alert.alert("Transaction aborted by user");
  }
  const didFailWithError = (message) => {
    setTelrModalVisible(false)
    Alert.alert(message);
  }
  const didPaymentSuccess = (response) => {
    console.log(response)
    setTelrModalVisible(false)
    Alert.alert(response.message);
  }



  const showTelrPaymentPage = () => {

    if (billing_name_first == null || billing_name_first == "") {
      Alert.alert("Enter first name");
      return
    } else if (billing_name_last == null || billing_name_last == "") {
      Alert.alert("Enter last name");
      return
    } else if (tran_amount == null || tran_amount == "") {
      Alert.alert("Enter amount");
      return
    }
    var paymentRequest = {
      framed:"1",//open card frame pass 1, and for webview pass 0
      sdk_env: "dev",//prod//dev
      something_went_wrong_message: "Something went wrong",//  this message for suppose someitng is happen wrong with payment then you can config this one.
      store_id: "<<Store_ID>>",
      key: "<<Auth_Key>>",
      device_type: "iOS",//Android
      device_id: "36C0EC49-AA2F-47DC-A4D7-D9927A739F5F",
      app_name: "TelrSDK",//enter app name
      app_version: "1.0",//app version
      app_user: "123456",//app user
      app_id: "102863o777",//app user id
      tran_test: "1", // 1=test, 0=production
      tran_type: "sale",//sale
      tran_class: "paypage",
      tran_cartid: `${Math.floor(Math.random() * 100) + 2}`,//enter cart id it shoud be unique for every transaction //1234567890
      tran_description: "Test Mobile API",// enter tran description
      tran_currency: "AED",
      tran_amount: tran_amount,
      tran_language: "en",
      tran_firstref: "",
      billing_name_title: "Mr",
      billing_name_first: billing_name_first,
      billing_name_last: billing_name_last,
      billing_address_line1: "sclk lk fk",
      billing_address_city: "Riyad",
      billing_address_region: "Saudi Arabia",
      billing_address_country: "SA",
      billing_custref: "001",
      billing_email: "stackfortytwo@gmail.com",
      billing_phone: "1234567890",
      repeat_amount: "1",
      repeat_interval: "1",
      repeat_period: "M",
      repeat_term: "3",
      repeat_final: "",
      repeat_start: "27062023"
    }
    setPaymentRequest(paymentRequest)
    setTelrModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <TelrSdk backButtonText={"Back"} buttonBackStyle={styles.buttonBackStyle} buttonBackColor={styles.buttonBackColor} backButtonTextStyle={styles.backButtonTextStyle} paymentRequest={paymentRequest} telrModalVisible={telrModalVisible} telrModalClose={telrModalClose} didFailWithError={didFailWithError} didPaymentSuccess={didPaymentSuccess} />
      <View style={styles.centeredView}>
        <Text style={styles.telrTextStyle}>Telr SDK</Text>
        <Text style={styles.inputTextStyle}>Enter First Name</Text>
        <TextInput
          style={styles.input}
          placeholder={"Enter First Name"}
          onChangeText={setBilling_name_first}
          value={billing_name_first}
        />
        <Text style={styles.inputTextStyle}>Enter Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder={"Enter Last Name"}
          onChangeText={setBilling_name_last}
          value={billing_name_last}
        />
        <Text style={styles.inputTextStyle}>Enter Amount</Text>
        <TextInput
          style={styles.input}
          placeholder={"Enter Amount"}
          onChangeText={setTran_amount}
          value={tran_amount}
        />
        <Pressable
          style={[styles.buttonPay, styles.buttonPayment]}
          onPress={() => showTelrPaymentPage()}>
          <Text style={styles.payButtonTextStyle}>Make Payment</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
    margin: 22
  },
  telrTextStyle: {
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
    paddingTop: 20,
    marginBottom: 30,
  },
  buttonPay: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonPayment: {
    backgroundColor: "#2196F3",
    marginTop: 20,
  },
  payButtonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonBackStyle: {
    borderRadius: 10,
    padding: 5,
    margin: 5,
    elevation: 2,
    width: 80,
  },
  buttonBackColor: {
    backgroundColor: "#2196F3",
  },
  backButtonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  inputTextStyle: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 14,
  },
  input: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
