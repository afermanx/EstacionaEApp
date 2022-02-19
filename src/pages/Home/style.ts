import { styled, theme } from '../../stitches.config'

const { colors } = theme

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '40px 0px 40px 0px',
})

export const QrCode = styled('img', {
  variants: {
    size: {
      mobile: {
        width: '65%',
      },
      web: {
        width: '15%',
      }
    }
  }
})

export const Subtitle = styled('h2', {
  fontSize: "0.9em",
  color: colors.light,
  marginTop: '15px'
})

export const QrCodeContainer = styled('div', {
  display: 'flex',
  width: '70%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '30px auto 0 auto',
  position: 'absolute',
  bottom: '5%',
  left: '50%',
  transform: 'translateX(-50%)',
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

