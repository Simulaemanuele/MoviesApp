import * as React from 'react';
import VideoPlayer from 'react-native-video-controls';
import {VideoComponentProps} from '../types/generic.types';

const Video = ({onClose}: VideoComponentProps) => {
  return (
    <VideoPlayer
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullscreenOrientation="all"
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    />
  );
};

export default Video;
