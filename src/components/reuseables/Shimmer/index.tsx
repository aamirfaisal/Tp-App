import React, { memo } from 'react'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'
import { shimmerProps } from '../../../enums/Types'

const Shimmer = (props: shimmerProps) => {
    const { style } = props
    return (
        <ShimmerPlaceHolder
            style={style}
            shimmerColors={['#e0e0e0', '#f5f5f5', '#e0e0e0']}
            LinearGradient={LinearGradient}
        />
    )
}

export default memo(Shimmer);
