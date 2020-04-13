<template>
    <div class="container">
        <div id="videos" @mouseover="mouseover" @mouseleave="mouseleave" v-bind:class="[{ 'active' : bothconnected }]">
            <video id="mini-video" autoplay="" playsinline="" muted="" v-bind:class="[{ 'active' : bothconnected }]"></video>
            <video id="remote-video" autoplay="" playsinline="" v-bind:class="[{ 'active' : bothconnected }]"></video>
            <video id="local_video" autoplay muted v-bind:class="[{ 'active' : !bothconnected }]"></video>
        </div>

        <div id="icons" v-bind:class="[{ 'active' : showTools }]" @mouseover="mouseover">
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
            v-bind:class="[{ 'hidden' : !bothconnected }]" 
            @click="hangup"
            xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Hangup</title>
            </circle>
            <path transform="scale(0.7), translate(11,10)" d="M24 18c-3.21 0-6.3.5-9.2 1.44v6.21c0 .79-.46 1.47-1.12 1.8-1.95.98-3.74 2.23-5.33 3.7-.36.35-.85.57-1.4.57-.55 0-1.05-.22-1.41-.59L.59 26.18c-.37-.37-.59-.87-.59-1.42 0-.55.22-1.05.59-1.42C6.68 17.55 14.93 14 24 14s17.32 3.55 23.41 9.34c.37.36.59.87.59 1.42 0 .55-.22 1.05-.59 1.41l-4.95 4.95c-.36.36-.86.59-1.41.59-.54 0-1.04-.22-1.4-.57-1.59-1.47-3.38-2.72-5.33-3.7-.66-.33-1.12-1.01-1.12-1.8v-6.21C30.3 18.5 27.21 18 24 18z" fill="white"></path>
            </svg>


            <svg id="fullscreen" xmlns="http://www.w3.org/2000/svg" 
             v-bind:class="[{ 'on' : fullscreen}]"
             @click="setfullscreen"
            width="48" height="48" viewBox="-10 -10 68 68">
            <circle cx="24" cy="24" r="34">
                <title>Enter fullscreen</title>
            </circle>
            <path class="on" transform="scale(0.8), translate(7,6)" d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z" fill="white"></path>
            <path class="off" transform="scale(0.8), translate(7,6)" d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z" fill="white"></path>
            </svg>
        </div>
        <div id="confirm-join-div" v-bind:class="[{ 'hidden' : !initiated }]">
            <div>Ready to join<span></span>?</div>
            <button class="btn btn-primary btn-block" @click="join">JOIN</button>
        </div>
    </div>
</template>



<script>
import { router } from '../_helpers';
import { userService } from '../_services';

