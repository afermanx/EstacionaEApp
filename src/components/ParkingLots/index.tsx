import React from 'react'
import Shopping from '../../assets/icons/shopping.svg'
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function ParkingLots() {
  const navigate = useNavigate()
  const id = 'd0f08689-6689-4a74-bda8-f5d70da90576'

  return (
    <S.ParkingsContainer>
      <S.Parking onClick={() => {
        navigate(`/parking/${id}`, { replace: true })
      }}>
        <S.Image src={Shopping} />
        <S.DescContainer>
          <S.Title>
            Cacoal Shopping
          </S.Title>
          <S.Description>
            Estacionamento do shopping de cacoal
          </S.Description>
          <S.DescriptionHours>
            Horário de funcionamento - 08:00 as 21:00
          </S.DescriptionHours>
        </S.DescContainer>
      </S.Parking>
    </S.ParkingsContainer>
  )
}
