import * as csstype from "csstype";
import "@marko/runtime-tags/tags-html";

declare global {
  namespace Marko {
    namespace CSS {
      /** Marko 5 additionally accepts camelCase CSS properties. */
      export interface Properties extends csstype.Properties {}
    }

    interface HTMLAttributes<T extends Element = Element> {
      /** Marko 5 class-API components render their body via `renderBody`. */
      renderBody?: Marko.Body<[], void>;

      /** @deprecated Use `onAnimationCancel` instead. */
      onAnimationcancel?: this["onAnimationCancel"];

      /** @deprecated Use `onAnimationEnd` instead. */
      onAnimationend?: this["onAnimationEnd"];

      /** @deprecated Use `onAnimationIteration` instead. */
      onAnimationiteration?: this["onAnimationIteration"];

      /** @deprecated Use `onAnimationStart` instead. */
      onAnimationstart?: this["onAnimationStart"];

      /** @deprecated Use `onAuxClick` instead. */
      onAuxclick?: this["onAuxClick"];

      /** @deprecated Use `onBeforeInput` instead. */
      onBeforeinput?: this["onBeforeInput"];

      /** @deprecated Use `onBeforeMatch` instead. */
      onBeforematch?: this["onBeforeMatch"];

      /** @deprecated Use `onBeforeToggle` instead. */
      onBeforetoggle?: this["onBeforeToggle"];

      /** @deprecated Use `onCanPlay` instead. */
      onCanplay?: this["onCanPlay"];

      /** @deprecated Use `onCanPlayThrough` instead. */
      onCanplaythrough?: this["onCanPlayThrough"];

      /** @deprecated Use `onCompositionEnd` instead. */
      onCompositionend?: this["onCompositionEnd"];

      /** @deprecated Use `onCompositionStart` instead. */
      onCompositionstart?: this["onCompositionStart"];

      /** @deprecated Use `onCompositionUpdate` instead. */
      onCompositionupdate?: this["onCompositionUpdate"];

      /** @deprecated Use `onContextLost` instead. */
      onContextlost?: this["onContextLost"];

      /** @deprecated Use `onContextMenu` instead. */
      onContextmenu?: this["onContextMenu"];

      /** @deprecated Use `onContextRestored` instead. */
      onContextrestored?: this["onContextRestored"];

      /** @deprecated Use `onCueChange` instead. */
      onCuechange?: this["onCueChange"];

      /** @deprecated Use `onDblClick` instead. */
      onDblclick?: this["onDblClick"];

      /** @deprecated Use `onDragEnd` instead. */
      onDragend?: this["onDragEnd"];

      /** @deprecated Use `onDragEnter` instead. */
      onDragenter?: this["onDragEnter"];

      /** @deprecated Use `onDragLeave` instead. */
      onDragleave?: this["onDragLeave"];

      /** @deprecated Use `onDragOver` instead. */
      onDragover?: this["onDragOver"];

      /** @deprecated Use `onDragStart` instead. */
      onDragstart?: this["onDragStart"];

      /** @deprecated Use `onDurationChange` instead. */
      onDurationchange?: this["onDurationChange"];

      /** @deprecated Use `onFocusIn` instead. */
      onFocusin?: this["onFocusIn"];

      /** @deprecated Use `onFocusOut` instead. */
      onFocusout?: this["onFocusOut"];

      /** @deprecated Use `onFormData` instead. */
      onFormdata?: this["onFormData"];

      /** @deprecated Use `onFullscreenChange` instead. */
      onFullscreenchange?: this["onFullscreenChange"];

      /** @deprecated Use `onFullscreenError` instead. */
      onFullscreenerror?: this["onFullscreenError"];

      /** @deprecated Use `onGotPointerCapture` instead. */
      onGotpointercapture?: this["onGotPointerCapture"];

      /** @deprecated Use `onKeyDown` instead. */
      onKeydown?: this["onKeyDown"];

      /** @deprecated Use `onKeyPress` instead. */
      onKeypress?: this["onKeyPress"];

      /** @deprecated Use `onKeyUp` instead. */
      onKeyup?: this["onKeyUp"];

      /** @deprecated Use `onLoadedData` instead. */
      onLoadeddata?: this["onLoadedData"];

      /** @deprecated Use `onLoadedMetadata` instead. */
      onLoadedmetadata?: this["onLoadedMetadata"];

      /** @deprecated Use `onLoadStart` instead. */
      onLoadstart?: this["onLoadStart"];

      /** @deprecated Use `onLostPointerCapture` instead. */
      onLostpointercapture?: this["onLostPointerCapture"];

      /** @deprecated Use `onMouseDown` instead. */
      onMousedown?: this["onMouseDown"];

      /** @deprecated Use `onMouseEnter` instead. */
      onMouseenter?: this["onMouseEnter"];

      /** @deprecated Use `onMouseLeave` instead. */
      onMouseleave?: this["onMouseLeave"];

      /** @deprecated Use `onMouseMove` instead. */
      onMousemove?: this["onMouseMove"];

      /** @deprecated Use `onMouseOut` instead. */
      onMouseout?: this["onMouseOut"];

      /** @deprecated Use `onMouseOver` instead. */
      onMouseover?: this["onMouseOver"];

      /** @deprecated Use `onMouseUp` instead. */
      onMouseup?: this["onMouseUp"];

      /** @deprecated Use `onPointerCancel` instead. */
      onPointercancel?: this["onPointerCancel"];

      /** @deprecated Use `onPointerDown` instead. */
      onPointerdown?: this["onPointerDown"];

      /** @deprecated Use `onPointerEnter` instead. */
      onPointerenter?: this["onPointerEnter"];

      /** @deprecated Use `onPointerLeave` instead. */
      onPointerleave?: this["onPointerLeave"];

      /** @deprecated Use `onPointerMove` instead. */
      onPointermove?: this["onPointerMove"];

      /** @deprecated Use `onPointerOut` instead. */
      onPointerout?: this["onPointerOut"];

      /** @deprecated Use `onPointerOver` instead. */
      onPointerover?: this["onPointerOver"];

      /** @deprecated Use `onPointerUp` instead. */
      onPointerup?: this["onPointerUp"];

      /** @deprecated Use `onRateChange` instead. */
      onRatechange?: this["onRateChange"];

      /** @deprecated Use `onScrollEnd` instead. */
      onScrollend?: this["onScrollEnd"];

      /** @deprecated Use `onSlotChange` instead. */
      onSlotchange?: this["onSlotChange"];

      /** @deprecated Use `onTimeUpdate` instead. */
      onTimeupdate?: this["onTimeUpdate"];

      /** @deprecated Use `onTouchCancel` instead. */
      onTouchcancel?: this["onTouchCancel"];

      /** @deprecated Use `onTouchEnd` instead. */
      onTouchend?: this["onTouchEnd"];

      /** @deprecated Use `onTouchMove` instead. */
      onTouchmove?: this["onTouchMove"];

      /** @deprecated Use `onTouchStart` instead. */
      onTouchstart?: this["onTouchStart"];

      /** @deprecated Use `onTransitionCancel` instead. */
      onTransitioncancel?: this["onTransitionCancel"];

      /** @deprecated Use `onTransitionEnd` instead. */
      onTransitionend?: this["onTransitionEnd"];

      /** @deprecated Use `onTransitionRun` instead. */
      onTransitionrun?: this["onTransitionRun"];

      /** @deprecated Use `onTransitionStart` instead. */
      onTransitionstart?: this["onTransitionStart"];

      /** @deprecated Use `onVolumeChange` instead. */
      onVolumechange?: this["onVolumeChange"];
    }

    interface Directives {
      /**
       * Used to uniquely identify a tag within a template in order
       * to get an element reference to it later.
       *
       * @see Marko.Component.getEl
       * @see Marko.Component.getComponent
       */
      key?: AttrString;

      /**
       * Tells Marko to avoid updating the element or its contents (excluding custom tags which may rerender independently).
       */
      "no-update"?: AttrBoolean;

      /**
       * Tells Marko to avoid updating an element's contents (excluding custom tags which may rerender independently). Used instead of no-update when runtime functionality is needed.
       */
      "no-update-if"?: AttrBoolean;

      /**
       * Tells Marko to avoid updating an element's body.
       */
      "no-update-body"?: AttrBoolean;

      /**
       * Tells Marko to avoid updating an element's body. Used instead of no-update-body when runtime functionality is needed.
       * @see https://markojs.com/docs/syntax/#conditional-rendering
       */
      "no-update-body-if"?: AttrBoolean;
    }
  }
}

