// Yuck.  A global variable.  But, this is quick and dirty.
var testCountRun = 0;

function charDiff(str1, str2) {
    var index=0;
    while (index < str1.length && index < str2.length) {
        if (str1.charAt(index) != str2.charAt(index)) {
            return index;
        }
        ++index;
    }
    return 0;
}

function assertEquals(expected, actual, message) {
	++testCountRun
    if (expected !== actual) {
        var str = "Expected:\n'" + expected + "'\nBut got:\n'" + actual + "'\n";
        if (message) {
            str += "\n" + message + "\n";
        }
        str += "\nDifferent at position: " + charDiff(expected, actual) ;
        alert(str);
        return 0;
    }
    return 1;
}

function onClickTests() {
    var passed = 0;
	testCountRun = 0;
    
    passed += assertEquals(
       "78,111,32,101,110,99,114,121,112,116,105,111,110,32,107,101,121,46",
        encrypt("No encryption key.", ""),
        "Encryption with zero-length key failed.");

    passed += assertEquals(
       "42,69,10,2,8,9,7,0,89,31,0,1,31,75",
        encrypt("A simple text.", "key"),
        "Encryption with simple key failed");
    
    passed += assertEquals(
       "7,13,7,19,72,18,14,35,27,11,67,14,2,10,97,17,23,23,13,15,77,53,12,15,17,28,76,15,38,13,82,14,29,19,77,42,8,26,11,10,30,29,97,0,0,14,29,6,5,56,73,8,12,29,24,6,97,13,28,65,28,9,4,63,73,13,12,1,24,7,47,7,28,21,68,65,12,108,7,11,20,79,2,15,53,11,29,15,68,65,14,35,7,13,6,6,26,11,37,66,27,15,72,45,4,46,12,28,23,22,64,78,32,12,22,65,12,4,9,37,10,15,23,10,8,78,53,13,82,21,0,4,77,60,27,1,19,0,31,7,53,11,29,15,72,21,5,45,29,78,2,3,0,78,44,7,28,65,9,19,8,108,10,28,6,14,24,11,37,66,23,16,29,0,1,98",
       encrypt("Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.", "AbrahamLincoln"),
       "Encryption with long key failed.");
        
    passed += assertEquals(
        "No encryption key.",
        decrypt("78,111,32,101,110,99,114,121,112,116,105,111,110,32,107,101,121,46", ""),
        "Decryption failed with zero-length key failed.");

    passed += assertEquals(
        "A simple text.",
        decrypt("42,69,10,2,8,9,7,0,89,31,0,1,31,75", "key"),
        "Decryption with simple key failed.");

    passed += assertEquals(
        "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
        decrypt("7,13,7,19,72,18,14,35,27,11,67,14,2,10,97,17,23,23,13,15,77,53,12,15,17,28,76,15,38,13,82,14,29,19,77,42,8,26,11,10,30,29,97,0,0,14,29,6,5,56,73,8,12,29,24,6,97,13,28,65,28,9,4,63,73,13,12,1,24,7,47,7,28,21,68,65,12,108,7,11,20,79,2,15,53,11,29,15,68,65,14,35,7,13,6,6,26,11,37,66,27,15,72,45,4,46,12,28,23,22,64,78,32,12,22,65,12,4,9,37,10,15,23,10,8,78,53,13,82,21,0,4,77,60,27,1,19,0,31,7,53,11,29,15,72,21,5,45,29,78,2,3,0,78,44,7,28,65,9,19,8,108,10,28,6,14,24,11,37,66,23,16,29,0,1,98", "AbrahamLincoln"),
        "Decryption with long key failed.");
        
    alert("Passed " + passed + " of " + testCountRun + " tests.");
}