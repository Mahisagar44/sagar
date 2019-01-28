var readln = (typeof readline === 'function') ? (readline) : (function() {
     importPackage(java.io);
     importPackage(java.lang);
     var stdin = new BufferedReader(new InputStreamReader(System['in']));

     return function() {
         return String(stdin.readLine());  // Read line, 
     };                                    // force to JavaScript String
 }());
System.out.print("How many terms you want in the series?");
NoOfTerms = parseInt(readln());
var Number = 1;
var Counter = 1;
var Result = 1;
var Series = " ";
for (Counter = 1; Counter <= NoOfTerms; Counter++){
  Counter = 1;
  while(Counter <= Number){
    Result = Result * Number;
    Counter = Counter + 1;
  }
  Counter = Counter - 1;
  if(Counter <= NoOfTerms){
    Series += " " +Result;
    Number = Number + 1;
    Result = 1;
  }
}
print("The " + NoOfTerms + " terms in the series are" + Series + ".");
      