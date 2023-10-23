import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={61}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M51.425 27.99c-1.9-2.3-4.4-3.843-7.25-4.475-.625-2.908-1.775-5.437-3.4-7.51a1.4 1.4 0 0 0-.15-.203c-5.475-6.7-14.45-6.676-20.5-3.211-5.175 2.984-9.575 9.28-7.275 18.308-5.3 1.315-7.75 5.993-7.75 10.216 0 4.729 3.05 10.064 9.875 10.545h25.85a13.88 13.88 0 0 0 9.525-3.743c6.3-5.563 5.475-14.692 1.075-19.926Z"
      opacity={0.7}
    />
    <Path
      fill="#FFB900"
      d="M53.175 22.301a8.187 8.187 0 0 1-3.075 6.423 7.943 7.943 0 0 1-5.075 1.82c-4.475 0-8.125-3.691-8.125-8.218 0-2.25.9-4.298 2.4-5.79v-.026c1.475-1.492 3.5-2.427 5.725-2.427 4.5 0 8.15 3.692 8.15 8.218Z"
    />
  </Svg>
)
export {SvgComponent as WeatherIcon}
