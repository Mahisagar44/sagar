#include <stdio.h>

int main(void) {
  int Counter, Largest, n;
  printf("Enter among how many numbers you want to find the maximum:");
  scanf("%d", &n);
  int Number[n];
  printf("Enter the first number:");
  scanf("%d", &Number[0]);
  for(Counter = 1; Counter <=n-1 ; Counter++)
  {
    printf("Enter the next number:");
    scanf("%d", &Number[Counter]);
  }
  printf("The maximun of %d numbers is ",n);
  Largest = Number[0];
  for(Counter = 0; Counter <= n-1; Counter++)
  {
    for(Counter = 0; Counter <= n-1; Counter++)
    {
      if(Largest <= Number[Counter])
     {
        Largest = Number[Counter];
     }
   }
  }
  printf("%d.", Largest);
  return 0;
}