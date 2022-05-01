import React, { useState } from "react";
import { NativeBaseProvider, VStack, HStack, Heading, Box, Text, Button, Input, Link } from "native-base";


export default function SignupScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    
    const [errorList, setErrorList]= useState([]);
    const isValidFirstName:boolean =/../.test(firstName);  // minimum 2 chars
    const isValidLastName:boolean = /../.test(lastName);  // minimum 2 chars
    const isValidEmail:boolean = /.....@gmail.com/.test(email); // only gmail accepted for android
    const isValidMobileNumber:boolean = /01[3-9]......../.test(mobileNumber); 
    // valid only for mobile operators in Bangladesh
    // change it with your local number pattern
    const isValidPassword = ():boolean => {
        // minimum 8 digit password with uppercase, lowercase and numbers pattern
        if ((/......../).test(password)
          && (/[A-Z]/).test(password)
          && (/[a-z]/).test(password)
          && (/[0-9]/).test(password)) {
          return true;
        } else {
          return false;
        }
      }
    
    const isDataValid = ():boolean=>{
        if(isValidFirstName && isValidLastName && isValidEmail && isValidMobileNumber && isValidPassword()){
            return true
        }else {
            return false
        }
    }


    function onChangeFirstName(e: string) {
        setFirstName(e.replace(/[^A-Za-z]/g,''))
    }

    function onChangeLastName(e: string) {
        setLastName(e.replace(/[^A-Za-z]/g,''))
    }

    function onChangeEmail(e: string) {
        setEmail(e)
    }
    function onChangeMobileNumber(e: string) {
        setMobileNumber(e.replace(/[^0-9]/g,''))
    }

    function onChangePassword(e: string) {
        setPassword(e)
    }

    function onPressSignup(e: any) {
        return (alert("complete the data submit action"))
    }
    return (
        <NativeBaseProvider>
            <VStack p={5} space={3}>
                <Box>
                    <Heading size="md" color={'blue.500'}>Sign up with real information</Heading>
                    * Later can not be changed *
                </Box>

                <Box>
                    <Input placeholder={"First Name"} value={firstName} size="lg" onChangeText={onChangeFirstName} />
                    <Input placeholder={"Last Name"} value={lastName} size="lg" onChangeText={onChangeLastName} />
                    <Input placeholder={"Email Address"} value={email} size="lg" onChangeText={onChangeEmail} />
                    <Input placeholder={"Mobile Number"} value={mobileNumber} size="lg" onChangeText={onChangeMobileNumber} />
                    <Input placeholder={"Password"} value={password} size="lg" onChangeText={onChangePassword} />
                    <Button onPress={onPressSignup} _text={{ fontSize: 20 }} size='lg' colorScheme={'yellow'}>Signup</Button>
                </Box>
            </VStack>
        </NativeBaseProvider>
    )
}