#include <stdio.h>

int main(void) {
  int LastTerm, Counter, Result = 1, Number = 1, Count;
  printf("Enter the number upto which you want the series:");
  scanf("%d", &LastTerm);
  printf("The series upto %d is", LastTerm);
  for(; Result <= LastTerm; )
  {
    Result = 1;
    for(Counter = 1; Counter <= Number; Counter++)
    {
       Result = Result * Number;
    }
    if(Result <= LastTerm)
    {
    printf(" %d", Result);
    Number++;
    }
  }
  printf(".");
  return 0;
}