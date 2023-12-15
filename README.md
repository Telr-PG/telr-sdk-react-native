# rn-telr-sdk

Our mission is to build connections that remove fragmentation in the e-commerce ecosystem. We make these connections to enable our customers to go cashless, digitising the way that they accept payments

## Getting Started

Use this [link](https://telr.com/support/article-categories/getting-started/) to started.

## Register with Telr

Use this [link](https://telr.com/support/knowledge-base/admin-system/) to find the step to register in our system.

## Mobile API Integration Guide

Use this [link](https://telr.com/support/knowledge-base/mobile-api-integration-guide/) to find all apis and country and language support by telr.

[![npm version](https://badge.fury.io/js/rn-telr-sdk.svg)](https://badge.fury.io/js/rn-telr-sdk)

## Setup

This library is available on npm, install it with: `npm i rn-telr-sdk react-native-webview react-xml-parser` or `yarn add rn-telr-sdk react-native-webview react-xml-parser`.

Then make sure you have install the pods, install it with: `pod install`.

## Usage

1. For Android And ios Import `rn-telr-sdk`:

```javascript
import TelrSdk from "rn-telr-sdk";
```

2.  For Web add Component `TelrSDK`:

```javascript
import TelrSdk from "./TelrSdk";

// copy TelrSDK component file and use that directly in project.
```

2.  Add a `<TelrSdk>` component and nest its content inside of it:

```javascript
function WrapperComponent() {
  const [telrModalVisible, setTelrModalVisible] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const telrModalClose = () => {
    setTelrModalVisible(false);
    Alert.alert("Transaction aborted by user");
  };
  const didFailWithError = (message) => {
    setTelrModalVisible(false);
    Alert.alert(message);
  };
  const showTelrPaymentPage = () => {
    var paymentRequest = {
      framed: "1", //open card frame pass 1, and for webview pass 0
      sdk_env: "dev", //prod//dev
      something_went_wrong_message: "Something went wrong", //  this message for suppose someitng is happen wrong with payment then you can config this one.
      store_id: "<<Store_ID>>",
      key: "<<Auth_Key>>",
      device_type: "iOS", //Android
      device_id: "<<Device_ID>>",
      app_name: "TelrSDK", //enter app name
      app_version: "1.0", //app version
      app_user: "123456", //app user
      app_id: "102863o777", //app user id
      tran_test: "1", // 1=test, 0=production
      tran_type: "sale", //sale
      tran_class: "paypage",
      tran_cartid: `${Math.floor(Math.random() * 100) + 2}`, //enter cart id it shoud be unique for every transaction //1234567890
      tran_description: "Test Mobile API", // enter tran description
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
    };
    setPaymentRequest(paymentRequest);
    setTelrModalVisible(true);
  };
  return (
    <View>
      <TelrSdk
        paymentRequest={paymentRequest}
        telrModalVisible={telrModalVisible}
        telrModalClose={telrModalClose}
        didFailWithError={didFailWithError}
      />
    </View>
  );
}
```

## A complete example

The following example consists in a component (`TelrSdk`) with a button Make Payment.
The modal is controlled by the `telrModalVisible` state variable and it is initially hidden, since its value is `false`.  
Pressing the button sets `telrModalVisible` to true, making the TelrSdk visible.  
Inside the TerlSdk there is another button that, when pressed, sets `telrModalVisible` to false, hiding the TelrSdk.

```javascript
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
  Alert,
  TextInput,
} from "react-native";

import TelrSdk from "rn-telr-sdk";

const App = () => {
  const [telrModalVisible, setTelrModalVisible] = useState(false);

  const [paymentRequest, setPaymentRequest] = useState(null);

  const [billing_name_first, setBilling_name_first] = React.useState("");

  const [billing_name_last, setBilling_name_last] = React.useState("");

  const [tran_amount, setTran_amount] = React.useState("");

  const telrModalClose = () => {
    setTelrModalVisible(false);
    Alert.alert("Transaction aborted by user");
  };
  const didFailWithError = (message) => {
    setTelrModalVisible(false);
    Alert.alert(message);
  };
  const didPaymentSuccess = (response) => {
    console.log(response);
    setTelrModalVisible(false);
    Alert.alert(response.message);
  };

  const showTelrPaymentPage = () => {
    if (billing_name_first == null || billing_name_first == "") {
      Alert.alert("Enter first name");
      return;
    } else if (billing_name_last == null || billing_name_last == "") {
      Alert.alert("Enter last name");
      return;
    } else if (tran_amount == null || tran_amount == "") {
      Alert.alert("Enter amount");
      return;
    }
    var paymentRequest = {
      sdk_env: "dev", //prod//dev
      something_went_wrong_message: "Something went wrong", //  this message for suppose someitng is happen wrong with payment then you can config this one.
      store_id: "<<Store_ID>>",
      key: "<<Auth_Key>>",
      device_type: "iOS", //Android
      device_id: "<<Device_ID>>",
      app_name: "TelrSDK", //enter app name
      app_version: "1.0", //app version
      app_user: "123456", //app user
      app_id: "102863o777", //app user id
      tran_test: "1", // 1=test, 0=production
      tran_type: "sale", //sale
      tran_class: "paypage",
      tran_cartid: `${Math.floor(Math.random() * 100) + 2}`, //enter cart id it shoud be unique for every transaction //1234567890
      tran_description: "Test Mobile API", // enter tran description
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
      billing_email: "<<Email_ID>>",
      billing_phone: "<<Phone_Number>>",
    };
    setPaymentRequest(paymentRequest);
    setTelrModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <TelrSdk
        backButtonText={"Back"}
        buttonBackStyle={styles.buttonBackStyle}
        buttonBackColor={styles.buttonBackColor}
        backButtonTextStyle={styles.backButtonTextStyle}
        paymentRequest={paymentRequest}
        telrModalVisible={telrModalVisible}
        telrModalClose={telrModalClose}
        didFailWithError={didFailWithError}
        didPaymentSuccess={didPaymentSuccess}
      />
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
          onPress={() => showTelrPaymentPage()}
        >
          <Text style={styles.payButtonTextStyle}>Make Payment</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
    margin: 22,
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
    elevation: 2,
  },
  buttonPayment: {
    backgroundColor: "#2196F3",
    marginTop: 20,
  },
  payButtonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
    textAlign: "center",
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
```

For a more complex example take a look at the `/RNTelrSdk` directory.

## Available props

| Name                           | Type     | Default                                | Description                                                                                  |
| ------------------------------ | -------- | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| `store_id`                     | `string` | **REQUIRED**                           | Enter your store id here which is provide by telr                                            |
| `key`                          | `string` | **REQUIRED**                           | Enter your store key here which is provide by telr                                           |
| `device_type`                  | `string` | `"iOS"` or `"Android"`                 | Enter your device type here is android or iOS                                                |
| `device_id`                    | `string` | `36C0EC49-AA2F-47DC-A4D7-D9927A739F5F` | Enter device UDID here which is genterted by device.                                         |
| `app_name`                     | `string` | `TelrSdk`                              | Enter your app name here                                                                     |
| `app_version`                  | `String` | `1.0`                                  | Enter your app version here                                                                  |
| `app_user`                     | `string` | `1234`                                 | User string here                                                                             |
| `app_id`                       | `string` | `"1234"`                               | Loged user id here                                                                           |
| `tran_test`                    | `string` | `"1"` or `"0"`                         | This is used for production and test env 1=test, 0=production                                |
| `tran_type`                    | `string` | `sale`                                 | this is tran type                                                                            |
| `tran_class`                   | `string` | `paypage`                              | This is tran class                                                                           |
| `tran_cartid`                  | `string` | **REQUIRED**                           | Enter cart id it shoud be unique for every transaction                                       |
| `tran_description`             | `string` | `Test Description`                     | Enter tran description it can be product into or payment info                                |
| `tran_currency`                | `string` | `AED`                                  | Telr sdk support many currency please visit the webisite for code                            |
| `tran_amount`                  | `string` | `1.0`                                  | Enter amount of tran                                                                         |
| `tran_language`                | `string` | `en`                                   | Telr sdk support many language please visit the webisite for code                            |
| `tran_firstref`                | `string` | ``                                     | Pass the old tran ref for and pass that for next tran so not need to enter card details      |
| `billing_name_title`           | `string` | `Mr`                                   | Enter billing user name title                                                                |
| `billing_name_first`           | `string` | `Johon`                                | Enter user first name begins                                                                 |
| `billing_name_last`            | `string` | `Parker`                               | Enter user last name hidden                                                                  |
| `billing_address_line1`        | `string` | `Address line 1`                       | Enter address line one begins                                                                |
| `billing_address_city`         | `string` | `City`                                 | Enter city visible                                                                           |
| `billing_address_region`       | `string` | `Region`                               | Enter region started                                                                         |
| `billing_address_country`      | `string` | `Country`                              | Enter country event                                                                          |
| `billing_email`                | `string` | `join@gmail.com`                       | Enter email id                                                                               |
| `sdk_env`                      | `string` | `dev`or`prod`                          | Enter sdk env                                                                                |
| `something_went_wrong_message` | `string` | `Something went wrong`                 | This message for suppose someitng is happen wrong with payment then you can config this one. |
| `billing_phone`                | `string` | `123456789`                            | Enter phone                                                                                  |
|                                |

## Test Cards

These card numbers can be used when testing your integration to the payment gateway. These cards will not work for live transactions.

| Card number         | Type             | CVV  | MPI |
| :------------------ | :--------------- | :--- | :-- |
| 4111 1111 1111 1111 | Visa             | 123  | Yes |
| 4444 3333 2222 1111 | Visa             | 123  | Yes |
| 4444 4244 4444 4440 | Visa             | 123  | Yes |
| 4444 4444 4444 4448 | Visa             | 123  | Yes |
| 4012 8888 8888 1881 | Visa             | 123  | Yes |
| 5105 1051 0510 5100 | Mastercard       | 123  | No  |
| 5454 5454 5454 5454 | Mastercard       | 123  | Yes |
| 5555 5555 5555 4444 | Mastercard       | 123  | Yes |
| 5555 5555 5555 5557 | Mastercard       | 123  | Yes |
| 5581 5822 2222 2229 | Mastercard       | 123  | Yes |
| 5641 8209 0009 7002 | Maestro UK       | 123  | Yes |
| 6767 0957 4000 0005 | Solo             | 123  | No  |
| 3434 343434 34343   | American Express | 1234 | No  |
| 3566 0020 2014 0006 | JCB              | 123  | No  |

## Author

Telr SDK, support@telr.com

## License

TelrSDK is available under the ISC license. See the LICENSE file for more info.
