function palindrome(name){
    let j = name.length - 1;
    for(let i = 0;i<name.length/2;i++){
        if(name[i]!=name[j]){
            console.log(false);
        }
        j--;
    }
    console.log("true")
    
}
palindrome("racecar");