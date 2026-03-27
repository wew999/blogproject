aaaArray = document.getElementsByClassName('aaa')
redirbutton = document.getElementById('redirbutton')
asections = document.getElementById('asections')
mayn = document.getElementById('mayn')
scriptt = document.getElementById('scriptt')

function chagec(event) {
    console.log(event.target)
    event.target.className = 'cost tr'
    console.log(event.target)
}
function chagec2(event) {
    console.log(event.target)
    event.target.className = 'aaa tr'
    console.log(event.target)
}
for (let a of aaaArray) {
    a.addEventListener('mouseover', chagec)
    a.addEventListener('mouseout', chagec2)
    console.log(aaaArray)
}

function moveMain() {
    const newScript = document.createElement('script')
    newScript.src = 'script.js'
    scriptt.parentNode.insertBefore(newScript, scriptt.nextSibling)
    scriptt.parentNode.removeChild(scriptt)
    const req = new XMLHttpRequest()
    req.responseType = 'text'
    req.open("GET", "http://localhost:3000/main")
    req.send()
    req.onload = () => {
        console.log(req.response);
        document.querySelector('html').innerHTML = req.response

    }
}
mayn.addEventListener('click', moveMain)
function moveSecs() {
    const newScript = document.createElement('script')
    newScript.src = 'section.js'
    scriptt.parentNode.insertBefore(newScript, scriptt.nextSibling)
    scriptt.parentNode.removeChild(scriptt)
    console.log('jjjj')
    const req = new XMLHttpRequest()
    req.responseType = 'text'
    req.open("GET", "http://localhost:3000/sectt")
    req.send()
    req.onload = () => {
        console.log(req.response);
        document.querySelector('html').innerHTML = req.response

    }
}
asections.addEventListener('click', moveSecs)
