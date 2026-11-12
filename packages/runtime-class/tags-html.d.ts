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
      onAnimationcancel?: HTMLAttributes<T>["onAnimationCancel"];

      /** @deprecated Use `onAnimationEnd` instead. */
      onAnimationend?: HTMLAttributes<T>["onAnimationEnd"];

      /** @deprecated Use `onAnimationIteration` instead. */
      onAnimationiteration?: HTMLAttributes<T>["onAnimationIteration"];

      /** @deprecated Use `onAnimationStart` instead. */
      onAnimationstart?: HTMLAttributes<T>["onAnimationStart"];

      /** @deprecated Use `onAuxClick` instead. */
      onAuxclick?: HTMLAttributes<T>["onAuxClick"];

      /** @deprecated Use `onBeforeInput` instead. */
      onBeforeinput?: HTMLAttributes<T>["onBeforeInput"];

      /** @deprecated Use `onBeforeMatch` instead. */
      onBeforematch?: HTMLAttributes<T>["onBeforeMatch"];

      /** @deprecated Use `onBeforeToggle` instead. */
      onBeforetoggle?: HTMLAttributes<T>["onBeforeToggle"];

      /** @deprecated Use `onCanPlay` instead. */
      onCanplay?: HTMLAttributes<T>["onCanPlay"];

      /** @deprecated Use `onCanPlayThrough` instead. */
      onCanplaythrough?: HTMLAttributes<T>["onCanPlayThrough"];

      /** @deprecated Use `onCompositionEnd` instead. */
      onCompositionend?: HTMLAttributes<T>["onCompositionEnd"];

      /** @deprecated Use `onCompositionStart` instead. */
      onCompositionstart?: HTMLAttributes<T>["onCompositionStart"];

      /** @deprecated Use `onCompositionUpdate` instead. */
      onCompositionupdate?: HTMLAttributes<T>["onCompositionUpdate"];

      /** @deprecated Use `onContextLost` instead. */
      onContextlost?: HTMLAttributes<T>["onContextLost"];

      /** @deprecated Use `onContextMenu` instead. */
      onContextmenu?: HTMLAttributes<T>["onContextMenu"];

      /** @deprecated Use `onContextRestored` instead. */
      onContextrestored?: HTMLAttributes<T>["onContextRestored"];

      /** @deprecated Use `onCueChange` instead. */
      onCuechange?: HTMLAttributes<T>["onCueChange"];

      /** @deprecated Use `onDblClick` instead. */
      onDblclick?: HTMLAttributes<T>["onDblClick"];

      /** @deprecated Use `onDragEnd` instead. */
      onDragend?: HTMLAttributes<T>["onDragEnd"];

      /** @deprecated Use `onDragEnter` instead. */
      onDragenter?: HTMLAttributes<T>["onDragEnter"];

      /** @deprecated Use `onDragLeave` instead. */
      onDragleave?: HTMLAttributes<T>["onDragLeave"];

      /** @deprecated Use `onDragOver` instead. */
      onDragover?: HTMLAttributes<T>["onDragOver"];

      /** @deprecated Use `onDragStart` instead. */
      onDragstart?: HTMLAttributes<T>["onDragStart"];

      /** @deprecated Use `onDurationChange` instead. */
      onDurationchange?: HTMLAttributes<T>["onDurationChange"];

      /** @deprecated Use `onFocusIn` instead. */
      onFocusin?: HTMLAttributes<T>["onFocusIn"];

      /** @deprecated Use `onFocusOut` instead. */
      onFocusout?: HTMLAttributes<T>["onFocusOut"];

      /** @deprecated Use `onFormData` instead. */
      onFormdata?: HTMLAttributes<T>["onFormData"];

      /** @deprecated Use `onFullscreenChange` instead. */
      onFullscreenchange?: HTMLAttributes<T>["onFullscreenChange"];

      /** @deprecated Use `onFullscreenError` instead. */
      onFullscreenerror?: HTMLAttributes<T>["onFullscreenError"];

      /** @deprecated Use `onGotPointerCapture` instead. */
      onGotpointercapture?: HTMLAttributes<T>["onGotPointerCapture"];

      /** @deprecated Use `onKeyDown` instead. */
      onKeydown?: HTMLAttributes<T>["onKeyDown"];

      /** @deprecated Use `onKeyPress` instead. */
      onKeypress?: HTMLAttributes<T>["onKeyPress"];

      /** @deprecated Use `onKeyUp` instead. */
      onKeyup?: HTMLAttributes<T>["onKeyUp"];

      /** @deprecated Use `onLoadedData` instead. */
      onLoadeddata?: HTMLAttributes<T>["onLoadedData"];

      /** @deprecated Use `onLoadedMetadata` instead. */
      onLoadedmetadata?: HTMLAttributes<T>["onLoadedMetadata"];

      /** @deprecated Use `onLoadStart` instead. */
      onLoadstart?: HTMLAttributes<T>["onLoadStart"];

      /** @deprecated Use `onLostPointerCapture` instead. */
      onLostpointercapture?: HTMLAttributes<T>["onLostPointerCapture"];

      /** @deprecated Use `onMouseDown` instead. */
      onMousedown?: HTMLAttributes<T>["onMouseDown"];

      /** @deprecated Use `onMouseEnter` instead. */
      onMouseenter?: HTMLAttributes<T>["onMouseEnter"];

      /** @deprecated Use `onMouseLeave` instead. */
      onMouseleave?: HTMLAttributes<T>["onMouseLeave"];

      /** @deprecated Use `onMouseMove` instead. */
      onMousemove?: HTMLAttributes<T>["onMouseMove"];

      /** @deprecated Use `onMouseOut` instead. */
      onMouseout?: HTMLAttributes<T>["onMouseOut"];

      /** @deprecated Use `onMouseOver` instead. */
      onMouseover?: HTMLAttributes<T>["onMouseOver"];

      /** @deprecated Use `onMouseUp` instead. */
      onMouseup?: HTMLAttributes<T>["onMouseUp"];

      /** @deprecated Use `onPointerCancel` instead. */
      onPointercancel?: HTMLAttributes<T>["onPointerCancel"];

      /** @deprecated Use `onPointerDown` instead. */
      onPointerdown?: HTMLAttributes<T>["onPointerDown"];

      /** @deprecated Use `onPointerEnter` instead. */
      onPointerenter?: HTMLAttributes<T>["onPointerEnter"];

      /** @deprecated Use `onPointerLeave` instead. */
      onPointerleave?: HTMLAttributes<T>["onPointerLeave"];

      /** @deprecated Use `onPointerMove` instead. */
      onPointermove?: HTMLAttributes<T>["onPointerMove"];

      /** @deprecated Use `onPointerOut` instead. */
      onPointerout?: HTMLAttributes<T>["onPointerOut"];

      /** @deprecated Use `onPointerOver` instead. */
      onPointerover?: HTMLAttributes<T>["onPointerOver"];

      /** @deprecated Use `onPointerUp` instead. */
      onPointerup?: HTMLAttributes<T>["onPointerUp"];

      /** @deprecated Use `onRateChange` instead. */
      onRatechange?: HTMLAttributes<T>["onRateChange"];

      /** @deprecated Use `onScrollEnd` instead. */
      onScrollend?: HTMLAttributes<T>["onScrollEnd"];

      /** @deprecated Use `onSlotChange` instead. */
      onSlotchange?: HTMLAttributes<T>["onSlotChange"];

      /** @deprecated Use `onTimeUpdate` instead. */
      onTimeupdate?: HTMLAttributes<T>["onTimeUpdate"];

      /** @deprecated Use `onTouchCancel` instead. */
      onTouchcancel?: HTMLAttributes<T>["onTouchCancel"];

      /** @deprecated Use `onTouchEnd` instead. */
      onTouchend?: HTMLAttributes<T>["onTouchEnd"];

      /** @deprecated Use `onTouchMove` instead. */
      onTouchmove?: HTMLAttributes<T>["onTouchMove"];

      /** @deprecated Use `onTouchStart` instead. */
      onTouchstart?: HTMLAttributes<T>["onTouchStart"];

      /** @deprecated Use `onTransitionCancel` instead. */
      onTransitioncancel?: HTMLAttributes<T>["onTransitionCancel"];

      /** @deprecated Use `onTransitionEnd` instead. */
      onTransitionend?: HTMLAttributes<T>["onTransitionEnd"];

      /** @deprecated Use `onTransitionRun` instead. */
      onTransitionrun?: HTMLAttributes<T>["onTransitionRun"];

      /** @deprecated Use `onTransitionStart` instead. */
      onTransitionstart?: HTMLAttributes<T>["onTransitionStart"];

      /** @deprecated Use `onVolumeChange` instead. */
      onVolumechange?: HTMLAttributes<T>["onVolumeChange"];
    }

    // Marko 6 types SVG tags from a base shared with HTML tags, so they need their
    // own `renderBody`; the deprecated lowercase event aliases stay HTML-only.
    interface SVGAttributes<T extends Element = Element> {
      /** Marko 5 class-API components render their body via `renderBody`. */
      renderBody?: Marko.Body<[], void>;
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
