function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This will cause unexpected behavior if either 'a' or 'b' is negative zero
  }
  return a / b; 
}