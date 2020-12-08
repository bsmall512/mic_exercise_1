//Exercise #1: Palindrome Checker
function palindromeChecker(str){
    let justChars = str.toLowerCase().replace(/[^a-z]/g, '').split('');
    return justChars.join('') === justChars.reverse().join('');
}