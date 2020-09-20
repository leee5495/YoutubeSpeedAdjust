// callback executed when canvas was found
function handleCanvas(video, ChannelName) {
	var isVerifiedArtist = null;
	var isVerifiedArtist = document.querySelector("#upload-info > #channel-name > ytd-badge-supported-renderer > .badge.badge-style-type-verified-artist");
	
	// if playing music
	if (isVerifiedArtist) {
		// set playback speed to 1.0
		video.playbackRate = 1.0;
	}
	else if (ChannelName.endsWith("- Topic")) {
		// set playback speed to 1.0
		video.playbackRate = 1.0;
	}
}

// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  var video = document.getElementsByTagName("video")[0];
  var ChannelName = document.querySelector("#text > a");
  if (video && ChannelName) {
    handleCanvas(video, ChannelName.textContent);
    //me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});