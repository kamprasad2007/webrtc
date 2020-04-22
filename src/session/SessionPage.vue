<template>
    <div class="container">
        <div id="videos" @mouseover="showTools = true" v-bind:class="[{ 'active' : videoconnected }]">
            <div id="mini-videos" class="mini-videos" v-bind:class="[{ 'active' : videoconnected }]">
               <!-- <video id="mini-video" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : videoconnected }]"></video> -->
                 <!-- <video id="mini-video2" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : videoconnected }]"></video>
                 <video id="mini-video3" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : videoconnected }]"></video>
                 <video id="mini-video4" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : videoconnected }]"></video> --> -->
                <!-- <video id="mini-video" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : videoconnected }]"></video>
                <video id="mini-video" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : videoconnected }]"></video> -->

            </div>
            <video id="remote-video" autoplay="" playsinline="" v-bind:class="[{ 'active' : videoconnected }]"></video>
            <video id="local_video" autoplay  v-bind:class="[{ 'active' : !videoconnected }]"></video>
        </div>

        <div id="icons" v-bind:class="[{ 'active' : showTools }]" @mouseover="showTools = true" @mouseleave="showTools = false">
            <svg id="mute-audio" xmlns="http://www.w3.org/2000/svg" 
            v-bind:class="[{ 'on' : mute_audio }]"
            @click="muteaudio"
            width="48" height="48" viewBox="-10 -10 68 68">
            <title>title</title>
            <circle cx="24" cy="24" r="34">
                <title>Mute audio</title>
            </circle>
            <path class="on" transform="scale(0.6), translate(17,18)" d="M38 22h-3.4c0 1.49-.31 2.87-.87 4.1l2.46 2.46C37.33 26.61 38 24.38 38 22zm-8.03.33c0-.11.03-.22.03-.33V10c0-3.32-2.69-6-6-6s-6 2.68-6 6v.37l11.97 11.96zM8.55 6L6 8.55l12.02 12.02v1.44c0 3.31 2.67 6 5.98 6 .45 0 .88-.06 1.3-.15l3.32 3.32c-1.43.66-3 1.03-4.62 1.03-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c1.81-.27 3.53-.9 5.08-1.81L39.45 42 42 39.46 8.55 6z" fill="white"></path>
            <path class="off" transform="scale(0.6), translate(17,18)" d="M24 28c3.31 0 5.98-2.69 5.98-6L30 10c0-3.32-2.68-6-6-6-3.31 0-6 2.68-6 6v12c0 3.31 2.69 6 6 6zm10.6-6c0 6-5.07 10.2-10.6 10.2-5.52 0-10.6-4.2-10.6-10.2H10c0 6.83 5.44 12.47 12 13.44V42h4v-6.56c6.56-.97 12-6.61 12-13.44h-3.4z" fill="white"></path>
            </svg>

            <svg id="mute-video" xmlns="http://www.w3.org/2000/svg" 
            v-bind:class="[{ 'on' : mute_video}]"
            @click="mutevideo"
            width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Mute video</title>
            </circle>
            <path class="on" transform="scale(0.6), translate(17,16)" d="M40 8H15.64l8 8H28v4.36l1.13 1.13L36 16v12.36l7.97 7.97L44 36V12c0-2.21-1.79-4-4-4zM4.55 2L2 4.55l4.01 4.01C4.81 9.24 4 10.52 4 12v24c0 2.21 1.79 4 4 4h29.45l4 4L44 41.46 4.55 2zM12 16h1.45L28 30.55V32H12V16z" fill="white"></path>
            <path class="off" transform="scale(0.6), translate(17,16)" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-4 24l-8-6.4V32H12V16h16v6.4l8-6.4v16z" fill="white"></path>
            </svg>

            <svg id="hangup" 
            v-bind:class="[{ 'hidden' : !videoconnected }]" 
            @click="hangup"
            xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Hangup</title>
            </circle>
            <path transform="scale(0.7), translate(11,10)" d="M24 18c-3.21 0-6.3.5-9.2 1.44v6.21c0 .79-.46 1.47-1.12 1.8-1.95.98-3.74 2.23-5.33 3.7-.36.35-.85.57-1.4.57-.55 0-1.05-.22-1.41-.59L.59 26.18c-.37-.37-.59-.87-.59-1.42 0-.55.22-1.05.59-1.42C6.68 17.55 14.93 14 24 14s17.32 3.55 23.41 9.34c.37.36.59.87.59 1.42 0 .55-.22 1.05-.59 1.41l-4.95 4.95c-.36.36-.86.59-1.41.59-.54 0-1.04-.22-1.4-.57-1.59-1.47-3.38-2.72-5.33-3.7-.66-.33-1.12-1.01-1.12-1.8v-6.21C30.3 18.5 27.21 18 24 18z" fill="white"></path>
            </svg>


            <svg id="fullscreen" xmlns="http://www.w3.org/2000/svg" 
             v-bind:class="[{ 'on' : fullscreen}]"
            width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Enter fullscreen</title>
            </circle>
            <path class="on" transform="scale(0.8), translate(7,6)" d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z" fill="white"></path>
            <path class="off" transform="scale(0.8), translate(7,6)" d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z" fill="white"></path>
            </svg>

            <svg id="sharing" xmlns="http://www.w3.org/2000/svg"  
            v-bind:class="[{'on': screen_sharing}]"
            @click="sharing"
            width="48" height="48" 
            viewBox="-10 -10 68 68" focusable="false" class="Hdh4hc cIGbvc NMm5M">
            <path transform="scale(1.3), translate(7,7)"  d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM8 12l4-4 4 4-1.41 1.41L13 11.83V16h-2v-4.17l-1.59 1.59L8 12z" fill="white"></path>
            </svg>
        </div>
        <!-- <div id="confirm-join-div" >
            <div>Ready to join<span></span>?</div>
            <button class="btn btn-primary btn-block" @click="join">JOIN</button>
        </div> -->
    </div>
