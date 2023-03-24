// Regular Expression or regex is basically a sequence of characters indicating a pattern. With the help of this pattern, we can search or match with other strings which follow the pattern indicated.

//  /hello/ : Matches any string pattern which consists atleast 1 exact "hello" pattern in it.

//  /h[abc]llo/ : "h[any one among a, b, c]llo"

//  /h[^abc]llo/ : "h[any single character except a, b, c]llo"

//  /c[a]+r/ : "+" quantifier checks if there is at least one 'a' after 'c'. More than one 'a's is not a problem. Matches -- car, caaar, caaaaaaaaar

//  /c.r/ : "." means any character on keyboard except newline(enter).

// /bat|cat/: "|" is "or" expression. Matches any one of 'bat' or 'cat'.

// /Ma(nn|tt)er/: Ma(nn|tt)er matches "Matter" or "Manner". It HAS TO BE either nn or tt.

// /^an/: To match, pattern must start with 'an'. Matches with: "ant", "ankle". Does not match: "man", "plan".

// /an$/: To match, pattern must end with 'an'. /an$/ matches "man","plan". Does not match "ant","ankle".

// /Ba?it/: 'a' is allowed 0 or 1 more time. Ba?it matches "Bait" and "Bit"

// /Ba*it/: 'a' is allowed 0 or any number of times. Matches with 'Bit', 'Bait', 'Baaait'.

// /Ba+it/: 'a'must come one or more time. Matches with 'Bait', 'Baaaait'.

// /10{4}1/: Matches the preceding element exactly m times. 10{4}1 matches"100001"

// /10{3,}1/: Matches the preceding element m or more time. 10{4,}1 matches "10001","100001"etc

// /xy{2,3}z/: Matches the preceding element  minimum m times and maximum n times. xy{2,3}z matches "xyyz" and "xyyyz".

// Predefined Classes
//******************* */
//   \w  : Alphanumeric characters and the underscore	[A_Z a-z0-9_]
//   \W  : Non-word characters	[^A_Z a-z0-9_]
//   \d	: Digits	[0-9]
//   \D	: Non-Digits	[^0-9]      

// Escaping characters that have special meaning :
// *************************************************
// To escape any characters which has special meaning just prefix it by '\' . For example, \$ indicates escape the special meaning of $ and treat it as a regular character.

// Usage:
//*******/

function validateName(name){
    if(name.match(/\$/)){
        return false;
    }
    else {
        return true;
    }
}