type AttrMissing = undefined | null | false;
type AttrClass =
  | AttrMissing
  | string
  | AttrClass[]
  | Record<string, AttrMissing | boolean>;
type AttrStyle = AttrMissing | string | Marko.CSS.Properties | AttrStyle[];
type AttrCrossOrigin = AttrBoolean | "anonymous" | "use-credentials";
type AttrEventHandler<Event, Target> =
  | AttrMissing
  | ((event: Event, target: Target) => unknown);
type AttrTarget =
  | AttrMissing
  | "_blank"
  | "_parent"
  | "_self"
  | "_top"
  | (string & {});
type AttrReferrerPolicy =
  | AttrMissing
  | "no-referrer-when-downgrade"
  | "no-referrer"
  | "origin-when-cross-origin"
  | "origin"
  | "same-origin"
  | "strict-origin-when-cross-origin"
  | "strict-origin"
  | "unsafe-url";
/**
 * URL for links, form actions, and citations. Use (string & {}) so any URL is
 * accepted while suggesting common prefixes in autocomplete.
 */
type AttrHref =
  | AttrMissing
  | "#"
  | "mailto:"
  | "tel:"
  | "/"
  | "./"
  | "https://"
  | "data:"
  | (string & {});
/**
 * URL for embeddable resources (img, script, iframe, etc.). Use (string & {})
 * so any URL is accepted while suggesting common prefixes in autocomplete.
 */
