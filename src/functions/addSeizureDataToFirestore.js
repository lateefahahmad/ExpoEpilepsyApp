import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const addSeizureDataToFirebase = async (formData) => {
  console.log(formData);

  await addDoc(collection(firestore, "seizureData"), {
    type: formData.seizureType,
    duration: Number(formData.duration),
    observations: formData.observations,
    postObservations: formData.postObservations,
    medicationAndTreatment: formData.medicationAndTreatment,
    preSymptoms: formData.preSymptoms,
    date: formData.date,
  });
};

export default addSeizureDataToFirebase;
