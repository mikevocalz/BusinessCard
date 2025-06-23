import { StyleProp, ViewStyle } from 'react-native';
import 'react-native-svg';

declare module 'react-native-svg' {
  interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
  
  interface ImageProps {
    className?: string;
    xlinkHref?: string;
    style?: StyleProp<ViewStyle> | {
      fill?: string;
      mixBlendMode?: string;
      opacity?: number;
      isolation?: string;
      [key: string]: any;
    };
  }

  interface PathProps {
    style?: StyleProp<ViewStyle> | {
      fill?: string;
      mixBlendMode?: string;
      opacity?: number;
      isolation?: string;
      [key: string]: any;
    };
  }
}
