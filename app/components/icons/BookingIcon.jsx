import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Path
      fill="#006BFF"
      d="M20.833 18.917V13.02a1.574 1.574 0 0 1-1.562-1.563V6.771h-4.688C5.396 6.77 2.604 9.563 2.604 18.75v1.042c0 .854.708 1.562 1.563 1.562 2 0 3.645 1.646 3.645 3.646s-1.645 3.646-3.645 3.646c-.855 0-1.563.708-1.563 1.562v1.042c0 9.188 2.792 11.98 11.98 11.98h4.687v-4.688c0-.855.708-1.563 1.562-1.563v-5.896a1.574 1.574 0 0 1-1.562-1.562v-9.042c0-.854.708-1.562 1.562-1.562Z"
    />
    <Path
      fill="#006BFF"
      d="M42.188 26.042c0 2 1.645 3.645 3.645 3.645.855 0 1.563.709 1.563 1.563 0 9.188-2.792 11.98-11.98 11.98h-13.02v-4.688c0-.855-.709-1.563-1.563-1.563v-5.896c.855 0 1.563-.708 1.563-1.562v-9.042c0-.854-.709-1.562-1.563-1.562V13.02c.855 0 1.563-.709 1.563-1.563V6.771h13.02c9.188 0 11.98 2.792 11.98 11.979v2.083c0 .855-.709 1.563-1.563 1.563-2 0-3.645 1.646-3.645 3.646Z"
      opacity={0.4}
    />
  </Svg>
)
export {SvgComponent as BookingIcon}
