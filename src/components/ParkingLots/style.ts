import { styled, theme } from '../../stitches.config'

const { colors } = theme

export const ParkingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Parking = styled('div', {
  display: 'flex',
  backgroundColor: colors.lightGray,
  width: '90%',
  padding: '13px 10px',
  borderRadius: '10px',
  marginTop: '40px',
})

export const DescContainer = styled('div', {
  marginLeft: '15px',
  position: 'relative',
})

export const Image = styled('img', {})

export const Title = styled('h2', {
  color: colors.withe,
  fontSize: '18px',
})

export const Description = styled('p', {
  color: colors.withe,
  fontSize: '15px',
  fontWeight: 300,
})

export const DescriptionHours = styled('p', {
  color: colors.withe,
  fontSize: '11px',
  fontWeight: 300,
  marginTop: '10px',
})
