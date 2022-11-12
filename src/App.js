import React, {Component} from 'react'
import PhotoContextProvider from './search/context/PhotoContext'
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'

import Header from './search/components/Header'
import Item from './search/components/Item'
import Search from './search/components/Search'
import NotFound from './search/components/NotFound'

function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate()
    const params = useParams()
    return <Component {...props} navigate={navigate} params={params} />
  }
}

const Searching = withRouter(Search)
const Headering = withRouter(Header)

class App extends Component {
  render() {
    return (
      <PhotoContextProvider>
        <HashRouter>
          <div className="container">
            <Headering />
            <Routes>
              <Route path="/" element={<Navigate replace to="/mountain" />} />
              <Route
                path="/mountain"
                element={<Item searchTerm="mountain" />}
              />
              <Route path="/beach" element={<Item searchTerm="beach" />} />
              <Route path="/bird" element={<Item searchTerm="bird" />} />
              <Route path="/food" element={<Item searchTerm="food" />} />
              <Route path="/search/:searchTerm" element={<Searching />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    )
  }
}

export default App
