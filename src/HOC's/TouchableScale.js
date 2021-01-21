import React from 'react'
import TouchableScale from 'react-native-touchable-scale';

export const TouchableScaleHOC = ({children, callback}) => {
  return(
    <TouchableScale
      activeScale={0.9}
      friction={11}
      tension={100}
      onPress={() => callback()}>
      {children}
    </TouchableScale>
  )
}
