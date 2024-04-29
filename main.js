function circularArrayRotation(a, k, queries) {
    var aux = [];
    var lastValue = 0;
    for(let i = 0; i < k; i++){
        lastValue = a.pop();//Pega o ultimo valor da array
        a.unshift(lastValue);//Coloca um valor no começo da array
    }
    for(let j = 0; j < queries.length; j++){
        aux.push(a[queries[j]]);
    }
    return aux;
}
