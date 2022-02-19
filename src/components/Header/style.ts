import { styled, theme } from '../../stitches.config'

export const HeaderContainer = styled('div', {
  backgroundColor: theme.colors.yellow,
  variants: {
    size: {
      mobile: {
        height: 'auto',
      },
      web: {
        maxHeight: "100vh",
        paddingBottom: '20px',
      }
    }
  }
})