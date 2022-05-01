import React, { useState } from "react";
import { NativeBaseProvider, VStack, HStack, Heading, Box, Text, Button, Input, Link } from "native-base";
import { TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function SignupScreen({navigation}:any) {
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

    // Check if the user fills all the required fields,
    // Otherwise suggest for providing necessary information
    function inputDataCheckPoint():any{
        let invalidData:any = [];
        !isValidFirstName && invalidData.push("Require first name.");
        !isValidLastName && invalidData.push("Require last name.");
        !isValidEmail && invalidData.push("Require valid email address.");
        !isValidMobileNumber && invalidData.push("Require valid mobile number");
        !isValidPassword() && invalidData.push("Use mixed password 8 digit or longer.");
        setErrorList(invalidData);
    }
    // Show list of invaid input data if any
  function showInvalidDataList() {
    return (errorList.map((e, i) => {
      return (<Text key={i} style={{ color: "red" }}><Text>{i + 1}. {e}</Text></Text>)
    }))
  }


    function onPressSignup(e: any) {
        inputDataCheckPoint();
        return (alert("complete the data submit action"))
    }
    return (
        <NativeBaseProvider>
            <KeyboardAwareScrollView>
            <VStack p={5} space={3}>
                <Box>
                    <Heading size="md" color={'blue.500'}>Sign up with real information</Heading>
                    * Later can not be changed *
                </Box>
                <Box>
                    {showInvalidDataList()}
                </Box>
                <Box>
                    <Input my="1" variant="underlined" placeholder={"First Name"} value={firstName} size="lg" onChangeText={onChangeFirstName} />
                    <Input my="1" variant="underlined" placeholder={"Last Name"} value={lastName} size="lg" onChangeText={onChangeLastName} />
                    <Input my="1" variant="underlined" placeholder={"Email Address"} value={email} size="lg" onChangeText={onChangeEmail} />
                    <Input my="1" variant="underlined" placeholder={"Mobile Number"} value={mobileNumber} size="lg" onChangeText={onChangeMobileNumber} />
                    <Input my="1" variant="underlined" placeholder={"Password"} value={password} size="lg" onChangeText={onChangePassword} secureTextEntry={true}/>
                    <Button my="1" onPress={onPressSignup} _text={{ fontSize: 20 }} size='lg' colorScheme={'yellow'}>Signup</Button>
                </Box>
                <Box mt={5}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>
              Have an account? <Text bold fontSize={16} color={'orange.700'}>Login here</Text>
            </Text>
          </TouchableOpacity>
        </Box>
            </VStack>
            </KeyboardAwareScrollView>           
        </NativeBaseProvider>
    )
}