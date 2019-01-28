import java.util.Scanner;

class Main {
    public static void main(String[] args) {
    	int Number, Counter = 1, Result = 1, Multiple = 1;
    	Scanner input = new Scanner(System.in);
    	System.out.print("Enter the number how many times you want to multiply the same number with itself:");
    	Number = input.nextInt();
    	for(Counter = 1; Counter <= Number; Counter++)
    	{
    	  Multiple = Number * Multiple;
    	}
    	System.out.print(" Multiplicating " + Number + " with " + Number + " times gives " + Multiple + ".");
    }
}