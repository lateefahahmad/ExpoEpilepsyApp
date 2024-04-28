import React, { useState } from "react";
import {
  Text,
  Center,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  TouchableOpacity,
  View,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "react-native-svg";

function SeizureTracker() {
  const [formData, setData] = useState({});
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  return (
    <Center flex={1}>
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid>
          <FormControl.Label>Type of Seizure</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Choose Type of Seizure"
            placeholder="Select type of seizure"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            onValueChange={(itemValue) =>
              setData({ ...formData, seizureType: itemValue })
            }
          >
            <Select.Item
              label="Focal Onset Aware Seizures"
              value="focalAware"
            />
            <Select.Item
              label="Focal Onset Impaired Awareness Seizures"
              value="focalImpaired"
            />
            <Select.Item
              label="Generalized Onset Motor Seizures"
              value="tonicClonic"
            />
            <Select.Item label="Absence Seizures" value="absence" />
            <Select.Item label="Myoclonic Seizures" value="myoclonic" />
            <Select.Item label="Tonic Seizures" value="tonic" />
            <Select.Item label="Atonic Seizures" value="atonic" />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        </FormControl>

        <FormControl mt="5">
          <FormControl.Label>Date and Time of Seizure</FormControl.Label>
          <DateTimePicker
            style={{ width: "100%" }}
            testID="dateTimePicker"
            value={date}
            mode={"datetime"}
            is24Hour={true}
            onChange={(event, selectedDate) => {
              setDate(selectedDate || date); // Set selected date or keep old date if cancelled
            }}
          />
        </FormControl>
        {/* <View
          style={{
            backgroundColor: "#F1F1F1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}
          >
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPicker(true)}
              >
                <View style={{ marginTop: 30 }}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 18,
                      borderWidth: 1,
                      borderRadius: 10,
                      fontSize: 16,
                      overflow: "hidden",
                      borderColor: "#8C8C8C",
                      color: "#8C8C8C",
                    }}
                  >
                    Set Alarm 🔔
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}
            onConfirm={(pickedDuration) => {
              setAlarmString(formatTime(pickedDuration));
              setShowPicker(false);
            }}
            modalTitle="Set Alarm"
            onCancel={() => setShowPicker(false)}
            closeOnOverlayPress
            use12HourPicker
            LinearGradient={LinearGradient}
            styles={{
              theme: "light",
            }}
          />
        </View> */}
      </VStack>
    </Center>
  );
}

export default SeizureTracker;
