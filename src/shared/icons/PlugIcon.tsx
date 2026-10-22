import { DimensionValue, StyleSheet } from "react-native";
import Svg, { Defs, Path, Pattern, Rect } from "react-native-svg";

interface PlugIconProps {
  width?: DimensionValue;
  height?: DimensionValue;
  flex?: number;
}

export const PlugIcon = ({ width, height, flex }: PlugIconProps) => {
  return (
    <Svg
      style={[
        StyleSheet.absoluteFill,
        { width: width, height: height, flex: flex },
      ]}
    >
      <Defs>
        <Pattern
          id="balancedStripes"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <Rect width="40" height="40" fill="#17120D" />
          <Path
            d="M0,40 L40,0 M-10,10 L10,-10 M30,50 L50,30"
            stroke="#1D1610"
            strokeWidth="15"
          />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#balancedStripes)" />
    </Svg>
  );
};
