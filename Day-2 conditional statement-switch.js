/*
Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set{a,e,i,o,u} , then return A.
If the first character in string  is in the set{b,c,d,f,g} , then return B.
If the first character in string  is in the set{h,j,k,l,m} , then return C.
If the first character in string  is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
*/
function getLetter(s) {
    let letter;
    let firstCharacter = s.charAt(0);


    if (firstCharacter == "a" || firstCharacter == "e" || firstCharacter == "i" ||
        firstCharacter == "o" || firstCharacter == "u") {
        letter = "A";
    }
    else if (firstCharacter == "b" || firstCharacter == "c" ||
        firstCharacter == "d" || firstCharacter == "f" || firstCharacter == "g") {
        letter = "B";

    }
    else if (firstCharacter == "h" || firstCharacter == "j" ||
        firstCharacter == "k" || firstCharacter == "l" || firstCharacter == "m") {
        letter = "C";

    }
    else {
        letter = "D";
    }

    return letter;
}
// console.log(getLetter("xab"));


function main() {
    const s = readLine();

    console.log(getLetter(s));
}