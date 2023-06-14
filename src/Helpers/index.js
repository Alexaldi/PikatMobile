import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

export const sizeHelper = (params, wh) => {
  params = parseFloat(params);
  
  if (wh == 'h') {
    return PixelRatio.roundToNearestPixel(height * (params / 100));
  }

  return PixelRatio.roundToNearestPixel(width * (params / 100));
};