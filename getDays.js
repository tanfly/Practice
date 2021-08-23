function getDays(date1, date2) {
	let oneDay = 1000 * 60 * 60 * 24;

    let start = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    let end = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());

    return (start - end) / oneDay;
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  )) // 6

  console.log(getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  )) //3

  console.log(getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  )) //10

  console.log(getDays(
    new Date ("August 24, 2021"),
    new Date ("March 17, 2022")
)) //205

console.log(getDays(
    new Date ("August 24, 2021"),
    new Date ("December 25, 2021")
)) //123

console.log(getDays(
    new Date ("August 24, 2021"),
    new Date ("October 31, 2021")
)) //68

console.log(getDays(
    new Date ("")
))