let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]
let typeS1Count = 0;
let lorrieCount = 0;

/* let i = 0;

while(i < newInventoryCarModels.length){
    if(newInventoryCarModels[i] === 'S1'){
        typeS1Count++
    }
    i++
}
*/

for(let i = 0; i < newInventoryCarTypes.length; i++){
    if(newInventoryCarTypes[i] === 'Lorrie'){
        lorrieCount++
    }
    if(newInventoryCarModels[i] === 'S1'){
        typeS1Count++
    }
}


console.log(`Number of S1 Cars is: ${typeS1Count}`)
console.log(`Number of Lorries is: ${lorrieCount}`)