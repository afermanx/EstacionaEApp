import { styled, theme } from '../../stitches.config'

const colors = theme.colors

export const LoadingContainer = styled('div', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
  backgroundColor: colors.light,
  variants: {
    loading: {
      true: {
        display: 'flex'
      },
      false: {
        display: 'none'
      }
    }
  }
})