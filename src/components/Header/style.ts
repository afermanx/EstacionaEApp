import { styled, theme } from '../../stitches.config'

export const HeaderContainer = styled('div', {
  backgroundColor: theme.colors.yellow,
  variants: {
    size: {
      mobile: {
        height: 'auto',
        minHeight: '35vh'
      },
      web: {
        maxHeight: "100vh",
        paddingBottom: '20px',
      }
    }
  }
})