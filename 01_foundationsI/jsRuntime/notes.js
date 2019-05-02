// ------------------------------
// JavaScript Runtime
// ------------------------------
console.log('1');
setTimeout(() => { console.log('2'), 0 });
console.log('3');

function achieveNirvana() {
    console.log('You are enlightened');
}

function c() {
    setTimeout(achieveNirvana, 3000);
}

function b() {
    c();
}

function a() {
    b();
}

// a();

setTimeout(() => {console.log('1', 'is the lonliest number')}, 0);
Promise.resolve('hi').then(() => console.log('2'));
console.log('3', 'is a crowd');
