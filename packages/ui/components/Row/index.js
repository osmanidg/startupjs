import React from 'react'
import './index.styl'
import propTypes from 'prop-types'
import Div from './../Div'
import { observer } from 'startupjs'

function Row ({
  style,
  children,
  align,
  vAlign,
  wrap,
  reverse,
  ...props
}) {
  return pug`
    Div.root(
      style=style
      styleName=[align, 'v_' + vAlign, { wrap, reverse }]
      ...props
    )
      = children
  `
}

Row.defaultProps = {
  wrap: false,
  reverse: false,
  align: 'left',
  vAlign: 'stretch',
  ...Div.defaultProps
}

Row.propTypes = {
  ...Div.propTypes,
  wrap: propTypes.bool,
  reverse: propTypes.bool,
  align: propTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
  vAlign: propTypes.oneOf(['stretch', 'start', 'center', 'end'])
  // TODO: may be we need add align-content
}

export default observer(Row)
