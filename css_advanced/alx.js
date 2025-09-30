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

//API


function getBoredActivity () {
    fetch('https://bored-api.appbrewery.com/', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer <your_token>',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New Data',
        description: 'Important information'
    }) // it should be changed to string
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); 
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});


async function fetchData() {
  try {
    const response = await fetch('https://bored-api.appbrewery.com/');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); 
    console.log('Success:', data); 
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

document.getElementById('fetchActivity').addEventListener('click', getBoredActivity);
}
