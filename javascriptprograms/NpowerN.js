 var readln = (typeof readline === 'function') ? (readline) : (function() {
     importPackage(java.io);
     importPackage(java.lang);
     var stdin = new BufferedReader(new InputStreamReader(System['in']));

     return function() {
         return String(stdin.readLine());  // Read line, 
     };                                    // force to JavaScript String
 }());
 print("Enter the number upto which you want the series:");
 LastTerm = parseInt(readln());
var Result = 1;
var Number = 1;
var Counter = 1;
var Series = " ";
for(Result = 1; Result <= LastTerm; Number++){
  Result = 1;
  while(Counter <= Number){
    Result = Result * Number;
    Counter++;
    }
    if(Result <= LastTerm){
      Series += " "+ Result;
      Counter = 1;
    }
  }
  print("The series upto " + LastTerm + " is" + Series + ".");