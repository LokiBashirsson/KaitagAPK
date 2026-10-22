import Svg, { Path } from "react-native-svg";

// shared/ui/icons/HomeIcon.tsx
interface IconProps {
  size?: number;
  color?: string;
}

export const HomeIcon = ({ size = 28, color = "#E17100" }: IconProps) => {
  return (
    <Svg viewBox="0 0 26 26" fill="none" width={size} height={size}>
      <Path
        d="M4 20V9L13 3L22 9V20"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <Path
        d="M9 20V13H17V20"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
