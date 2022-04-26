import { render as render2 } from '@lion/core';
import { html2Hybrid } from './html2-hybrid-tag.js';
import { isLit1TemplateResult } from './isLit1TemplateResult.js.js.js';

/**
 * @typedef {import('../../core/index.js.js.js').TemplateResult} TemplateResult1
 * @typedef {import('lit').TemplateResult} TemplateResult2
 * @typedef {{templateFactory:any; eventContext: EventTarget }} RenderOptions1
 * @typedef {import('lit').RenderOptions} RenderOptions2
 */

/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param {TemplateResult1|TemplateResult2} result Any value renderable by NodePart - typically a TemplateResult
 * created by evaluating a template tag like `html` or `svg`.
 * @param {HTMLElement} container A DOM parent to render to. The entire contents are either
 * replaced, or efficiently updated if the same result type was previous
 * rendered there.
 * @param {Partial<RenderOptions2>} options? RenderOptions for the entire render tree rendered to this
 * container. Render options must *not* change between renders to the same
 * container, as those changes will not effect previously rendered DOM.
 */
export function renderHybrid(result, container, options) {
  if (isLit1TemplateResult(result)) {
    render2(html2Hybrid(result.strings, result.values), container, options);
  } else {
    render2(result, container, options);
  }
}
