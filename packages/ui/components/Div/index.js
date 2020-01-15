import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import { observer } from 'startupjs'
import SHADOWS from './shadows'
import './index.styl'
function Div ({
  style,
  children,
  level = 0,
  onPress,
  ...props
}) {
  let Wrapper = typeof onPress === 'function'
    ? TouchableOpacity
    : View

  const shadowProps = SHADOWS[level] ? SHADOWS[level] : {}

  return pug`
    Wrapper.root(
      style=[style, shadowProps]
      styleName=[{ 'with-shadow': !!level }]
      onPress=onPress
      ...props
    )
      = children
  `
}

Div.propTypes = {
  shadow: PropTypes.oneOf(Object.keys(SHADOWS)),
  onPress: PropTypes.func
}

export default observer(Div)
