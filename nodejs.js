






function createServer(serveConection, ...write) {
  const http = require('http');

http.createServer(function (req, res) {
  console.log("server is working jet");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  for (let pos = 0; pos < write.length; pos++) {
    res.write(write[pos]);
  }
  res.end();
}).listen(serveConection);
}






function writeFile(file, text) {
  const fs = require('fs')

fs.writeFile(file, JSON.stringify(text), err => {
  if (err) {
    console.error(err)
    return
  }
    console.log("written");
})
}



function readFile(file) {
  const fs = require('fs');
  var Promise = require('promise');
  var readStream = fs.createReadStream(file);
    let pos = 0;
     return new Promise((resolve, reject) => {

       fs.readFile(file, 'utf8' , (err, data) => {
         if (err) {
           console.error("err")
           return
         }
         resolve(JSON.parse(data));

     });

});


}




function makecodefromurl(urlthis) {
  var url = require('url');
  var q = url.parse(urlthis, true);
  var qdata = q.query; return qdata;

}

      class Ismyfile {

         ismyfileopen(file) {
           var Promise = require('promise');
           return new Promise((resolve, reject) => {
             const fs = require('fs')

             var readStream = fs.createReadStream(file);

             readStream.on('open', function () {
               resolves(true);
             });
           })

        }

      }




function question(question) {
    var readline = require('readline');

    const Promise = require('promise');

        var rl = readline.createInterface(

        process.stdin, process.stdout);

           return new Promise((data, err) => {

               rl.question(question , (answer) => {

               data(answer);

               });

           })

}



































///////////////////////*





























































var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const file = "database.json"
var express = require('express');
var path = require('path');
const hash = require('js-hash-code');


app.use(express.static(__dirname + ''));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/file.html'));
});



server.listen(8080);


let waitforgetdata;
let waitforpasname;

/*connect*/
io.on('connection', function(socket) {
/*get*/


// kontrolaJmena
socket.on('name', function(name, password) {

  console.log("name", name);

  console.log("password", password);

  kontrolaJmena(name);

          waitforgetdata.then((falsetrue) => {
            console.log(falsetrue);
            /*is Name in Database if true you can write your name this name is not in database*/

            if (falsetrue) {

              readFile(file).then((data, error) => {

                data.acount[name] = {"password":password}
                writeFile(file, data)

                //client i am log
                send("amILog", true);

              })

            }
            else {
              send("amILog", false)



            }

          })
          })

//////////////////////
/*
         //delete user name
*/



socket.on("delete", function (user) {

       kontrolahesla(user.name, user.password);
       waitforpasname.then((data) => {

         if (data) {

           readFile(file).then((data, err) => {

             data.acount[user.name] = undefined;
             writeFile(file, data)
             console.log(data);
             //deletedatabase(user.nam
             console.log("delete acount", user.name, user.password);
             send("isdelete", true);

           })

         }
         send("isdelete", false)

       })

})


////




          socket.on('prihlasit', function(name, password) {

            kontrolahesla(name, password)
            waitforpasname.then((data) => {
              if (data) {

                send("youarelog", {password:password, name:name});
              }
              else {
                send("youarelog", false);
              }

            })

          })






          function send(parametr, value) {


            socket.emit(parametr, value);

          }

          //end eve

          })





function kontrolahesla(name, password) {

  waitforpasname = new Promise((resolve, reject) => {

    readFile(file).then((data, error) => {

      if (data.acount[name].password === password) {

        resolve(true)

      }
      else {
        resolve(false)
      }

    })

  })



}


function kontrolaJmena(name) {

  waitforgetdata = new Promise((resolve, reject) => {

  readFile(file).then((data, error) => {

    if (data.acount[name] === undefined) {

      resolve( true)

    }
    else {

      resolve( false)

    }

  })
})

}

































































/*
io.on('connection', function(socket) {

            console.log(socket);

           socket.emit('id', { number:value});

         });

*/

         /*io.on('connection', function(socket) {
             socket.on('createAcount', function(data) {

               createNewAcount(data);



             })*/
