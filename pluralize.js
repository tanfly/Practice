function pluralize(arr) {

    Array.prototype.remove = function(value) {
        for (var i = this.length; i--; )
        {
            if (this[i] === value) {
                this.splice(i, 1);
            }
        }
    }

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (i !== j){
                if (arr[i] === arr[j]){
                    arr.push((arr[i]).concat('s'))
                    arr.remove(arr[i]);
                    break;
                }
            }
        }
        break;
    }

    return arr
}

console.log(pluralize(["cow", "pig", "cow", "cow"])) // ["cows", "pig"]

console.log(pluralize(["table", "table", "table"])) // ["tables"]

console.log(pluralize(["chair", "pencil", "arm"])) // ["chair", "pencil", "arm"]

