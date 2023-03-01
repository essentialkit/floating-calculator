
import "@webcomponents/webcomponentsjs"; // Polyfill for customElements in content scripts, https://stackoverflow.com/q/42800035.
import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  static styles = css`
    * {
      color: red;
      border: 2px solid black;
      padding: 3px;
    }
  `;
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}