window.onload = function () {
    let addTbody = document.getElementById('addTbody');
    let removeTbody = document.getElementById('removeTbody');
    let tbody = document.getElementById('tbody');
    let index = 1;
    //删除中间行tbody;removeChild最后lastElementChild;
    function remove() {
        if (index > 1) {
            let lastChild = tbody.lastElementChild;
            tbody.removeChild(lastChild);
            index--;
        } else {
            alert("最后一行了!");
        }
    }


    //增加中间行tbody; 在<tbody>标签下加appendChild一个<tr>行，在给<tr>加三个<td>单元格，每个单元格在分别加入<input><input><textarea>;
    function add() {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.name = 'name';
        let inputNumber = document.createElement('input');
        inputNumber.type = 'text';
        inputNumber.name = 'amount';
        let textareaDescribe = document.createElement('textarea');
        textareaDescribe.cols = 30;
        textareaDescribe.rows = 1;
        textareaDescribe.name = 'describe';
        td1.appendChild(inputName);
        td2.appendChild(inputNumber);
        td3.appendChild(textareaDescribe);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);

        index++;
        //  tr.innerHTML = tr.innerHTML + "<tr <td> <input type='text' name='name' />  </td><td> <input type='text' name='amount'> </td> <td> <textarea name='descride'  cols='30' rows='1'></textarea></td> </tr>"
        // let li = document.createElement('li');
        // let txt = document.createTextNode('我是li' + (i + 1));
        // li.appendChild(txt);
        // ulList.appendChild(li);
    }
    addTbody.addEventListener('click', add, false);
    removeTbody.addEventListener('click', remove, false);
}
