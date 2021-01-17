export default {
  title: 'Gradient Bar',
}

export const BasicBar = () =>
  `<GradientBar width="200" height="20" :stops="[[0, 'red'], [100, 'blue']]" />`

export const ThreeStops = () =>
  `<GradientBar width="200" height="20" :stops="[[0, 'red'], [50, 'green'], [100, 'blue']]" />`

export const WithRoundedCorners = () =>
  `<GradientBar width="200" height="20" radius="5" :stops="[[0, 'red'], [100, 'blue']]" />`
