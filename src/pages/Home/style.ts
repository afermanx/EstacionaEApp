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
  variants: {
    size: {
      mobile: {
        width: '65%',
      },
      web: {
        width: 'auto',
      }
    }
  }
})

export const Title = styled('h1', {
  fontSize: '2.5em',
  color: colors.gray,
})

