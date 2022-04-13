// create a fetch
const ramenUrl = ('http://localhost:3000/ramens')

const fetchRamen = () => {
    fetch (ramenUrl)
        .then (res => res.json())
        .then (ramenpic => addRamenPic(ramenpic))
}

function addRamenPic(ramenpic){
   const ramenImgSrc = ramenpic.forEach((object) => {
       const objectImage = object.image //printing out image tags invidivually 
       const img = document.createElement('img')

       img.src = objectImage //printing out img src ="./link"

       const ramenMenu = document.getElementById('ramen-menu')
       ramenMenu.append(img)
   })}


const functionThing = (e) => {
    e.preventDefault()
    const details = document.getElementById('ramen-detail')
    //details is logging divs with the id of ramen detail
    // console.log(details)
    const h2 = document.getElementsByClassName('name')
    const h3 = document.getElementsByClassName('restaurant')
    const rating = document.getElementById('rating-display')
    //rating is logging rating-display div, but not text content
    const userRating = rating.textContent
    const comment = document.getElementById('comment-display')
    const userComment = comment.textContent
    const newLi = document.createElement('li')
    newLi.append(userRating)
    // alert(userRating, userComment, h2, h3)
    //userRating is logging 'insert rating here'
    // alert()
    
    
}

const menu = document.getElementById('ramen-menu')
menu.addEventListener('click', functionThing)
// const displayData = (e) => {
//     console.log(e)
//     const detail = document.getElementById('ramen-menu')
//     alert(detail)
// }

//    document.getElementById("myBtn").addEventListener("click", displayDate);
// objectImage.addEventListener('click', displayData)

    //    img.addEventListener('click', function()
    // )
// const displayData = (e) => {
//     // console.log(e)
// }

// add event listener, click event for image
// objectImage.addEventListener('click', displayData)


fetchRamen()
//     //for each object in this array of ramen, I need to get image key and add value to 
//     //within the ramen-menu id add the images of ramen
// }
//grab ramen images 
//create image tag for each ramen image
// and append to ramen image to div