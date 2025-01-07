import { Controller } from "@hotwired/stimulus"
import { createPicker } from 'picmo';

// Connects to data-controller="emoji"
export default class extends Controller {
  static targets = ["display"]
  connect() {
    // console.log("hello from controller");
    // console.log(this.element);
  }

  fire(){
    const rootElement = this.displayTarget;
    const picker = createPicker({ rootElement });
    picker.addEventListener('emoji:select', event => {
      console.log('Emoji selected:', event.emoji);
      console.log(typeof event.emoji);
    });
  }
}
