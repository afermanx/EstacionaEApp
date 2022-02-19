import { styled, theme } from '../../stitches.config'

const colors = theme.colors

export const Container = styled('div', {
  color: colors.withe,
  variants: {
    size: {
      mobile: {
        width: '80%',
      },
      web: {
        width: '30%',
      }
    }
  }
})