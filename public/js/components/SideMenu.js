import { LitElement, html } from "https://unpkg.com/lit-element/lit-element.js?module";

export default class SideMenu extends LitElement {

  render() {
    return html`
        <style>
          #side-menu{
             background: #323759;
             height: 100vh;
             padding: 50px 25px
          }
         
          .logo {
            text-align: center;
          }

          .logo img {
            width: 50px;
            background: #323759;
          }

          .title {
            color: #ccced7;
            font-weight: 700;
            margin-bottom: 1rem 0;
          }

          #side-menu nav a  span.icon {
            padding: 10px 10px 10px 0;
          }

          #side-menu nav a {
            color: #ccced7;
            text-decoration: none;
            text-transform: capitalize; 
            display:block;
            padding: 10px 10px 10px 0;
          }
         
        </style>
        <section id="side-menu">
        <div class="logo">
          <img src="/img/google.png" />
        </div>
        <div class="menu">
          <div class="title">Contacts</div>
          <nav>
            <a href="#"><span class="icon"> + </span>Add contact</a>
            <a href="#"><span class="icon"> + </span>Add contact</a>
            <a href="#"><span class="icon"> + </span>Add contact</a>
            <a href="#"><span class="icon"> + </span>Add contact</a>
          </nav>
        </div>
        </section>
        `
  }

}

customElements.define('side-menu', SideMenu);


