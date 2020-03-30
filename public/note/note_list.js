$(document).ready(function () {
    $('.add').click(function () {
        window.location.href = "http://localhost:8000/public/note/note_build.html";
    })
    $.ajax({
        url: 'http://localhost:8000/src/note/note.json',
        success: function (data) {
            let str = '', arr = JSON.parse(data)
            for (i = 0; i < arr.length; i++) {
                str += '<div >' + '<p>' + arr[i].title + ':  ' + arr[i].content + '</p>' + "<button 'value'=" + i + ">删除</button></div>"
            }
            $('.content').html(str);
        }
    })
    document.getElementsByTagName('button')
    console.log($('button').html());
    console.log($('.add').html);
    console.log(document.getElementsByTagName('button')[0]);
    // $(document).ready(function () {
    $('button').click(function () {
        alert(1213)
        console.log(234);
        //  $('button').parent().remove();
    })
    // })


})