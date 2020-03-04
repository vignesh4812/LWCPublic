import { LightningElement} from 'lwc';

export default class HelloWorldLWC extends LightningElement {
    Name = 'Name Tested Okay!!';
    displayTime() {
      this.Name = new Date();;
    }    
}