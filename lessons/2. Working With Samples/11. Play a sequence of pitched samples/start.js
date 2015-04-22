var audioContext = new AudioContext()
var startTime = audioContext.currentTime + 0.1

getSample('vox.ogg', function(buffer) {
  play(0, -12)
  play(1, -5)
  play(2, 0)

  function play(delay, transpose) {
    var player = audioContext.createBufferSource()
    player.buffer = buffer
    player.connect(audioContext.destination)
    player.start(startTime + delay)
  }
})
  
function getSample(url, cb) {
  fetch(url).then(function(response) {
    return response.arrayBuffer()
  }).then(function(data) {
    audioContext.decodeAudioData(data, cb)
  })
}
