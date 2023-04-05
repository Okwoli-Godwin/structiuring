import React from 'react'
import styled from 'styled-components'
import { Dashbody, Dashsidebar } from '../../blocks'

const Dashlayout = () => {
  return (
      <Container>
          <Dashsidebar />
          <Dashbody />
    </Container>
  )
}

export default Dashlayout
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`