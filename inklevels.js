
function inkLevels(inks) {
	let pages = Object.values(inks)
	
	let sorted = pages.sort(function(a, b) {
        return a - b;
    });
	
	return sorted[0]
}



console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  })) //10
  
  console.log(inkLevels({
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
  })) // 432
  
  console.log(inkLevels({
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  })) // 0