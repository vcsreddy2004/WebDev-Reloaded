// Functional Programming

// Offten uses  pipe and compose = higher order functions

// A higher order function is any function which takes a function as  an argument, returns a function or both

// compose functions executes from right to left
let multiplyBy5 = (x) => x*5;
let add5 = (x) => x+5;
let compose = (...fns) => val => fns.reduceRight((prev,fn)=> fn(prev),val);
let composeLong = (...fns) => {
    return (val) => {
        return fns.reduceRight((prev,fn)=>{
            return fn(prev);
        },val);
    }
}
console.log(compose(multiplyBy5,add5)(10));
console.log(composeLong(multiplyBy5,add5)(10));

// pipe functions  executes from left to right  
let pipe = (...fns) => val => fns.reduce((prev,fn)=> fn(prev),val);
console.log(pipe(multiplyBy5,add5)(10));

let para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat similique illum quibusdam explicabo
magnam beatae distinctio hic ad voluptas? Animi hic expedita necessitatibus reprehenderit, dolore inventore voluptatem, 
eius eligendi in quos aut neque mollitia suscipit aliquam aspernatur maxime praesentium omnis tempore. Molestias ipsum 
fugiat dolores ratione eum quasi voluptate eligendi ad? Dicta nostrum aliquid praesentium tenetur culpa atque ex quo 
nulla nisi expedita impedit numquam veniam provident facere esse facilis assumenda aperiam labore, incidunt rerum 
distinctio recusandae debitis tempore. Facilis nemo id illo commodi iusto assumenda deserunt, in quae molestias eaque,
dolores quibusdam ab exercitationem nisi vero cupiditate nihil voluptates sint porro ratione, eum qui ea eligendi. 
Ipsa rem minus voluptas dolorem qui ducimus ad cumque odio, deleniti corporis, deserunt eius fugit voluptatum quasi 
veritatis magnam eligendi consequatur dolorum expedita ipsum sunt quia. Iure autem beatae similique consequatur. 
Vitae ut consectetur saepe quia maiores unde voluptate omnis harum et! Fugit temporibus voluptate nesciunt atque 
beatae natus saepe ducimus architecto obcaecati dolorum rerum voluptates, amet vitae necessitatibus libero at 
consequuntur explicabo, harum eius veniam sapiente expedita quisquam iusto deserunt? Quia, tempora dicta dolorum 
officia commodi aegs thdn hd`;

const splitWords = (para) => para.split(" ");
const countWords = (words) => words.length;
const wordsCount = pipe(splitWords,countWords);
console.log(wordsCount(para));