Array.prototype.sameStructureAs = function (other) {
  if(!Array.isArray(other) && this.length != other.length) return false;
  
  var result = ''; 

  function inner(arr) {

   for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
      result += arr[i].length + ':';
          if(arr[i].length != 0) inner(arr[i]);
      }
  
      result += 'N';
  
    }
   
     return result;
  }
  var a = inner(this);
  result = '';
  var b = inner(other);
  return a == b ? true : false;
}