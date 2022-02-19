import React, { useContext } from 'react'

import Header from '../../components/Header'
import * as S from './style'
import Logo from '../../assets/icons/logo.png'
import Section from '../../components/Section'
import ParkingLots from '../../components/ParkingLots'

import Qrcode from '../../assets/icons/qrcode.svg'
import Loading from '../../components/Loading'
import AppContext from '../../context/AppContext'

export default function Home() {
  return (
    <>
      <Header>
        <S.HeaderContainer>
          <S.Image src={Logo} alt="" size={{ '@bp1': 'mobile', '@initial': 'web' }} />
          <S.Title>EstacionaÊ</S.Title>
        </S.HeaderContainer>
      </Header>
      <Section title='ESTACIONAMENTOS DISPONÍVEIS'>
        <div>
          <ParkingLots />
          <S.QrCodeContainer>
            <S.QrCode size={{ '@bp1': 'mobile', '@initial': 'web' }} src={Qrcode} alt="" />
            <S.Subtitle>Escaneie o QrCode para abrir o site</S.Subtitle>
          </S.QrCodeContainer>
        </div>
      </Section>
    </>
  )
}
