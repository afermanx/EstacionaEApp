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

export const SubTitle = styled('h2', {
  fontSize: '1.3em',
  color: colors.withe,
  textTransform: 'uppercase',
  fontWeight: 'normal',
  textAlign: 'center',
  marginTop: '15px',
  marginBottom: '5px'
})

export const Line = styled('div', {
  width: '90%',
  height: '1px',
  backgroundColor: colors.light,
  margin: 'auto'
})

