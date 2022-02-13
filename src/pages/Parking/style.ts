import { styled, theme } from '../../stitches.config'

const { colors } = theme

export const Icon = styled('img', {
  position: 'absolute',
  top: '3%',
  left: '4%'
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '20px'
})

export const Logo = styled('img', {
  backgroundColor: colors.withe,
  width: '200px',
  height: '200px',
  padding: '20px',
  borderRadius: '100%'
})

export const Description = styled('p', {
  fontSize: '13px',
  fontWeight: 'bold',
  color: colors.darkYellow,
  textAlign: 'center',
  margin: '15px 0 35px 0',
})