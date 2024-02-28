randomNumberTimeout(10, 100);
simulateServerResponse("piotr");
function randomNumberTimeout(count, waitTime, currentIndex = 0) {
    if (currentIndex < count) {
        let timeout=setTimeout(() => {
            console.log(Math.floor(Math.random() * 10));
            randomNumberTimeout(count, waitTime, currentIndex + 1);
            clearTimeout(timeout);
        }, waitTime);
    }
}



function simulateServerResponse(name){
    let interval = setInterval(()=>{
        console.log("welcone:"+name+'!');
    },1000)
}