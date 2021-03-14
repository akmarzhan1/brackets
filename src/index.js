module.exports = function check(str, bracketsConfig) {
    let open_brackets = [];
    let close_brackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        open_brackets[i] = bracketsConfig[i][0];
        close_brackets[i] = bracketsConfig[i][1];
    }

    let array = str.split('');

    for (let i = 0; i < array.length; i++) {
        for (let index in open_brackets) {
            if (array[i] == open_brackets[index]) {
                if (array[i + 1] == close_brackets[index]) {
                    array.splice(i, 2);
                    i = -1;
                    break;
                }
            }
        }
    }
    if (array.length == 0) {
        return true;
    } else {
        return false
    }
}
