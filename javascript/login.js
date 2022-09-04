define(['require', 'name'], function (require) {
    var namedModule = require('name');
});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

let signupName = document.querySelector('sName');
let signupEmail = document.querySelector('sEmail');
let signupPassword = document.querySelector('sPw');

let loginEmail = document.querySelector('lEmail');
let loginPassword = document.querySelector('lPw');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function saveDataToFile(data) {
    var blob = new Blob([data],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
}

    fs.readFile('../songs.json', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://swirx:Ieaawmgk15<3@cluster0.xojh2xa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("SX-Waves").collection("Users");
  // perform actions on the collection object
  client.close();
});
