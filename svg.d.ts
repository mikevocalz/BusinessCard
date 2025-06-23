import { IImage } from './interface.js';
import 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

declare const SVG: IImage;

// Define a common style type for SVG elements
type SVGStyle = {
  stroke?: string;
  strokeWidth?: number;
  strokeMiterlimit?: number;
  fill?: string;
  fillRule?: 'nonzero' | 'evenodd';
  fillOpacity?: number;
  strokeOpacity?: number;
  // Add other SVG style properties as needed
}

// Extend the existing SVG types from react-native-svg
declare module 'react-native-svg' {
  // Extend the SvgProps interface to include web SVG attributes
  export interface SvgProps {
    xmlns?: string;
    'data-name'?: string;
    // Add any other web SVG attributes you need here
  }
  
  // Extend the G component props
  export interface GProps {
    'data-name'?: string;
    style?: StyleProp<SVGStyle>;
    // Add any other G-specific attributes you need
  }
  
  // Extend Path element props
  export interface PathProps {
    'data-name'?: string;
    style?: StyleProp<SVGStyle>;
  }
  
  // Extend Circle element props
  export interface CircleProps {
    'data-name'?: string;
    style?: StyleProp<SVGStyle>;
  }
  
  // Extend other SVG elements as needed
  export interface RectProps {
    style?: StyleProp<SVGStyle>;
  }
  
  export interface LineProps {
    style?: StyleProp<SVGStyle>;
  }
  
  export interface PolygonProps {
    style?: StyleProp<SVGStyle>;
  }
}

export { SVG };
