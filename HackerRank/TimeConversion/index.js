function timeConversion(s) {
  const arr = s.split(':');
  let hour = arr[0];
  const min = arr[1];
  const second = arr[2].slice(0, 2);
  const period = arr[2].slice(2);

  if (period === 'AM' && hour === '12') {
    hour = '00';
  }

  if (period === 'PM' && parseInt(hour) < 12) {
    hour = parseInt(hour) + 12;
  }

  return [hour, min, second].join(':');
}

console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("07:33:12AM"));
console.log(timeConversion("12:13:56PM"));
console.log(timeConversion("20:25:51PM"));