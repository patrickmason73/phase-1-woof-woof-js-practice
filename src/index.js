

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then((data) => {
        data.forEach(element => {
            let dogName = document.createElement('span')
            let dogBar = document.getElementById('dog-bar')
            dogName.textContent = element.name
            dogBar.append(dogName)
            console.log(element)
            dogName.addEventListener('click', () => {
                
                let dogInfo = document.getElementById('dog-info')
                dogInfo.innerHTML = ""
                let dogImg = document.createElement('img')
                dogImg.src = element.image
                let isGoodDogButton = document.createElement('button')
                isGoodDogButton.innerText = "dog status"
                isGoodDogButton.addEventListener('click', () => {
                    if(element.isGoodDog === true) {
                        dogInfo.append("Good Dog!")
                    }
                    else{dogInfo.append("Bad Dog!")}

                })
                let doggoName = document.createElement('h2')
                doggoName.textContent = element.name
                dogInfo.append(doggoName)
                dogInfo.append(dogImg)
                dogInfo.append(isGoodDogButton)
                
            })
        });
    })
})
