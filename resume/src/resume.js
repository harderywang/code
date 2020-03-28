$(document).ready(function () {
    //个人信息
    let a = 0;
    let str = '';

    $('.information_head').click(function () {
        str = '';
        if (a === 0) {
            a++;
            let indexData = $(".information_head").text();
            $.ajax({
                url: 'http://localhost:8000',
                data: indexData,
                success: function (data) {
                    for (i = 0; i < data.length - 1; i++) {
                        if (i % 3 === 0) {
                            str += '<div>' + "<p>" + data[i].name + ':' + data[i].value + "</p>" + "<p>" + data[i + 1].name + ':' + data[i + 1].value + "</p>" + "<p>" + data[i + 2].name + ':' + data[i + 2].value + "</p>" + '</div>';
                        }
                    }
                    // str += "<img src=" + data[6].value + " alt='韩信'>";
                    $('.information_brother').html(str);
                    // $('.information_brother').css('visibility', 'visible')
                }
            })
        } else {
            $('.information_brother').empty();
            a = 0;
        }

    })

    //教育
    let b = 0;
    $('.education_head').click(function () {
        str = '';
        if (b === 0) {
            b++;
            let indexData = $(".education_head").text();
            $.ajax({
                url: 'http://localhost:8000',
                data: indexData,
                success: function (data) {
                    let strchild = '';
                    for (i = 0; i < data.length; i++) {
                        if (typeof data[i].value === 'object') {
                            //    str += '<p>' + data[i].name + '</p>';
                            for (j = 0; j < data[i].value.length; j++) {
                                strchild += '<span>' + data[i].value[j].value + '</span>';
                                if (j === data[i].value.length - 1) {
                                    str += '<div>' + '<p>' + data[i].name + ':' + strchild + '</p>' + '</div>';
                                }
                            }
                        } else {
                            if (i % 2 === 1) {
                                str += '<div>' + "<p>" + '<span>' + data[i - 1].name + ':' + '</span>' + data[i - 1].value + "</p>" + "<p>" + data[i].name + ':' + data[i].value + "</p>" + '</div>';
                            }

                        }

                    }
                    $('.education_brother').html(str);
                    // $('.information_brother').removeAttr('style', 'visibility');
                    // $("#tab1").removeAttr("style","");
                    // $('.education_brother').css('visibility', 'visible');

                }
            })
        } else {
            $('.education_brother').empty();
            b = 0;
        }


    })


    //  实习项目
    let c = 0;
    $('.internship_head').click(function () {
        str = '';
        if (c === 0) {
            c++;
            let indexData = $(".internship_head").text();

            $.ajax({
                url: 'http://localhost:8000',
                data: indexData,
                success: function (data) {
                    let strchild = '';

                    for (i = 0; i < data.length; i++) {
                        if (typeof data[i].value === 'object') {
                            //  str += '<p>' + data[i].name + '</p>';
                            for (j = 0; j < data[i].value.length; j++) {
                                strchild += '<p>' + data[i].value[j].name + ':' + data[i].value[j].value + '</p>'
                                if (j === data[i].value.length - 1) {
                                    str += '<div>' + '<h4>' + data[i].name + ':' + '</h4>' + strchild + '</div>';
                                }
                            }
                        } else {
                            str += '<div>' + '<h4>' + data[i].name + ':' + '</h4>' + "<p>" + data[i].value + "</p>" + '<div>';
                        }

                    }
                    $('.internship_brother').html(str);

                }
            })
        } else {
            $('.internship_brother').empty();
            c = 0;
        }
    })

    //技能
    let d = 0
    $('.skill_head').click(function () {
        str = '';
        if (d === 0) {
            d++;
            let indexData = $(".skill_head").text();

            $.ajax({
                url: 'http://localhost:8000',
                data: indexData,
                success: function (data) {
                    let strchild = '';
                    let air = '';
                    for (i = 0; i < data.length; i++) {
                        if (typeof data[i].value === 'object') {
                            for (j = 0; j < data[i].value.length; j++) {
                                //strchild += '<div>' + '<div>' + data[i].value[j].value + ':' + '</div>' + "<div><div class='content" + i + "" + j + "'></div></div></div>";
                                strchild += '<div>' + data[i].value[j].value + ':' + '</div>';
                                air += "<div class='air'><div class='content" + i + "" + j + "'></div></div>"
                                if (j === data[i].value.length - 1) {
                                    str += '<div><h4>' + data[i].name + ':' + '</h4>' + '<div >' + "<div  class='title" + i + "'>" + strchild + "</div>" + "<div  class='content" + i + "'>" + air + '</div></div></div>';
                                    strchild = '';
                                    air = '';
                                }
                            }


                        }
                    }
                    $('.skill_brother').html(str);

                }
            })
        } else {
            $('.skill_brother').empty();
            d = 0;
        }
    })
    //总结
    let e = 0;
    $('.summary_head').click(function () {
        str = '';
        if (e === 0) {
            e++;
            let indexData = $(".summary_head").text();
            $.ajax({
                url: 'http://localhost:8000',
                data: indexData,
                success: function (data) {
                    str = data;
                    $('.summary_brother').html("<p>" + str + "</p>");
                }
            })
        } else {
            $('.summary_brother').empty();
            e = 0;
        }

    })

})