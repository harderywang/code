let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');

app.get('/src/resume/resume.json', function (req, res) {
    console.log("get请求")
    let requestData = Object.keys(req.query)[0];
    // res.send(requestData)
    fs.readFile(path.join(__dirname, "../public/resume.json"), 'utf8', function (err, data) {
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




app.use('/', express.static(path.join(__dirname, "../")))
app.listen(8000, console.log(8000, path.join(__dirname, "../")))