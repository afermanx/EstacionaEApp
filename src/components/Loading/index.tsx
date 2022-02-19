import React from 'react'
import Lottie from 'react-lottie';
import * as S from './style'

import animationData from '../../assets/animations/loading.json'

export default function Loading({ loading }: any) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  console.log(loading)
  return (
    <S.LoadingContainer loading={loading === true ? 'true' : 'false'}>
      <Lottie options={defaultOptions} width={150} height={150} />
    </S.LoadingContainer>
  )
}
