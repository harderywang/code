import React from 'react';
import logo from './logo.svg';
import './App.css';




class listform extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      array: [1]
    };
    // this.inputRef = React.createRef();
    // this.handleCilckAdd = this.handleCilckAdd.bind(this);
    // this.handleCilckRemove = this.handleCilckRemove.bind(this);
  };

  handleCilckAdd = () => {
    this.setState(
      (prevvalue) => ({
        value: prevvalue.value + 1
      })
    );
    this.state.array.push(this.state.value)
    this.setState(
      (prevarray) => ({
        array: prevarray.array
      })
    );
    // console.log(this.state.value)
    // console.log(this.state.array)
  };

  // handleCilckAdd = () => {
  //   let i = 1;

  //   this.state.array.push(i)
  //   this.setState(
  //     (prevarray) => ({
  //       array: prevarray.array
  //     })
  //   );
  //   i = i + 1;
  //   console.log(this.state.value)
  //   console.log(this.state.array)
  // };
  // i加加不加


  // handleCilckAdd = () => {
  //   this.state.array.push(this.state.value)
  //   this.setState(
  //     (prevarray, prevvalue) => ({
  //       value: prevvalue.value + 1,
  //       array: prevarray.array
  //     })
  //   );
  //   console.log(this.state.value)
  //   console.log(this.state.array)
  // };输出NAN


  // list() {
  //   console.log(this.state.array)
  //   const arr = this.state.array.map((n) => <div>{n}</div>);
  //   console.log(arr);
  //   return arr;

  // }

  handleCilckRemove = () => {
    // let removeN = document.getElementById('remove').getAttribute('val');
    // let item = this.state.array.indexOf(removeN);
    // console.log('removeN', removeN);
    // console.log('item', item);

    // let removeN = event.value;
    // let item = this.state.array.indexOf(removeN);
    // console.log('removeN', removeN);
    // console.log('item', item);

    // const removeVal = this.inputRef.val;
    // console.log(removeVal)

    this.state.array.splice(this.state.array.length - 1, 1);
    this.setState(
      // (prevarray) => ({ array: prevarray.array.slice(1) })
      (prevarray) => ({ array: prevarray.array })
    );
    // console.log(this.state.array.length)
  }

  render() {
    // const arr = this.state.array.map((n) => <div>{n}</div>);
    return (

      <div>
        {/* <div onClick={this.handleClick}>click</div> */}
        <table align="center">
          <tr>
            <td>名称</td>
            <td>数量</td>
            <td>描述</td>
            <td>选择</td>
          </tr>
          <tbody>{this.state.array.map((n) =>
            <tr >
              <td><input type="text" name="username" placeholder="请输入名称" id="username" autocomplete="off" /></td>
              <td>  <input type="text" name="numbers" placeholder="请输入数量" id="numbers" autocomplete="off" /></td>
              <td>  <textarea name="describe" rows="1.1" cols="25" placeholder="请输入描述"></textarea></td>
              <td>  是{n} <input type="radio" name="choise" value="true" id="radio_true" />否<input type="radio" name="choise" value="false" id="radio_false" /></td>
              {/* <td><input type='button' value="add" onClick={this.handleCilckAdd} /></td> */}
              {/* <td><input type='button' value="remove" onClick={this.handleCilckRemove} val={n} id="remove" ref={this.inputRef} /></td> */}
            </tr>)}
          </tbody>

          <tr align="center">
            <td colspan="3"><input type='button' value="add" onClick={this.handleCilckAdd} />
              <input type='button' value="remove" onClick={this.handleCilckRemove} id="remove" ref={this.inputRef} /></td>
          </tr>

        </table >
      </div>
    );
  }
}
export default listform;