</template>



<script>
import { router } from '../_helpers';
import { userService } from '../_services';

export default {
    data () {
        return {
            connections : [],
            socket: null,
            showTools: false,
            mute_audio: false,
            mute_video: false,
            screen_sharing: false,
            fullscreen: false,
            localStream: null,
            screenStream: null,
            videoconnected: false,
            usermedia_ready: false,
        }
    },
    created() {

        this.connections.length = 0;
        this.initialize();
    },
    methods: {

        initialize(){
            let peerConnectionConfig = {
                'iceServers': [
                    {'urls': 'stun:stun.l.google.com:19302'},
                ]
            };
            let offerConfig = {
                    offerToReceiveAudio: 1,
                    offerToReceiveVideo: 1
                };

            let self  = this;
            if(navigator.mediaDevices.getUserMedia) {
                this.startVideoCapture()
                .then(self.getUserMediaSuccess)
                .then(()=>{

                    this.socket = io.connect("https://webrtc-application-poc.herokuapp.com"); 
                    
                    this.socket.on('connect', () => {

                        // self.socketId = self.socket.id;
                        self.socket.on('signal', self.gotMessageFromServer);

                        self.socket.on('user-left', (id) => {
                            //self.disconnect();
                        });

                        self.socket.on('user-joined', (id, count, clients) => {
                            console.log("user-joined ", Object.keys(self.connections))
                            clients.forEach(client_id => {
                        
                                if( client_id != self.socket.id && !self.connections[client_id]){
                                    let PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
                                    self.connections[client_id] = new PeerConnection(peerConnectionConfig);
                                    
                                    self.connections[client_id].onicecandidate = (event) => {
                                        if(event.candidate != null) {
                                            console.log("---> candidate " ,client_id);
                                            self.socket.emit('signal', client_id, JSON.stringify({'ice': event.candidate}));
                                        }
                                    }

                                    self.connections[client_id].onaddstream = (event)=>{
                                        console.log("---> onaddstream")
                                        self.gotRemoteStream(event, client_id)
                                    } 

                                    self.connections[client_id].onremovestream = (event)=>{
                                        console.log("---> onremovestream")
                                        // self.gotRemovestream(event, client_id)
                                    }   
                                    
                                    self.connections[client_id].ontrack = (event)=>{
                                        console.log("---> ontrack")
                                        // self.gotTrack(event, client_id)
                                    } 
                                    
                                    self.connections[client_id].onnegotiationneeded  = (event) => {
                                        console.log("---> onnegotiationneeded");
                                        for(let key in self.connections){
                                            self.connections[key].createOffer(offerConfig).then((description) => {
                                                self.connections[key].setLocalDescription(description).then(() => {
                                                    self.socket.emit('signal', key, JSON.stringify({'sdp': self.connections[key].localDescription}));
                                                }).catch(e => console.log(e));        
                                            });
                                        }
                                    }

                                    self.localStream.getTracks().forEach(track => self.connections[client_id].addTrack(track, self.localStream));
                                    // self.connections[client_id].addStream(self.localStream);
                                    console.log("user connection created");
                                }
                            });

                            self.videoconnected = count >= 2;

                            if(count >= 2){
                                for(let key in self.connections){
                                    self.connections[key].createOffer(offerConfig).then((description) => {
                                        self.connections[key].setLocalDescription(description).then(() => {
                                            self.socket.emit('signal', key, JSON.stringify({'sdp': self.connections[key].localDescription}));
                                        }).catch(e => console.log(e));        
                                    });
                                }
                            }
                        });
                    })
                })
            }
        },

        getUserMediaSuccess(stream) {
            console.log("set local stream sucessful")
            this.localStream = stream;
            document.getElementById('local_video').srcObject = stream;
        },

        gotRemoteStream(event, id) {
            console.log("---> gotRemoteStream");

            var localVideo = document.getElementById("local_video");
            var remoteVideo = document.getElementById("remote-video");
            let div =  document.getElementById("mini-videos"); 
            let video  = document.createElement('video');
            video.setAttribute('data-id', id);
            video.autoplay    = true; 
            video.muted       = true;
            video.playsinline = true;
            video.classList = 'mini-video active';
            div.appendChild(video); 

            let mini_elements = document.getElementById("mini-videos").querySelectorAll('video');
            if(mini_elements.length == 1){
                
                if ('srcObject' in video) {
                        document.getElementById("local_video").removeAttribute("srcObject");
                        document.getElementById("local_video").srcObject= null;
                    
                    setTimeout(() => {
                        video.srcObject = this.localStream;
                        video.load();
                    }, 100);

                    setTimeout(() => {
                        document.getElementById("remote-video").srcObject = this.connections[id].getRemoteStreams()[0];
                        document.getElementById("remote-video").load();
                    }, 500);
                }else{
                    setTimeout(() => {
                        localVideo.removeAttribute("src");
                        localVideo.src = null;
                    }, 500);

                    setTimeout(() => {
                        video.src = this.localStream;
                        video.load();
                    }, 100);

                    setTimeout(() => {
                       
                        remoteVideo.src = event.stream;
                        remoteVideo.load();
                    }, 500);
                }
            }else{
                if ('srcObject' in video) {
                    video.srcObject = event.stream;
                }else{
                    video.src = event.stream;
                }
            }
        },

        gotMessageFromServer(fromId, message) {
            console.log("---> gotMessageFromServer")
            console.log(this.connections)
            var signal = JSON.parse(message)

            if(fromId != this.socket.id) {
                if(signal.sdp){
                    let SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;
                    this.connections[fromId].setRemoteDescription(new SessionDescription(signal.sdp)).then(() => {                
                        if(signal.sdp.type == 'offer') {
                            this.connections[fromId].createAnswer().then((description) => {
                                this.connections[fromId].setLocalDescription(description).then(() => {
                                    this.socket.emit('signal', fromId, JSON.stringify({'sdp': this.connections[fromId].localDescription}));
                                }).catch(e => console.log(e));        
                            }).catch(e => console.log(e));
                        }
                    }).catch(e => console.log(e));
                }
            
                if(signal.ice) {
                    let IceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
                    this.connections[fromId].addIceCandidate(new IceCandidate(signal.ice)).catch(e => console.log(e));
                }                
            }
        },

        mutevideo(){
            let { mute_video } = this;
            this.mute_video = !this.mute_video
            let video_track = this.localStream.getVideoTracks()[0];
            video_track.enabled = mute_video;
            for(let key in this.connections){
                this.connections[key].getSenders().forEach(function(s) {
                    if(s.track === video_track){
                        s.track.enabled = mute_video;
                    }
                })
            }
        },

        muteaudio(){
            let { mute_audio } = this;
            this.mute_audio = !this.mute_audio;
            let audio_track = this.localStream.getAudioTracks()[0];
            audio_track.enabled = mute_audio;
            for(let key in this.connections){
                this.connections[key].getSenders().forEach(function(s) {
                    if(s.track === audio_track){
                        s.track.enabled = mute_audio;
                    }
                })
            }
        },

        hangup(){
            this.socket.close();
            this.disconnect();
        },

        sharing(){
            let self = this;
            this.screen_sharing = !this.screen_sharing;
            if(this.screen_sharing){
                this.startScreenCapture().then((stream) => {
                    // self.screenStream = stream;
                    let newvideo = stream.getVideoTracks()[0]
                    for(let key in self.connections){
                        let  sender = self.connections[key].getSenders().find((s) => {
                            return s.track.kind == newvideo.kind
                        });
                        sender.replaceTrack(newvideo);
                    }
                });
            }else{
                let newvideo = this.localStream.getVideoTracks()[0]
                for(let key in self.connections){
                    let  sender = self.connections[key].getSenders().find((s) => {
                        return s.track.kind == newvideo.kind
                    });
                    sender.replaceTrack(newvideo);
                }
            }
        },

        startScreenCapture() {
            if (navigator.getDisplayMedia) {
                return navigator.getDisplayMedia({video: true, audio: true});
            } else if (navigator.mediaDevices.getDisplayMedia) {
                return navigator.mediaDevices.getDisplayMedia({video: true, audio: true});
            } else {
                return navigator.mediaDevices.getUserMedia({video: {mediaSource: 'screen'}, audio: true});
            }
        },

        startVideoCapture(){
            let constraints = {
                video: true,
                audio: true,
            };
            return navigator.mediaDevices.getUserMedia(constraints);
        },

        disconnect(){
            let self = this;
            let miniVideos = document.getElementById("mini-videos").querySelectorAll('video');
            let remoteVideo = document.getElementById("remote-video");
            let localVideo = document.getElementById("local_video");

            this.localStream.getTracks().forEach(track => track.stop());

            if(miniVideos.length > 0){
                miniVideos.forEach(miniVideo=>{
                    if (miniVideo.srcObject) {
                        miniVideo.srcObject.getTracks().forEach(track => track.stop());
                    }
                    miniVideo.removeAttribute("srcObject");
                    miniVideo.srcObject = null;
                });
            }
            
            if (remoteVideo.srcObject) {
                remoteVideo.srcObject.getTracks().forEach(track => track.stop());
                remoteVideo.srcObject = null;
            }
            if (localVideo.srcObject) {
                localVideo.srcObject.getTracks().forEach(track => track.stop());
                localVideo.srcObject = null;
            }

            for(let key in self.connections){
                self.connections[key].close();
            }

            remoteVideo.removeAttribute("srcObject");
            remoteVideo.removeAttribute("srcObject");

            setTimeout(function(){
                self.$router.push({path: "/appointment"}) 
            },1000)
        }
    }
};
</script>

