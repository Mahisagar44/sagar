import java.util.Scanner;

class Main {
    public static void main(String[] args) {
    	
    	Scanner input = new Scanner(System.in);
    	
    	System.out.print("To add two numbers, Enter the first number: ");
    	int NumberOne = input.nextInt();
    	System.out.print("Enter the second number: ");
    	int NumberTwo = input.nextInt();
    	int Sum = NumberOne + NumberTwo;
    	System.out.println("The sum of " + NumberOne + " and " + NumberTwo + " is " + Sum + ".");
    }
}
