function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation with setTimeout
        setTimeout(() => {
            resolve('Response from API');
        }, 1000);
    });
}

export default getResponseFromAPI;
