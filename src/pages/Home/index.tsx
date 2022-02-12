import Header from '../../components/Header'
import * as S from './style'
import Logo from '../../assets/icons/logo.png'
import Section from '../../components/Section'
import ParkingLots from '../../components/ParkingLots'

export default function Home() {
  return (
    <>
      <Header>
        <S.HeaderContainer>
          <S.Image src={Logo} alt="" />
          <S.Title>EstacionaÊ</S.Title>
        </S.HeaderContainer>
      </Header>
      <Section>
        <div>
          <S.SubTitle>ESTACIONAMENTOS DISPONÍVEIS</S.SubTitle>
          <S.Line />
          <ParkingLots />
        </div>
      </Section>
    </>
  )
}
