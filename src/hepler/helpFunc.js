export const priceCount = (count, price) => count*price
export const prettify = num => {
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}