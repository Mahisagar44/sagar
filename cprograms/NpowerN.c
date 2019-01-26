#include <stdio.h>

int main(void) {
  int Number, Counter, Product = 1;
  printf("Enter the number how many times you want to multiply the same number with itself:");
  scanf("%d", &Number);
  for(Counter = 1; Counter <= Number; Counter++)
  {
    Product = Product * Number;
  }
  printf("Multiplicating %d with %d times is %d.", Number, Number, Product);
  return 0;
}