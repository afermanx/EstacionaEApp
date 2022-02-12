import React from 'react'
import * as S from './style'

type Props = {
  children?: JSX.Element
}

export default function Section({ children }: Props) {
  return (
    <section>
      <S.SectionContainer>
        {children}
      </S.SectionContainer>
    </section>
  )
}