type AttrSrc =
  | AttrMissing
  | "/"
  | "./"
  | "https://"
  | "data:"
  | "blob:"
  | (string & {});
/**
 * MIME type for type, codetype, and enctype attributes. Use (string & {}) so
 * any MIME type is accepted while suggesting common values in autocomplete.
 */
type AttrMimeType =
  | AttrMissing
  | "text/html"
  | "text/css"
  | "text/javascript"
  | "application/javascript"
  | "application/json"
  | "application/pdf"
  | "text/plain"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "image/png"
  | "image/jpeg"
  | "image/gif"
  | "image/svg+xml"
  | "image/webp"
  | "video/mp4"
  | "video/webm"
  | "audio/mpeg"
  | "audio/webm"
  | "font/woff"
  | "font/woff2"
  | (string & {});
/**
 * File type hint for input accept. Use (string & {}) so any value is accepted
 * while suggesting common MIME wildcards and extensions in autocomplete.
 */
type AttrAccept =
  | AttrMissing
  | "image/*"
  | "audio/*"
  | "video/*"
  | "application/pdf"
  | ".pdf"
  | ".doc"
  | ".docx"
  | ".jpg"
  | ".jpeg"
  | ".png"
  | ".gif"
  | ".webp"
  | (string & {});
type AttrString = AttrMissing | string;
type AttrStringOrNumber = AttrString | number;
type AttrBoolean = AttrMissing | boolean;
type AttrBooleanOrString = AttrBoolean | string;
type AttrBooleanString = AttrMissing | "false" | "true";
type AttrYesNoString = AttrMissing | "no" | "yes";
type AttrTriState = AttrBooleanString | "mixed";
type AttrOnOff = AttrMissing | "on" | "off";
type AttrAutoComplete =
  | AttrOnOff
  | "shipping"
  | "billing"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "postal-code"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "url"
  | "photo"
  | "home"
  | "work"
  | "mobile"
  | "fax"
  | "pager"
  | (string & {});
