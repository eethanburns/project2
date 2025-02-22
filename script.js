import MusicTools from "./MusicTools.js";

const midiToFreq = document.getElementById("midiToFreq");
const freqToMidi = document.getElementById("freqToMidi");
const dbfsToLinear = document.getElementById("dbfsToLinear");
const linearToDbfs = document.getElementById("linearToDbfs");

const freqResult = document.getElementById("freqResult");
const midiResult = document.getElementById("midiResult");
const linearResult = document.getElementById("linearResult");
const dbfsResult = document.getElementById("dbfsResult");

const midiInput = document.getElementById("midiInput");
const freqInput = document.getElementById("freqInput");
const dbfsInput = document.getElementById("dbfsInput");
const linearInput = document.getElementById("linearInput");


function midiToFreqFunc() {
    const number = parseFloat(midiInput.value);
    freqResult.textContent = MusicTools.midiPitchToFrequency(number);
}


function freqToMidiFunc() {
    const number = parseFloat(freqInput.value);
    midiResult.textContent = MusicTools.frequencyToMidiPitch(number);
}


function dbfsToLinearFunc() {
    const number = parseFloat(dbfsInput.value);
    linearResult.textContent = MusicTools.dbfsToLinearAmplitude(number);
}


function linearToDbfsFunc() {
    const number = parseFloat(linearInput.value);
    dbfsResult.textContent = MusicTools.linearAmplitudeTodBFS(number);
}


midiToFreq.addEventListener("click", midiToFreqFunc);
freqToMidi.addEventListener("click", freqToMidiFunc);
dbfsToLinear.addEventListener("click", dbfsToLinearFunc);
linearToDbfs.addEventListener("click", linearToDbfsFunc);


