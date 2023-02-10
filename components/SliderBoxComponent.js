import {SliderBox} from 'react-native-image-slider-box';
import {dimensions, styles} from '../screens/Home';

export const SliderBoxComponent = ({images}) => {
  return (
    <>
      <SliderBox
        images={images}
        dotStyle={styles.sliderStyle}
        sliderBoxHeight={dimensions.height / 1.5}
        autoplay={true}
        circleLoop={true}
      />
    </>
  );
};
