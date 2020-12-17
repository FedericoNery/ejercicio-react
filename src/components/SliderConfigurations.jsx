import Slider from "./Slider"
import React from 'react'

const SliderMontoTotalConfiguration = (props) => {
    const marksMontoTotal = {
        5000: { label: "$5000", style: { color: "white" } },
        50000: { label: "$50000", style: { color: "white" } }
    }

    const handleStyle = { border: "none" }
    const dotStyle = { width: "0", height: "0", border: "none" }
    const railStyle = { borderRadius: "unset" }

    return <Slider
        min={5000}
        max={50000}
        defaultValue={5000}
        included={false}
        marks={marksMontoTotal}
        step={500}
        tipFormatter={value => `$${value}`}
        handleStyle={handleStyle}
        dotStyle={dotStyle}
        railStyle={railStyle}
        {...props}
        />
}

const SliderPlazoConfiguration = (props) => {
    const marksPlazo = {
        3: { label: 3, style: { color: "white" } },
        24: { label: 24, style: { color: "white" } }
    }

    const handleStyle = { border: "none" }
    const dotStyle = { width: "0", height: "0", border: "none" }
    const railStyle = { borderRadius: "unset" }

    return <Slider
        min={3}
        max={24}
        defaultValue={3}
        step={1}
        included={false}
        marks={marksPlazo}
        tipFormatter={value => `${value}`}
        handleStyle={handleStyle}
        dotStyle={dotStyle}
        railStyle={railStyle}
        {...props}
    />
}

 export const SliderMontoTotal = (props) => {
    return <SliderMontoTotalConfiguration {...props}/>
 }

 export const SliderPlazo = (props) => {
    return <SliderPlazoConfiguration {...props}/>
 }
