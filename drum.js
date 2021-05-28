const keys = document.querySelectorAll('.key')
const map_Key = ['w','a','d','s','i','j','k','l','c']

document.addEventListener('keydown', (e) =>{
const key = e.key
const mapKey = map_Key.indexOf(key)

    if(mapKey > -1) {
        playNote(keys[mapKey])
    }
})

keys.forEach(key => {
    key.addEventListener('click', e => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
}





