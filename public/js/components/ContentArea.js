import { LitElement, html } from "https://unpkg.com/lit-element/lit-element.js?module";
import ContactsList from "./ContactsList.js";

export default class ContentArea extends LitElement {

  render() {
    return html`
        <style>
          #content-area{
            background: #fcfdff;
            padding: 50px 80px;
          }

        </style>
        <section id="content-area">
           <contacts-list></contacts-list>  
        </section>
        `
  }

}

customElements.define('content-area', ContentArea);


