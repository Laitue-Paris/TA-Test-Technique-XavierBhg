import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="upvote"
export default class extends Controller {
  // static targets = ["button"]
  static values = { score: Number }
  connect() {
    // console.log("hello");
    // console.log(this.buttonTarget);

  }
  fire(){
    console.log(this.scoreValue);
    this.scoreValue += 1;
    console.log(this.scoreValue);
  }
}
