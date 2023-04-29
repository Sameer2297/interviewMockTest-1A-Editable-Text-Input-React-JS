import {Component} from 'react'
import './index.css'

class TextInput extends Component {
  state = {userInput: '', isSaved: true}

  userInputValue = event => {
    this.setState({userInput: event.target.value})
  }

  clickButton = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {userInput, isSaved} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <input
                className="input-ele"
                type="text"
                value={userInput}
                onChange={this.userInputValue}
              />
            ) : (
              <p className="para">{userInput}</p>
            )}
            <button className="button" type="button" onClick={this.clickButton}>
              {isSaved ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default TextInput
