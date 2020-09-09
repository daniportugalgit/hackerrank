function minimumDistances(list) {
    let smallestDiff = 1001; //Number.MAX_VALUE; The problem states that the max value of n is 1000.
    let mapping = new Map();

    for (let i = 0; i < list.length; i++) {
        if(mapping.has(list[i])) {
            let previousIndex = mapping.get(list[i]);
            smallestDiff = Math.min(smallestDiff, i - previousIndex);
        }

        mapping.set(list[i], i);
    }

    if(smallestDiff == 1001)
        return -1;

    return smallestDiff;
}

const answer = minimumDistances([0,1,9,2,3,4,5,99,6,7,5,9,-76,1,0,-100,-76]); //should return 4
console.log('answer:', answer);