export default {
    data () {
        return {
            peerConnection: null,
            socket: null,
            connectedUser: Date.now(),
            showTools: false,
            initiated: false,
            mute_audio: false,
            mute_video: false,
            fullscreen: false,
            bothconnected: false
        }
    },
    created() {

        let self = this;
        this.socket = io('https://webrtc-application-poc.herokuapp.com');

        this.socket.on('offer', function(data){
            var msg = JSON.parse(data);
            self.handleOffer(msg.offer, '');
        });

        this.socket.on('answer', function(data){
            var msg = JSON.parse(data);
            self.handleAnswer(msg.answer); 
        });

        this.socket.on('leave', function(data){
            self.handleLeave();
        });

        this.socket.on('login', function(data){
            self.initiated = data.initiated;
            self.handlerInitialize();
        });

        this.socket.on('candidate', function(data){
            var msg = JSON.parse(data);
            self.handleCandidate(msg.candidate);
        });

        this.sendToServer({
            type: "login",
            // userId : localStorage.getItem('session').userId
            userId : sessionStorage.getItem('session').userId
        });
    },
    methods: {

        mouseover() {
            this.showTools = true;
        },

        mouseleave() {
            this.showTools = false;
        },
    
        join(){
            this.initiated = false;
            this.handlerJoin();
        },

        hangup() {
            this.sendToServer({
                type: "leave",
                // userId : localStorage.getItem('session').userId
                userId : sessionStorage.getItem('session').userId
            });
        },

        setfullscreen(){
            this.fullscreen = !this.fullscreen;
            if(this.fullscreen)
                if (document.body.requestFullscreen) {
                    document.body.requestFullscreen();
                } else if (document.body.mozRequestFullScreen) {
                    document.body.mozRequestFullScreen();
                } else if (document.body.webkitRequestFullscreen) {
                    document.body.webkitRequestFullscreen();
                } else if (document.body.msRequestFullscreen) { 
                    document.body.msRequestFullscreen();
                }
            else
                if (document.body.exitFullscreen) {
                    document.body.exitFullscreen();
                } else if (document.body.webkitExitFullscreen) {
                    document.body.webkitExitFullscreen();
                } else if (document.body.mozCancelFullScreen) {
                    document.body.mozCancelFullScreen();
                } else if (document.body.msExitFullscreen) {
                    document.body.msExitFullscreen();
                }
        },

        muteaudio(){
            this.mute_audio = !this.mute_audio;
             if(this.mute_audio){
                document.getElementById("local_video").srcObject.getTracks()
                    .forEach(t => t.kind == 'audio' && t.stop());
            }else{
                this.handlerInitialize();
            }
        },

        mutevideo(){
            this.mute_video = !this.mute_video
            if(this.mute_video){
                document.getElementById("local_video").srcObject.getTracks()
                    .forEach(t => t.kind == 'video' && t.stop());
            }else{
                this.handlerInitialize();
            }
        },

        handlerInitialize () {
            var mediaConstraints = {
                audio: true,
                video: true
            };

            if(!this.peerConnection){
                this.createPeerConnection();
            }

            var self = this;

            navigator.mediaDevices.getUserMedia(mediaConstraints)
            .then(function(localStream) {
                document.getElementById("local_video").srcObject = localStream;
                localStream.getTracks().forEach(track => self.peerConnection.addTrack(track, localStream));

                if(!self.initiated)
                    self.handlerJoin();

            }).catch((e)=>{
                alert("Error opening your camera and/or microphone: " + e.message);
                this.handleLeave();
            }); 
        },
        
        handlerJoin() {
            var self = this;
            this.peerConnection
            .createOffer({
                offerToReceiveAudio: 1,
                offerToReceiveVideo: 1
            }).then(function(offer) {
                self.sendToServer({
                    type: "offer",
                    offer
                });
                return self.peerConnection.setLocalDescription(offer);
            })
            .then(function(){

            })
            .catch((error)=>{
                console.log(error);
            });
        },

        createPeerConnection () {
            this.peerConnection = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.l.google.com:19302"
                    }
                ]
            });

            this.peerConnection.onicecandidate = this.handleICECandidateEvent;
            this.peerConnection.ontrack = this.handleTrackEvent;
            this.peerConnection.onnegotiationneeded = this.handleNegotiationNeededEvent;
            this.peerConnection.onremovetrack = this.handleRemoveTrackEvent;
            this.peerConnection.oniceconnectionstatechange = this.handleICEConnectionStateChangeEvent;
            this.peerConnection.onicegatheringstatechange = this.handleICEGatheringStateChangeEvent;
            this.peerConnection.onsignalingstatechange = this.handleSignalingStateChangeEvent;
        },

        handleCandidate(candidate) {
            if(this.peerConnection)
                this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate)); 
        },

        handleLeave() {
            var miniVideo = document.getElementById("mini-video");
            var remoteVideo = document.getElementById("remote-video");
            var localVideo = document.getElementById("local_video");

            if (this.peerConnection) {
                this.peerConnection.ontrack = null;
                this.peerConnection.onremovetrack = null;
                this.peerConnection.onremovestream = null;
                this.peerConnection.onicecandidate = null;
                this.peerConnection.oniceconnectionstatechange = null;
                this.peerConnection.onsignalingstatechange = null;
                this.peerConnection.onicegatheringstatechange = null;
                this.peerConnection.onnegotiationneeded = null;

                if (miniVideo.srcObject) {
                    miniVideo.srcObject.getTracks().forEach(track => track.stop());
                }

                if (remoteVideo.srcObject) {
                    remoteVideo.srcObject.getTracks().forEach(track => track.stop());
                }

                if (localVideo.srcObject) {
                    localVideo.srcObject.getTracks().forEach(track => track.stop());
                }

                this.peerConnection.close();
                this.peerConnection = null;
                
            }
            
            miniVideo.removeAttribute("src");
            miniVideo.removeAttribute("srcObject");
            remoteVideo.removeAttribute("src");
            remoteVideo.removeAttribute("srcObject");
            localVideo.removeAttribute("src");
            remoteVideo.removeAttribute("srcObject");

            this.$router.push({path: "/appointment"}) 
        },

        sendToServer(msg) {
            msg['userId'] = this.connectedUser;
            this.socket.emit(msg.type, JSON.stringify(msg));
        },

        handleICECandidateEvent(event){
            if (event.candidate) { 
                this.sendToServer({ 
                    type: "candidate", 
                    candidate: event.candidate 
                }); 
            } 
        },
        handleTrackEvent(event){
            this.bothconnected = true;
            document.getElementById("remote-video").srcObject = event.streams[0];
        },

        handleAnswer(answer){
            if(this.peerConnection)
                this.peerConnection.setRemoteDescription(new RTCSessionDescription(answer)); 
        },

        handleOffer(offer, name) { 
            var self = this;
            var desc = new RTCSessionDescription(offer)
            this.peerConnection.setRemoteDescription(desc)
            .then(function(){
                return self.peerConnection.createAnswer();
            })
            .then(function(answer){
                self.sendToServer({ 
                    type: "answer", 
                    answer: answer 
                });
                return self.peerConnection.setLocalDescription(answer);
            })
            .then(function(answer) {
                console.log("done")
            })
            .catch((error)=>{
                console.log(error);
            });
        },

        handleRemoveTrackEvent(event){

        },
        handleICEConnectionStateChangeEvent(event){
            
        },
        handleICEGatheringStateChangeEvent(event){
            
        },
        handleSignalingStateChangeEvent(event) {

        },

        handleNegotiationNeededEvent(event) {
            
        },
    },
};
</script>

<style>

    .hidden {
        display: none;
    }

    .container{
        background-color: white;
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
        z-index: 1;
    }

    #mini-video {
        border: 1px solid gray;
        bottom: 20px;
        left: 20px;
        max-height: 17%;
        max-width: 17%;
        opacity: 0;
        position: absolute;
        transition: opacity 1s;
        border-radius: 10px;
    }

    #mini-video.active {
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
