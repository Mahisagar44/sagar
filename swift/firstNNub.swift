print("To print first n natural numbers, Enter the number:", terminator: "")
var Number = Int(readLine()!)!
print("The first \(Number) natural numbers are", terminator: "")
for Counter in 1...Number{
  print(" \(Counter)", terminator: "")
}
print(".")