<style>

    body{
        overflow: hidden;
    }

    .hidden {
        display: none;
    }

    .container{
        background-color: white;
    }

    .mini-videos{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 5%;
        left: 2%;
        width: 100%;
        height: 90%;
        max-width: 15%;
        z-index: 15;
    }

    #icons{
        bottom: 3vh;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        display: flex;
    }


    #confirm-join-div {
        position: absolute;
        top: 50%;
        z-index: 5;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
    }

    .hidden {
        display: none;
    }

    .show {
        display: block !important;
    }

    #videos {
        left: 0px;
        font-size: 0; 
        height: 100%;
        pointer-events: none;
        position: absolute;
        transition: all 1s;
        width: 100%;
    }

    #videos.active {
        -moz-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    
    #local_video{
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
        -moz-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        transform: scale(-1, 1);
        transition: opacity 1s;
        width: 100%;
    }

    #remote-video{
        left: 0;
        top: 0;
        display: block;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
        opacity: 0;
        position: absolute;
        -moz-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
        transition: opacity 1s;
        width: 100%;
    }
    #remote-video.active {
        opacity: 1;
        z-index: 5;
    }

    /* .mini-video-container {
        bottom: 20px;
        position: absolute;
        max-height: 17%;
        width: 100%;
        border: 1px solid gray;
        height: 17%;
    } */

    .mini-video {
        border: 1px solid gray;
        /* bottom: 20px; */
        height: 20%;
        width: 100%;
        opacity: 0;
        /* position: absolute; */
        transition: opacity 1s;
        border-radius: 10px;
        object-fit: cover;
        margin-bottom: 5px;
    }

    .mini-video.active {
        opacity: 1;
        z-index: 2;
    }

    #mute-audio {
        transition: 40ms;
    }

    #mute-video {
        transition: 120ms;
    }

    #fullscreen {
        transition: 280ms;
    }

    #hangup {
        transition: 360ms;
    }

    #icons.active svg {
        transform: translateX(0);
    }

    circle {
        fill: #666;
        fill-opacity: 0.6;
    }

    svg.on circle {
        fill-opacity: 0;
    }

    path.on {
        display: none;
    }

    path.off {
        display: block;
    }

    svg.on path.on {
        display: block;
    }

    svg.on path.off {
        display: none;
    }


    svg{
        border-radius: 48px;
        box-shadow: 2px 2px 24px #444;
        display: flex;
        margin: 0 25px 3vh 0;
        transform: translateY(calc(200px - 0vw));
        transition: all .1s;
        transition-timing-function: ease-in-out;
    }

    svg:hover {
        box-shadow: 4px 4px 48px #666;
    }


    #mute-audio:hover,
    #mute-audio.on {
        background: #407cf7;
    }

    #mute-audio:hover circle {
        fill: #407cf7;
    }

    #mute-video {
        transition: 120ms;
    }

    #mute-video:hover,
    .on {
        background: #407cf7;
    }

    #mute-video:hover circle {
        fill: #407cf7;
    }

    #switch-video {
        transition: 200ms;
    }

    #switch-video:hover {
        background: #407cf7;
    }

    #switch-video:hover circle {
        fill: #407cf7;
    }

    #fullscreen {
        transition: 280ms;
    }

    #fullscreen:hover,
    #fullscreen.on {
        background: #407cf7;
    }

    #fullscreen:hover circle {
        fill: #407cf7;
    }

    #hangup {
        transition: 360ms;
    }

    #hangup:hover {
        background: #dd2c00;
    }
    #hangup:hover circle {
        fill: #dd2c00;
    }

    #sharing:hover{
        background: #407cf7;
    }
/* #received_video {
    display: none;
}

.video-container{
    text-align: center;
}
.tool > button{
    position: absolute;
    top: 80%;
    left: 45%;
    background-color: transparent;
    cursor: pointer;
    height: None;
}

.tool > button:nth-child(1){
    left: 55%;
}

.video-container {
    margin: 150px auto;
}

.control-panle{
    margin-top: 25%;
}

video{
    width: 60%;
    border-radius: 10px;
    transform: scaleX(-1.2);
}

.div-mic{
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: solid 2px white;
}

.div-camera{
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: solid 2px white;
}

.connected {
    width: 10%;
    z-index: 100;
    left: 26px;
    position: fixed;
} */

</style>
