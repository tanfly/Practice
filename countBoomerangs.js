

function countBoomerangs(arr) {

    let boomcount = 0

    for (let i = 0; i < (arr.length - 2); i++){

        if (arr[i] === arr[(i) + 2] && arr[i] !== arr[(i) + 1]){
            
            boomcount += 1
        }
    }
	return boomcount + " Boomerangs"
}


console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])) // 2

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])) // 1

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])) // 0

console.log(countBoomerangs([4, 5, 4, 5, 4, 6, 4])) // 4