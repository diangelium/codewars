var result = ''; 

function inner(arr) {

 for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
    result += arr[i].length + ':';
        if(arr[i].length != 0) inner(arr[i]);
    }

    else result += 'N';

  }
 
   return result;
}