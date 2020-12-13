import RCSlider, { SliderTooltip } from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';

const Slider = (props) => {
    const {tipFormatter} = props
    const { Handle } = RCSlider;

    const handle = props => {
        const { value, dragging, index, ...restProps } = props;
        return <SliderTooltip
            prefixCls="rc-slider-tooltip"
/*             overlay={`${value} %`}
 */            overlay={tipFormatter(value)}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </SliderTooltip>
    };

    return <RCSlider {...props} handle={handle} />
}

export default Slider

