let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');

app.get('/src/note/note.json', function (req, res) {
    console.log("get list");
    fs.readFile(path.join(__dirname, "note/note.json"), 'utf8', function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data)
            res.send(data);
        }
    })
})

// app.get('/src/note/writenote.json', function (req, res) {
//     fs.readFile(path.join(__dirname, 'note/note.json'), 'utf8', function (err, data) {
//         if (err) {
//             console.error('err');
//         } else {
//             let arr;
//             if (data) {
//                 arr = JSON.parse(data);
//             } else {
//                 arr = [];
//             }
//             arr.push(req.query);
//             fs.writeFile(path.join(__dirname, "note/note.json"), JSON.stringify(arr), function (err, data) {
//                 if (err) {
//                     console.error('err');
//                 }
//                 else {
//                     console.log('成功');
//                     console.log(arr)
//                     res.send(arr);
//                 }
//             })
//         }

//     })
//     console.log("post  build");
// })

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/src/note/note.json', function (req, res) {
    fs.readFile(path.join(__dirname, 'note/note.json'), 'utf8', function (err, data) {
        if (err) {
            console.error('err');
        } else {
            let arr;
            if (data) {
                arr = JSON.parse(data);
            } else {
                arr = [];
            }
            arr.push(req.body);
            fs.writeFile(path.join(__dirname, "note/note.json"), JSON.stringify(arr), function (err, data) {
                if (err) {
                    console.error('err');
                }
                else {
                    console.log('成功');
                    console.log(arr)
                    res.send(arr);
                }
            })
        }

    })
    console.log("post  build");
})

app.get('/src/resume/resume.json', function (req, res) {
    console.log("get请求")
    let requestData = Object.keys(req.query)[0];
    // res.send(requestData)
    fs.readFile(path.join(__dirname, "/resume/resume.json"), 'utf8', function (err, data) {
        let dataObj = JSON.parse(data);
        if (err) {
            res.send('没有')
        } else {
            for (let key in dataObj) {
                if (key === requestData) {
                    res.send(eval("dataObj." + key + ""))
                }
            }
        }

    })

})

app.use('/public', express.static(path.join(__dirname, "../public")))
app.listen(8000, console.log(8000, path.join(__dirname, "/resume/resume.json")))