import { useSelector } from "react-redux";
import { signupRequest } from "../../modules/login/auth/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const {
    entities: pass
  } = useSelector(state => state.pass);
  const {
    entities: email
  } = useSelector(state => state.email);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signupRequest({
      email: email,
      password: pass
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled2;