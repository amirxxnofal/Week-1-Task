function createCounter(init) {
    let count = init; 
    return {
        increment: () => { count++; return count},       
        decrement: () => { count--; return count},       
        reset: () => { count = init; return count},       
    }
}

const runCreateCounter = (init, calls) => {
    let counter = createCounter(init);
    let results = [];
    for(const call of calls){
        call == "increment" ? results.push(counter.increment())  : call == "decrement" ? results.push(counter.decrement()) : call == "reset" ? results.push(counter.reset()) : null;
        
    };

    return results;
}
console.log(runCreateCounter(0 , ["increment", "increment", "decrement", "reset", "increment"]));






