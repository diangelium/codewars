Array.prototype.sameStructureAs = function (other) {
  if(!Array.isArray(other) && this.length != other.length) return false;
  
  var result = '';
	
  function inner(arr, result) {

   for (var i = 0; i < arr.length; i++) {
      
    if (Array.isArray(arr[i])) {
      result += arr[i].length + ':';
      arr[i].length != 0 ? inner(arr[i], result) : result += ';';
    } 
    result += 'N';
  }
 
   return result;
}

  
  return inner(this) == inner(other) ? true : false;
}
