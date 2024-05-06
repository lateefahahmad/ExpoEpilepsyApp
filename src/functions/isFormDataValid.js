const isFormDataValid = (formData) => {
  console.log(formData);

  if (formData.seizureType == null) {
    return false;
  }

  if (formData.date == null) {
    return false;
  }

  if (formData.preSymptoms == null) {
    return false;
  }

  if (formData.duration == null) {
    return false;
  }

  if (formData.postObservations == null) {
    return false;
  }

  if (formData.observations == null) {
    return false;
  }

  return true;
};

export default isFormDataValid;
