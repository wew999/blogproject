inputArray = document.getElementsByClassName('inpl')
submit = document.getElementById('submitexpert')
mainp = document.getElementById('mainp')
scriptt = document.getElementById('boba')
asections = document.getElementById('asections')
jsonCoolObj = {}
const reader = new FileReader()

aaaArray = document.getElementsByClassName('aaa')
redirbutton = document.getElementById('redirbutton')

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
    console.log("arma")
}

function texton(event) {
    event.preventDefault()
    for (let v of inputArray) {
        if (v.id === "file" && v.files && v.files[0]) {
            fileBlob = v.files[0];                    // ← настоящий File/Blob
            jsonCoolObj.image = "avatar.jpg";          // или любое имя, которое тебе нужно на сервере
            // можно сохранить имя файла отдельно: jsonCoolObj.imageName = v.files[0].name;
        } else {
            jsonCoolObj[v.id] = v.value;
        }
    }
    const fData = new FormData();
    fData.append('json', JSON.stringify(jsonCoolObj));
    if (fileBlob) fData.append('image', fileBlob);

    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:3000/log");
    req.onload = () => console.log(req.response);
    req.onerror = () => console.error("Ошибка сети");
    req.send(fData);

    localStorage.setItem('login', jsonCoolObj.login)
}
submit.addEventListener( "click", texton)

function mainpp() {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");
    console.log(login)
    console.log(password)
    if (login && password) {
        const req = new XMLHttpRequest()
        req.responseType = 'text'
        req.open("GET", "http://localhost:3000/main")
        req.send()
        req.onload = () => {
            console.log(req.response);
            document.querySelector('html').innerHTML = req.response

        }
    } else {
        console.log("meh")
        registrplease = document.getElementById('syia')
        registrplease.textContent = 'Регистрируйся'
    }

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
function moveSecs() {
    const newScript = document.createElement('script')
    newScript.src = 'section.js'
    scriptt.parentNode.insertBefore(newScript, scriptt.nextSibling)
    scriptt.parentNode.removeChild(scriptt)
    const req = new XMLHttpRequest()
    req.responseType = 'text'
    req.open("GET", "http://localhost:3000/sectt")
    req.send()
    req.onload = () => {
        console.log(req.response);
        document.querySelector('html').innerHTML = req.response

    }
}
mayn.addEventListener('click', moveMain)
asections.addEventListener('click', moveSecs)