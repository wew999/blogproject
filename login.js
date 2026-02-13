inputArray = document.getElementsByClassName('inpl')
submit = document.getElementById('submitexpert')
jsonCoolObj = {}
const req = new XMLHttpRequest()

req.onload = () => {
    try {
        console.log(req.response)
    } catch (error) {
        console.log(error)
    }
}
function texton(event) {
    for (let v of inputArray) {
        event.preventDefault()
        jsonCoolObj[v.id] = v.value
        if (event.target.id === "file") {
            v = Blob(v.value)
        }
    }
    jsonj = JSON.stringify(jsonCoolObj);
    console.log(jsonj)
    req.open("GET", "server.js")
    req.setRequestHeader("Accept","application/json")
    req.send(jsonj)
    console.log(req.response)
}
submit.addEventListener( "click", texton)

