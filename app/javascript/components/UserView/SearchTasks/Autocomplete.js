import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Autocomplete.css'
import UpdateForm from '../UpdateTasks/UpdateForm'
import SearchView from './SearchView'

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };

  state = {
    activeOption: 0,
    filteredOptions: [], 
    showOptions: false,
    userInput: '',
    showContent: false,
  };

  onChange = (e) => {
    const taskList = this.props.options

    const options = [];

    for (let i=0; i < taskList.length; i++) {
      options.push({
        title: taskList[i].attributes.title,
        description: taskList[i].attributes.description,
        category: taskList[i].attributes.category,
        duedate: '',
      })

      if (taskList[i].attributes.duedate) {
        options[i].duedate = taskList[i].attributes.duedate
      }
    }

    const userInput = e.currentTarget.value;

    const filteredTasks = options.filter(item => {
      return Object.keys(item).some(key => 
        item[key].toLowerCase().includes(userInput.toLowerCase())
      )
    })

    const filteredOptions = filteredTasks.map(item => item.title)

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
      showContent: false
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      showContent: true
    });
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
        showContent: true
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput, showContent }
    } = this;

    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    let showTask;
    if (showContent){
      let task = this.props.options.filter(item => item.attributes.title === userInput)[0]
      console.log(task)
      showTask=(<SearchView task={task}/>)
    }

    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
        </div>
        {optionList}
        {showTask}
      </React.Fragment>
    );
  }
}

export default Autocomplete;