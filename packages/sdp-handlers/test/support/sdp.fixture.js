exports.NORMAL = `v=0
o=- 965538314742732736 2 IN IP4 127.0.0.1
s=-
t=0 0
a=msid-semantic: WMS ef8a2ff3-0b4e-473d-812a-1926be110930
m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 0.0.0.0
a=rtpmap:111 opus/48000/2
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
a=fmtp:111 minptime=10;useinbandfec=1
a=rtcp:9 IN IP4 0.0.0.0
a=rtcp-fb:111 transport-cc
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=setup:actpass
a=mid:audio
a=sendrecv
a=ice-ufrag:2BRO
a=ice-pwd:JaLMPa7GlX77+RF8eBdXcXTz
a=fingerprint:sha-256 76:7F:FF:D0:35:B7:D3:09:9F:CD:4A:95:58:FF:50:7B:33:7C:29:0E:29:52:C3:54:E8:20:BF:58:D9:E9:7C:91
a=ice-options:trickle
a=ssrc:1517156690 cname:NZMoaW+zj4Ne0mdI
a=ssrc:1517156690 msid:ef8a2ff3-0b4e-473d-812a-1926be110930 d638ad16-fb89-400d-b897-a0997ac5dca8
a=ssrc:1517156690 mslabel:ef8a2ff3-0b4e-473d-812a-1926be110930
a=ssrc:1517156690 label:d638ad16-fb89-400d-b897-a0997ac5dca8
a=rtcp-mux
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 123 127 122 125 107 108 109 124
c=IN IP4 0.0.0.0
a=rtpmap:96 VP8/90000
a=rtpmap:97 rtx/90000
a=rtpmap:98 VP9/90000
a=rtpmap:99 rtx/90000
a=rtpmap:100 H264/90000
a=rtpmap:101 rtx/90000
a=rtpmap:102 H264/90000
a=rtpmap:123 rtx/90000
a=rtpmap:127 H264/90000
a=rtpmap:122 rtx/90000
a=rtpmap:125 H264/90000
a=rtpmap:107 rtx/90000
a=rtpmap:108 red/90000
a=rtpmap:109 rtx/90000
a=rtpmap:124 ulpfec/90000
a=fmtp:97 apt=96
a=fmtp:99 apt=98
a=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=fmtp:101 apt=100
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=fmtp:123 apt=102
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=fmtp:122 apt=127
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=fmtp:107 apt=125
a=fmtp:109 apt=108
a=rtcp:9 IN IP4 0.0.0.0
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=setup:actpass
a=mid:video
a=recvonly
a=ice-ufrag:2BRO
a=ice-pwd:JaLMPa7GlX77+RF8eBdXcXTz
a=fingerprint:sha-256 76:7F:FF:D0:35:B7:D3:09:9F:CD:4A:95:58:FF:50:7B:33:7C:29:0E:29:52:C3:54:E8:20:BF:58:D9:E9:7C:91
a=ice-options:trickle
a=rtcp-mux
a=rtcp-rsize`

