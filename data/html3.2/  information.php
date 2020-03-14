<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    #radio_true,
        #radio_false {
            display: none;
        }

        /* label {
            

        } */

        label::after {
            display: inline-block;
            content: "";
            width: 16px;
            height: 16px;
            border: 2px solid black;
            margin-left: 6px;
            vertical-align: bottom;
            position: relative;
        }

        #radio_true:checked+label::after {
            /* position: absolute; */
            background-color: red;
        }

        label{
  position: absolute;
  display: inline-block;
  border: 1px solid #2c2c2c;
  width:13px;
  height:13px;
  border-radius: 3px;
 
}
label input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            margin: 0;
        }
label input[type="radio"]:after {
  display: inline-block;
  position: absolute;
  content:"";
  background-color: transparent;
}

 label input[type="radio"]:checked:after {
 
  font-weight:bold
  font-size:13px;
  font-family:Sans-serif;
  background: transparent;
  top: -3px;
  left: 3px;
  content:"L";
  transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
    -webkit-transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
}
    </style>
</head>
<body>
    你好
</body>
</html>



