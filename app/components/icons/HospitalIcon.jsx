import * as React from "react"
import { Svg, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={61}
    fill="none"
    {...props}
  >
    <Path
      fill="#FC5750"
      d="M55 53.885H5c-1.025 0-1.875.86-1.875 1.897 0 1.036.85 1.896 1.875 1.896h50c1.025 0 1.875-.86 1.875-1.896 0-1.037-.85-1.897-1.875-1.897Z"
    />
    <Path
      fill="#FC5750"
      d="M42.5 5.207h-25c-7.5 0-10 4.526-10 10.115v40.46h45v-40.46c0-5.589-2.5-10.115-10-10.115Z"
      opacity={0.4}
    />
    <Path
      fill="#FC5750"
      d="M35.15 38.08H24.825c-1.275 0-2.35 1.063-2.35 2.378v15.324h15V40.458a2.324 2.324 0 0 0-2.325-2.377ZM36.25 19.747h-4.375v-4.425c0-1.037-.85-1.897-1.875-1.897s-1.875.86-1.875 1.897v4.425H23.75c-1.025 0-1.875.86-1.875 1.897s.85 1.896 1.875 1.896h4.375v4.425c0 1.037.85 1.897 1.875 1.897s1.875-.86 1.875-1.896V23.54h4.375c1.025 0 1.875-.86 1.875-1.896 0-1.037-.85-1.897-1.875-1.897Z"
    />
  </Svg>
)
export {SvgComponent as HospitalIcon}
