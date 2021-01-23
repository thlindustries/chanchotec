import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, MyLogo, Burger, Footer } from './styles'

import pigLogo from 'assets/pigLogo.png';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <MyLogo src={pigLogo} alt="pigLogo" />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <span role="img" aria-label="purple heart" aria-labelledby="purple heart">
              made by Thiago kraetzer 💜
            {/* <a href="#" aria-label="purple heart" aria-labelledby="purple heart">made by Thiago kraetzer 💜</a> */}
            </span>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
