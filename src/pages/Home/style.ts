import { styled, theme } from '../../stitches.config'

const { colors } = theme

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '40px 0px 40px 0px',
})

export const Image = styled('img', {
  width: '65%',
})

export const Title = styled('h1', {
  fontSize: '2.5em',
  color: colors.gray,
})

