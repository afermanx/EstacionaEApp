import React, { useEffect, useState } from 'react'

import { getDatabase, ref, onValue } from 'firebase/database'
import * as S from './style'

import LeftCar from '../../assets/icons/left-car.svg'
import RightCar from '../../assets/icons/right-car.svg'
import api from '../../core/api'

interface Vacancie {
  id: number,
  direction: string,
  status: string,
  vagaTime: string,
  time: number
}

export default function Vacancies() {
  const database = getDatabase(api)
  const [vacancies, setVacancies] = useState<any>([])

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    const refDb = ref(database)
    onValue(refDb, (snapshot) => {
      const data = snapshot.val()
      const result = Object.keys(data).map((d) => {
        return (data[d])
      })
      setVacancies(result)
    })
  }

  console.log(vacancies)

  return (
    <div>
      <S.Container size={{ '@bp1': 'mobile', '@initial': 'web' }}>
        <S.ContainerVacancies size={{ '@bp1': 'mobile', '@initial': 'web' }}>
          {
            vacancies?.map((resp: Vacancie, index: any) => {
              return (
                <S.Vacancy key={index} rotate={resp.direction === 'left' ? 'left' : 'right'} size={{ '@bp1': 'mobile', '@initial': 'web' }}>
                  <S.ContaierNumber rotate={resp.direction === 'left' ? 'left' : 'right'}>
                    <S.Number rotate={resp.direction === 'left' ? 'left' : 'right'}>{resp.id}</S.Number>
                  </S.ContaierNumber>
                  <S.IconCar rotate={resp.direction === 'left' ? 'left' : 'right'} busy={resp.status === 'on' ? 'on' : 'off'} src={resp.direction === 'left' ? LeftCar : RightCar} />
                </S.Vacancy>
              )
            }
            )
          }
        </S.ContainerVacancies>
      </S.Container>

    </div>
  )
}
