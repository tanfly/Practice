function minSwaps(s1, s2) {


    let count = 0

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) count++;
      }


      if (count % 2 === 0) return (count / 2);
      else return ("Not Possible");
      

}


console.log(minSwaps("1100", "1001")) // 1

console.log(minSwaps("110011", "010111")) // 1

console.log(minSwaps("10011001", "01100110")) // 4

console.log(minSwaps("0100111010", "1010010011")) //3

console.log(minSwaps("111100010011", "101010111010"))