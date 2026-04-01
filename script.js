aaaArray = document.getElementsByClassName('aaa')
redirbutton = document.getElementById('redirbutton')
asections = document.getElementById('asections')
mayn = document.getElementById('mayn')
scriptt = document.getElementById('scriptt')
content = document.getElementById('content')
guest = document.getElementById('guest')
test = document.getElementById('test')
circ = document.getElementById('circ')
if (typeof zaitsy == 'undefined') {
    window.zaitsy
}
if (typeof noRepeatArr == 'undefined') {
    window.noRepeatArr = []
}

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

function displayLatestN() {
    const req = new XMLHttpRequest()
    req.open("GET", "http://localhost:3000/blogposter")
    req.send()
    req.onload = () => {
        console.log(req.response);
        const pereborArr = []
        ggg = JSON.parse(req.response)
        const map = new Map(Object.entries(ggg));
        chronpoststech = map.get("tech")
        pereborArr.push(chronpoststech)
        chronpostspolitics = map.get("politics")
        pereborArr.push(chronpostspolitics)
        chronpostssports = map.get("sports")
        pereborArr.push(chronpostssports)
        chronpostsart = map.get("art")
        pereborArr.push(chronpostsart)
        chronpostsnature = map.get("nature")
        pereborArr.push(chronpostsnature)
        chronpostsother = map.get("other")
        pereborArr.push(chronpostsother)
        console.log(pereborArr)
        let sortarrnow = []
        let idarrnow = []
        for (let perebor of pereborArr) {
            for (let per of perebor) {
                console.log(per.now)
                console.log(per)
                if (per.id || per.id === 0) {
                    iip = per.now
                    oop = Date.parse(iip)
                    console.log(oop)
                    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
                    oop = new Date(oop)
                    postObjecttime = `${oop.getDate()} ${months[oop.getMonth()]} ${oop.getFullYear()}  ${oop.getHours()}:${oop.getMinutes()}`
                    sortarrnow.push(postObjecttime)
                    idea = per.id
                    idarrnow.push(idea)
                }
            }
            let count = 0
            idarrnow.sort(function compareNumbers(a, b) {
                return b - a;
            })
            //console.log(idarrnow)
            for (let id of idarrnow) {
                //console.log(pereborArr)
                //console.log(pereborArr)
                //console.log(pereborArr[0])
                lkira = pereborArr.length
                sotired = []
                for (let i = 0; i <= lkira; i++) {
                    //  console.log(pereborArr[i])
                    sotired.push(pereborArr[i])
                }
                console.log(sotired)
                jinkus = sotired.length
                //console.log(jinkus)
                //console.log(sotired[0])
                zaitsyArr = []
                for (let tired of sotired) {
                    if (tired) {
                        zaitsy = Array.from(tired)
                        zaitsyArr.push(...zaitsy)
                        console.log(zaitsyArr)
                    }
                }
            }
            let looping = 0
            while (looping < zaitsyArr.length) {
                const zai = zaitsyArr.find(item => item.id === looping)
                console.log(zai)
                if (zai && !(noRepeatArr.includes(zai))) {
                    console.log(!(noRepeatArr.includes(zai)))
                    const post = document.createElement("div")
                    const hdngContent = document.createTextNode(zai.heading);
                    const hdng = document.createElement("h2")
                    hdng.appendChild(hdngContent);
                    const txtContent = document.createTextNode(zai.text);
                    const txtg = document.createElement("p")
                    txtg.appendChild(txtContent);
                    const tmContent = document.createTextNode(zai.time);
                    const tm = document.createElement("p")
                    tm.appendChild(tmContent);
                    post.appendChild(hdng);
                    post.appendChild(txtg);
                    post.appendChild(tm);
                    tm.className = "latest"
                    txtg.className = 'ltext'
                    hdng.className = 'ltext'
                    content.prepend(post)
                    post.className = 'yolo'
                    noRepeatArr.push(zai)
                    console.log(!(noRepeatArr.includes(zai)))
                    console.log(noRepeatArr)
                }
                looping++
            }
            /*for (let zai of zaitsyArr) {
                console.log(zai)
                if (!(noRepeatArr.includes(zai))) {
                    const post = document.createElement("div")
                    const hdngContent = document.createTextNode(zai.heading);
                    const hdng = document.createElement("h2")
                    hdng.appendChild(hdngContent);
                    const txtContent = document.createTextNode(zai.text);
                    const txtg = document.createElement("p")
                    txtg.appendChild(txtContent);
                    const tmContent = document.createTextNode(zai.time);
                    const tm = document.createElement("p")
                    tm.appendChild(tmContent);
                    post.appendChild(hdng);
                    post.appendChild(txtg);
                    post.appendChild(tm);
                    tm.className = "latest"
                    txtg.className = 'ltext'
                    hdng.className = 'ltext'
                    content.prepend(post)
                    post.className = 'yolo'
                    noRepeatArr.push(zai)
                    console.log(!(noRepeatArr.includes(zai)))
                    console.log(noRepeatArr)
                } */
                /*for (let zaik of zai) {
                    console.log(zaik)

             //   }//&& count == id
            //count++
            console.log(zaitsyArr.length)
           // console.log()
            //console.log()
       // } */
           // }

        }
}
}
if (typeof login == 'undefined') {
    window.login = localStorage.getItem("login");
}
if (typeof password == 'undefined') {
    window.password = localStorage.getItem("password");
}
//const image = localStorage.getItem("image");
if (login && password) {
    guest.innerText = login
    circ.addEventListener("click", accountRedirect)
} else {
    circ.addEventListener("click", loginRedirect)
}
function loginRedirect() {
    const req = new XMLHttpRequest()
    req.open("GET", "http://localhost:3000/logredir")
    req.send()
    req.onload = () => {
        document.querySelector('html').innerHTML = req.response
    }
}
/*function textfieldRedirect() {
    const req = new XMLHttpRequest()
    req.open("GET", "http://localhost:3000/textf")
    req.send()
    req.onload = () => {
        document.querySelector('html').innerHTML = req.response
    }
} */
function accountRedirect() {
    const req = new XMLHttpRequest()
    req.open("GET", "http://localhost:3000/accredir")
    req.send()
    req.onload = () => {
        document.querySelector('html').innerHTML = req.response
    }
}
displayLatestN()
