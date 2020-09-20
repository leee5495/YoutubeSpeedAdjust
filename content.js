// callback executed when canvas was found
function handleCanvas(video, info) {
	var video = document.getElementsByTagName("video")[0];
	var isVerifiedArtist = document.querySelector("#upload-info > #channel-name > ytd-badge-supported-renderer > .badge.badge-style-type-verified-artist");
	var info = document.getElementById('scriptTag');
	
	var json = JSON.parse(info.textContent);
	var channelName = json['author'];
	var genre = json['genre'];
	
	// if playing music
	if (isVerifiedArtist) {
		// set playback speed to 1.0
		video.playbackRate = 1.0;
	}
	else if (channelName.endsWith("Topic")) {
		// set playback speed to 1.0
		video.playbackRate = 1.0;
	}
	else if (genre == 'Music') {
		// set playback speed to 1.0
		video.playbackRate = 1.0;
	}
}

// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  var video = document.getElementsByTagName("video")[0];
  var info = document.getElementById('scriptTag');
  if (video && info) {
    handleCanvas(video, info.textContent);
    //me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});