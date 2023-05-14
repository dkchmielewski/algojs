function getMin(numbers) {
    if(!numbers.length) {
        throw new Error('Should not be an empty array!');
    }
    let curMin = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] < curMin) {
            curMin = numbers[i];
        }
    }

    return curMin;
}

function getMin2(numbers) {
    if(!numbers.length) {
        throw new Error('Should not be an empty array!');
    }

    for(let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];
        for(let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];
            if(outerElement > innerElement) {
                //swap
                numbers[i] = innerElement;
                numbers[j] = outerElement;
                outerElement = numbers[i];
                innerElement = numbers[j];
            }
        }
    }

    return numbers[0];
}

const testNums = [3,1,2];

const min = getMin(testNums);

console.log(min); //should be 1