<template>
    <div>
        <div class="container">
            <div class="row ">
                <div class="col-9 video-container">
                    <video v-bind:class="[{ 'connected' : connected }]" id="local_video" autoplay muted></video>
                    <video   id="received_video" autoplay muted></video>
                    <div class="tool">
                        <button class="div-mic">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%;"><defs><clipPath id="animationMask_hIPS4N9MWR"><rect width="48" height="48" x="0" y="0"></rect></clipPath><mask id="681HUqKWh5"><rect fill="#ffffff" width="48" height="48" x="-24" y="-24"></rect><path fill="#000000" clip-rule="nonzero" d=" M-7.77,-10.111 C-7.77,-10.111 -9.187,-8.694 -9.187,-8.694 C-9.187,-8.694 -9.183,-8.696 -9.183,-8.696 C-9.183,-8.696 -7.766,-10.113 -7.766,-10.113 C-7.766,-10.113 -7.77,-10.111 -7.77,-10.111" fill-opacity="1"></path></mask></defs><g clip-path="url(#animationMask_hIPS4N9MWR)"><g mask="url(#681HUqKWh5)" transform="matrix(1.35,0,0,1.35,24,24)" opacity="1" style="user-select: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="0" transform="matrix(1,0,0,1,0,0)"><path class="fill bkbMM" fill="rgb(95,99,104)" fill-opacity="1" d="M0 0 M-9.188,-8.693 C-9.188,-8.693 -10.605,-7.276 -10.605,-7.276 C-10.605,-7.276 -10.605,-7.276 -10.605,-7.276 C-10.605,-7.276 -9.188,-8.693 -9.188,-8.693 C-9.188,-8.693 -9.188,-8.693 -9.188,-8.693z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path class="fill bkbMM" fill="rgb(95,99,104)" fill-opacity="1" d="M0 0 M5,-0.5 C5,2.26 2.76,4.5 0,4.5 C-2.76,4.5 -5,2.26 -5,-0.5 C-5,-0.5 -7,-0.5 -7,-0.5 C-7,3.03 -4.390000000000001,5.93 -1,6.42 C-1,6.42 -1,9.5 -1,9.5 C-1,9.5 1,9.5 1,9.5 C1,9.5 1,6.42 1,6.42 C4.390000000000001,5.93 7,3.03 7,-0.5 C7,-0.5 5,-0.5 5,-0.5zM0 0 M-1,-6.5 C-1,-7.05 -0.55,-7.5 0,-7.5 C0.55,-7.5 1,-7.05 1,-6.5 C1,-6.5 1,-0.5 1,-0.5 C1,0.050000000000000044 0.55,0.5 0,0.5 C-0.55,0.5 -1,0.050000000000000044 -1,-0.5 C-1,-0.5 -1,-6.5 -1,-6.5zM0 0 M0,2.5 C1.66,2.5 3,1.16 3,-0.5 C3,-0.5 3,-6.5 3,-6.5 C3,-8.16 1.66,-9.5 0,-9.5 C-1.66,-9.5 -3,-8.16 -3,-6.5 C-3,-6.5 -3,-0.5 -3,-0.5 C-3,1.16 -1.66,2.5 0,2.5z"></path></g></g></g></g></svg>
                        </button>

                        <button class="div-camera">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%;"><defs><clipPath id="animationMask_tWu5tR2A2f"><rect width="48" height="48" x="0" y="0"></rect></clipPath><mask id="KRXPQJzGiC"><rect fill="#ffffff" width="48" height="48" x="-24" y="-24"></rect><path fill="#000000" clip-rule="nonzero" d=" M-7.77,-10.599 C-7.77,-10.599 -9.19,-9.189 -9.19,-9.189 C-9.19,-9.189 -9.186,-9.192 -9.186,-9.192 C-9.186,-9.192 -7.769,-10.6 -7.769,-10.6 C-7.769,-10.6 -7.77,-10.599 -7.77,-10.599" fill-opacity="1"></path></mask></defs><g clip-path="url(#animationMask_tWu5tR2A2f)"><g mask="url(#KRXPQJzGiC)" transform="matrix(1.35,0,0,1.35,24,24)" opacity="1" style="user-select: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="0" transform="matrix(1,0,0,1,0,0)"><path class="fill bkbMM" fill="rgb(95,99,104)" fill-opacity="1" d="M0 0 M-9.19,-9.189 C-9.19,-9.189 -10.61,-7.779 -10.61,-7.779 C-10.61,-7.779 -10.608,-7.78 -10.608,-7.78 C-10.608,-7.78 -9.188,-9.188 -9.188,-9.188 C-9.188,-9.188 -9.19,-9.189 -9.19,-9.189z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path class="fill bkbMM" fill="rgb(95,99,104)" fill-opacity="1" d="M0 0 M4,-2.31 C4,-2.31 4,6 4,6 C4,6 -8,6 -8,6 C-8,6 -8,-6 -8,-6 C-8,-6 4,-6 4,-6 C4,-6 4,-2.31 4,-2.31zM0 0 M6,-1.52 C6,-1.52 6,-6 6,-6 C6,-7.1 5.1,-8 4,-8 C4,-8 -8,-8 -8,-8 C-9.1,-8 -10,-7.1 -10,-6 C-10,-6 -10,6 -10,6 C-10,7.1 -9.1,8 -8,8 C-8,8 4,8 4,8 C5.1,8 6,7.1 6,6 C6,6 6,1.52 6,1.52 C6,1.52 10,5.5 10,5.5 C10,5.5 10,-5.5 10,-5.5 C10,-5.5 6,-1.52 6,-1.52z"></path></g></g></g></g></svg>
                        </button>
                    </div>
                </div>
                <div class="col-3 control-panle">
                    <button class="btn btn-primary btn-block" @click="handlerJoin">Join</button>
                </div>
            </div>
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
            connected : false
        }
    },
    created() {

        let self = this;
        this.socket = io('http://localhost:3000');

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
            self.handlerInitialize();
        });

        this.socket.on('candidate', function(data){
            var msg = JSON.parse(data);
            self.handleCandidate(msg.candidate);
        });

        this.sendToServer({
            type: "login",
            userId : localStorage.getItem('session').userId
        });
    },
    methods: {
    
        handlerInitialize () {
            var mediaConstraints = {
                audio: true,
                video: true
            };

            this.createPeerConnection();

            var self = this;

            navigator.mediaDevices.getUserMedia(mediaConstraints)
            .then(function(localStream) {
                document.getElementById("local_video").srcObject = localStream;
                localStream.getTracks().forEach(track => self.peerConnection.addTrack(track, localStream));
            }).catch((e)=>{
                alert("Error opening your camera and/or microphone: " + e.message);
                this.handleLeave();
            })
        },
        
        handlerJoin() {
            var self = this;
            this.peerConnection.createOffer().then(function(offer) {
                self.sendToServer({
                    type: "offer",
                    offer
                });
                return self.peerConnection.setLocalDescription(offer);
            })
            .then(function(){
                document.getElementById('received_video').style.display = 'initial';
                self.connected = true;
                // document.getElementById('local_video').style.display = 'none';
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
            this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate)); 
        },

        handleLeave() {
            var remoteVideo = document.getElementById("received_video");
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

                if (remoteVideo.srcObject) {
                    remoteVideo.srcObject.getTracks().forEach(track => track.stop());
                }

                if (localVideo.srcObject) {
                    localVideo.srcObject.getTracks().forEach(track => track.stop());
                }

                this.peerConnection.close();
                this.peerConnection = null;
            }

            remoteVideo.removeAttribute("src");
            remoteVideo.removeAttribute("srcObject");
            localVideo.removeAttribute("src");
            remoteVideo.removeAttribute("srcObject");
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
            document.getElementById("received_video").srcObject = event.streams[0];
        },

        handleAnswer(answer){
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

#received_video {
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
}

</style>
