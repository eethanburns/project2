

let MusicTools = {
    midiPitchToFrequency(midiPitch) {
        return 440 * (2**((midiPitch - 69)/12));
    },

    frequencyToMidiPitch(frequency) {
        return 12 * log2(frequency / 440) + 69;
    },

    dbfsToLinearAmplitude(dbfs) {
        return 10 ** dbfs/20;
    },

    linearAmplitudeTodBFS(linear) {
        return 20 * log10(linear);
    }
};


export default MusicTools;
