import * as S from './style'

import LeftCar from '../../assets/icons/left-car.svg'
import RightCar from '../../assets/icons/right-car.svg'

export default function Vacancies() {

  return (
    <div>
      <S.Container>
        <S.ContainerVacancies>
          <S.Vacancy rotate='left'>
            <S.ContaierNumber rotate='left'>
              <S.Number rotate='left'>19</S.Number>
            </S.ContaierNumber>
            <S.IconCar busy='on' src={LeftCar} />
          </S.Vacancy>

          <S.Vacancy rotate='right'>
            <S.ContaierNumber rotate='right'>
              <S.Number rotate='right'>20</S.Number>
            </S.ContaierNumber>
            <S.IconCar busy='off' src={RightCar} />
          </S.Vacancy>

          <S.Vacancy rotate='left'>
            <S.ContaierNumber rotate='left'>
              <S.Number rotate='left'>21</S.Number>
            </S.ContaierNumber>
            <S.IconCar busy='off' src={LeftCar} />
          </S.Vacancy>

          <S.Vacancy rotate='right'>
            <S.ContaierNumber rotate='right'>
              <S.Number rotate='right'>22</S.Number>
            </S.ContaierNumber>
            <S.IconCar busy='off' src={RightCar} />
          </S.Vacancy>
        </S.ContainerVacancies>
      </S.Container>
    </div>
  )
}
