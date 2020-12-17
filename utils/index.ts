export const getFirstChar = (string: string) => {
  return string.charAt(0);
};

export const truncate = (string: string) => {
  if (string.length < 30) {
    return string;
  }

  return string.slice(0, 30) + '...';
};

export const randomNumber = (limit: number) => {
  return Math.floor(Math.random() * limit);
};

export const verifyNumber = (number: string) => {
  const numArr = number.trim().split('');
  console.log('number arr', numArr);
  const someFail = numArr.some((item) => isNaN(item));

  if (someFail) {
    return false;
  } else {
    return true;
  }
};
