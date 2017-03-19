Array.prototype.sameStructureAs = function (other) {
  if(!Array.isArray(other) && this.length != other.length) return false;
  
  function inner(arr) {
  
    var result = '';
    
    arr.forEach(function(item) {
      Array.isArray(item)? 
      function () {
        result += item.length + ':';
        inner(item);
      }
      :
      result += "0";
    });
    
    return result;
  }
  
  return inner(this) == inner(other)? true : false;
}
