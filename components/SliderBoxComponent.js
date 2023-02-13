import {SliderBox} from 'react-native-image-slider-box';
import {dimensions} from '../services/constants';
import {styles} from '../styles/mainStyles';

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
