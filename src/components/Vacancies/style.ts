import { keyframes } from '@stitches/react'
import { styled, theme } from '../../stitches.config'

const colors = theme.colors

export const Container = styled('div', {
  backgroundColor: colors.withe,
  margin: '40px auto 0 auto',
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

export const VacanciesHeader = styled('div', {
  width: '90%',
  margin: 'auto',
  display: 'flex',
  padding: '15px 0',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const TextVacanties = styled('p', {
  fontWeight: 800,
  color: colors.lightGray,
})

export const ContainerVacancies = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0 15px 15px 15px',
  variants: {
    size: {
      mobile: {
        width: 'auto'
      },
      web: {
        width: '400px',
        margin: 'auto'
      }
    }
  }
})

const carLeft = keyframes({
  '0%': { transform: 'translateX(-80%) rotateZ(-90deg) translateX(-80px)' },
  '30%': { transform: 'translateX(-80%) rotateZ(-90deg) translateX(-30px)' },
  '60%': { transform: 'translateX(-60%) rotateZ(-5deg)' },
  '100%': { transform: 'translateX(0%)' }
})

const carRight = keyframes({
  '0%': { transform: 'translateX(80%) rotateZ(90deg) translateX(80px)' },
  '30%': { transform: 'translateX(80%) rotateZ(90deg) translateX(30px)' },
  '60%': { transform: 'translateX(60%) rotateZ(5deg)' },
  '100%': { transform: 'translateX(0%)' }
})

export const IconCar = styled('img', {
  width: '80%',
  zIndex: 20,
  variants: {
    busy: {
      on: {
        display: 'flex',
      },
      off: {
        display: 'none'
      }
    },
    rotate: {
      left: {
        animation: `${carLeft} 1000ms`,
      },
      right: {
        animation: `${carRight} 1000ms`,
      }
    }
  },
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
    },
    size: {
      mobile: {
        width: '40%',
      },
      web: {
        width: '150px',
      }
    }
  }
})