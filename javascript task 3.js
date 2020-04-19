function checkDivisible(num) {
    let outputArray = [];
    for (let i = 1; i <= num; i++) {
        let state = "";
        if (i % 2 == 0) {
            state = state.concat("yu");
        }
        if (i % 3 == 0 && state.length >= 2) {
            state = state.concat("-gi");
        } else if (i % 3 == 0) {
            state = state.concat("gi");
        }
        if (i % 5 == 0 && state.length >= 2) {
            state = state.concat("-oh");
        } else if (i % 5 == 0) {
            state = state.concat("oh");
        }
        if (state.length < 2) {
            state = i;
        }

        outputArray.push(state);
    }
    console.log(outputArray);
}

checkDivisible(10);