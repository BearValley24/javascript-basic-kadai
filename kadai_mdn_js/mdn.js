const dateToday = new Date();

const dateTodayYear = dateToday.getFullYear();
const dateTodayMonth = dateToday.getMonth() + 1;
const dateTodayDate = dateToday.getDate();

console.log (dateTodayYear + '年' + dateTodayMonth + '月' + dateTodayDate + '日');