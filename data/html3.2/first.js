window.onload = function () {
    let btn = document.getElementById('btn');
    let username = document.getElementsByName('username');
    let numbers = document.getElementsByName('numbers');
    let describel = document.getElementsByName('describe');
    let choise = document.getElementsByName('choise');
    // let label = document.getElementsByTagName('label');
    // console.log(label)


    // function numbersType() {
    //     if (isNaN(numbers[0].value)) {
    //         alert('请输入数字');
    //     }
    // }


    function getFrom() {
        console.log('名称：' + username[0].value)
        console.log('数量：' + numbers[0].value);
        console.log('描述：' + describel[0].value);
        if (isNaN(numbers[0].value)) {
            alert('请输入数字');
        }
        for (i = 0; i < choise.length; i++) {
            if (choise[i].checked) {
                console.log('选择：' + choise[i].value);
                window.location.href = "second.html? 名称:" + username[0].value + "   数量:" + numbers[0].value + "    描述:" + describel[0].value + "   选择:" + choise[i].value + "";
                //window.location.href = "second.html?" + encodeURI('名称：' + username[0].value + '     数量：' + numbers[0].value + '     描述：' + describel[0].value + '     选择：' + choise[i].value) + "";
                //console.log(decodeURI(encodeURI('名称：' + username[0].value + '数量：' + numbers[0].value + '描述：' + describel[0].value + '选择：' + choise[i].value)));
                //  window.location.href = "second.html#" + encodeURI('名称：' + username[0].value + '     数量：' + numbers[0].value + '     描述：' + describel[0].value + '     选择：' + choise[i].value) + ""
            }
            // window.location.href = "second.html"

        }
    }
    btn.addEventListener('click', getFrom, false);
    // numbers.addEventListener('blur', numbersType, false);



}