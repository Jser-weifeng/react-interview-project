import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from "./components/TODOList/FilterableProductTable";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <h1>以下是一个TODOList</h1>
        <section>
          <FilterableProductTable/>
        </section>
        <CustomTextInput/>
      </div>

    );
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // 通过使用原生API，显式地聚焦text输入框
    this.refs.aaa.focus();
  }

  render() {
    // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
    return (
      <div>
        <input
          type="text"
          ref="aaa" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />

      </div>
    );
  }
}
export default App;
