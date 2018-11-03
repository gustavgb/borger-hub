import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Title = styled.h1`
  font-weight: bold;
  float: left;
`

const Wrapper = styled.div`
  background-color: #efefef;
`

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

const Menu = styled.div`
  float: right;
`

const Item = styled.div`
  padding: 25px 10px;
  float: left;
`

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <Title>BorgerHub.dk</Title>
        <Menu>
          <Item><NavLink to="/">Hjem</NavLink></Item>
          <Item><NavLink to="/opgaver">Opgaver</NavLink></Item>
          <Item><NavLink to="/om">Om BorgerHub.dk</NavLink></Item>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Nav
