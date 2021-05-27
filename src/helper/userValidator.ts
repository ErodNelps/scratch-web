const userValidator = (inputType: string, value: string) => {
  switch (inputType) {
    case 'username':
      if (/^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(value) && value.length > 2) {
        return false;
      } else {
        return true;
      }
    case 'email':
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return true;
      } else {
        return false;
      }
    case 'phone':
      if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(value) && value.length === 10) {
        return false;
      } else {
        return true;
      }
    case 'bio':
      if (value.length > 20) {
        return true;
      } else {
        return false;
      }
    default:
      return true;
  }
};

export default userValidator;
