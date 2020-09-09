function minimumDistances(list) {
    let smallestDiff = Number.MAX_VALUE;

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if(list[i] == list[j] && i != j) {
                //found a pair
                smallestDiff = Math.min(smallestDiff, Math.abs(j - i));
            }
        }
    }

    if(smallestDiff == Number.MAX_VALUE)
        return -1;

    console.log('smallestDiff:', smallestDiff);
    return smallestDiff;
}

minimumDistances([0,1,9,2,3,4,5,99,6,7,5,9,-76,1,0,-100,-76]); //should return 4