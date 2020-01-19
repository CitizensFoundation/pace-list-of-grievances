import { LitElement, html, css } from 'lit-element';
import '../../your-grievances-app/src/shadow-styles.js'
import { ShadowStyles } from '../../your-grievances-app/src/shadow-styles.js';
import { BaseElement } from '../../your-grievances-app/src/baseElement.js';
import '@material/mwc-textarea';
import '@material/mwc-icon';
import { FlexLayout } from '../../your-grievances-app/src/flex-layout.js';

export class Grievance extends BaseElement {
  static get styles() {
    return [
      FlexLayout,
      ShadowStyles,
      css`
        :host {
          display: inline-block;
          background-color: #FFF;
          margin-bottom: 16px;
        }
        .mdc-card {
          max-width: 850px;
          padding: 16px;
          cursor: pointer;
        }
        .content {
          padding: 1rem;
        }
        .subtext {
          color: rgba(0, 0, 0, 0.54);
        }

        .group-spaced {
          justify-content: space-around;
        }

        .group-spaced > * {
          margin: 0 8px;
        }

        mwc-textarea {
          width: 300px;
        }

        mwc-icon  {
          position: absolute;
          right: 16px;
          top: 16px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      grievanceData: { type: Object },
      fullView: { type: Boolean }
    };
  }

  render() {
    return html`
      <div class="mdc-card shadow-animation shadow-elevation-3dp" @click="${this._openGrievance}">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--16-9 my-media"></div>
          <div class="content">
            <h2 class="mdc-typography--title">${this.grievanceData.title}</h2>
            <div class="mdc-typography--body1 subtext">${this.grievanceData.description}</div>
          </div>
          <mdc-ripple></mdc-ripple>
        </div>
        ${ this.fullView ? html`
          <div class="laysout vertical">
            <mwc-icon icon="close" @click="${()=>{this.fire('close-grievance')}}"></mwc-icon>
            <div class="quote">${this.grievanceData.quote}</div>
            <div class="group-spsaced layout horizontal center-center">
              <div>
                <mwc-textarea outlined="" label="Your story"
                    helper="Share your story anonymously" helperpersistent=""
                    maxlength="500"
                    charcounter="">
                </mwc-textarea>
                <mwc-button raised="" label="Add story"></mwc-button>
              </div>
              <div>
                <mwc-textarea outlined="" label="Solution?"
                    helper="Can you think of a solution for the grievance" helperpersistent=""
                    maxlength="500"
                    charcounter="">
                </mwc-textarea>
                <mwc-button raised="" label="Add solution"></mwc-button>
              </div>
            </div>
          </div>
        ` : null}
      </div>
    `;
  }

  _openGrievance() {
    if (!this.fullView) {
      this.fire("open-grievance", this.grievanceData);
    }
  }
}

