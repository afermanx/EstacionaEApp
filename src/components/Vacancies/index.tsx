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

  return (
    <div>
      <S.Container>
        <S.ContainerVacancies>
          {
            vacancies?.map((resp: Vacancie, index: any) => {
              return (
                <S.Vacancy key={index} rotate={resp.direction === 'left' ? 'left' : 'right'}>
                  <S.ContaierNumber rotate={resp.direction === 'left' ? 'left' : 'right'}>
                    <S.Number rotate={resp.direction === 'left' ? 'left' : 'right'}>19</S.Number>
                  </S.ContaierNumber>
                  <S.IconCar busy={resp.status === 'on' ? 'on' : 'off'} src={resp.direction === 'left' ? LeftCar : RightCar} />
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
