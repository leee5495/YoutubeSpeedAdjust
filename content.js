console.log('new video playing');

window.onload = function temp() {
	console.log('document loaded'); 
	var video = document.getElementsByTagName("video")[0];
	console.log(video);
	
	var isVerifiedArtist = null;
	var ChannelName = null;

	while(!isVerifiedArtist && !ChannelName) {
		isVerifiedArtist = document.querySelector("#upload-info > #channel-name > ytd-badge-supported-renderer > .badge.badge-style-type-verified-artist");
		console.log(isVerifiedArtist);
		ChannelName = document.querySelector("#text > a")
		console.log(ChannelName);
	}
	ChannelName = ChannelName.textContent;
	console.log(ChannelName);
	
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