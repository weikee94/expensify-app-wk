const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 成功的时候
        // resolve({
        //     name: 'Wk',
        //     age: 24,
        // })
        // 失败的时候
        reject('Something went wrong!');
    }, 3000);
});

console.log('before');

// register callback
promise.then((data) => {
    // then成功
    console.log(data);
}).catch((error) => {
    // catch失败
    console.log(error);
});

console.log('after');