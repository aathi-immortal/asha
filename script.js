function pali() {
    // var e; var j; f = 0;
    // var n = Number(document.getElementById("n").value);
    // e = n;
    // var sum;
    // while (n > 0) {
    //     j = n % 10;
    //     sum = (sum * 10) + j;
    //     n = n / 10;
    // }
    // if (e == f) {
    //     document.getElementById("l").innerHTML = "palindrome";
    // }
    // else {
    //     document.getElementById("l").innerHTML = "not plalindrome";
    // }
    var inputNumber = document.getElementById("n").value;
    var startIndex = 0;
    var endIndex = inputNumber.length - 1;
    var flag = true;
    while(startIndex < endIndex)
    {
        if(inputNumber[startIndex] != inputNumber[endIndex])
        {
                flag = false;
                break;
        }
        startIndex++;
        endIndex--;
    }
    if(flag)
        document.getElementById("l").innerHTML = "palindrome";
    else
    document.getElementById("l").innerHTML = "not palindrome";



}