import React, { useContext, useEffect, useState } from 'react'

import { getDatabase, ref, onValue } from 'firebase/database'
import * as S from './style'

import LeftCar from '../../assets/icons/left-car.svg'
import RightCar from '../../assets/icons/right-car.svg'
import api from '../../core/api'
import ViewVacancie from '../ViewVacancie'
import AppContext from '../../context/AppContext'

interface Vacancie {
  id: number,
  direction: string,
  status: string,
  vagaTime: string,
  time: number
}

export default function Vacancies() {
  const { setLoading, loading } = useContext(AppContext)

  const database = getDatabase(api)
  const [vacancies, setVacancies] = useState<any>([])
  const [vacanciesOn, setVacanciesOn] = useState("")
  const [more, setMore] = useState(false)
  const [car, setCar] = useState<Vacancie>()

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    setLoading(true)
    const refDb = ref(database)
    onValue(refDb, (snapshot) => {
      const data = snapshot.val()
      const result = Object.keys(data)?.map((d) => {
        return (data[d])
      })
      filterOn(result)
      setVacancies(result)
      setLoading(false)
    })
  }

  function filterOn(cars: any) {
    const carsOn = cars.filter((car: Vacancie) => (
      car.status === 'on'
    ))
    setVacanciesOn(carsOn)
  }

  function viewMore(car: Vacancie) {
    if (car.status === 'on') {
      setCar(car)
      setMore(true)
    } else {
      setMore(false)
    }
  }

  return (
    <div>
      <S.Container size={{ '@bp1': 'mobile', '@initial': 'web' }}>
        <S.VacanciesHeader>
          <S.TextVacanties>Disponíveis: {vacancies.length - vacanciesOn.length}</S.TextVacanties>
          <S.TextVacanties>Ocupadas: {vacanciesOn.length}</S.TextVacanties>
        </S.VacanciesHeader>
        <S.ContainerVacancies size={{ '@bp1': 'mobile', '@initial': 'web' }}>
          {
            vacancies?.map((resp: Vacancie, index: any) => {
              return (
                <S.Vacancy onClick={() => viewMore(resp)} key={index} rotate={resp.direction === 'left' ? 'left' : 'right'} size={{ '@bp1': 'mobile', '@initial': 'web' }}>
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

      {/* {
        more === true && (
          <ViewVacancie car={car} />
        )
      } */}
    </div>
  )
}
