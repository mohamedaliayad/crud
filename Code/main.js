//1- Write a program that allow to user enter number then print it
// var number = window.prompt("Enter number");
// window.alert(number);

//2-Write a program that take number from user then print yes if that number can divide by 3
//and 4 otherwise print no
// var number = window.prompt("Enter Number");
// number = Number(number);
// if(number%3==0&&number%4==0){
//     window.alert("Yes")
// }else{
//     window.alert("No")
// }

//3- Write a program that allows the user to insert 2 integers then print the max
// var number1 = Number(window.prompt("Enter Number1"));
// var number2 = Number(window.prompt("Enter Number2"));

// if (number1>number2){
//     window.alert(number1)
// }else{
//     window.alert(number2)
// }

//4-Write a program that allows the user to insert an integer then print negative if it is
//negative number otherwise print positive
// var number = Number(window.prompt("Enter Number"));
// if(number<0){
//     window.alert("negative")
// }else{
//     window.alert("positive")
// }

//5- Write a program that take 3 integers from user then print the max element and the min element.
// var number1 = Number(window.prompt("Enter Number1"));
// var number2 = Number(window.prompt("Enter Number2"));
// var number3 = Number(window.prompt("Enter Number3"));

// if(number1>number2&&number1>number3){
//     window.alert("Max Number is : "+number1)
// }else if(number2>number1&&number2>number3){
//     window.alert("Max Number is : "+number2)
// }else if(number3>number1&&number3>number2){
//     window.alert("Max Number is : "+number3)
// }

// if(number1<number2&&number1<number3){
//     window.alert("Min Number is : "+number1)
// }else if(number2<number1&&number2<number3){
//     window.alert("Min Number is : "+number2)
// }else if(number3<number1&&number3<number2){
//     window.alert("Min Number is : "+number3)
// }


/*another solution
if(int1>int2){
    if(int1>int3){
        alert("Max number is : " + int1);
        if(int2>int3){
            alert("Min number is : " + int3);
        }else{
            alert("Min number is : " + int2);
        }
    }else{
        alert("Max number is : " + int3);
        alert("Min number is : " + int2);
    }
}else{
    if(int2>int3){
        alert("Max number is : " + int2);
        if(int1>int3){
            alert("Min number is : " + int3);
        }else{
            alert("Min number is : " + int1);
        }
    }else{
        alert("Max number is : " + int3);
        alert("Min number is : " + int1);
    }
}*/



//6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// var number = Number(window.prompt("Enter Number"));

// if(number%2==0){
//     window.alert("Nimber "+number+" is Even")
// }else{
//     window.alert("Nimber "+number+" is Odd")
// }

//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
//then print vowel otherwise print consonant
// var char = window.prompt("Enter your char");
// switch (char) {
//   case "a":
//   case "A":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     window.alert("vowel");
//     break;
//     default:
//         window.alert("consonant");
//         break;
// }

//9- Writeaprogram that allows usertoinsertintegerthen printallnumbers between1to that’s number
// var number = Number(window.prompt("Enter number :"));
// for(var i = 1;i<=number;i++){
//     window.alert(i);
// }

//10 - Write a program that allows user to insert integer then print a multiplication table up to 12
// var number = Number(window.prompt("Enter number :"));
// for(var i=1;i<=12;i++){
//     window.alert(i*number);
// }

//11- Writeaprogram thatallows tousertoinsertnumber then printallevennumbers between 1 to this number
// var number = Number(window.prompt("Enter number :"));
// for (var i = 2; i <= number; i += 2) {
//   window.alert(i);
// }

//12 -Writeaprogramthattaketwointegersthenprintthepower
// var number = Number(window.prompt("Enter number :"));
// var power = Number(window.prompt("Enter power :"));
// var result = 1;

// for (var i = 0; i < power; i++) {
//     result*=number;
// }

// window.alert(result);

//12 -Write a program to enter marks of five subjects and calculate total, average and percentage.
// var total =0;
// for(var i =0 ;i<5;i++){
//     total+=Number( window.prompt("Enter mark subject"+(i+1)));
// }

// window.alert("Total marks = "+total);
// window.alert("Avg = "+total/5);
// window.alert("persentage = "+total/500*100);

// 13- Write a program to input month number and print number of days in that month.
// var monthNumber = window.prompt("Enter month number");
// if(monthNumber ==1||monthNumber==3 ||monthNumber==5 ||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
//     window.alert("31")
// }else if(monthNumber ==2){
//     window.alert("28 days in a common year and 29 days in leap years")
// }else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
//     window.alert("30");
// }

//14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// var physicsMark =Number( window.prompt("Enter mark of physics subject"));
// var chemistryMark = Number(window.prompt("Enter mark of Chemistry subject"));
// var biologyMark = Number(window.prompt("Enter mark of Biology subject"));
// var mathematicsMark = Number(window.prompt("Enter mark of Mathematics subject"));
// var computerMark = Number(window.prompt("Enter mark of Computer subject"));

// var persentage = (physicsMark+chemistryMark+biologyMark+mathematicsMark+computerMark)/500*100;

// if(persentage>=90){
//     window.alert("Grade A")
// }else if(persentage>=80){
//     window.alert("Grade B")
// }else if(persentage>=70){
//     window.alert("Grade C")
// }else if(persentage>=60){
//     window.alert("Grade D")
// }else if(persentage>=40){
//     window.alert("Grade E")
// }else if(persentage<40){
//     window.alert("Grade F")
// }

//15 -Write a program to print total number of days in month
// var monthNumber = window.prompt("Enter month number");
// switch (monthNumber) {
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "8":
//   case "10":
//   case "12":
//     window.alert("31");
//     break;
//   case "2":
//     window.alert("28 days in a common year and 29 days in leap years");
//     break;
//   case "4":
//   case "6":
//   case "9":
//   case "11":
//     window.alert("30");
//     break;
// }

//16-Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter your char");
// if(char=='a' || char=='e' || char =='o' ||char=='u'||char=='i'){
//     window.alert("vowel");
// }else {
//     window.alert("consonant");
// }

//17-Write a program to find maximum between two numbers

// var number1 = window.prompt("Enter first number");
// var number2 = window.prompt("Enter sec number");

// switch (number1 > number2) {
//   case true:
//     window.alert(number1);
//     break;
//   case false:
//     window.alert(number2);
//     break;
// }

//18-Write a program to check whether a number is even or odd
// var number = window.prompt("Enter number");
// switch (number % 2 == 0) {
//   case true:
//     window.alert("Even");
//     break;
//   case false:
//     window.alert("odd");
//     break;
// }

//19-Write a program to check whether a number is positive or negative or zero
// var number = Number(window.prompt("Enter number"));
// switch (number > 0) {
//   case true:
//     window.alert("Number is positive");
//     break;
//   case false:
//     switch (number == 0) {
//       case true:
//         window.alert("Zero");
//         break;
//       case false:
//         window.alert("negative");
//         break;
//     }
//     break;
// }

//20- Write a program to create Simple Calculator
// var number1 = Number(window.prompt("Enter first number"));
// var sign = window.prompt("Enter your sign");
// var number2 = Number(window.prompt("Enter sec number"));

// switch (sign) {
//   case "+":
//     window.alert(number1 + number2);
//     break;
//   case "-":
//     window.alert(number1 - number2);
//     break;
//   case "*":
//     window.alert(number1 * number2);
//     break;
//   case "/":
//     window.alert(number1 / number2);
//     break;
// }
