/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
console.log(numbers);*/

//Callback function example
function greet(callback) {
    setTimeout(() => {
        callback('Hello, World!');
    }, 1000);
}

function displayMessage(message) {
    console.log(message);
}
greet(displayMessage);

//Promise example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchData = true;
            if (fetchData == true){
                // Simulate successful fetch
                resolve('data received');
            } 
            else {
                // Simulate fetch error
                reject('Error fetching data');
            }
        }, 2000);
    });
}
fetchData()
    .then(data => {
        console.log('Data fetched:', data); 
    })
    .catch(error => {
        console.error(error); 
    });

//Async/Await example
async function getData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
getData();

    