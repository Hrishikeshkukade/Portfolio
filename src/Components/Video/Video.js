import React, { useEffect, useRef } from 'react';
import Peer from 'peerjs';

function Video() {
  const videoRef = useRef();

  useEffect(() => {
    const peer = new Peer(undefined, {
      host: '/',
      port: '3001'
    });

    peer.on('open', id => {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
    });
  }, []);

  return (
    <div>
      <video ref={videoRef}></video>
    </div>
  );
}

export default Video;
