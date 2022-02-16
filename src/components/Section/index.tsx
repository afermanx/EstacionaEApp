import React from 'react'
import * as S from './style'

type Props = {
  children?: JSX.Element,
  title: string
}

export default function Section({ children, title }: Props) {
  return (
    <section>
      <S.SectionContainer size={{ '@bp1': 'mobile', '@initial': 'web' }}>
        <S.SubTitle>{title}</S.SubTitle>
        <S.Line />
        {children}
      </S.SectionContainer>
    </section>
  )
}
