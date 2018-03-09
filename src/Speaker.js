
export default class Speaker {
  constructor() {
    this.synth = window.speechSynthesis;
  }

  isSupported() {
    return this.synth !== undefined;
  }

  getVoices() {
    return this.synth.getVoices();
  }

  speak(text, rate, pitch, voice) {
    if (this.synth.speaking) {
        return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = pitch;
    utter.rate = rate;
    utter.voice = voice;
    this.synth.speak(utter);
  }
}
