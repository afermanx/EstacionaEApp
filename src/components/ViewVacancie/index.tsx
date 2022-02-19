import React from 'react'

import * as S from './style'

interface Vacancie {
  id: number,
  direction: string,
  status: string,
  vagaTime: string,
  time: number
}

export default function ViewVacancie({ car }: Vacancie | any) {
  console.log(car)
  return (
    <S.Container size={{ '@bp1': 'mobile', '@initial': 'web' }}>
      {car?.id}
    </S.Container>
  )
}
