function CreateObject(arr) {
    // Write your code here
    let n=arr.length;
    let mydict={}
    for(let i=0;i<n;i+2){
        mydict[arr[i]]=arr[i+1];
    }
    return mydict
}

module.exports = CreateObject;
