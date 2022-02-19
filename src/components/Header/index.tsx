import React from 'react'

import * as S from './style'

type Props = {
  children?: JSX.Element
}

export default function Header({ children }: Props) {
  return (
    <header>
      <S.HeaderContainer size={{ '@bp1': 'mobile', '@initial': 'web' }}>
        {children}
      </S.HeaderContainer>
    </header>
  )
}
