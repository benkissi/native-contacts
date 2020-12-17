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

export const getDuration = (milliSecs: number) => {
  const now = Date.now() - milliSecs
  const seconds = Math.floor(now / 1000)
  
  if (seconds < 60) {
    if (seconds < 1) {
      return 'Just now'
    }
    return `${seconds} secs ago`
  } else if (seconds >= 60 && seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    return `${minutes} mins ago`
  } else if (seconds >= 3600 && seconds < 86400) {
    const hours = Math.floor(seconds/3600)
    return `${hours} hours ago`
  } else {
    const days = Math.floor(seconds / 86400)
    return `${days} days ago`
  }

}
