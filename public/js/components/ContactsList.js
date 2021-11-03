import { LitElement, html } from "https://unpkg.com/lit-element/lit-element.js?module";

export default class ContactsList extends LitElement {

  render() {
    return html`
        <style>
            .contacts{
              max-width: 800px;
            }
            h2{
                color:#3e4162;
                font-weight:300
            }
            .contact {
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
              padding: 20px;
              border-radius: 10px;
              transition: all .4s ease-in-out
            }
            .contact:hover{
              box-shadow: 0px 9px 5px 0px rgba(203,188,188,0.68);
              -webkit-box-shadow: 0px 9px 5px 0px rgba(203,188,188,0.68);
              -moz-box-shadow: 0px 9px 5px 0px rgba(203,188,188,0.68);
            }
            .user-img {
              background-image: url(https://images.generated.photos/NFcoRWheipL_q8VcuhA9v___j-XrJZre9o6w7xvm218/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjE2MzE5LmpwZw.jpg);
              height: 40px;
              width: 40px;
              background-size: cover;
              background-position: center center;
              border-radius: 10px;
            }

            .fullname{
              color:#3d4060;
              font-weight:700:
              text-transform: capitalize;
            }

            .number {
              color:#3d4060;
              font-weight:400:
            }

            .fullname, .number, .state, .category, .user-img {
              font-size: 1.4rem;
              font-weight:500:
            }

            .text{
              display: block;
              text-align: center;
            }

            .sub {
              display: block;
              color: #b4b5c4;
              font-weigth : 300;
              font-size: .8rem;
              text-align: center;
              margin: 5px 0;
            }

           
           
        </style>
        <section class="contacts">
        <h2>Contacts</h2>
        <div class="contact">
          <div class="user-img">
          </div>
          <div class="fullname">
            <span class="text">Jose Santos Garcias</span>
            <span class="sub">Full name</span>
          </div>
          <div class="number">
          <span class="text">718 - 219 - 8652</span>
            <span class="sub">Phone number</span>
          </div>
          <div class="state">
          <span class="text"> NY</span>
            <span class="sub">State</span>
          </div>
          <div class="category">
          <span class="text">Family</span>
            <span class="sub">Category</span>
          </div>
        </div>
        <div class="contact">
          <div class="user-img">
          </div>
          <div class="fullname">
            <span class="text">Jose Santos Garcias</span>
            <span class="sub">Full name</span>
          </div>
          <div class="number">
          <span class="text">718 - 219 - 8652</span>
            <span class="sub">Phone number</span>
          </div>
          <div class="state">
          <span class="text"> NY</span>
            <span class="sub">State</span>
          </div>
          <div class="category">
          <span class="text">Family</span>
            <span class="sub">Category</span>
          </div>
        </div>
      </section>
        `
  }

}

customElements.define('contacts-list', ContactsList);


