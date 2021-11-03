import { LitElement, html } from "https://unpkg.com/lit-element/lit-element.js?module";
import SideMenu from './SideMenu.js';
import ContentArea from "./ContentArea.js";

class CounterComp extends LitElement {
    constructor() {
        super();
        this.total = {
            number: 0
        }
    }

    static get properties() {
        return {
            total: { type: Object }
        }
    }

    _firstRendered() {

    }

    render() {
        return html`
            <style>
                #main-page {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                }
            </style>
            <div id="main-page">
                <side-menu></side-menu>
                <content-area></content-area>
            </div>
           `
    }
}

customElements.define('counter-comp', CounterComp);