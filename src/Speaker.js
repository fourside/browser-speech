
export default class Speaker {
  constructor() {
    this.synth = window.speechSynthesis;
    if (this.synth === undefined) {
      return;
    }

    this.voices = this.synth.getVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged =  () => {
        this.voices = this.synth.getVoices();
      }
    }
  }

  isSupported() {
    return this.synth !== undefined;
  }

  getVoices() {
    return this.voices;
  }

  getVoice(voiceName) {
    let answer;
    this.getVoices().some((voice) => {
      const ret = (voice.name === voiceName);
      if (ret) {
        answer = voice;
      }
      return ret;
    })
    return answer;
  }

  speak(text, rate, pitch, voice) {
    if (this.synth.speaking) {
        return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = pitch;
    utter.rate = rate;
    utter.voice = voice;
    if (this.onUttrEvent) {
      utter.onend = this.onUttrEvent;
    }
    this.synth.speak(utter);
  }

  cancel() {
    this.synth.cancel();
  }

  isSpeaking() {
    return this.synth.speaking;
  }

  isPending() {
    return this.synth.pending;
  }

  setOnUttrEvent(cb) {
    this.onUttrEvent = cb;
  }
}
