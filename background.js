chrome.runtime.onInstalled.addListener(function() {
	// if watching youtube video
	if (window.location.href.indexOf("youtube.com/watch") > -1) {
		var isVerifiedArtist = document.querySelector("#upload-info > #channel-name > ytd-badge-supported-renderer > .badge.badge-style-type-verified-artist");
		var ChannelName = document.querySelector("#text > a").textContent;
		var VideoSettings = document.querySelectorAll(".ytp-popup.ytp-settings-menu > .ytp-panel > .ytp-panel-menu > .ytp-menuitem");
		var DefaultSpeed = "Normal";
		for (i = 0; i < VideoSettings.length; i++) {
			if (VideoSettings[i].querySelector(".ytp-menuitem-label").textContent == "Playback speed") {
				DefaultSpeed = VideoSettings[i].querySelector(".ytp-menuitem-content").textContent
				break;
			}
		}
		// if watching a music video
		if (isVerifiedArtist) {
			// set playback speed to 1.0
			document.getElementsByTagName("video")[0].playbackRate = 1.0;
		}
		else if (ChannelName.endsWith("- Topic")) {
			// set playback speed to 1.0
			document.getElementsByTagName("video")[0].playbackRate = 1.0;
		}
		// if not watching a music video
		else {
			// set playback speed to the default setting
			if (DefaultSpeed == "Normal") {
				document.getElementsByTagName("video")[0].playbackRate = 1.0;
			}
			else {
				document.getElementsByTagName("video")[0].playbackRate = parseFloat(DefaultSpeed);
			}
		}
	}
});
