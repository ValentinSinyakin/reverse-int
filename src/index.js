module.exports = function reverse (n) {

    let arr = Array.from(String(Math.abs(n)), Number);
    arr.reverse();
    let result = arr.join('');
    return result;
}
