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

midiToFreq.addEventListener("click", console.log("bruh"));
