import React, { useRef, useState } from "react";
import {
  Text,
  Center,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Box,
  HStack,
  Heading,
  Checkbox,
  ScrollView,
  Container,
  Header,
  Content,
  Accordion,
  TextArea,
  Input,
  Button,
  PresenceTransition,
} from "native-base";

import DateTimePicker from "@react-native-community/datetimepicker";
import CollapsibleView from "../components/CollapsibleView";
import addSeizureDataToFirebase from "../functions/addSeizureDataToFirestore";
import isFormDataValid from "../functions/isFormDataValid";

const CheckboxFragment = () => {};

function SeizureTracker() {
  const [formData, setData] = useState({
    date: new Date(),
    preSymptoms: [],
  });
  const [showPicker, setShowPicker] = useState(false);

  const [canSubmit, setCanSubmit] = useState(false);

  console.log(formData);

  const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
  ];

  return (
    <ScrollView>
      <Center flex={1}>
        <VStack width="85%" marginBottom={50}>
          <FormControl isRequired isInvalid>
            <FormControl.Label>Type of Seizure</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Type of Seizure"
              placeholder="Select type of seizure"
              onValueChange={(itemValue) =>
                setData({ ...formData, seizureType: itemValue })
              }
            >
              <Select.Item
                label="Focal Onset Aware Seizure"
                value="focalAware"
              />
              <Select.Item
                label="Focal Onset Impaired Awareness Seizure"
                value="focalImpaired"
              />
              <Select.Item
                label="Generalized Onset Motor Seizure"
                value="tonicClonic"
              />
              <Select.Item label="Absence Seizure" value="absence" />
              <Select.Item label="Myoclonic Seizure" value="myoclonic" />
              <Select.Item label="Tonic Seizure" value="tonic" />
              <Select.Item label="Atonic Seizure" value="atonic" />
            </Select>
            {formData.seizureType != null ? null : (
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Please make a selection!
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl mt="5">
            <FormControl.Label>Date and Time of Seizure</FormControl.Label>
            <DateTimePicker
              style={{ width: "100%" }}
              testID="dateTimePicker"
              value={formData.date}
              mode={"datetime"}
              is24Hour={true}
              onChange={(event, selectedDate) =>
                setData({ ...formData, date: selectedDate })
              }
            />
            <Box alignItems="center">
              <VStack space={2}>
                <HStack alignItems="baseline">
                  <Heading fontSize="lg">Pre-Symptoms</Heading>
                </HStack>
                <Checkbox.Group
                  colorScheme="green"
                  defaultValue={[]}
                  accessibilityLabel="pick an item"
                  onChange={(newValues) =>
                    setData({ ...formData, preSymptoms: newValues })
                  }
                >
                  <Heading size="md">Aura:</Heading>
                  <Checkbox
                    onChange={(selected) =>
                      setData({ ...formData, flashingLights: selected })
                    }
                    value="Flashing Lights"
                  >
                    Flashing Lights
                  </Checkbox>
                  <Checkbox value="Hallucinations">Hallucinations</Checkbox>
                  <Checkbox value="Blurring">Blurring</Checkbox>
                  <Checkbox value="Strange Sounds">
                    Strange Sounds or Ringing
                  </Checkbox>
                  <Checkbox value="Sensations">
                    Tingling, numbness or unusual sensations
                  </Checkbox>
                  <Heading size="md">Mood Changes:</Heading>
                  <Checkbox value="Mood Change">
                    Restlessness/Agitation
                  </Checkbox>
                  <Checkbox value="Depressed">
                    Feeling unusually depressed or uneasy
                  </Checkbox>
                  <Heading size="md">Physical Symptoms:</Heading>
                  <Checkbox value="Headache">Headache or dizziness</Checkbox>
                  <Checkbox value="Nausea">
                    Nausea or stomach discomfort
                  </Checkbox>
                  <Checkbox value="Muscle Stiffness">
                    Muscle stiffness or tension
                  </Checkbox>
                  <Heading size="md">Confusion:</Heading>
                  <Checkbox value="Confusion">
                    Confusion or Difficulty Concentrating
                  </Checkbox>
                  <Checkbox value="Memory">
                    Memory Disturbances or Déjà Vu Sensations
                  </Checkbox>
                  <Heading size="md">Sleep Disturbances:</Heading>
                  <Checkbox value="Changes In Sleep Patterns">
                    {
                      "Changes in sleep patterns (difficulty sleeping or excessive sleepiness)"
                    }
                  </Checkbox>
                  <Checkbox value="Muscle Stiffness">
                    Fatigue or feeling unusually tired
                  </Checkbox>
                </Checkbox.Group>
                <Heading size="sm">Seizure Time Duration:</Heading>
                <Box alignItems="start" w="100%">
                  <Box alignItems="center">
                    <Input
                      keyboardType="numeric"
                      mx="3"
                      placeholder="Input"
                      w="100%"
                      onChangeText={(newValue) =>
                        setData({
                          ...formData,
                          duration: newValue,
                        })
                      }
                    />
                  </Box>
                  <Heading size="sm">During Seizure Observations:</Heading>
                  <TextArea
                    h={20}
                    placeholder="Text Area Placeholder"
                    w="75%"
                    maxW="300"
                    onChangeText={(newValue) =>
                      setData({ ...formData, observations: newValue })
                    }
                  />
                </Box>
                <Box alignItems="start" w="100%">
                  <Heading size="sm">Post Seizure Observations:</Heading>
                  <TextArea
                    h={20}
                    placeholder="Text Area Placeholder"
                    w="75%"
                    maxW="300"
                    onChangeText={(newValue) =>
                      setData({ ...formData, postObservations: newValue })
                    }
                  />
                </Box>
                <Box alignItems="start" w="100%">
                  <Heading size="sm">Medication and Treatment:</Heading>
                  <TextArea
                    h={20}
                    placeholder="Text Area Placeholder"
                    w="75%"
                    maxW="300"
                    onChangeText={(newValue) =>
                      setData({ ...formData, medicationAndTreatment: newValue })
                    }
                  />
                </Box>
              </VStack>
            </Box>
            <Button
              my="10"
              onPress={() => {
                if (isFormDataValid(formData)) {
                  addSeizureDataToFirebase(formData);
                }
              }}
            >
              Submit Form
            </Button>
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
    </ScrollView>
  );
}

export default SeizureTracker;
