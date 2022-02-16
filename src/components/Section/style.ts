import { styled, theme } from '../../stitches.config'

const colors = theme.colors

export const SectionContainer = styled('div', {
  backgroundColor: theme.colors.gray,
  minHeight: "65vh",
  width: '100%',
})

export const SubTitle = styled('h2', {
  fontSize: '1.3em',
  color: colors.withe,
  textTransform: 'uppercase',
  fontWeight: 'normal',
  textAlign: 'center',
  paddingTop: '20px',
  marginBottom: '5px'
})


export const Line = styled('div', {
  width: '90%',
  height: '1px',
  backgroundColor: colors.light,
  margin: 'auto'
})