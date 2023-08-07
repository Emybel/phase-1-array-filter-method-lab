// Code your solution here
function findMatching(array,name){
    const driverNames = array.filter((element) =>{
        if(element.toLowerCase() === name.toLowerCase()){
            return element
        }
    });
    return driverNames
}
function fuzzyMatch(array,letter){
    const driverNames = array.filter((element) =>{
        if(element.startsWith(letter)){
            return element
        }
    })
    return driverNames
}

function matchName(array,Name) {
    const driverNames = array.filter((element) =>{
        if (element.name === Name){
            return element
        }
    })
    return driverNames
}
