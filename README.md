# PuppetMaster

A [Pusher](http://pusher.com), [PeerJS](peerjs.com), [Google Cardboard](http://www.google.com/get/cardboard/) experiment.

## What the hell is this?

It's an experiment in control and out-of-body VR.

Two clients connect:

a. The Puppet

b. The Controller

### The Puppet
- Captures video through their camera
- Sends their camera feed to The Controller
- Receives move instructions from The Controller

### The Controller
- Views the camera from The Puppet
- Captures movement instructions by moving their head left/right
- Sends the instructions to The Controller

The easy part of this was sending instructions from one client to the other, using Pusher and a simple Node server as a message relay. The hard part was hooking up WebRTC over PeerJS to send the video from client to client.


### How cool do we look? 
![](http://i.imgur.com/Se3RAwV.jpg)

### What we can see:
![](http://i.imgur.com/h7S3NOQ.jpg)
