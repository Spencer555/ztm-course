const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000)
})


const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(reject, 3000)
})

// promise.all resoves only if all promise are successfull unless u add catch
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)).catch((e) => console.log(e))

// promise.allSettled does not care about resolve and reject it runs all promises regardless of wheather they reject or no
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch((e) => console.log(e))