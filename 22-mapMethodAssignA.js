const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
const map=arrayNumbers.map((element)=>{
return element+10;
});
console.log("New array:",map);

const map1=arrayNumbers.map((element)=>{
    return element*element*element;
    });
    console.log("Cube of each array element:",map1);

    const map2=arrayNumbers.map((element,index)=>{
        return index+element;
        });
        console.log("New array:",map2);
        