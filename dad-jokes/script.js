 const jokeElements = document.getElementById('joke')
 const jokeBtn = document.getElementById('jokeBtn')
 
 jokeBtn.addEventListener('click', generateJoke)
 generateJoke()

 //using ASYNC/AWAIT
 
 async function generateJoke() {
  const config = {
    headers:{
      'Accept': 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com/', config)
  const data = await res.json()
  jokeElements.innerHTML = data.joke
  
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//using .then
///Async/await and then() are very similar. The difference is that in an async function, JavaScript will pause the function execution until the promise settles. With then() , the rest of the function will continue to execute but JavaScript won't execute the . then() callback until the promise settles.


//  function generateJoke() {
//     const config = {
//       headers:{
//         'Accept': 'application/json'
//       }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//     .then(res=> res.json())
//     .then(data => {
//       jokeElements.innerHTML = data.joke    
//     })
//  }
