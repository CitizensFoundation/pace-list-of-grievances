import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { openWcLogo } from './open-wc-logo.js';
import '@material/mwc-button';

import '../../page-main/page-main.js';
import '../../page-one/page-one.js';
import { templateAbout } from './templateAbout.js';
import { Data } from './data.js';
import {ShadowStyles} from './shadow-styles.js';
import {FlexLayout} from './flex-layout.js';

export class AiTrainingApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return [ShadowStyles, FlexLayout, css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
      }

      header {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #ccc;
      }

      header ul {
        display: flex;
        justify-content: space-around;
        min-width: 400px;
        margin: 0 auto;
        padding: 0;
      }

      header ul li {
        display: flex;
      }

      header ul li a {
        color: #5a5c5e;
        text-decoration: none;
        font-size: 18px;
        line-height: 36px;
      }

      header ul li a:hover,
      header ul li a.active {
        color: blue;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
      .container {
        background-color: #fff;
        padding: 24px;
        margin-top: 24px;
        width: 800px;
      }

      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .quote {
        font-size: 18px;
        margin-bottom: 24px;
      }

      mwc-button {
        width: 150px;
        margin-bottom: 8px;
      }
    `];
  }

  constructor() {
    super();
    this.page = 'main';
    this.number = 0;
  }

  render() {
    return html`
      <div class="paceImage">
        <img style="margin-top:32px" width="151" height="95" src="https://popandce.files.wordpress.com/2019/07/cropped-pace_logo-24.png"/>
      </div>

      <div class="container shadow-animation shadow-elevation-3dp">
        <div class="quote">${Data[this.number].quote}</div>
      </div>

      <div class="title" style="color: #333;margin-top: 32px;">${Data[this.number].title}</div>
      <div style="margin-left:auto;margin:auto;margin:0px;margin-bottom:32px;font-size:30px;">Is this correct theme?</div>
      <div class="group-spsaced layout horizontal center-center" style="margin-left:auto;margin-right:auto;width:100%;margin-top:16px;">
        <div style="width: 300px;margin-left:158px;margin-right: 84px; ">
          <mwc-textarea outlined="" label="Your story"
              helper="Share your story anonymously" helperpersistent=""
              maxlength="500"
              charcounter="">
          </mwc-textarea>
          <mwc-button style="margin-left:85px;" @click="${() => { this.number+=1;this.requestUpdate(); }}" raised="" label="Yes"></mwc-button>
        </div>
        <div class="flex"></div>
        <div style="width: 300px">
          <mwc-textarea outlined="" label="Solution?"
              helper="Can you think of a solution for the grievance" helperpersistent=""
              maxlength="500"
              charcounter="">
          </mwc-textarea>
          <mwc-button @click="${() => { this.number+=1;this.requestUpdate(); }}" raised="" label="No"></mwc-button>
        </div>
      </div>

    `;
  }

  _currentQuote() {
    return this.Data[this.number].quote;
  }

  _renderPage() {
    switch (this.page) {
      case 'main':
        return html`
          <page-main .logo=${openWcLogo}></page-main>
        `;
      case 'pageOne':
        return html`
          <page-one></page-one>
        `;
      case 'about':
        return templateAbout;
      default:
        return html`
          <p>Page not found try going to <a href="#main">Main</a></p>
        `;
    }
  }

  __onNavClicked(ev) {
    ev.preventDefault();
    this.page = ev.target.hash.substring(1);
  }

  __navClass(page) {
    return classMap({ active: this.page === page });
  }
}
