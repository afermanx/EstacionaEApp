import { styled, theme } from '../../stitches.config'

const colors = theme.colors

export const Container = styled('div', {
  backgroundColor: colors.withe,
  width: '80%',
  margin: '40px auto 0 auto',
})

export const ContainerVacancies = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '15px'
})

export const IconCar = styled('img', {
  width: '80%',
  variants: {
    busy: {
      on: {
        display: 'flex'
      },
      off: {
        display: 'none',
      }
    }
  }
})

export const ContaierNumber = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  variants: {
    rotate: {
      left: {
        left: '-10px',
      },
      right: {
        right: '-10px',
      }
    }
  }
})

export const Number = styled('p', {
  variants: {
    rotate: {
      left: {
        transform: 'rotateZ(90deg)',
      },
      right: {
        transform: 'rotateZ(-90deg)',
      }
    }
  }
})

export const Vacancy = styled('div', {
  position: 'relative',
  width: '40%',
  height: '60px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  variants: {
    rotate: {
      left: {
        borderTop: `1px dashed ${colors.gray}`,
        borderRight: `1px dashed ${colors.gray}`,
        borderBottom: `1px dashed ${colors.gray}`,
      },
      right: {
        borderTop: `1px dashed ${colors.gray}`,
        borderLeft: `1px dashed ${colors.gray}`,
        borderBottom: `1px dashed ${colors.gray}`,
      }
    }
  }
})