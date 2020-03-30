$(document).ready(function () {
    $('.btn').click(function () {
        console.log('确定提交标题' + $('input').val() + '内容' + $('textarea').val());
        if (confirm('确定提交标题:' + $('input').val() + '内容:' + $('textarea').val()) === true) {
            $.ajax({
                type: 'post',
                url: 'http://localhost:8000/src/note/note.json',
                data: { 'title': $('input').val(), 'content': $('textarea').val() },
                success: function (data) {
                    console.log(data);
                }
            })
            window.location.href = 'http://localhost:8000/public/note/note_list.html';
        } else {
            console.log(false);
        }       //   window.location.href = 'http://localhost:8000/public/note/note_list.html'
    })
})