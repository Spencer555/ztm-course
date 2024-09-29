// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Success");
});

// #2) Run the above promise and make it console.log "success"

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// #4) Catch this error and console log 'Ooops something went wrong'
const promise1 = new Promise((resolve, reject) => {
  false ? setTimeout(resolve, 4000, "Success") : reject("this");
}).catch(() => console.log("Ooops"));

Promise.reject("failed");

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(results[3]);
  })
  .catch(() => {
    console.log("error");
  });

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
yes