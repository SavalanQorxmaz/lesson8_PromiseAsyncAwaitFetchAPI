// async method>>>>>>>>>>>>>>>

// async function posts(){
//     const post = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//     const postJson =await post.json();
//     console.log(postJson)
// }

// posts()


// promise method>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function postsPromise(){
//     return new Promise((resolve, reject)=>{

//         const post = fetch(`https://jsonplaceholder.typicode.com/photos`).then((response)=>{
// return response.json()
//         })
    

//         resolve(post)


//     })
// }

// postsPromise()
// .then((result)=>{
//     result = result.slice(0,100)
//     console.log(result)
// })



const container = document.querySelector(".container");



let card = ( src, title, thumbnailUrl) => {
    return `

    <div class="card">
        <img src="${src}" alt="img">
        <h2>${thumbnailUrl}</h2>
        <p>${title}</p>
    </div>
    `
}


const objects = ()=>{
    return new Promise((resolve, reject) => {
        const db = fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((result => result.json()))
        resolve(db)

    })
}


objects()
.then((value) => {
   value = value.slice(0,100);
   console.log(value[0])
   
   value.forEach(element => {
    container.innerHTML += card(element.url, `${element.thumbnailUrl.slice(0,10)}...`, `${element.title.slice(0,28)}...`)
   });
})

