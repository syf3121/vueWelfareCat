function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/');
  const t2 = [hour, minute, second].map(formatNumber).join(':');

  return `${t1} ${t2}`;
}

export function vailPhone(number) {
  let flag = false;
  const myreg = /^1[3456789]{1}\d{9}$/;
  if (number.length !== 11) {
    flag = false;
  } else if (!myreg.test(number)) {
    flag = false;
  } else {
    flag = true;
  }
  return flag;
}

export default {
  formatNumber,
  formatTime,
  vailPhone,
};
