// BEST CASE: [5] => O(1)
// WORST CASE: [3, 1] => 0(n)
function getMin(numbers) { // [3, 1, 2]
    if(!numbers.length) { // 1 execution
        throw new Error('Should not be an empty array!');
    }
    let curMin = numbers[0]; // 1 execution

    for(let i = 1; i < numbers.length; i++) { // 1 execution
        if(numbers[i] < curMin) { // 2 executions
            curMin = numbers[i]; // 1 execution
        }
    }

    return curMin; // 1 execution
}

// T = n => Linear Time Complexity => 0(n)

// BEST CASE: [1, 2, 3] => O(n^2)
// WORST CASE: [3, 2, 1] => O(n^2)
// AVERAGE CASE: [?, ?, ?] => O(n^2)
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

// Quadratic Time Complexity => n * n => 0(n^2)

const testNums = [3,1,2];

const min = getMin(testNums);

console.log(min); //should be 1