if(sourcenya !==''){
							/*window.dataLayer = window.dataLayer || [];*/
							var playerInstance = jwplayer("algiTV");
							playerInstance.setup({
							playlist: [{
							sources: [{ 
							file: sourcenya
							},{
							file: "https://edge.nim.mivo.tv/video/assets/oops.m3u8"
							}]
							}],
							autostart: true,
							hlshtml: true,
							width: "100%",
							height: '100%',

							stretching: "exactfit",
							primary: "html5",
							abouttext : "Live",
							aboutlink: "",
							logo: {file: '', position: 'bottom-right', margin: '0',link: ''}, 
							skin: {
							name: "seven",
							active: "#",
							inactive: "white",
							background: "#"
							},
							});

							playerInstance.on('play', function () {
							ga('send', 'event', ' Desktop TV', 'Playing ', '');
							});
							playerInstance.on('buffer', function () {
							ga('send', 'event', ' Desktop TV', 'Buffering ', '');
							});
							playerInstance.on('pause', function () {
							ga('send', 'event', ' Desktop TV', 'Pause ', '');
							});

							jwplayer().on('play', function(){
							setTimeout(function(){
							var textAlt = document.querySelectorAll('#' + jwplayer().id + ' .jw-controlbar-center-group .jw-text-alt')[0];
							if(textAlt) textAlt.innerHTML = 'Live ';
							},300);
							});
							jwplayer("algiTV").onError(function(){
							jwplayer("algiTV").load([{file:sourcenya}]);
							jwplayer("algiTV").play();
							});
							}

							if(sourceflow !== ''){
							/* global event listeners for demo purposes, omit in production */
							flowplayer(function (api, root) {
							var instanceId = root.getAttribute("data-flowplayer-instance-id"),
							engineInfo = document.getElementById("engine" + instanceId),
							vtypeInfo = document.getElementById("vtype" + instanceId),
							detail = document.getElementById("detail" + instanceId);

							api.on("ready", function (e, api, video) {
							var engineName = api.engine.engineName;

							engineInfo.innerHTML = engineName;
							vtypeInfo.innerHTML = video.type;
							if (engineName === "flash") {
							detail.innerHTML = "video source: " + video.src;
							}

							}).on("progress", function (e, api) {
							var hlsengine = api.engine.hlsjs,
							vtag = api.engine.engineName === "html5" && root.querySelector(".fp-engine");


							});

							});
							/* end global event listeners setup */

							flowplayer(function (api, root) {
							var fsbutton = root.querySelector(".fp-fullscreen");

							// append fullscreen button after HD menu is added on ready
							api.on("ready", function () {
							root.querySelector(".fp-controls").appendChild(fsbutton);
							});
							});

							window.onload = function () {
							$("#tempatpertama").remove();

							flowplayer("#algiTV", {
							splash: true,
							ratio: 9/16,

							// stream only available via https:
							// force loading of Flash HLS via https
							swfHls: "https://releases.flowplayer.org/7.0.4/flowplayerhls.swf",

							clip: {
							live: true,
							sources: [
							{ type: "application/x-mpegurl",
							src: sourceflow }
							]
							}

							});

							};
							}
