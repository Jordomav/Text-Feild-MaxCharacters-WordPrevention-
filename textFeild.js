/**
 * Created by JordanMavrogeorge on 2/26/16.
 */
//Change maxAmount to alter the max number of characters
var maxAmount = 250;
function textCounter(textField, showCountField) {
    if (textField.value.length > maxAmount) {
        textField.value = textField.value.substring(0, maxAmount);
    } else {
        showCountField.value = maxAmount - textField.value.length;
    }
}

function clean(el){
    var textfield = document.getElementById(el);
    //change 'hello' to alter what words or characters are not allowed
    var regex = /hello/g;
    if(textfield.value.search(regex) > -1) {
        textfield.value = textfield.value.replace
            //change 'bye' to alter what replaces 'hello'. leave blank if you wish for it to not be replaced.
        (regex, "bye");
    }
}