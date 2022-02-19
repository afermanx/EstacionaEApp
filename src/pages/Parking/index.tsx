import React, { useContext } from 'react'

import Header from "../../components/Header";

import Return from '../../assets/icons/return.svg'
import Shopping from '../../assets/icons/logo-shopping.svg'
import * as S from './style'
import Section from "../../components/Section";
import { useNavigate } from "react-router-dom";
import Vacancies from "../../components/Vacancies";
import Loading from '../../components/Loading';
import AppContext from '../../context/AppContext';

export default function Parking() {
  const { loading } = useContext(AppContext)

  const navigate = useNavigate()
  return (
    <section>
      <Loading loading={loading} />
      <Header>
        <>
          <S.Icon onClick={() => {
            navigate('/', { replace: true })
          }} src={Return} alt="return icon page" />
          <S.LogoContainer>
            <S.Logo src={Shopping} alt="Imagem" />
            <S.Description>
              Cacoal Shopping é um complexo de compras localizado em Cacoal, Rondônia. É o maior centro de serviços e lazer da cidade e possui a concentração das melhores
            </S.Description>
          </S.LogoContainer>
        </>
      </Header>
      <Section title="VAGAS DISPONÍVEIS">
        <Vacancies />
      </Section>
    </section>
  )
}
