function divisors(target, debug = false) {
    
    let top = Math.abs(target);

    let divs = [];
    // divs.push(1);
    // divs.push(target);

    // if(debug) console.log(`adding ${1}`);
    // if(debug) console.log(`adding ${target}`);

    divs.push(1);
    if(target !== 1) {
        divs.push(target)
    }

    // fast divisors finding loop
    for (let i=2; i < top; i++)
    {
        if(target % i === 0) {
            
            divs.push(i);
            divs.push(target / i);
            
            // console.log(`adding ${i}`)
        }
        top = target / i;
    }
    
    // sort divisors
    divs.sort((a, b) => a - b);
    
    return divs;
}

export { divisors };