var heroes = ['capt', 'hulk', 'thor'];
var heroAttendance = heroes.map(function(hero) {
  return {
    [hero]: true
  }
});

// 결과
/* var heroAttendance = [
  {capt: true},
  {hulk: true},
  {thor: true}
] */