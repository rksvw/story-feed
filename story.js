let arr = [{
    dp: 'https://www.rizzgpt.app/_next/image?url=https%3A%2F%2Frizz-public-assets.s3.us-west-2.amazonaws.com%2Fimages%2F048e1845-5acf-42b4-bd99-503511868451.png&w=3840&q=75',
    story: 'https://images.alphacoders.com/131/thumb-1920-1316829.png'
},
{
    dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKUWaJyySf79k2MZD-w7ikA3PXaQHjGzmvA&usqp=CAU',
    story: 'https://ricedigital.co.uk/wp-content/uploads/2022/11/palmsiberia-850x480.jpg'
},
{
    dp: 'https://waifus.wiki/wp-content/uploads/2022/01/akeno-himejima-1.jpg',
    story: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqgGlk9fWBmYatM0YyXwSy6_BS1NAeWrus4V0_nCq5aslfJSFk_btpiuxiNeUd6sMGwU&usqp=CAU'
},
{
    dp: 'https://w0.peakpx.com/wallpaper/129/965/HD-wallpaper-anime-overlord-shalltear-bloodfallen.jpg',
    story: 'https://pbs.twimg.com/media/DhoBlnnVQAAiGdf?format=jpg&name=4096x4096'
},
{
    dp: 'https://media.comicbook.com/2019/07/one-piece-robin-wano-anime-1177016.jpeg?auto=webp',
    story: 'https://i.pinimg.com/474x/37/46/21/374621d0f66a27cf87900929418fe928.jpg'
}
]
let storiyan = document.querySelector("#storiyan");
let clutter = ""
arr.forEach(function(elem, idx){
    clutter += ` <div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

document.querySelector(".storiyan").innerHTML = clutter;
storiyan.addEventListener("click", function(dets) {
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    // let value = arr[dets.target.id].story;
    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none";
    }, 3000);
})

// pointerevent handlers are called when the user clicks on the marker






// Typography

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@200&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>

// font-family: 'Inter', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;