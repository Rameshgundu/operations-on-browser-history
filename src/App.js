import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    updatedList: initialHistoryList,
  }

  getUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {updatedList} = this.state
    const remainingHistory = updatedList.filter(history => history.id !== id)
    this.setState({updatedList: remainingHistory})
  }

  render() {
    const {searchInput, updatedList} = this.state
    const filteredList = updatedList.filter(list =>
      list.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="navbar-section">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-container1">
              <button className="search-icon" type="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </button>
              <input
                type="search"
                placeholder="Search history"
                onChange={this.getUserInput}
              />
            </div>
          </div>
        </div>
        <div className="sub-container">
          <div className="history-container">
            <ul>
              {filteredList.map(history => (
                <li key={history.id}>
                  <div className="list-of-histories">
                    <div className="domain-main-container">
                      <div className="domain-container">
                        <p className="time">{history.timeAccessed}</p>
                        <div className="domain-sub-container">
                          <img
                            src={history.logoUrl}
                            alt="domain logo"
                            className="domain-img"
                          />
                          <p className="time">{history.title}</p>
                          <p className="time time1">{history.domainUrl}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-testid="delete"
                      className="delete-button"
                      onClick={() => this.deleteHistory(history.id)}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="delete-logo"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-container">
              {filteredList.length === 0 && <p>There is no history to show</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
