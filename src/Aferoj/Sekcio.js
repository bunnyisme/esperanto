import React from 'react'
import { Container } from 'react-bootstrap'

export default props => {
  return (
    <section
      style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
        backgroundColor: props.dark ? 'var(--primary)' : 'var(--light)',
        color: props.dark ? 'var(--light)' : 'var(--dark)'
      }}
    >
      <Container>{props.children}</Container>
    </section>
  )
}
