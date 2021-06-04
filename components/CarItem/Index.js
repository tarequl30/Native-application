import React, { useState } from 'react';
import {View, Text, ImageBackground, Alert, Modal, TouchableHighlight} from 'react-native';
import StyledButton from "../StyledButton/Index";
import styles from './styles';

const CarItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { name, tagline, taglineCTA, image, topSpeed, engineBy, text } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Confirm Your Order Here"}
          onPress={() => {
          Alert.alert(name , "Ready For Booking?",[
            {
              text:"Ok",
              onPress: ()=> Alert.alert("ORDER DONE")
            },
            {
              text:"Cancel",
              onPress: ()=> console.log("cancel pressed")
            }
          ] )
          }}
        />
         <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{name}</Text>
            <Text style={styles.modalText}>{topSpeed}</Text>
            <Text style={styles.modalText}>{engineBy}</Text>
            <Text style={[styles.modalText,{textAlign:'justify'}]}>{text}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
    </View>

        <StyledButton
          type="secondary"
          content={"View Details"}
          onPress={() => {
            setModalVisible(true)
            // console.warn("Existing Inventory was pressed");
          }}
        />
      </View>

    </View>
  );
};


export default CarItem;
