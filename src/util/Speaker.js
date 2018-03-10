// @flow

export default class Speaker {
  onUttrEvent: () => void;
  synth: Class<window.SpeechSynthesis>;
  voices: Array<Class<window.SpeechSynthesisVoice>>;

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

  isSupported(): boolean {
    return this.synth !== undefined;
  }

  getVoices(): Array<Class<window.SpeechSynthesisVoice>> {
    return this.voices;
  }

  getVoice(voiceName :string) {
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

  speak(text: string, rate: number, pitch: number, voice: Class<window.SpeechSynthesisVoice>): void {
    if (this.synth.speaking) {
        return;
    }
    const utter: Class<window.SpeechSynthesisUtterance> = new window.SpeechSynthesisUtterance(text);
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

  isSpeaking(): boolean {
    return this.synth.speaking;
  }

  isPending(): boolean {
    return this.synth.pending;
  }

  setOnUttrEvent(cb: ()=> void) {
    this.onUttrEvent = cb;
  }
}
