import React, { Component } from 'react';
import styled from 'styled-components'
import Nav from 'components/nav'

// injectGlobal`
//   body, html {
//     margin: 0;
//     padding: 0;
//   }
// `

const Main = styled.div``

class App extends Component {
  render() {
    return (
      <Main>
        <Nav />
      </Main>
    );
  }
}

export default App;
