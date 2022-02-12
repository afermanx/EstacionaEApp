import * as S from './style'

type Props = {
  children?: JSX.Element
}

export default function Header({ children }: Props) {
  return (
    <header>
      <S.HeaderContainer>
        {children}
      </S.HeaderContainer>
    </header>
  )
}
