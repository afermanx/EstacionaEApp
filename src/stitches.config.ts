import { createStitches } from '@stitches/react'

export const { css, styled, theme } = createStitches({
  theme: {
    colors: {
      yellow: '#F1D159',
      gray: '#2D2D2D',
      lightGray: '#515151',
      withe: '#fff',
      light: 'rgba(255, 255, 255, 0.34)',
      darkYellow: '#756322'
    }
  },
  media: {
    bp1: '(max-width: 400px)',
    bp2: '(min-width: 400px)',
  }
})