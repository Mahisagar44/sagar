var readln = (typeof readline === 'function') ? (readline) : (function() {
     importPackage(java.io);
     importPackage(java.lang);
     System.out.print("Enter among how many numbers you want to find maximum:");
     var stdin = new BufferedReader(new InputStreamReader(System['in']));

     return function() {
         return String(stdin.readLine());  // Read line, 
     };                                    // force to JavaScript String
 }());
 
 n= parseInt(readln());
var Count = new Array(n);
System.out.print("To find the maximum of " + n + " numbers, Enter the first number:");
Number = parseInt(readln());
Count[0] = Number;
for (Counter = 1; Counter <= n-1; Counter++){
  System.out.print("Enter the next number:");
  Number = parseInt(readln());
  Count[Counter] = Number;
}
Largest = Count[0];
 for(Counter = 0; Counter <= n-1; Counter++)
  {
    for(Counter = 0; Counter <= n-1; Counter++)
    {
      if(Largest <= Count[Counter])
     {
        Largest = Count[Counter];
     }
   }
  }
print("The maximum of " + n + " numbers is " + Largest + ".");