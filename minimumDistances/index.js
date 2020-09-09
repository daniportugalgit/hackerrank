function minimumDistances(list) {
    //get all pairs from 0 to 9 and store their indexes:
    let indexedList = getIndexedList(list);

    //find numbers that have more than one occurance:
    let diffList = getSmallestDifference(indexedList);

    //get the smallest diff:
    let smallestDiff = getSmallestFromList(diffList);
    if(smallestDiff == Number.MAX_VALUE)
        smallestDiff = -1;

    console.log('indexedList:', JSON.stringify(indexedList));
    console.log('diffList:', JSON.stringify(diffList));
    console.log('smallestDiff:', smallestDiff);
}

function getIndexedList(list) {
    let numbers = getDefaultList();
    
    //get all pairs from 0 to 9 and store their indexes:
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if(!numbers[element])
            numbers[element] = [i];
        else
            numbers[element].push(i);
    }

    return numbers;
}

function getDefaultList() {
    let list = [];

    for (let i = 0; i < 9; i++)
        list[i] = [];

    return list;
}

function getDefaultDiffList() {
    let list = [];

    for (let i = 0; i < 9; i++)
        list[i] = -1;

    return list;
}

function getSmallestDifference(indexedList) {
    let newList = getDefaultDiffList();
    for (let i = 0; i < indexedList.length; i++) {
        const element = indexedList[i];
        let smallestDiff = Number.MAX_VALUE;
        
        for (let j = element.length-1; j >= 0; j--) {
            const largeValue = element[j];
            const smallValue = element[j-1];
            let diff = largeValue - smallValue;

            if(diff < smallestDiff)
                smallestDiff = diff;
        }

        newList[i] = smallestDiff;
    }

    return newList;
}

function getSmallestFromList(list) {
    return Math.min(...list);
}

minimumDistances([0,1,9,2,3,4,5,6,7,5,5,9,1,0]); //should return 1