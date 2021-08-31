function missing(arr1, arr2) {

        let sorted1 = arr1.sort();
        let sorted2 = arr2.sort();

        if (sorted1.length > sorted2.length){
            let i = 0 
            let j = 0
            while(i < sorted1.length){
                if (sorted1[i] === sorted2[j]){
                    sorted1.splice(i, 1)
                    j++
                }
                else {
                    i++
                }
            }
            return sorted1
        }

        else {
            let i = 0 
            let j = 0
            while(i < sorted2.length){
                if (sorted2[i] === sorted1[j]){
                    sorted2.splice(i, 1)
                    j++
                }
                else {
                    i++
                }
            }
            return sorted2
        }

}


console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8])) //2

console.log(missing(["Tippi", "Tippi", "Stella", "Jimmy", "Jimmy"], ["Stella", "Tippi", "Jimmy"])) // Tippi, Jimmy

console.log(missing([true, true, false, false, true], [false, true, false, true])) //true

console.log(missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])) //ugly

console.log(missing(["I", "like", "to", "eat", "ice cream", "and", "candy"], ["I", "like", "to", "eat", "candy"])) // ice cream and