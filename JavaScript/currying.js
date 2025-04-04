const name = (firstName) => {
    return (midName) => {
        return (lastName) => {
            return `${firstName} ${midName} ${lastName}`
        }
    }
}
console.log(name("venna")("chandra sekhar")("reddy"))
const first = name("venna");
const second = first("chandra sekhar");
console.log(second("reddy"));
const nameShorter = first => second => last => `${first} ${second} ${last}`;

console.log(nameShorter("hi")("karthik")("reddy"))