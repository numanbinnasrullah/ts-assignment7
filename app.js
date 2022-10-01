// Assignment No 7 : String Exercise
// Name : Numan Nsrullah 
// Roll No MAD-69702
// 1. Write a ts program to find length of a string.
function FindLengthOfSring(str) {
    var breakSpce = str.split(" ");
    return breakSpce.join("").length;
}
var strResult = FindLengthOfSring("hi i am a doctor");
console.log(strResult);
// 2. Write a ts program to copy one string to another string.
function CopyString(str) {
    var copyStr = str.slice();
    return copyStr;
}
var receiveCopyStr = CopyString("my name is numan");
console.log(receiveCopyStr);
// 3. Write a ts program to concatenate two strings.
function ConcatTwoStr(str1, str2) {
    var concateTwoStr = str1.concat(" ", str2);
    return concateTwoStr;
}
var receiveConcatSr = ConcatTwoStr("Helo i am", "Pakistan");
console.log(receiveConcatSr);
// 4. Write a ts program to compare two strings.
function CompareTwoStr(str1, str2) {
    if (str1 === str2) {
        console.log("Strings Are Same");
    }
    else {
        console.log("Strings Are Not Same");
    }
}
CompareTwoStr("Javascript", "javaScript");
// 5. Write a ts program to convert lowercase string to uppercase.
function ConvrtLowerStrToUpper(str) {
    return str.toUpperCase();
}
var receiveUpperCase = ConvrtLowerStrToUpper("pakistan");
console.log(receiveUpperCase);
// 6. Write a ts program to convert uppercase string to lowercase
function ConvrtUpperStrToLower(str) {
    return str.toLowerCase();
}
var receiveLowerCase = ConvrtUpperStrToLower("TYPE SCRIPT");
console.log(receiveLowerCase);
// 7. Write a ts program to toggle case of each character of a string.
function ToogleStr(str) {
    var toogleStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            toogleStr += str[i].toLowerCase();
            console.log(toogleStr);
        }
        else {
            toogleStr += str[i].toUpperCase();
            console.log(toogleStr);
        }
    }
    return toogleStr;
}
var receiveToogleStr = ToogleStr("Hi i am Lahore");
console.log(receiveToogleStr);
// 8. Write a ts program to find total number of alphabets, digits or special character in a string.
function CountAlphaDigitChar(str) {
    str.split(" ");
    var alphaCounter = 0;
    var digitCounter = 0;
    var specialCharCounter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            continue;
        }
        if (str.charAt(i) >= "a" && str.charAt(i) <= "z" || str.charAt(i) >= "A" && str.charAt(i) <= "Z") {
            alphaCounter = alphaCounter + 1;
        }
        else if (str.charAt(i) >= "1" && str.charAt(i) <= "9") {
            digitCounter = digitCounter + 1;
        }
        else {
            specialCharCounter = specialCharCounter + 1;
        }
    }
    console.log("Alphabetic Characyers are ", alphaCounter);
    console.log("Digits are ", digitCounter);
    console.log("SpecialChars are ", specialCharCounter);
}
CountAlphaDigitChar("abc@123");
// 9. Write a ts program to count total number of vowels and consonants in a string.
function CountVowelsConstants(str) {
    str.split(" ");
    var vowelCounter = 0;
    var constantCounter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            continue;
        }
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            vowelCounter = vowelCounter + 1;
        }
        else {
            constantCounter = constantCounter + 1;
        }
    }
    console.log("Vowels are ", vowelCounter);
    console.log("Constants are ", constantCounter);
}
CountVowelsConstants("abcd aedfgu aeiou");
// 10. Write a ts program to count total number of words in a string.
function CountTotalWords(str) {
    var spaceBreak = str.split(" ");
    var lengthOfWords = spaceBreak.filter(function (word) { return word !== ''; }).length;
    console.log("Length of Words in the string is: ", lengthOfWords);
}
CountTotalWords("helo i am pakistan");
// 11. Write a ts program to find reverse of a string.
function reverseOfString(str) {
    var newString = "";
    for (var i_1 = str.length - 1; i_1 >= 0; i_1--) {
        newString += str[i_1];
    }
    return newString;
}
var result = reverseOfString("my name");
console.log(result);
// 12. Write a ts program to check whether a string is palindrome or not.
function checkPalindrome(string) {
    var len = string.length;
    for (var i_2 = 0; i_2 < len / 2; i_2++) {
        if (string[i_2] !== string[len - 1 - i_2]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
var value = checkPalindrome("abcdcba");
console.log(value);
// 13. Write a ts program to reverse order of words in a given string
function ReverseOrderOfWords(str) {
    var rb = str.split(" ");
    var filterjustWord = rb.filter(function (word) { return word !== ''; });
    console.log("Length of Words in the string is: ", filterjustWord.reverse().join(" "));
}
ReverseOrderOfWords("helo i am pakistan");
// 14. Write a ts program to find first occurrence of a character in a given string.
function FindFirstOccuranceOfChar(str) {
    var strPos = str.indexOf("on");
    console.log(strPos);
}
FindFirstOccuranceOfChar("We got a poop cleanup on isle 4.");
// 15. Write a ts program to find last occurrence of a character in a given string.
function LastOccuranceOfChar(str) {
    var strPos = str.lastIndexOf("good");
    console.log(strPos);
}
LastOccuranceOfChar("helo good morging i am also good How are you.");
// 16. Write a ts program to search all occurrences of a character in given string.
var str = "goodneoss";
var Occurance = [];
for (var i = 0; i < str.length; i++) {
    if (str[i] == "o") {
        Occurance.push(i);
    }
}
console.log("indexes ", Occurance);
// 17. Write a ts program to count occurrences of a character in given string.
var str = "goodneoss";
var Occurance = [];
for (var i = 0; i < str.length; i++) {
    if (str[i] == "o") {
        Occurance.push(i);
    }
}
console.log("Total Number of Occurance:", Occurance.length);
// 18. Write a ts program to find highest frequency character in a string.
var FindHighestFreq = function (str) {
    var max = 0, maxChar = '';
    str.split('').forEach(function (char) {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
};
var receiveHighest = FindHighestFreq('355385'); //5;
console.log(receiveHighest);
//    19. Write a ts program to find lowest frequency character in a string.
var counter = function (str) {
    return str.split('').reduce(function (total, letter) {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};
var receiverFrequency = counter("aabsssd");
console.log(receiverFrequency);
// 20. Write a ts program to count frequency of each character in a string.
var FindEachFrequency = function (str) {
    return str.split('').reduce(function (total, letter) {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};
var receiveEachFrq = FindEachFrequency("aabsssd");
console.log(receiveEachFrq);
// 21. Write a ts program to remove first occurrence of a character from string.
function remove_first_occurrence(str, searchstr) {
    var index = str.indexOf(searchstr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_first_occurrence("typescript", 'p'));
// 22. Write a ts program to remove last occurrence of a character from string.
function remove_last_occurrence(str, searchstr) {
    var index = str.lastIndexOf(searchstr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_last_occurrence("javascript", 'a'));
// 23. Write a ts program to remove all occurrences of a character from string.
var str = "goodneoss";
var newStr = " ";
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "o") {
        continue;
    }
    newStr += str.charAt(i);
}
console.log(newStr);
// 24. Write a ts program to replace first occurrence of a character with another in a string.
var mystr = 'hello world';
var replaceFirst = mystr.replace(/l/, 'k');
console.log(replaceFirst);
// 26. Write a ts program to replace last occurrence of a character with another in a string.
var myNewstr = 'Hello World';
var lastIndex = myNewstr.lastIndexOf('l');
var replacement = '#';
var replaced = myNewstr.substring(0, lastIndex) + replacement + str.substring(lastIndex + 1);
console.log(replaced);
// 27. Write a ts program to replace all occurrences of a character with another in a string.
var message = 'javascript';
var myresult = message.replace(/a/g, 'A');
console.log(myresult);
// 28. Write a ts program to find first occurrence of a word in a given string.
function FindFirstOccuranceWord(str1, str2) {
    var BSpace = str1.split(" ");
    for (var i = 0; i < BSpace.length; i++) {
        if (BSpace[i] == str2) {
            console.log(i);
            break;
        }
    }
    return BSpace;
}
var receiveFirstWordOccur = FindFirstOccuranceWord("helo my name is john my age is 22", "is");
// 29. Write a ts program to find last occurrence of a word in a given string.
function FindLastOccuranceWord(str1, str2) {
    var BSpace = str1.split(" ");
    for (var i = BSpace.length; i >= 0; i--) {
        if (BSpace[i] == str2) {
            console.log(i);
            break;
        }
    }
    return BSpace;
}
var receiveFirstWordOccur = FindLastOccuranceWord("helo my name is john my age is 22", "is");
// 30. Write a ts program to search all occurrences of a word in given string.
function FindAllOccuranceWord(str1, str2) {
    var BSpace = str1.split(" ");
    for (var i = 0; i >= 0; i++) {
        if (BSpace[i] == str2) {
            console.log("What's present on index No:", i);
        }
    }
    return BSpace;
}
var receiveFirstWordOccur = FindAllOccuranceWord("helo What's your name What's job you are doing", "What's");
console.log(receiveFirstWordOccur);
// 31. Write a ts program to count occurrences of a word in a given string.
function FindOccuranceOfWord(str1, str2) {
    var BSpace = str1.split(" ");
    var OccuranceCounter = 0;
    for (var i = 0; i < BSpace.length; i++) {
        if (BSpace[i] == str2) {
            OccuranceCounter = OccuranceCounter + 1;
        }
    }
    return OccuranceCounter;
}
var receive_WordOccur = FindOccuranceOfWord("he is my friend he is very nice person he is noble", "he");
console.log(receive_WordOccur);
// 32. Write a ts program to remove first occurrence of a word from string.
function remove_first_occurrence_word(str, searchstr) {
    var index = str.indexOf(searchstr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_first_occurrence_word("you can do it if you can work hard", 'you'));
// 33. Write a ts program to remove last occurrence of a word in given string.
function remove_last_occurrence_word(str, searchstr) {
    var index = str.lastIndexOf(searchstr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_last_occurrence_word("i am a boy i am a student i am hard working", 'am'));
// 34. Write a ts program to remove all occurrence of a word in given string.
function remove_All_occurrence_word(str, removestr) {
    var splitstr = str.split(" ");
    var filterStr = splitstr.filter(function (word) {
        return word !== removestr;
    });
    console.log(filterStr.join(" "));
}
remove_All_occurrence_word("i am a boy i am a student i am hard working", 'am');
// 35. Write a ts program to trim leading white space characters from given string.
function removeLeadingSpace(str) {
    var removeLeadingSpace = str.trimStart();
    console.log(removeLeadingSpace);
}
removeLeadingSpace("       helo how are you");
// 36. Write a ts program to trim trailing white space characters from given string.
function removeTrailingSpace(str) {
    var removeLeadingSpace = str.trimEnd();
    console.log(removeLeadingSpace);
}
removeTrailingSpace("helo how are you     ");
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
function removeAllSpace(str) {
    var removeLeadingSpace = str.trim();
    console.log(removeLeadingSpace);
}
removeAllSpace("      helo how are you     ");
// 38. Write a ts program to remove all extra blank spaces from given string.
function removeExtraBlanckSpaces(str) {
    var RemoveExtraBlank = str.split(" ");
    var filterExtraBlank = RemoveExtraBlank.filter(function (removeBlank) {
        return removeBlank !== "";
    });
    return filterExtraBlank.join(" ");
}
var receiveRemoveExtraBlank = removeExtraBlanckSpaces("helo    i am  pakistan");
console.log(receiveRemoveExtraBlank);
// **********************conditional operators programming exercises***************************
// 1. Write a ts program to find maximum between two numbers using conditional operator.
function FindMax(num1, num2) {
    if (num1 > num2) {
        var max = "Max Number is nummber ".concat(num1);
        return max;
    }
    else {
        var max = "Max Number is nummber ".concat(num2);
        return max;
    }
}
var receiveMax = FindMax(10, 50);
console.log(receiveMax);
// 2. Write a ts program to find maximum between three numbers using conditional operator.
function FindMaxBtwThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        var max = "Max Number is nummber ".concat(num1);
        return max;
    }
    else if (num2 > num1 && num2 > num3) {
        var max = "Max Number is nummber ".concat(num2);
        return max;
    }
    else {
        var max = "Max Number is nummber ".concat(num3);
        return max;
    }
}
var receiveMax = FindMaxBtwThree(100, 50, 70);
console.log(receiveMax);
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
function CheckNumEvnOdd(num) {
    if (num % 2 == 0) {
        console.log("it's Even Number");
    }
    else {
        console.log("it's Odd Number");
    }
}
CheckNumEvnOdd(50);
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYear(2018);
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.
function CheckCharIsAlphaOrDigit(str) {
    if (str >= "A" && str <= "Z" || str >= "a" && str <= "z") {
        console.log("Yes ...! Character is Alphabet:", str);
    }
    else {
        console.log("OOOPpsss ...! This is Not an Alphabet:", str);
    }
}
CheckCharIsAlphaOrDigit("h");
// *******************List of switch case programming exercises********************
// 1. Write a ts program to print day of week name using switch case.
function PrintWeekDay(WeekDay) {
    switch (WeekDay) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Fridat");
            break;
        case 6:
            console.log("Staurday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Please Enter Valid Week Day Number Which is Exactly Between 1 to 7");
    }
}
PrintWeekDay(6);
// 2. Write a ts program print total number of days in a month using switch case.
var year = 2016;
var month = 6;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        // leap year
        if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
            dayCount = 29;
        }
        else {
            dayCount = 28;
        }
        break;
    default:
        dayCount = -1;
}
console.log(dayCount);
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
function findAlphaOrConstant() {
    var alpha = "k";
    switch (alpha) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return console.log("it's vowel");
        default:
            return console.log("it's Constant");
    }
}
findAlphaOrConstant();
// 4. Write a ts program to find maximum between two numbers using switch case.
var numOne = 5;
var numTwo = 10;
switch (true) {
    case (numOne > numTwo):
        console.log("Bigger number is ".concat(numOne));
        break;
    case (numOne < numTwo):
        console.log("Bigger number is ".concat(numTwo));
        break;
    default: console.log(false, '-> Something went wrong');
}
// 5. Write a ts program to check whether a number is even or odd using switch case.
var enteredNumber = 40;
switch (enteredNumber % 2) {
    case 0:
        console.log(enteredNumber + " is an even number.");
        break;
    case 1:
        console.log(enteredNumber + " is an odd number.");
        break;
    default:
        console.log("Invalid input");
}
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
var requiredNumber = -17;
switch (Number(requiredNumber > 0)) {
    case 1:
        console.log(requiredNumber, "num is Positive");
        break;
    case 0:
        switch (Number(requiredNumber < 0)) {
            case 1:
                console.log(requiredNumber, "num is Negative");
                break;
            case 0:
                console.log(requiredNumber, "num is Zero");
                break;
        }
}
// 7. Write a ts program to find roots of a quadratic equation using switch case.
function QuadraticEquation(num1, num2, num3) {
    var a = num1;
    var b = num2;
    var c = num3;
    var root1, root2, imaginary;
    var discriminant;
    discriminant = (b * b) - (4 * a * c);
    switch (Number(discriminant > 0)) {
        case 1:
            /* If discriminant is positive */
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            console.log("Two distinct and real roots exists:", root1, root2);
            break;
        case 0:
            /* If discriminant is not positive */
            switch (Number(discriminant < 0)) {
                case 1:
                    /* If discriminant is negative */
                    root1 = root2 = -b / (2 * a);
                    imaginary = Math.sqrt(-discriminant) / (2 * a);
                    console.log("Two distinct complex roots exists:", root1, imaginary, root2, imaginary);
                    break;
                case 0:
                    /* If discriminant is zero */
                    root1 = root2 = -b / (2 * a);
                    console.log("Two equal and real roots exists:", root1, root2);
                    break;
            }
    }
}
QuadraticEquation(34, 14, 6);
// 8. Write a ts program to create Simple Calculator using switch case.
function Calculater(num1, num2, oprtr) {
    var result;
    switch (oprtr) {
        case '+':
            result = num1 + num2;
            console.log("".concat(num1, " + ").concat(num2, " = ").concat(result));
            break;
        case '-':
            result = num1 - num2;
            console.log("".concat(num1, " - ").concat(num2, " = ").concat(result));
            break;
        case '*':
            result = num1 * num2;
            console.log("".concat(num1, " * ").concat(num2, " = ").concat(result));
            break;
        case '/':
            result = num1 / num2;
            console.log("".concat(num1, " / ").concat(num2, " = ").concat(result));
            break;
        default:
            console.log('Invalid operator');
            break;
    }
}
Calculater(3, 5, "+");
