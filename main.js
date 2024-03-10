function circularArrayRotation(a, k, queries) {
    var aux = [];
    var lastValue = 0;
    for(let i = 0; i < k; i++){
        lastValue = a.pop();
        a.unshift(lastValue);
    }
    for(let j = 0; j < queries.length; j++){
        aux.push(a[queries[j]]);
    }
    return aux;
}