exports.ONE_PAYLOAD = `v=0
o=- 965538314742732736 2 IN IP4 127.0.0.1
s=-
t=0 0
a=msid-semantic: WMS ef8a2ff3-0b4e-473d-812a-1926be110930
m=audio 9 UDP/TLS/RTP/SAVPF 111
c=IN IP4 0.0.0.0
a=rtpmap:111 opus/48000/2
a=fmtp:111 minptime=10;useinbandfec=1
a=rtcp:9 IN IP4 0.0.0.0
a=rtcp-fb:111 transport-cc
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=setup:actpass
a=mid:audio
a=sendrecv
a=ice-ufrag:2BRO
a=ice-pwd:JaLMPa7GlX77+RF8eBdXcXTz
a=fingerprint:sha-256 76:7F:FF:D0:35:B7:D3:09:9F:CD:4A:95:58:FF:50:7B:33:7C:29:0E:29:52:C3:54:E8:20:BF:58:D9:E9:7C:91
a=ice-options:trickle
a=ssrc:1517156690 cname:NZMoaW+zj4Ne0mdI
a=ssrc:1517156690 msid:ef8a2ff3-0b4e-473d-812a-1926be110930 d638ad16-fb89-400d-b897-a0997ac5dca8
a=ssrc:1517156690 mslabel:ef8a2ff3-0b4e-473d-812a-1926be110930
a=ssrc:1517156690 label:d638ad16-fb89-400d-b897-a0997ac5dca8
a=rtcp-mux
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 123 127 122 125 107 108 109 124
c=IN IP4 0.0.0.0
a=rtpmap:96 VP8/90000
a=rtpmap:97 rtx/90000
a=rtpmap:98 VP9/90000
a=rtpmap:99 rtx/90000
a=rtpmap:100 H264/90000
a=rtpmap:101 rtx/90000
a=rtpmap:102 H264/90000
a=rtpmap:123 rtx/90000
a=rtpmap:127 H264/90000
a=rtpmap:122 rtx/90000
a=rtpmap:125 H264/90000
a=rtpmap:107 rtx/90000
a=rtpmap:108 red/90000
a=rtpmap:109 rtx/90000
a=rtpmap:124 ulpfec/90000
a=fmtp:97 apt=96
a=fmtp:99 apt=98
a=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=fmtp:101 apt=100
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=fmtp:123 apt=102
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=fmtp:122 apt=127
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=fmtp:107 apt=125
a=fmtp:109 apt=108
a=rtcp:9 IN IP4 0.0.0.0
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=setup:actpass
a=mid:video
a=recvonly
a=ice-ufrag:2BRO
a=ice-pwd:JaLMPa7GlX77+RF8eBdXcXTz
a=fingerprint:sha-256 76:7F:FF:D0:35:B7:D3:09:9F:CD:4A:95:58:FF:50:7B:33:7C:29:0E:29:52:C3:54:E8:20:BF:58:D9:E9:7C:91
a=ice-options:trickle
a=rtcp-mux
a=rtcp-rsize`

exports.NO_PAYLOAD = `v=0
o=- 965538314742732736 2 IN IP4 127.0.0.1
s=-
t=0 0
a=msid-semantic: WMS ef8a2ff3-0b4e-473d-812a-1926be110930
m=audio 9 UDP/TLS/RTP/SAVPF
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=setup:actpass
a=mid:audio
a=sendrecv
a=ice-ufrag:2BRO
a=ice-pwd:JaLMPa7GlX77+RF8eBdXcXTz
a=fingerprint:sha-256 76:7F:FF:D0:35:B7:D3:09:9F:CD:4A:95:58:FF:50:7B:33:7C:29:0E:29:52:C3:54:E8:20:BF:58:D9:E9:7C:91
a=ice-options:trickle
a=ssrc:1517156690 cname:NZMoaW+zj4Ne0mdI
a=ssrc:1517156690 msid:ef8a2ff3-0b4e-473d-812a-1926be110930 d638ad16-fb89-400d-b897-a0997ac5dca8
a=ssrc:1517156690 mslabel:ef8a2ff3-0b4e-473d-812a-1926be110930
a=ssrc:1517156690 label:d638ad16-fb89-400d-b897-a0997ac5dca8
a=rtcp-mux
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 123 127 122 125 107 108 109 124
c=IN IP4 0.0.0.0
a=rtpmap:96 VP8/90000
a=rtpmap:97 rtx/90000
a=rtpmap:98 VP9/90000
a=rtpmap:99 rtx/90000
a=rtpmap:100 H264/90000
a=rtpmap:101 rtx/90000
a=rtpmap:102 H264/90000
a=rtpmap:123 rtx/90000
a=rtpmap:127 H264/90000
a=rtpmap:122 rtx/90000
a=rtpmap:125 H264/90000
a=rtpmap:107 rtx/90000
a=rtpmap:108 red/90000
a=rtpmap:109 rtx/90000
a=rtpmap:124 ulpfec/90000
a=fmtp:97 apt=96
a=fmtp:99 apt=98
a=fmtp:100 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=fmtp:101 apt=100
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=fmtp:123 apt=102
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d0032
a=fmtp:122 apt=127
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=640032
a=fmtp:107 apt=125
a=fmtp:109 apt=108
a=rtcp:9 IN IP4 0.0.0.0
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:4 urn:3gpp:video-orientation
a=extmap:5 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=setup:actpass
a=mid:video
a=recvonly
a=ice-ufrag:2BRO
a=ice-pwd:JaLMPa7GlX77+RF8eBdXcXTz
a=fingerprint:sha-256 76:7F:FF:D0:35:B7:D3:09:9F:CD:4A:95:58:FF:50:7B:33:7C:29:0E:29:52:C3:54:E8:20:BF:58:D9:E9:7C:91
a=ice-options:trickle
a=rtcp-mux
a=rtcp-rsize`
