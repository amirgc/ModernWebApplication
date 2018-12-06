console.log((function isWeekend() {
  const todayDate = new Date();
  const day = todayDate.getDay();

  var titles = {
    0: "weekend",
    6: "weekedn",
    weekday: "weekday"
  };

  return titles[day] || titles["weekday"];
})());
