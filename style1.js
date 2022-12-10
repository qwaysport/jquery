if(Hls.isSupported()) {
var video = document.getElementById('video1');
var hls = new Hls();
hls.loadSource('https://live-sg1.global.ssl.fastly.net/live-hls/tonton1_720p/index.m3u8');
hls.attachMedia(video);
hls.on(Hls.Events.MANIFEST_PARSED,function() {
  video.play();
});
}
