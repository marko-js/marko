import * as csstype from "csstype";

/**
 * Potential improvements:
 * - Share properties between input interfaces
 * - Add more interfaces of `Link` which restrict specific attributes based on type.
 * - Isolate some event handlers to specific elements (eg media events).
 * - Create more interface for individual aria roles.
 */

declare global {
  namespace Marko {
    interface NativeTags {
      a: NativeTag<Marko.HTML.A, HTMLAnchorElement>;
      abbr: NativeTag<Marko.HTML.Abbr, HTMLElement>;
      address: NativeTag<Marko.HTML.Address, HTMLElement>;
      area: NativeTag<Marko.HTML.Area, HTMLAreaElement>;
      article: NativeTag<Marko.HTML.Article, HTMLElement>;
      aside: NativeTag<Marko.HTML.Aside, HTMLElement>;
      audio: NativeTag<Marko.HTML.Audio, HTMLAudioElement>;
      b: NativeTag<Marko.HTML.B, HTMLElement>;
      base: NativeTag<Marko.HTML.Base, HTMLBaseElement>;
      bdi: NativeTag<Marko.HTML.BDI, HTMLElement>;
      bdo: NativeTag<Marko.HTML.BDO, HTMLElement>;
      blockquote: NativeTag<Marko.HTML.BlockQuote, HTMLQuoteElement>;
      body: NativeTag<Marko.HTML.Body, HTMLBodyElement>;
      br: NativeTag<Marko.HTML.Br, HTMLBRElement>;
      button: NativeTag<Marko.HTML.Button, HTMLButtonElement>;
      canvas: NativeTag<Marko.HTML.Canvas, HTMLCanvasElement>;
      caption: NativeTag<Marko.HTML.Caption, HTMLTableCaptionElement>;
      cite: NativeTag<Marko.HTML.Cite, HTMLElement>;
      code: NativeTag<Marko.HTML.Code, HTMLElement>;
      col: NativeTag<Marko.HTML.Col, HTMLTableColElement>;
      colgroup: NativeTag<Marko.HTML.ColGroup, HTMLTableColElement>;
      data: NativeTag<Marko.HTML.Data, HTMLDataElement>;
      datalist: NativeTag<Marko.HTML.DataList, HTMLDataListElement>;
      dd: NativeTag<Marko.HTML.DD, HTMLElement>;
      del: NativeTag<Marko.HTML.Del, HTMLModElement>;
      details: NativeTag<Marko.HTML.Details, HTMLDetailsElement>;
      dfn: NativeTag<Marko.HTML.Dfn, HTMLElement>;
      dialog: NativeTag<Marko.HTML.Dialog, HTMLDialogElement>;
      div: NativeTag<Marko.HTML.Div, HTMLDivElement>;
      dl: NativeTag<Marko.HTML.DL, HTMLDListElement>;
      dt: NativeTag<Marko.HTML.DT, HTMLElement>;
      em: NativeTag<Marko.HTML.Em, HTMLElement>;
      embed: NativeTag<Marko.HTML.Embed, HTMLEmbedElement>;
      fieldset: NativeTag<Marko.HTML.FieldSet, HTMLFieldSetElement>;
      figcaption: NativeTag<Marko.HTML.FigCaption, HTMLElement>;
      figure: NativeTag<Marko.HTML.Figure, HTMLElement>;
      footer: NativeTag<Marko.HTML.Footer, HTMLElement>;
      form: NativeTag<Marko.HTML.Form, HTMLFormElement>;
      h1: NativeTag<Marko.HTML.H1, HTMLHeadingElement>;
      h2: NativeTag<Marko.HTML.H2, HTMLHeadingElement>;
      h3: NativeTag<Marko.HTML.H3, HTMLHeadingElement>;
      h4: NativeTag<Marko.HTML.H4, HTMLHeadingElement>;
      h5: NativeTag<Marko.HTML.H5, HTMLHeadingElement>;
      h6: NativeTag<Marko.HTML.H6, HTMLHeadingElement>;
      head: NativeTag<Marko.HTML.Head, HTMLHeadElement>;
      header: NativeTag<Marko.HTML.Header, HTMLElement>;
      hgroup: NativeTag<Marko.HTML.HGroup, HTMLElement>;
      hr: NativeTag<Marko.HTML.HR, HTMLHRElement>;
      html: NativeTag<Marko.HTML.HTML, HTMLHtmlElement>;
      i: NativeTag<Marko.HTML.I, HTMLElement>;
      iframe: NativeTag<Marko.HTML.IFrame, HTMLIFrameElement>;
      img: NativeTag<Marko.HTML.Img, HTMLImageElement>;
      input: NativeTag<Marko.HTML.Input, HTMLInputElement>;
      ins: NativeTag<Marko.HTML.Ins, HTMLModElement>;
      kbd: NativeTag<Marko.HTML.Kbd, HTMLElement>;
      label: NativeTag<Marko.HTML.Label, HTMLLabelElement>;
      legend: NativeTag<Marko.HTML.Legend, HTMLLegendElement>;
      li: NativeTag<Marko.HTML.LI, HTMLLIElement>;
      link: NativeTag<Marko.HTML.Link, HTMLLinkElement>;
      main: NativeTag<Marko.HTML.Main, HTMLElement>;
      map: NativeTag<Marko.HTML.Map, HTMLMapElement>;
      mark: NativeTag<Marko.HTML.Mark, HTMLElement>;
      menu: NativeTag<Marko.HTML.Menu, HTMLMenuElement>;
      meta: NativeTag<Marko.HTML.Meta, HTMLMetaElement>;
      meter: NativeTag<Marko.HTML.Meter, HTMLMeterElement>;
      nav: NativeTag<Marko.HTML.Nav, HTMLElement>;
      noscript: NativeTag<Marko.HTML.NoScript, HTMLElement>;
      object: NativeTag<Marko.HTML.Object, HTMLObjectElement>;
      ol: NativeTag<Marko.HTML.OL, HTMLOListElement>;
      optgroup: NativeTag<Marko.HTML.OptGroup, HTMLOptGroupElement>;
      option: NativeTag<Marko.HTML.Option, HTMLOptionElement>;
      output: NativeTag<Marko.HTML.Output, HTMLOutputElement>;
      p: NativeTag<Marko.HTML.P, HTMLParagraphElement>;
      picture: NativeTag<Marko.HTML.Picture, HTMLPictureElement>;
      pre: NativeTag<Marko.HTML.Pre, HTMLPreElement>;
      progress: NativeTag<Marko.HTML.Progress, HTMLProgressElement>;
      q: NativeTag<Marko.HTML.Q, HTMLQuoteElement>;
      rp: NativeTag<Marko.HTML.RP, HTMLElement>;
      rt: NativeTag<Marko.HTML.RT, HTMLElement>;
      ruby: NativeTag<Marko.HTML.Ruby, HTMLElement>;
      s: NativeTag<Marko.HTML.S, HTMLElement>;
      samp: NativeTag<Marko.HTML.Samp, HTMLElement>;
      script: NativeTag<Marko.HTML.Script, HTMLScriptElement>;
      section: NativeTag<Marko.HTML.Section, HTMLElement>;
      select: NativeTag<Marko.HTML.Select, HTMLSelectElement>;
      slot: NativeTag<Marko.HTML.Slot, HTMLSlotElement>;
      small: NativeTag<Marko.HTML.Small, HTMLElement>;
      source: NativeTag<Marko.HTML.Source, HTMLSourceElement>;
      span: NativeTag<Marko.HTML.Span, HTMLSpanElement>;
      strong: NativeTag<Marko.HTML.Strong, HTMLElement>;
      style: NativeTag<Marko.HTML.Style, HTMLStyleElement>;
      sub: NativeTag<Marko.HTML.Sub, HTMLElement>;
      summary: NativeTag<Marko.HTML.Summary, HTMLElement>;
      sup: NativeTag<Marko.HTML.Sup, HTMLElement>;
      table: NativeTag<Marko.HTML.Table, HTMLTableElement>;
      tbody: NativeTag<Marko.HTML.TBody, HTMLTableSectionElement>;
      td: NativeTag<Marko.HTML.TD, HTMLTableDataCellElement>;
      template: NativeTag<Marko.HTML.Template, HTMLTemplateElement>;
      textarea: NativeTag<Marko.HTML.TextArea, HTMLTextAreaElement>;
      tfoot: NativeTag<Marko.HTML.TFoot, HTMLTableSectionElement>;
      th: NativeTag<Marko.HTML.TH, HTMLTableHeaderCellElement>;
      thead: NativeTag<Marko.HTML.THead, HTMLTableSectionElement>;
      time: NativeTag<Marko.HTML.Time, HTMLTimeElement>;
      title: NativeTag<Marko.HTML.Title, HTMLTitleElement>;
      tr: NativeTag<Marko.HTML.TR, HTMLTableRowElement>;
      track: NativeTag<Marko.HTML.Track, HTMLTrackElement>;
      u: NativeTag<Marko.HTML.U, HTMLElement>;
      ul: NativeTag<Marko.HTML.UL, HTMLUListElement>;
      var: NativeTag<Marko.HTML.Var, HTMLElement>;
      video: NativeTag<Marko.HTML.Video, HTMLVideoElement>;
      wbr: NativeTag<Marko.HTML.WBr, HTMLElement>;

      animate: NativeTag<Marko.SVG.Animate, SVGAnimateElement>;
      animateMotion: NativeTag<
        Marko.SVG.AnimateMotion,
        SVGAnimateMotionElement
      >;
      animateTransform: NativeTag<
        Marko.SVG.AnimateTransform,
        SVGAnimateTransformElement
      >;
      circle: NativeTag<Marko.SVG.Circle, SVGCircleElement>;
      clipPath: NativeTag<Marko.SVG.ClipPath, SVGClipPathElement>;
      defs: NativeTag<Marko.SVG.Defs, SVGDefsElement>;
      desc: NativeTag<Marko.SVG.Desc, SVGDescElement>;
      discard: NativeTag<Marko.SVG.Discard, SVGElement>;
      ellipse: NativeTag<Marko.SVG.Ellipse, SVGEllipseElement>;
      feBlend: NativeTag<Marko.SVG.FEBlend, SVGFEBlendElement>;
      feColorMatrix: NativeTag<
        Marko.SVG.FEColorMatrix,
        SVGFEColorMatrixElement
      >;
      feComponentTransfer: NativeTag<
        Marko.SVG.FEComponentTransfer,
        SVGFEComponentTransferElement
      >;
      feComposite: NativeTag<Marko.SVG.FEComposite, SVGFECompositeElement>;
      feConvolveMatrix: NativeTag<
        Marko.SVG.FEConvolveMatrix,
        SVGFEConvolveMatrixElement
      >;
      feDiffuseLighting: NativeTag<
        Marko.SVG.FEDiffuseLighting,
        SVGFEDiffuseLightingElement
      >;
      feDisplacementMap: NativeTag<
        Marko.SVG.FEDisplacementMap,
        SVGFEDisplacementMapElement
      >;
      feDistantLight: NativeTag<
        Marko.SVG.FEDistantLight,
        SVGFEDistantLightElement
      >;
      feDropShadow: NativeTag<Marko.SVG.FEDropShadow, SVGFEDropShadowElement>;
      feFlood: NativeTag<Marko.SVG.FEFlood, SVGFEFloodElement>;
      feFuncA: NativeTag<Marko.SVG.FEFuncA, SVGFEFuncAElement>;
      feFuncB: NativeTag<Marko.SVG.FEFuncB, SVGFEFuncBElement>;
      feFuncG: NativeTag<Marko.SVG.FEFuncG, SVGFEFuncGElement>;
      feFuncR: NativeTag<Marko.SVG.FEFuncR, SVGFEFuncRElement>;
      feGaussianBlur: NativeTag<
        Marko.SVG.FEGaussianBlur,
        SVGFEGaussianBlurElement
      >;
      feImage: NativeTag<Marko.SVG.FEImage, SVGFEImageElement>;
      feMerge: NativeTag<Marko.SVG.FEMerge, SVGFEMergeElement>;
      feMergeNode: NativeTag<Marko.SVG.FEMergeNode, SVGFEMergeNodeElement>;
      feMorphology: NativeTag<Marko.SVG.FEMorphology, SVGFEMorphologyElement>;
      feOffset: NativeTag<Marko.SVG.FEOffset, SVGFEOffsetElement>;
      fePointLight: NativeTag<Marko.SVG.FEPointLight, SVGFEPointLightElement>;
      feSpecularLighting: NativeTag<
        Marko.SVG.FESpecularLighting,
        SVGFESpecularLightingElement
      >;
      feSpotLight: NativeTag<Marko.SVG.FESpotLight, SVGFESpotLightElement>;
      feTile: NativeTag<Marko.SVG.FETile, SVGFETileElement>;
      feTurbulence: NativeTag<Marko.SVG.FETurbulence, SVGFETurbulenceElement>;
      filter: NativeTag<Marko.SVG.Filter, SVGFilterElement>;
      foreignObject: NativeTag<
        Marko.SVG.ForeignObject,
        SVGForeignObjectElement
      >;
      g: NativeTag<Marko.SVG.G, SVGGElement>;
      image: NativeTag<Marko.SVG.Image, SVGImageElement>;
      line: NativeTag<Marko.SVG.Line, SVGLineElement>;
      linearGradient: NativeTag<
        Marko.SVG.LinearGradient,
        SVGLinearGradientElement
      >;
      marker: NativeTag<Marko.SVG.Marker, SVGMarkerElement>;
      mask: NativeTag<Marko.SVG.Mask, SVGMaskElement>;
      metadata: NativeTag<Marko.SVG.Metadata, SVGMetadataElement>;
      mpath: NativeTag<Marko.SVG.MPath, SVGMPathElement>;
      path: NativeTag<Marko.SVG.Path, SVGPathElement>;
      pattern: NativeTag<Marko.SVG.Pattern, SVGPatternElement>;
      polygon: NativeTag<Marko.SVG.Polygon, SVGPolygonElement>;
      polyline: NativeTag<Marko.SVG.Polyline, SVGPolylineElement>;
      radialGradient: NativeTag<
        Marko.SVG.RadialGradient,
        SVGRadialGradientElement
      >;
      rect: NativeTag<Marko.SVG.Rect, SVGRectElement>;
      set: NativeTag<Marko.SVG.Set, SVGSetElement>;
      stop: NativeTag<Marko.SVG.Stop, SVGStopElement>;
      svg: NativeTag<Marko.SVG.SVG, SVGSVGElement>;
      switch: NativeTag<Marko.SVG.Switch, SVGSwitchElement>;
      symbol: NativeTag<Marko.SVG.Symbol, SVGSymbolElement>;
      text: NativeTag<Marko.SVG.Text, SVGTextElement>;
      textPath: NativeTag<Marko.SVG.TextPath, SVGTextPathElement>;
      tspan: NativeTag<Marko.SVG.TSpan, SVGTSpanElement>;
      use: NativeTag<Marko.SVG.Use, SVGUseElement>;
      view: NativeTag<Marko.SVG.View, SVGViewElement>;
    }

    namespace CSS {
      export interface Properties extends csstype.PropertiesHyphen {}
    }

    namespace HTML {
      interface A extends HTMLAttributes<HTMLAnchorElement> {
        /**
         * Specifies whether to download the resource, or the name of the file to download.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download
         */
        download?: AttrBooleanOrString;

        /**
         * Specifies the URL of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href
         */
        href?: AttrString;

        /**
         * Specifies the language of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang
         */
        hreflang?: AttrString;

        /**
         * Specifies the intended media type for the linked resource.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media
         */
        media?: AttrString;

        /**
         * Specifies a space-separated list of URLs to send a ping request to when the link is followed.
         * @see https://html.spec.whatwg.org/multipage/links.html#ping
         */
        ping?: AttrString;

        /**
         * Specifies the referrer policy for the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-referrerpolicy
         */
        referrerpolicy?: AttrReferrerPolicy;

        /**
         * Specifies the relationship between the current document and the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#linkTypes
         */
        rel?:
          | AttrMissing
          | "alternate"
          | "author"
          | "bookmark"
          | "external"
          | "help"
          | "license"
          | "next"
          | "nofollow"
          | "noopener"
          | "noreferrer"
          | "opener"
          | "prev"
          | "search"
          | "tag"
          | (string & {});

        /**
         * Specifies the browsing context for the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target
         */
        target?: AttrTarget;

        /**
         * Specifies the MIME type of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-type
         */
        type?: AttrString;

        /** @deprecated */
        charset?: AttrString;

        /** @deprecated */
        coords?: AttrString;

        /** @deprecated */
        name?: AttrString;

        /** @deprecated */
        rev?: AttrString;

        /** @deprecated */
        shape?: AttrString;
      }

      interface Abbr extends HTMLAttributes<HTMLElement> {}
      interface Address extends HTMLAttributes<HTMLElement> {}
      interface Area extends HTMLAttributes<HTMLAreaElement> {
        /**
         * Specifies an alternative text for the area.
         * @see https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt
         */
        alt?: AttrString;

        /**
         * Specifies the coordinates of the area's shape.
         * @see https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-coords
         */
        coords?: AttrString;

        /**
         * Specifies whether to download the resource, or the name of the file to download.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download
         */
        download?: A["download"];

        /**
         * Specifies the URL of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href
         */
        href?: A["href"];

        /**
         * Specifies the language of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang
         */
        hreflang?: A["hreflang"];

        /**
         * Specifies a space-separated list of URLs to send a ping request to when the link is followed.
         * @see https://html.spec.whatwg.org/multipage/links.html#ping
         */
        ping?: A["ping"];

        /**
         * Specifies the referrer policy for the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-referrerpolicy
         */
        referrerpolicy?: A["referrerpolicy"];

        /**
         * Specifies the relationship between the current document and the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#linkTypes
         */
        rel?: A["rel"];

        /**
         * Specifies the shape of the clickable region on the area.
         * @see https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape
         */
        shape?: AttrMissing | "rect" | "circle" | "poly" | "default";

        /**
         * Specifies the browsing context for the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target
         */
        target?: A["target"];

        /** @deprecated */
        name?: AttrString;

        /** @deprecated */
        nohref?: AttrString;

        /** @deprecated */
        type?: AttrString;
      }
      interface Article extends HTMLAttributes<HTMLElement> {}
      interface Aside extends HTMLAttributes<HTMLElement> {}
      interface Audio extends HTMLAttributes<HTMLAudioElement> {
        /**
         * Specifies whether the audio should start playing automatically.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay
         */
        autoplay?: AttrBoolean;

        /**
         * Specifies whether the audio controls should be displayed.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-controls
         */
        controls?: AttrBoolean;

        /**
         * Specifies the controls to be shown or hidden on the audio player.
         * @see https://wicg.github.io/controls-list/explainer.html
         */
        controlslist?:
          | AttrMissing
          | "nodownload"
          | "nofullscreen"
          | "noplaybackrate"
          | "noremoteplayback"
          | (string & {});

        /**
         * Specifies the CORS settings for the audio resource.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-crossorigin
         */
        crossorigin?: AttrCrossOrigin;

        /**
         * Specifies whether to disable remote playback of the audio.
         * @see https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute
         */
        disableremoteplayback?: AttrBoolean;

        /**
         * Specifies whether the audio should start over again when finished.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-loop
         */
        loop?: AttrBoolean;

        /**
         * Specifies whether the audio should be muted by default.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-muted
         */
        muted?: AttrBoolean;

        /**
         * Specifies the type of preloading for the audio.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-preload
         */
        preload?: AttrBoolean | "none" | "metadata" | "auto";

        /**
         * Specifies the URL of the audio resource.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-src
         */
        src?: AttrString;
      }

      interface B extends HTMLAttributes<HTMLElement> {}
      interface Base extends HTMLAttributes<HTMLBaseElement> {
        /**
         * Specifies the base URL for resolving relative URLs within the document.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href
         */
        href?: AttrString;

        /**
         * Specifies the default browsing context for links and forms in the document.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target
         */
        target?: AttrTarget;
      }
      interface BDI extends HTMLAttributes<HTMLElement> {}
      interface BDO extends HTMLAttributes<HTMLElement> {}
      interface BlockQuote extends HTMLAttributes<HTMLQuoteElement> {
        /**
         * Specifies the URL of the source document or quoted content.
         * @see https://html.spec.whatwg.org/multipage/grouping-content.html#attr-blockquote-cite
         */
        cite?: AttrString;
      }
      interface Body extends HTMLAttributes<HTMLBodyElement> {
        /**
         * Fires after printing the document.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-afterprint
         */
        onAfterPrint?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-afterprint"?: this["onAfterPrint"];

        /**
         * Fires before printing the document.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-beforeprint
         */
        onBeforePrint?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-beforeprint"?: this["onBeforePrint"];

        /**
         * Fired when the page is about to be unloaded, in case the page would like to show a warning prompt.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-beforeunload
         */
        onBeforeUnload?: AttrEventHandler<BeforeUnloadEvent, HTMLBodyElement>;
        "on-beforeunload"?: this["onBeforeUnload"];

        /**
         * Fired when the fragment part of the document's URL changes.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-hashchange
         */
        onHashChange?: AttrEventHandler<HashChangeEvent, HTMLBodyElement>;
        "on-hashchange"?: this["onHashChange"];

        /**
         * Fired when the user's preferred languages change.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-languagechange
         */
        onLanguageChange?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-languagechange"?: this["onLanguageChange"];

        /**
         * Fired when the window receives a message.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-message
         */
        onMessage?: AttrEventHandler<MessageEvent, HTMLBodyElement>;
        "on-message"?: this["onMessage"];

        /**
         * Fired when the window receives an error message.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-messageerror
         */
        onMessageError?: AttrEventHandler<MessageEvent, HTMLBodyElement>;
        "on-messageerror"?: this["onMessageError"];

        /**
         * Fired when the network connection is lost.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-offline
         */
        onOffline?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-offline"?: this["onOffline"];

        /**
         * Fired when the network connection is recovered.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-online
         */
        onOnline?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-online"?: this["onOnline"];

        /**
         * Fired when the page's session history entry stops being the active entry.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-pagehide
         */
        onPageHide?: AttrEventHandler<PageTransitionEvent, HTMLBodyElement>;
        "on-pagehide"?: this["onPageHide"];

        /**
         * Fired when the page's session history entry becomes the active entry.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-pageshow
         */
        onPageShow?: AttrEventHandler<PageTransitionEvent, HTMLBodyElement>;
        "on-pageshow"?: this["onPageShow"];

        /**
         * Fired when the window's session history is popped.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-popstate
         */
        onPopState?: AttrEventHandler<PopStateEvent, HTMLBodyElement>;
        "on-popstate"?: this["onPopState"];

        /**
         * Fires when a previously-unhandled promise rejection becomes handled.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-rejectionhandled
         */
        onRejectionHandled?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-rejectionhandled"?: this["onRejectionHandled"];

        /**
         * Fired when the corresponding localStorage or sessionStorage storage areas change.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-storage
         */
        onStorage?: AttrEventHandler<StorageEvent, HTMLBodyElement>;
        "on-storage"?: this["onStorage"];

        /**
         * Fired when a promise rejection goes unhandled.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-unhandledrejection
         */
        onUnhandledRejection?: AttrEventHandler<
          PromiseRejectionEvent,
          HTMLBodyElement
        >;
        "on-unhandledrejection"?: this["onUnhandledRejection"];

        /**
         * Fired when the page is going away.
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-unload
         */
        onUnload?: AttrEventHandler<Event, HTMLBodyElement>;
        "on-unload"?: this["onUnload"];

        /** @deprecated */
        alink?: AttrString;

        /** @deprecated */
        background?: AttrString;

        /** @deprecated */
        bgcolor?: AttrString;

        /** @deprecated */
        link?: AttrString;

        /** @deprecated */
        text?: AttrString;

        /** @deprecated */
        vlink?: AttrString;

        /** @deprecated */
        bottommargin?: AttrStringOrNumber;

        /** @deprecated */
        leftmargin?: AttrStringOrNumber;

        /** @deprecated */
        rightmargin?: AttrStringOrNumber;

        /** @deprecated */
        topmargin?: AttrStringOrNumber;
      }

      interface Br extends HTMLAttributes<HTMLBRElement> {
        /** @deprecated */
        clear?: AttrString;
      }
      interface Button extends HTMLAttributes<HTMLButtonElement> {
        /**
         * Specifies whether the button should be disabled.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
         */
        disabled?: AttrBoolean;

        /**
         * Specifies the form element associated with the button.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fae-form
         */
        form?: AttrString;

        /**
         * Specifies the URL of the form's action when the button is clicked.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fs-formaction
         */
        formaction?: Form["action"];

        /**
         * Specifies the enctype attribute for the form when the button is clicked.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fs-formenctype
         */
        formenctype?: Form["enctype"];

        /**
         * Specifies the method attribute for the form when the button is clicked.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fs-formmethod
         */
        formmethod?: Form["method"];

        /**
         * Specifies whether the form should not validate when the button is clicked.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fs-formnovalidate
         */
        formnovalidate?: Form["novalidate"];

        /**
         * Specifies the target attribute for the form when the button is clicked.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fs-formtarget
         */
        formtarget?: Form["target"];

        /**
         * Specifies the name of the button.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
         */
        name?: AttrString;

        /**
         * Specifies the type of the button.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type
         */
        type?: AttrMissing | "submit" | "reset" | "button";

        /**
         * Specifies the value of the button.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-value
         */
        value?: AttrString;

        /**
         * Specifies the target element for the popover.
         * @see https://developer.chrome.com/docs/web-platform/popover-api/popovertargetaction-toggle-attribute
         */
        popovertarget?: AttrString;

        /**
         * Specifies the action to perform on the popover target.
         * @see https://developer.chrome.com/docs/web-platform/popover-api/popovertargetaction-toggle-attribute
         */
        popovertargetaction?: AttrMissing | "toggle" | "show" | "hide";
      }
      interface Canvas extends HTMLAttributes<HTMLCanvasElement> {
        /**
         * Specifies the height of the canvas element.
         * @see https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-height
         */
        height?: AttrStringOrNumber;

        /**
         * Specifies the width of the canvas element.
         * @see https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-width
         */
        width?: AttrStringOrNumber;
      }
      interface Caption extends HTMLAttributes<HTMLTableCaptionElement> {
        /** @deprecated */
        align?: AttrString;
      }
      interface Cite extends HTMLAttributes<HTMLElement> {}
      interface Code extends HTMLAttributes<HTMLElement> {}
      interface Col extends HTMLAttributes<HTMLTableColElement> {
        /**
         * Specifies how many columns in the table the `<col>` element spans.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-col-span
         */
        span?: AttrStringOrNumber;

        /** @deprecated */
        align?: AttrString;

        /** @deprecated */
        char?: AttrString;

        /** @deprecated */
        charoff?: AttrStringOrNumber;

        /** @deprecated */
        valign?: AttrString;

        /** @deprecated */
        width?: AttrStringOrNumber;
      }
      interface ColGroup extends HTMLAttributes<HTMLTableColElement> {
        /**
         * Specifies how many columns in the table the `<colgroup>` element spans.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-colgroup-span
         */
        span?: AttrStringOrNumber;

        /** @deprecated */
        align?: AttrString;

        /** @deprecated */
        bgcolor?: AttrString;

        /** @deprecated */
        char?: AttrString;

        /** @deprecated */
        charoff?: AttrStringOrNumber;

        /** @deprecated */
        valign?: AttrString;
      }
      interface Data extends HTMLAttributes<HTMLDataElement> {
        /**
         * Specifies the machine-readable value of the `<data>` element.
         * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-data-value
         */
        value?: AttrStringOrNumber;
      }

      interface DataList extends HTMLAttributes<HTMLDataListElement> {}
      interface DD extends HTMLAttributes<HTMLElement> {
        /** @deprecated */
        nowrap?: AttrYesNoString;
      }
      interface Del extends HTMLAttributes<HTMLModElement> {
        /**
         * Specifies the URL of the source of the quote or change.
         * @see https://html.spec.whatwg.org/multipage/edits.html#attr-mod-cite
         */
        cite?: AttrString;

        /**
         * Specifies the date and time of the quote or change.
         * @see https://html.spec.whatwg.org/multipage/edits.html#attr-mod-datetime
         */
        datetime?: AttrString;
      }
      interface Details extends HTMLAttributes<HTMLDetailsElement> {
        /**
         * Specifies whether the `<details>` element is open.
         * @see https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-details-open
         */
        open?: AttrBoolean;

        // NON STANDARD
        /**
         * Called whenever a the `open` attribute has changed.
         * When `openChange` is a function, `open` becomes controlled.
         */
        openChange?: AttrMissing | ((open: boolean) => void);
      }
      interface Dfn extends HTMLAttributes<HTMLElement> {}
      interface Dialog extends HTMLAttributes<HTMLDialogElement> {
        /**
         * Specifies the types of user actions that can be used to close the `<dialog>` element.
         * @see https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby
         */
        closedby?: AttrMissing | "any" | "closerequest" | "none";

        /**
         * Specifies whether the `<dialog>` element is open.
         * @see https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-open
         */
        open?: AttrBoolean;

        // NON STANDARD
        /**
         * Called whenever a the `open` attribute has changed.
         * When `openChange` is a function, `open` becomes controlled.
         */
        openChange?: AttrMissing | ((open: boolean) => void);
      }
      interface Div extends HTMLAttributes<HTMLDivElement> {}
      interface DL extends HTMLAttributes<HTMLDListElement> {}
      interface DT extends HTMLAttributes<HTMLElement> {}
      interface Em extends HTMLAttributes<HTMLElement> {}
      interface Embed extends HTMLAttributes<HTMLEmbedElement> {
        /**
         * Specifies the height of the embedded content.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
         */
        height?: AttrStringOrNumber;

        /**
         * Specifies the URL of the resource to embed.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-src
         */
        src?: AttrString;

        /**
         * Specifies the MIME type of the embedded content.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-embed-type
         */
        type?: AttrString;

        /**
         * Specifies the width of the embedded content.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
         */
        width?: AttrStringOrNumber;
      }
      interface FieldSet extends HTMLAttributes<HTMLFieldSetElement> {
        /**
         * Specifies whether the `<fieldset>` element is disabled.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fieldset-disabled
         */
        disabled?: AttrBoolean;
        /**
         * Specifies associated form for the `<fieldset>`.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
         */
        form?: AttrString;
        /**
         * Specifies the name of the `<fieldset>` on the form.elements api.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
         * @see HTMLFormElement.elements
         */
        name?: AttrString;
      }
      interface FigCaption extends HTMLAttributes<HTMLElement> {}
      interface Figure extends HTMLAttributes<HTMLElement> {}
      interface Form extends HTMLAttributes<HTMLFormElement> {
        /**
         * Specifies the character encodings that are to be used for the form submission.
         * @see https://html.spec.whatwg.org/multipage/forms.html#attr-form-accept-charset
         */
        "accept-charset"?: AttrString;
        /**
         * Specifies the URL which the form data will be submitted to.
         * @see https://html.spec.whatwg.org/multipage/forms.html#attr-fs-action
         */
        action?: AttrString;
        /**
         * Controls whether the browser should automatically complete form input values.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
         */
        autocomplete?: AttrOnOff;
        /**
         * Specifies the content type used to submit the form to the server.
         * @see https://html.spec.whatwg.org/multipage/forms.html#attr-form-enctype
         */
        enctype?:
          | AttrMissing
          | "application/x-www-form-urlencoded"
          | "multipart/form-data"
          | "text/plain";
        /**
         * Specifies the HTTP method used to submit the form to the server.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method
         */
        method?:
          | AttrMissing
          | "POST"
          | "post"
          | "GET"
          | "get"
          | "dialog"
          | "DIALOG";
        /**
         * The name attribute represents the form's name within the forms collection.
         * @see https://html.spec.whatwg.org/multipage/forms.html#attr-form-name
         * @see Document.forms
         */
        name?: AttrString;
        /**
         * Indicates that the form should not be validated when submitted.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-novalidate
         */
        novalidate?: AttrBoolean;
        /**
         * Specifies the relationship between the current document and the linked document.
         * @see https://html.spec.whatwg.org/multipage/links.html#linkTypes
         */
        rel?:
          | AttrMissing
          | "external"
          | "help"
          | "license"
          | "next"
          | "nofollow"
          | "noopener"
          | "noreferrer"
          | "opener"
          | "prev"
          | "search"
          | (string & {});
        /**
         * Specifies the browsing context in which the linked resource will be opened.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-target
         */
        target?: AttrTarget;
        /** @deprecated */
        accept?: AttrString;

        /**
         * Fired at a form element when it is constructing the entry list
         * @see https://html.spec.whatwg.org/multipage/indices.html#event-formdata
         */
        onFormData?: AttrEventHandler<FormDataEvent, HTMLFormElement>;
        "on-formdata"?: this["onFormData"];

        /**
         * Fired when a form is submitted, either by user interaction or through a script.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#event-submit
         */
        onSubmit?: AttrEventHandler<SubmitEvent, HTMLFormElement>;
        "on-submit"?: this["onSubmit"];
      }
      interface H1 extends HTMLAttributes<HTMLHeadingElement> {}
      interface H2 extends HTMLAttributes<HTMLHeadingElement> {}
      interface H3 extends HTMLAttributes<HTMLHeadingElement> {}
      interface H4 extends HTMLAttributes<HTMLHeadingElement> {}
      interface H5 extends HTMLAttributes<HTMLHeadingElement> {}
      interface H6 extends HTMLAttributes<HTMLHeadingElement> {}
      interface Footer extends HTMLAttributes<HTMLElement> {}
      interface Head extends HTMLAttributes<HTMLHeadElement> {
        /** @deprecated */
        profile?: AttrString;
        /** @see https://ogp.me/ */
        prefix?: AttrString;
      }
      interface Header extends HTMLAttributes<HTMLElement> {}
      interface HGroup extends HTMLAttributes<HTMLElement> {}
      interface HR extends HTMLAttributes<HTMLHRElement> {
        /** @deprecated */
        align?: AttrMissing | "left" | "center" | "right";
        /** @deprecated */
        color?: AttrString;
        /** @deprecated */
        noshade?: AttrBoolean;
        /** @deprecated */
        size?: AttrStringOrNumber;
        /** @deprecated */
        width?: AttrStringOrNumber;
      }
      interface HTML extends HTMLAttributes<HTMLHtmlElement> {
        /** @deprecated */
        xmlns?: AttrString;
        /** @deprecated */
        manifest?: AttrString;
        /** @deprecated */
        version?: AttrString;
        /** @see https://ogp.me/ */
        prefix?: AttrString;
      }
      interface I extends HTMLAttributes<HTMLElement> {}
      interface IFrame extends HTMLAttributes<HTMLIFrameElement> {
        /**
         * A space-separated list of permissions that are granted to the content inside the frame.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-allow
         */
        allow?: AttrString;
        /**
         * Indicates whether the iframe can be displayed in fullscreen mode.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-allowfullscreen
         */
        allowfullscreen?: AttrBoolean;
        /**
         * The height of the iframe.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
         */
        height?: AttrStringOrNumber;
        /**
         * Indicates whether the browser should eagerly load the frame's contents or not.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-loading
         */
        loading?: AttrMissing | "eager" | "lazy";
        /**
         * A name or keyword that can be used to refer to the iframe from elsewhere in the document.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-name
         */
        name?: AttrString;
        /**
         * Specifies the referrer policy for the iframe.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-referrerpolicy
         */
        referrerpolicy?: AttrReferrerPolicy;
        /**
         * A set of sandbox flags that are applied to the iframe.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox
         */
        sandbox?:
          | AttrMissing
          | "allow-downloads-without-user-activation"
          | "allow-downloads"
          | "allow-forms"
          | "allow-modals"
          | "allow-orientation-lock"
          | "allow-pointer-lock"
          | "allow-popups-to-escape-sandbox"
          | "allow-popups"
          | "allow-presentation"
          | "allow-same-origin"
          | "allow-scripts"
          | "allow-storage-access-by-user-activation"
          | "allow-top-navigation-by-user-activation"
          | "allow-top-navigation-to-custom-protocols"
          | "allow-top-navigation"
          | (string & {});
        /**
         * The URL of the page to embed in the iframe.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-src
         */
        src?: AttrString;
        /**
         * A document to render inside the iframe.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc
         */
        srcdoc?: AttrString;
        /**
         * The width of the iframe.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
         */
        width?: AttrStringOrNumber;
        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        frameborder?: AttrStringOrNumber;
        /** @deprecated */
        longdesc?: AttrString;
        /** @deprecated */
        marginheight?: AttrStringOrNumber;
        /** @deprecated */
        marginwidth?: AttrStringOrNumber;
        /** @deprecated */
        scrolling?: AttrYesNoString | "auto";
      }
      interface Img extends HTMLAttributes<HTMLImageElement> {
        /**
         * The alternative text for the image, displayed when the image cannot be loaded or
         * rendered. This is useful for accessibility purposes.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-alt
         */
        alt?: AttrString;

        /**
         * A CORS setting attribute that determines if the image should be fetched with CORS or not.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin
         */
        crossorigin?: AttrCrossOrigin;

        /**
         * Specifies the decoding mode for the image, which can be "sync", "async", or "auto".
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-decoding
         */
        decoding?: AttrMissing | "sync" | "async" | "auto";

        /**
         * Sets the fetch priority of the image, which can be "auto", "high", or "low".
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-fetchpriority
         */
        fetchpriority?: AttrMissing | "auto" | "high" | "low";

        /**
         * The height of the image, either as a string (CSS length value) or a number (pixels).
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-dim-height
         */
        height?: AttrStringOrNumber;

        /**
         * Indicates that the image is part of a server-side image map.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-ismap
         */
        ismap?: AttrBoolean;

        /**
         * Specifies the loading behavior of the image, which can be "eager" or "lazy".
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-loading
         */
        loading?: AttrMissing | "eager" | "lazy";

        /**
         * Sets the referrer policy for the image request.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-referrerpolicy
         */
        referrerpolicy?: AttrReferrerPolicy;

        /**
         * A string containing size descriptors for responsive images.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-sizes
         */
        sizes?: AttrString;

        /**
         * The URL of the image to display.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-src
         */
        src?: AttrString;

        /**
         * A string containing URL and size descriptor pairs for responsive images.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset
         */
        srcset?: AttrString;

        /**
         * The URL of a client-side image map to associate with the image.
         * @see https://html.spec.whatwg.org/multipage/image-maps.html#attr-hyperlink-usemap
         */
        usemap?: AttrString;

        /**
         * The width of the image, either as a string (CSS length value) or a number (pixels
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-dim-width
         */
        width?: AttrStringOrNumber;

        /** @deprecated */
        align?: AttrMissing | "left" | "center" | "right" | "justify" | "char";
        /** @deprecated */
        border?: AttrStringOrNumber;
        /** @deprecated */
        hspace?: AttrStringOrNumber;
        /** @deprecated */
        longdesc?: AttrString;
        /** @deprecated */
        name?: AttrString;
        /** @deprecated */
        vspace?: AttrStringOrNumber;
      }
      interface Input extends HTMLAttributes<HTMLInputElement> {
        /**
         * A comma-separated list of file types that a file input should accept.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-accept
         */
        accept?: AttrString;

        /**
         * The alternate text for an image input, displayed if the image cannot be loaded.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-alt
         */
        alt?: AttrString;

        /**
         * Specifies whether the input field should have autocomplete enabled or disabled.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
         */
        autocomplete?: AttrAutoComplete;

        /**
         * Indicates whether a file input should use a specific capture method.
         * "user" indicates the front camera, "environment" indicates the rear camera.
         * @see https://w3c.github.io/html-media-capture/#dfn-capture
         */
        capture?: AttrBoolean | "user" | "environment";

        /**
         * Indicates whether a checkbox should be checked or not.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-checked
         */
        checked?: AttrBoolean;

        /**
         * Enables the submission of the directionality of a text input.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-dirname
         */
        dirname?: AttrString;

        /**
         * Indicates whether the input should be disabled or not. When disabled,
         * the input will not be interactable or submitted with the form.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
         */
        disabled?: AttrBoolean;

        /**
         * The ID of the form element that this input is associated with.
         * This allows the input to be associated with a form even if it is
         * not a direct descendant of the form element.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
         */
        form?: AttrString;

        /**
         * The URL of the form processing endpoint when the input image is used for form submission.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formaction
         */
        formaction?: Form["action"];

        /**
         * The encoding type for the form data when the input image is used for form submission.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formenctype
         */
        formenctype?: Form["enctype"];

        /**
         * The HTTP method to use when the input image is used for form submission.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formmethod
         */
        formmethod?: Form["method"];

        /**
         * Indicates whether form validation should be skipped when the input image is used for form submission.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formnovalidate
         */
        formnovalidate?: Form["novalidate"];

        /**
         * The browsing context for displaying the response after form submission when the input image is used.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formtarget
         */
        formtarget?: Form["target"];

        /**
         * The height of of an image input in pixels.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
         */
        height?: AttrStringOrNumber;

        /**
         * The ID of a <datalist> element that provides a list of suggested values for the input.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-list
         */
        list?: AttrString;

        /**
         * The maximum allowed value for the input.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-max
         */
        max?: AttrStringOrNumber;

        /**
         * The maximum number of characters allowed in the input.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-maxlength
         */
        maxlength?: AttrStringOrNumber;

        /**
         * The minimum allowed value for the input.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-min
         */
        min?: AttrStringOrNumber;

        /**
         * The minimum number of characters required in the input.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-minlength
         */
        minlength?: AttrStringOrNumber;

        /**
         * Indicates whether the input should allow more than one value.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-multiple
         */
        multiple?: AttrBoolean;

        /**
         * Used as a key when submitting the forms data. Also the name used in the form.elements api.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
         * @see HTMLFormElement.elements
         */
        name?: AttrString;

        /**
         * A regular expression pattern to be validated against the input value.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-pattern
         */
        pattern?: AttrString;

        /**
         * A short hint to display in the input field before the user enters a value.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-placeholder
         */
        placeholder?: AttrStringOrNumber;

        /**
         * Specifies the target element for the popover.
         * @see https://developer.chrome.com/docs/web-platform/popover-api/popovertargetaction-toggle-attribute
         */
        popovertarget?: AttrString;

        /**
         * Specifies the action to perform on the popover target.
         * @see https://developer.chrome.com/docs/web-platform/popover-api/popovertargetaction-toggle-attribute
         */
        popovertargetaction?: AttrMissing | "toggle" | "show" | "hide";

        /**
         * Indicates whether the input should be read-only or not. Read-only inputs cannot be edited.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-readonly
         */
        readonly?: AttrBoolean;

        /**
         * Indicates whether the input is required to have a value for the form to be submitted.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-required
         */
        required?: AttrBoolean;

        /**
         * The number of characters wide a text input field should be displayed.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-size
         */
        size?: AttrStringOrNumber;

        /**
         * The URL of the image file.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-src
         */
        src?: AttrString;

        /**
         * Specifies the allowed number intervals for the input value.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-step
         */
        step?: AttrStringOrNumber;

        /**
         * Controls the data type (and associated control) of the element.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-type
         */
        type?:
          | AttrMissing
          | "button"
          | "checkbox"
          | "color"
          | "date"
          | "datetime-local"
          | "email"
          | "file"
          | "hidden"
          | "image"
          | "month"
          | "number"
          | "password"
          | "radio"
          | "range"
          | "reset"
          | "search"
          | "submit"
          | "tel"
          | "text"
          | "time"
          | "url"
          | "week";

        /**
         * Specifies the string value you want to pass back to the server.
         * @see https://html.spec.whatwg.org/multipage/input.html#attr-input-value
         */
        value?: AttrStringOrNumber;

        /**
         * The width of an image input in pixels.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
         */
        width?: AttrStringOrNumber;

        // NON STANDARD

        /**
         * Called whenever a the `checked` property of an `input` has changed.
         * When `checkedChange` is a function, `checked` becomes controlled.
         * This means the `checked` property is synchronized instead of the `checked` attribute.
         */
        checkedChange?: AttrMissing | ((checked: boolean) => void);

        /**
         * Used to synchronize the `checked` attribute with a `value` attribute used across related `input type="checkbox"` and `input type="radio"` controls.
         * When `checkedValue` is a string, the `checked` attribute will be set to a boolean that is `true` if the `checkedValue` is the same as the `value`.
         * When `checkedValue` is an array of strings, the `checked` attribute will be set to a boolean that is `true` if the `checkedValue` array includes the `value`.
         * If the `checkedValue` is falsy then `checked` is always `false`.
         */
        checkedValue?: AttrMissing | string | string[];
        /**
         * Called whenever a `input type="checkbox"` or `input type="radio"` using the `checkedValue` attribute has changed.
         * When `checkedValueChange` is a function, `checked` becomes controlled.
         * This means the `checked` property is synchronized instead of the `checked` attribute.
         */
        checkedValueChange?:
          | AttrMissing
          | ((
              /** Note this is hack that allows you to work with the value as both a string and a string[] without needing generics */
              checkedValue: string & string[],
            ) => void);

        /**
         * Called whenever a the `value` property of an `input` has changed.
         * When `valueChange` is a function, `value` becomes controlled. This means
         * This means the `value` property is synchronized instead of the `value` attribute.
         */
        valueChange?: AttrMissing | ((value: string) => void);
      }

      interface Ins extends HTMLAttributes<HTMLModElement> {
        /**
         * A URI for a resource that explains the reason for the insertion.
         * @see https://html.spec.whatwg.org/multipage/edits.html#attr-mod-cite
         */
        cite?: AttrString;

        /**
         * The date and time when the element's contents were inserted, in the format "YYYY-MM-DDThh:mm:ssZ".
         * @see https://html.spec.whatwg.org/multipage/edits.html#attr-mod-datetime
         */
        datetime?: AttrString;
      }

      interface Kbd extends HTMLAttributes<HTMLElement> {}
      interface Label extends HTMLAttributes<HTMLLabelElement> {
        /**
         * The ID of a form control that this label is associated with.
         * @see https://html.spec.whatwg.org/multipage/forms.html#attr-label-for
         */
        for?: AttrString;

        /**
         * The ID of the form element that this label is associated with, if the form control is not a descendant of the label element.
         * Note that this attribute is non standard.
         *
         * @see https://www.w3schools.com/tags//att_label_form.asp
         */
        form?: AttrString;
      }

      interface Legend extends HTMLAttributes<HTMLLegendElement> {}
      interface LI extends HTMLAttributes<HTMLLIElement> {
        /**
         * The value used to determine the ordinal value of the list item.
         * @see https://html.spec.whatwg.org/multipage/grouping-content.html#attr-li-value
         */
        value?: AttrStringOrNumber;

        /** @deprecated */
        type?: AttrString;
      }
      // TODO break into multiple interfaces based on rel?
      interface Link extends HTMLAttributes<HTMLLinkElement> {
        /**
         * Specifies the type of resource for the preload request.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-as
         */
        as?:
          | AttrMissing
          | "audio"
          | "document"
          | "embed"
          | "fetch"
          | "font"
          | "image"
          | "object"
          | "script"
          | "style"
          | "track"
          | "video"
          | "worker";

        /**
         * Specifies whether the link should block rendering or not.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-blocking
         */
        blocking?: AttrMissing | "render";

        /**
         * Specifies how the CORS requests for the element should be handled.
         * @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes
         */
        crossorigin?: AttrCrossOrigin;

        /**
         * Indicates if the link element is disabled.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-disabled
         */
        disabled?: AttrBoolean;

        /**
         * Specifies the priority for the fetch request.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-fetchpriority
         */
        fetchpriority?: AttrMissing | "auto" | "high" | "low";

        /**
         * Specifies the URL of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-href
         */
        href?: AttrString;

        /**
         * Specifies the language of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-hreflang
         */
        hreflang?: AttrString;

        /**
         * Specifies the sizes for image resources.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-imagesizes
         */
        imagesizes?: AttrString;

        /**
         * Specifies a set of source sizes for responsive images.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-imagesrcset
         */
        imagesrcset?: AttrString;

        /**
         * Allows a resource to be fetched with a cryptographic hash, ensuring the integrity of the resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-integrity
         */
        integrity?: AttrString;

        /**
         * Specifies the media for which the linked resource is designed.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-media
         */
        media?: AttrString;

        /**
         * Specifies the referrer policy for the request initiated by the link element.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-referrerpolicy
         */
        referrerpolicy?: AttrReferrerPolicy;

        /**
         * Specifies the relationship between the current document and the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-rel
         */
        rel?:
          | AttrMissing
          | "alternate"
          | "author"
          | "bookmark"
          | "canonical"
          | "dns-prefetch"
          | "external"
          | "help"
          | "icon"
          | "manifest"
          | "modulepreload"
          | "license"
          | "next"
          | "pingback"
          | "preconnect"
          | "prefetch"
          | "preload"
          | "prev"
          | "search"
          | "stylesheet"
          | (string & {});

        /**
         * Specifies the size of the resource for rel="icon" or rel="apple-touch-icon".
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-sizes
         */
        sizes?: AttrString;

        /**
         * Specifies the MIME type of the linked resource.
         * @see https://html.spec.whatwg.org/multipage/links.html#attr-link-type
         */
        type?: AttrString;

        // DEPRECATED

        /** @deprecated */
        charset?: AttrString;

        /** @deprecated */
        rev?: AttrString;
      }

      interface Main extends HTMLAttributes<HTMLElement> {}
      interface Map extends HTMLAttributes<HTMLMapElement> {
        /**
         * Specifies the name of the map.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-map-name
         */
        name?: AttrString;
      }
      interface Mark extends HTMLAttributes<HTMLElement> {}
      interface Menu extends HTMLAttributes<HTMLMenuElement> {
        /**
         * Specifies the title of the menu.
         * @see https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-menu-label
         */
        label?: AttrString;

        /**
         * Specifies the type of the menu, either a context menu or a toolbar.
         * @see https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-menu-type
         */
        type?: AttrMissing | "context" | "toolbar";
      }
      interface Meta extends HTMLAttributes<HTMLMetaElement> {
        /**
         * Specifies the character encoding for the HTML document.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset
         */
        charset?: AttrString;

        /**
         * Specifies the value associated with the http-equiv or name attribute.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content
         */
        content?: AttrString;

        /**
         * Specifies a pragma directive to affect the behavior of the user agent or server.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv
         */
        "http-equiv"?:
          | AttrMissing
          | "Content-Security-Policy"
          | "Content-Type"
          | "Default-Style"
          | "Refresh"
          | "X-UA-Compatible";

        /**
         * Specifies the metadata name for the content attribute.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name
         */
        name?: AttrString;

        /** @see https://ogp.me/ */
        property?: AttrString;
      }
      interface Meter extends HTMLAttributes<HTMLMeterElement> {
        /**
         * Specifies the upper bound of the high end of the measured range.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-high
         */
        high?: AttrStringOrNumber;

        /**
         * Specifies the lower bound of the low end of the measured range.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-low
         */
        low?: AttrStringOrNumber;

        /**
         * Specifies the maximum value of the range.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-max
         */
        max?: AttrStringOrNumber;

        /**
         * Specifies the minimum value of the range.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-min
         */
        min?: AttrStringOrNumber;

        /**
         * Specifies the value that is considered optimal.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-optimum
         */
        optimum?: AttrStringOrNumber;

        /**
         * Specifies the current value of the meter.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-value
         */
        value?: AttrStringOrNumber;
      }

      interface Nav extends HTMLAttributes<HTMLElement> {}
      interface NoScript extends HTMLAttributes<HTMLElement> {}
      interface Object extends HTMLAttributes<HTMLObjectElement> {
        /**
         * Specifies the URL of the resource to be embedded.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-data
         */
        data?: AttrString;

        /**
         * Associates the object element with a form element.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
         */
        form?: AttrString;

        /**
         * Specifies the height of the object element.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
         */
        height?: AttrStringOrNumber;

        /**
         * Specifies the name of the object element.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-name
         */
        name?: AttrString;

        /**
         * Specifies the MIME type of the resource.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-type
         */
        type?: AttrString;

        /**
         * Specifies a client-side image map to be used with the object element.
         * @see https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-object-usemap
         */
        usemap?: AttrString;

        /**
         * Specifies the width of the object element.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
         */
        width?: AttrStringOrNumber;

        /** @deprecated */
        archive?: AttrString;
        /** @deprecated */
        border?: AttrString;
        /** @deprecated */
        classid?: AttrString;
        /** @deprecated */
        codebase?: AttrString;
        /** @deprecated */
        codetype?: AttrString;
        /** @deprecated */
        declare?: AttrBoolean;
        /** @deprecated */
        standby?: AttrString;
      }
      interface OL extends HTMLAttributes<HTMLOListElement> {
        /**
         * Specifies whether the list items are numbered in reverse order.
         * @see https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-reversed
         */
        reversed?: AttrBoolean;

        /**
         * Specifies the starting value of the list items.
         * @see https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-start
         */
        start?: AttrStringOrNumber;

        /**
         * Specifies the numbering type of the list items.
         * @see https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type
         */
        type?: AttrMissing | "1" | "a" | "A" | "i" | "I";
      }
      interface OptGroup extends HTMLAttributes<HTMLOptGroupElement> {
        /**
         * Specifies that the option group is disabled.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-optgroup-disabled
         */
        disabled?: AttrBoolean;

        /**
         * Specifies a label for the option group.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-optgroup-label
         */
        label?: AttrString;
      }
      interface Option extends HTMLAttributes<HTMLOptionElement> {
        /**
         * Specifies that the option is disabled.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-disabled
         */
        disabled?: AttrBoolean;

        /**
         * Specifies a label for the option element.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-label
         */
        label?: AttrString;

        /**
         * Specifies that the option element is selected by default.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-selected
         */
        selected?: AttrBoolean;

        /**
         * Specifies the value of the option element.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-value
         */
        value?: AttrStringOrNumber;
      }
      interface Output extends HTMLAttributes<HTMLOutputElement> {
        /**
         * Specifies the ID of the form element that this output element is associated with.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-output-for
         */
        for?: AttrString;

        /**
         * Specifies the ID of the form that this output element belongs to.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
         */
        form?: AttrString;

        /**
         * Specifies the name of the output element.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
         */
        name?: AttrString;
      }

      interface P extends HTMLAttributes<HTMLParagraphElement> {}
      interface Picture extends HTMLAttributes<HTMLPictureElement> {}
      interface Pre extends HTMLAttributes<HTMLPreElement> {
        /** @deprecated */
        cols?: AttrStringOrNumber;
        /** @deprecated */
        width?: AttrStringOrNumber;
        /** @deprecated */
        wrap?: AttrString;
      }
      interface Progress extends HTMLAttributes<HTMLProgressElement> {
        /**
         * Specifies the maximum value of the progress bar.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-progress-max
         */
        max?: AttrStringOrNumber;

        /**
         * Specifies the current value of the progress bar.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-progress-value
         */
        value?: AttrStringOrNumber;
      }

      interface Q extends HTMLAttributes<HTMLQuoteElement> {
        /**
         * Specifies the URL of the source document or message that the quotation came from.
         * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-q-cite
         */
        cite?: AttrString;
      }

      interface RP extends HTMLAttributes<HTMLElement> {}
      interface RT extends HTMLAttributes<HTMLElement> {}
      interface Ruby extends HTMLAttributes<HTMLElement> {}
      interface S extends HTMLAttributes<HTMLElement> {}
      interface Samp extends HTMLAttributes<HTMLElement> {}
      interface Script extends HTMLAttributes<HTMLScriptElement> {
        /**
         * Specifies that the script should be executed asynchronously.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async
         */
        async?: AttrBoolean;

        /**
         * Specifies that the script should be fetched and executed after the page is rendered.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-blocking
         */
        blocking?: AttrMissing | "render";

        /**
         * Specifies whether CORS (Cross-Origin Resource Sharing) requests should be used when fetching the script.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-crossorigin
         */
        crossorigin?: AttrCrossOrigin;

        /**
         * Specifies that the script should be executed after the page is parsed, but before the document is loaded.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer
         */
        defer?: AttrBoolean;

        /**
         * Specifies the priority level for fetching the script.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-fetchpriority
         */
        fetchpriority?: AttrMissing | "auto" | "high" | "low";

        /**
         * Specifies the integrity hash for the script.
         * @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-link-integrity
         */
        integrity?: AttrString;

        /**
         * Specifies that the script should be ignored if the browser doesn't support modules.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-nomodule
         */
        nomodule?: AttrBoolean;

        /**
         * Specifies the referrer policy for the script.
         * @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-link-referrerpolicy
         */
        referrerpolicy?: AttrReferrerPolicy;

        /**
         * Specifies the URL of the script.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-src
         */
        src?: AttrString;

        /**
         * Specifies the type of the script.
         * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type
         */
        type?:
          | AttrMissing
          | "application/javascript"
          | "module"
          | "import-map"
          | (string & {});

        /** @deprecated */
        charset?: AttrString;
        /** @deprecated */
        language?: AttrString;
      }

      interface Section extends HTMLAttributes<HTMLElement> {}
      interface Select extends HTMLAttributes<HTMLSelectElement> {
        /**
         * Controls whether the browser should automatically complete the value for the select.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
         */
        autocomplete?: AttrAutoComplete;

        /**
         * Indicates whether the select element should be disabled or not.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
         */
        disabled?: AttrBoolean;

        /**
         * Specifies the form element associated with the select.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-fae-form
         */
        form?: AttrString;

        /**
         * Indicates that multiple options can be selected.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-select-multiple
         */
        multiple?: AttrBoolean;

        /**
         * The name attribute of the select element, which is used as a key
         * when submitting the form data. Also the named used in the form.elements.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
         * @see HTMLFormElement.elements
         */
        name?: AttrString;

        /**
         * Indicates whether a selection is required or not for the select.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-select-required
         */
        required?: AttrBoolean;

        /**
         * Specifies how many options are visible at once.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-select-size
         */
        size?: AttrStringOrNumber;

        // NON STANDARD

        /**
         * When the `value` is a string, nested `<option>` tags with a matching `value` attribute become `selected`.
         * When the `value` is an array of strings, nested `<option>` tags with a `value` contained within the array are `selected.
         */
        value?: AttrMissing | string | string[];

        /**
         * Called whenever a the `value` property of the `select` has changed.
         * When `valueChange` is a function, `value` becomes controlled. This means
         * This means the `value` property is synchronized instead of the `value` attribute.
         */
        valueChange?:
          | AttrMissing
          | ((
              /** Note this is hack that allows you to work with the value as both a string and a string[] without needing generics */
              value: string & string[],
            ) => void);
      }

      interface Slot extends HTMLAttributes<HTMLSlotElement> {
        /**
         * Used to assign slots to other elements
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-slot-name
         */
        name?: AttrString;
      }

      interface Small extends HTMLAttributes<HTMLElement> {}
      interface Source extends HTMLAttributes<HTMLSourceElement> {
        /**
         * Specifies the MIME type of the resource provided by the <source> element.
         * Helps the browser decide if it can play the resource or not.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-type
         */
        type?: AttrString;

        /**
         * Specifies the URL of the media resource for the <source> element.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-src
         */
        src?: AttrString;

        /**
         * Specifies a list of image sources for the <source> element when used inside a <picture> element.
         * Provides a way to offer multiple image formats or resolutions.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-srcset
         */
        srcset?: AttrString;

        /**
         * Specifies the sizes of the images provided in the srcset attribute for the <source> element.
         * Helps the browser choose the most suitable image based on the device's dimensions.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-sizes
         */
        sizes?: AttrString;

        /**
         * Specifies the media conditions for the <source> element.
         * Helps the browser choose the most suitable source based on the device's capabilities and preferences.
         * @see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-source-media
         */
        media?: AttrString;

        /**
         * Specifies the height of the <source> element's media resource.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-height
         */
        height?: AttrStringOrNumber;

        /**
         * Specifies the width of the <source> element's media resource.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
         */
        width?: AttrStringOrNumber;
      }

      interface Span extends HTMLAttributes<HTMLSpanElement> {}
      interface Strong extends HTMLAttributes<HTMLElement> {}
      interface Style extends HTMLAttributes<HTMLStyleElement> {
        /**
         * Determines whether the <style> element blocks rendering.
         * Since <style> already blocks rendering, this attribute is currently useless until
         * a non-blocking option for this attribute is added.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-style-blocking
         */
        blocking?: AttrMissing | "render";

        /**
         * Specifies the intended media for which the styles in the <style> element should be applied.
         * For example, "print" for print media or "screen" for screen display.
         * @see https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media
         */
        media?: AttrString;
        /** @deprecated */
        scoped?: AttrBoolean;
        /** @deprecated */
        type?: AttrMissing | "text/css";
      }
      interface Sub extends HTMLAttributes<HTMLElement> {}
      interface Summary extends HTMLAttributes<HTMLElement> {}
      interface Sup extends HTMLAttributes<HTMLElement> {}
      interface Table extends HTMLAttributes<HTMLTableElement> {
        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        border?: AttrStringOrNumber;
        /** @deprecated */
        cellpadding?: AttrStringOrNumber;
        /** @deprecated */
        cellspacing?: AttrStringOrNumber;
        /** @deprecated */
        frame?: AttrString;
        /** @deprecated */
        rules?: AttrString;
        /** @deprecated */
        summary?: AttrString;
        /** @deprecated */
        width?: AttrStringOrNumber;
      }
      interface TBody extends HTMLAttributes<HTMLTableSectionElement> {
        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        char?: AttrString;
        /** @deprecated */
        charoff?: AttrStringOrNumber;
        /** @deprecated */
        valign?: AttrString;
      }
      interface TD extends HTMLAttributes<HTMLTableCellElement> {
        /**
         * Specifies how many columns the <td> element should span in the table.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-colspan
         */
        colspan?: AttrStringOrNumber;

        /**
         * Specifies a list of header cell IDs that are related to the content of the <td> element.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-headers
         */
        headers?: AttrString;

        /**
         * Specifies how many rows the <td> element should span in the table.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-rowspan
         */
        rowspan?: AttrStringOrNumber;

        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        axis?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        char?: AttrString;
        /** @deprecated */
        charoff?: AttrStringOrNumber;
        /** @deprecated */
        height?: AttrStringOrNumber;
        /** @deprecated */
        scope?: AttrString;
        /** @deprecated */
        valign?: AttrString;
        /** @deprecated */
        width?: AttrStringOrNumber;
      }
      interface Template extends HTMLAttributes<HTMLTemplateElement> {
        /**
         * Specifies the shadow root mode for the <template> element when creating a shadow root.
         * "open" allows access to the shadow root, while "closed" restricts access.
         * @see https://developer.chrome.com/articles/declarative-shadow-dom
         * @see https://github.com/mfreed7/declarative-shadow-dom
         */
        shadowrootmode?: AttrMissing | "open" | "closed";
      }
      interface TextArea extends HTMLAttributes<HTMLTextAreaElement> {
        /**
         * Represents the autocomplete attribute of the <textarea> element.
         * Helps browsers autofill the user's input based on previous entries.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete
         */
        autocomplete?: AttrAutoComplete;

        /**
         * (Safari only). Controls the autocorrect behavior of the <textarea> element.
         */
        autocorrect?: AttrOnOff;

        /**
         * Specifies the visible width of the <textarea> element in terms of character width.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-cols
         */
        cols?: AttrStringOrNumber;

        /**
         * Represents the dirname attribute of the <textarea> element.
         * Provides a way to submit the text direction (ltr or rtl) along with the form data.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-dirname
         */
        dirname?: AttrString;

        /**
         * Indicates whether the <textarea> element should be disabled or not.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled
         */
        disabled?: AttrBoolean;

        /**
         * Represents the form attribute of the <textarea> element.
         * Associates the <textarea> with a specific <form> element.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form
         */
        form?: AttrString;

        /**
         * Specifies the maximum number of characters that can be entered into the <textarea> element.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-maxlength
         */
        maxlength?: AttrStringOrNumber;

        /**
         * Specifies the minimum number of characters required for the <textarea> element.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-minlength
         */
        minlength?: AttrStringOrNumber;

        /**
         * Represents the name attribute of the <textarea> element.
         * Used as a key when submitting the form data.
         * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name
         */
        name?: AttrString;

        /**
         * Specifies a short hint that describes the expected value of the <textarea> element.
         * Displayed when the element is empty and not focused.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-placeholder
         */
        placeholder?: AttrString;

        /**
         * Indicates whether the <textarea> element should be read-only or not.
         * Users can't modify the content, but the text is selectable and can be copied.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-readonly
         */
        readonly?: AttrBoolean;

        /**
         * Indicates whether a value is required or not for the <textarea> element.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-required
         */
        required?: AttrBoolean;

        /**
         * Specifies the visible height of the <textarea> element in terms of text lines.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-rows
         */
        rows?: AttrStringOrNumber;

        /**
         * Controls the line wrapping behavior of the <textarea> element.
         * "hard" inserts line breaks in the submitted value, "soft" doesn't, and "off" disables wrapping.
         * @see https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-wrap
         */
        wrap?: AttrMissing | "hard" | "soft" | "off";

        // NON STANDARD

        /**
         * Represents the current value of the `textarea` element.
         */
        value?: AttrMissing | string;

        /**
         * Called whenever a the `value` property of the `textarea` has changed.
         * When `valueChange` is a function, `value` becomes controlled. This means
         * This means the `value` property is synchronized instead of the `value` attribute.
         */
        valueChange?: AttrMissing | ((value: string) => void);
      }

      interface TFoot extends HTMLAttributes<HTMLTableSectionElement> {
        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        char?: AttrString;
        /** @deprecated */
        charoff?: AttrStringOrNumber;
        /** @deprecated */
        valign?: AttrString;
      }
      interface TH extends HTMLAttributes<HTMLTableCellElement> {
        /**
         * Represents the abbreviation for the content of the <th> element.
         * Provides a short description or label for the cell, which can be used by screen readers.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-th-abbr
         */
        abbr?: AttrString;

        /**
         * Specifies how many columns the <th> element should span in the table.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-colspan
         */
        colspan?: AttrStringOrNumber;

        /**
         * Specifies a list of header cell IDs that are related to the content of the <th> element.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-headers
         */
        headers?: AttrString;

        /**
         * Specifies how many rows the <th> element should span in the table.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-tdth-rowspan
         */
        rowspan?: AttrStringOrNumber;

        /**
         * Specifies the scope of the <th> element, defining its association with either row or column headers.
         * @see https://html.spec.whatwg.org/multipage/tables.html#attr-th-scope
         */
        scope?: AttrMissing | "col" | "row" | "rowgroup" | "colgroup";

        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        axis?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        char?: AttrString;
        /** @deprecated */
        charoff?: AttrStringOrNumber;
        /** @deprecated */
        height?: AttrStringOrNumber;
        /** @deprecated */
        valign?: AttrString;
        /** @deprecated */
        width?: AttrStringOrNumber;
      }
      interface THead extends HTMLAttributes<HTMLTableSectionElement> {
        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        char?: AttrString;
        /** @deprecated */
        charoff?: AttrStringOrNumber;
        /** @deprecated */
        valign?: AttrString;
      }
      interface Time extends HTMLAttributes<HTMLTimeElement> {
        /**
         * Represents the machine-readable datetime attribute of the <time> element.
         * Provides a standardized way to represent dates and times in HTML content.
         * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#attr-time-datetime
         */
        datetime?: AttrString;
      }
      interface Title extends HTMLAttributes<HTMLTitleElement> {}
      interface TR extends HTMLAttributes<HTMLTableRowElement> {
        /** @deprecated */
        align?: AttrString;
        /** @deprecated */
        bgcolor?: AttrString;
        /** @deprecated */
        char?: AttrString;
        /** @deprecated */
        charoff?: AttrStringOrNumber;
        /** @deprecated */
        valign?: AttrString;
      }
      interface Track extends HTMLAttributes<HTMLTrackElement> {
        default?: AttrBoolean;
        kind?:
          | AttrMissing
          | "subtitles"
          | "captions"
          | "descriptions"
          | "chapters"
          | "metadata";
        label?: AttrString;
        src?: AttrString;
        srclang?: AttrString;
      }
      interface U extends HTMLAttributes<HTMLElement> {}
      interface UL extends HTMLAttributes<HTMLUListElement> {
        /** @deprecated */
        compact?: AttrBoolean;
        /** @deprecated */
        type?: AttrMissing | "disc" | "square" | "circle";
      }
      interface Var extends HTMLAttributes<HTMLElement> {}
      interface Video extends HTMLAttributes<HTMLVideoElement> {
        /**
         * Indicates if the video can automatically enter Picture-in-Picture mode when not visible.
         * @see https://w3c.github.io/picture-in-picture/#auto-pip
         */
        autopictureinpicture?: AttrBoolean;

        /**
         * Specifies whether the video should start playing automatically when the page loads.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay
         */
        autoplay?: AttrBoolean;

        /**
         * Indicates whether the browser should provide default video controls.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-controls
         */
        controls?: AttrBoolean;

        /**
         * Specifies the controls to be shown or hidden on the audio player.
         * @see https://wicg.github.io/controls-list/explainer.html
         */
        controlslist?:
          | AttrMissing
          | "nodownload"
          | "nofullscreen"
          | "noplaybackrate"
          | "noremoteplayback"
          | (string & {});

        /**
         * Specifies the CORS settings for the video resource.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-crossorigin
         */
        crossorigin?: AttrCrossOrigin;

        /**
         * Disables the Picture-in-Picture mode for the video.
         * @see https://wicg.github.io/picture-in-picture/#disablepictureinpicture-attribute
         */
        disablepictureinpicture?: AttrBoolean;

        /**
         * Disables the Remote Playback API for the video.
         * @see https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute
         */
        disableremoteplayback?: AttrBoolean;

        /**
         * Specifies the height of the video's display area.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-video-height
         */
        height?: AttrStringOrNumber;

        /**
         * Indicates whether the video should start over again when it ends.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-loop
         */
        loop?: AttrBoolean;

        /**
         * Indicates whether the video should be muted by default.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-muted
         */
        muted?: AttrBoolean;

        /**
         * Specifies that the video should be played inline on iOS devices, rather than automatically entering fullscreen mode when playback begins.
         * @see https://webkit.org/blog/6784/new-video-policies-for-ios/
         */
        playsinline?: AttrBoolean;

        /**
         * Specifies the URL of an image to be shown while the video is downloading or until the user plays the video.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-video-poster
         */
        poster?: AttrString;

        /**
         * Specifies how much of the video should be preloaded when the page loads.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-preload
         */
        preload?: AttrBoolean | "none" | "metadata" | "auto";
        /**
         * Specifies the URL of the video file to be embedded.
         * @see https://html.spec.whatwg.org/multipage/media.html#attr-media-src
         */
        src?: AttrString;
        /**
         * Specifies the width of the video's display area.
         * @see https://html.spec.whatwg.org/multipage/embedded-content-other.html#attr-dim-width
         */
        width?: AttrStringOrNumber;
      }

      interface WBr extends HTMLAttributes<HTMLElement> {}
    }

    /**
     * Elements pulled from https://www.w3.org/TR/SVG2/eltindex.html and a few other spec sources
     */
    namespace SVG {
      /**
       * @see https://www.w3.org/TR/SVG2/linking.html#AElement
       */
      interface A
        extends SVGAttributes<SVGAElement>, SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementHrefAttribute
         */
        href?: AttrString;

        /**
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementTargetAttribute
         */
        target?: AttrTarget;

        /**
         * any value (if non-empty, value represents a suggested file name)
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementDownloadAttribute
         */
        download?: AttrString;

        /**
         * space-separated valid non-empty URL tokens
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementPingAttribute
         */
        ping?: HTML.A["ping"];

        /**
         * space-separated keyword tokens
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementRelAttribute
         */
        rel?: HTML.A["rel"];

        /**
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementHreflangAttribute
         */
        hreflang?: HTML.A["hreflang"];

        /**
         * A MIME type string
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementTypeAttribute
         */
        type?: HTML.A["type"];

        /**
         * @see https://www.w3.org/TR/SVG2/linking.html#AElementReferrerpolicyAttribute
         */
        referrerPolicy?: AttrReferrerPolicy;
      }

      /**
       * @see https://svgwg.org/specs/animations/#AnimateElement
       */
      interface Animate
        extends
          Omit<SVGAttributes<SVGAnimateElement>, "fill">,
          SVGAnimationAdditionAttributes,
          SVGAnimationTargetElementAttributes,
          SVGAnimationAttributeTargetAttributes,
          SVGAnimationTimingAttributes,
          SVGAnimationValueAttributes {}

      /**
       * @see https://svgwg.org/specs/animations/#AnimateMotionElement
       */
      interface AnimateMotion
        extends
          Omit<SVGAttributes<SVGAnimateMotionElement>, "fill">,
          SVGAnimationAdditionAttributes,
          SVGAnimationTargetElementAttributes,
          SVGAnimationTimingAttributes,
          SVGAnimationValueAttributes {
        /**
         * @see https://svgwg.org/specs/animations/#AnimateMotionElementPathAttribute
         */
        path?: AttrString;

        /**
         * A semicolon-separated list of floating point values between 0 and 1
         * @see https://svgwg.org/specs/animations/#KeyPointsAttribute
         */
        keyPoints?: AttrString;

        /**
         * @see https://svgwg.org/specs/animations/#RotateAttribute
         */
        rotate?: AttrMissing | number | "auto" | "auto-reverse" | (string & {});

        /**
         * @see https://svgwg.org/specs/animations/#OriginAttribute
         */
        origin?: AttrMissing | "default";
      }

      /**
       * @see https://svgwg.org/specs/animations/#AnimateTransformElement
       */
      interface AnimateTransform
        extends
          Omit<SVGAttributes<SVGAnimateTransformElement>, "fill">,
          SVGAnimationAdditionAttributes,
          SVGAnimationTargetElementAttributes,
          SVGAnimationAttributeTargetAttributes,
          SVGAnimationTimingAttributes,
          SVGAnimationValueAttributes {
        /**
         * @see https://svgwg.org/specs/animations/#AnimateTransformElementTypeAttribute
         */
        type?:
          | AttrMissing
          | "translate"
          | "scale"
          | "rotate"
          | "skewX"
          | "skewY";
      }

      /**
       * @see https://www.w3.org/TR/SVG2/shapes.html#CircleElement
       */
      interface Circle
        extends
          SVGAttributes<SVGCircleElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#CxProperty
         */
        cx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#CyProperty
         */
        cy?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#RProperty
         */
        r?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/css-masking-1/#elementdef-clippath
       */
      interface ClipPath
        extends
          SVGAttributes<SVGClipPathElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#ExternalResourcesRequiredAttribute
         */
        externalResourcesRequired?: AttrBooleanString;

        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-clippath-clippathunits
         */
        clipPathUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#DefsElement
       */
      interface Defs extends SVGAttributes<SVGDefsElement> {}

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#DescElement
       */
      interface Desc extends SVGAttributes<SVGDescElement> {}

      /**
       * @see https://svgwg.org/specs/animations/#DiscardElement
       */
      interface Discard
        extends SVGAttributes<SVGElement>, SVGConditionalProcessingAttributes {
        /**
         * @see https://svgwg.org/specs/animations/#DiscardElementBeginAttribute
         */
        begin?: AttrString;

        /**
         * @see https://svgwg.org/specs/animations/#DiscardElementHrefAttribute
         */
        href?: AttrString;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/shapes.html#EllipseElement
       */
      interface Ellipse
        extends
          SVGAttributes<SVGEllipseElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#CxProperty
         */
        cx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#CyProperty
         */
        cy?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#RxProperty
         */
        rx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#RyProperty
         */
        ry?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-feblend
       */
      interface FEBlend
        extends SVGAttributes<SVGFEBlendElement>, SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in2?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feblend-mode
         */
        mode?:
          | AttrMissing
          | "normal"
          | "darken"
          | "multiply"
          | "color-burn"
          | "lighten"
          | "screen"
          | "color-dodge"
          | "overlay"
          | "soft-light"
          | "hard-light"
          | "difference"
          | "exclusion"
          | "hue"
          | "saturation"
          | "color"
          | "luminosity";
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fecolormatrix
       */
      interface FEColorMatrix
        extends
          SVGAttributes<SVGFEColorMatrixElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecolormatrix-type
         */
        type?:
          | AttrMissing
          | "matrix"
          | "saturate"
          | "hueRotate"
          | "luminanceToAlpha";

        /**
         * A list of numbers
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecolormatrix-values
         */
        values?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fecomponenttransfer
       */
      interface FEComponentTransfer
        extends
          SVGAttributes<SVGFEComponentTransferElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fecomposite
       */
      interface FEComposite
        extends
          SVGAttributes<SVGFECompositeElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in2?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomposite-operator
         */
        operator?:
          | AttrMissing
          | "over"
          | "in"
          | "out"
          | "atop"
          | "xor"
          | "lighter"
          | "arithmetic";

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomposite-k1
         */
        k1?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomposite-k2
         */
        k2?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomposite-k3
         */
        k3?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomposite-k4
         */
        k4?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-feconvolvematrix
       */
      interface FEConvolveMatrix
        extends
          SVGAttributes<SVGFEConvolveMatrixElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-order
         */
        order?: AttrStringOrNumber;

        /**
         * List of numbers
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-kernelmatrix
         */
        kernelMatrix?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-divisor
         */
        divisor?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-bias
         */
        bias?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-targetx
         */
        targetX?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-targety
         */
        targetY?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-edgemode
         */
        edgeMode?: AttrMissing | "duplicate" | "wrap" | "none";

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-kernelunitlength
         */
        kernelUnitLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feconvolvematrix-preservealpha
         */
        preserveAlpha?: AttrBooleanString;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fediffuselighting
       */
      interface FEDiffuseLighting
        extends
          SVGAttributes<SVGFEDiffuseLightingElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fediffuselighting-surfacescale
         */
        surfaceScale?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fediffuselighting-diffuseconstant
         */
        diffuseConstant?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fediffuselighting-kernelunitlength
         */
        kernelUnitLength?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fedisplacementmap
       */
      interface FEDisplacementMap
        extends
          SVGAttributes<SVGFEDisplacementMapElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in2?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedisplacementmap-scale
         */
        scale?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedisplacementmap-xchannelselector
         */
        xChannelSelector?: "R" | "G" | "B" | "A";

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedisplacementmap-ychannelselector
         */
        yChannelSelector?: "R" | "G" | "B" | "A";
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fedistantlight
       */
      interface FEDistantLight
        extends
          SVGAttributes<SVGFEDistantLightElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedistantlight-azimuth
         */
        azimuth?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedistantlight-elevation
         */
        elevation?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fedropshadow
       */
      interface FEDropShadow
        extends
          SVGAttributes<SVGFEDropShadowElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedropshadow-stddeviation
         */
        stdDeviation?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedropshadow-dx
         */
        dx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fedropshadow-dy
         */
        dy?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-feflood
       */
      interface FEFlood
        extends
          SVGAttributes<SVGFEFloodElement>,
          SVGFilterPrimitiveAttributes {}

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fefunca
       */
      interface FEFuncA
        extends
          SVGAttributes<SVGFEFuncAElement>,
          SVGTransferFunctionElementAttributes {}

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fefuncb
       */
      interface FEFuncB
        extends
          SVGAttributes<SVGFEFuncBElement>,
          SVGTransferFunctionElementAttributes {}

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fefuncg
       */
      interface FEFuncG
        extends
          SVGAttributes<SVGFEFuncGElement>,
          SVGTransferFunctionElementAttributes {}

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fefuncr
       */
      interface FEFuncR
        extends
          SVGAttributes<SVGFEFuncRElement>,
          SVGTransferFunctionElementAttributes {}

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fegaussianblur
       */
      interface FEGaussianBlur
        extends
          SVGAttributes<SVGFEGaussianBlurElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fegaussianblur-stddeviation
         */
        stdDeviation?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fegaussianblur-edgemode
         */
        edgeMode?: AttrMissing | "duplicate" | "wrap" | "none";
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-feimage
       */
      interface FEImage
        extends SVGAttributes<SVGFEImageElement>, SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#ExternalResourcesRequiredAttribute
         */
        externalResourcesRequired?: AttrBooleanString;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feimage-preserveaspectratio
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feimage-crossorigin
         */
        crossorigin?: AttrMissing | "anonymous" | "use-credentials";
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-femerge
       */
      interface FEMerge
        extends
          SVGAttributes<SVGFEMergeElement>,
          SVGFilterPrimitiveAttributes {}

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-femergenode
       */
      interface FEMergeNode extends SVGAttributes<SVGFEMergeNodeElement> {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-femorphology
       */
      interface FEMorphology extends SVGAttributes<SVGFEMorphologyElement> {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-feoffset
       */
      interface FEOffset
        extends
          SVGAttributes<SVGFEOffsetElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-femorphology-operator
         */
        operator?: AttrMissing | "erode" | "dilate";

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-femorphology-radius
         */
        radius?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fepointlight
       */
      interface FEPointLight extends SVGAttributes<SVGFEPointLightElement> {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fepointlight-x
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fepointlight-y
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fepointlight-z
         */
        z?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fespecularlighting
       */
      interface FESpecularLighting
        extends
          SVGAttributes<SVGFESpecularLightingElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespecularlighting-surfacescale
         */
        surfaceScale?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespecularlighting-specularconstant
         */
        specularConstant?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespecularlighting-specularexponent
         */
        specularExponent?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespecularlighting-kernelunitlength
         */
        kernelUnitLength?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fespotlight
       */
      interface FESpotLight extends SVGAttributes<SVGFESpotLightElement> {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-x
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-y
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-z
         */
        z?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-pointsatx
         */
        pointsAtX?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-pointsaty
         */
        pointsAtY?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-pointsatz
         */
        pointsAtZ?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-specularexponent
         */
        specularExponent?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fespotlight-limitingconeangle
         */
        limitingConeAngle?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-fetile
       */
      interface FETile
        extends SVGAttributes<SVGFETileElement>, SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-in
         */
        in?: AttrFEIn;
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-feturbulence
       */
      interface FETurbulence
        extends
          SVGAttributes<SVGFETurbulenceElement>,
          SVGFilterPrimitiveAttributes {
        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feturbulence-basefrequency
         */
        baseFrequency?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feturbulence-numoctaves
         */
        numOctaves?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feturbulence-seed
         */
        seed?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feturbulence-stitchtiles
         */
        stichTiles?: AttrMissing | "stitch" | "noStitch";

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-feturbulence-type
         */
        type?: AttrMissing | "fractalNoise" | "turbulence";
      }

      /**
       * @see https://www.w3.org/TR/filter-effects-1/#elementdef-filter
       */
      interface Filter extends SVGAttributes<SVGFilterElement> {
        /**
         * @see https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#ExternalResourcesRequiredAttribute
         */
        externalResourcesRequired?: AttrBooleanString;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-x
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-y
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-width
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-height
         */
        height?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-filterunits
         */
        filterUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";

        /**
         * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitiveunits
         */
        primitiveUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";
      }

      /**
       * @see https://www.w3.org/TR/SVG2/embedded.html#ForeignObjectElement
       */
      interface ForeignObject
        extends
          SVGAttributes<SVGForeignObjectElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#XProperty
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#YProperty
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        height?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#GElement
       */
      interface G
        extends
          SVGAttributes<SVGGElement>,
          SVGConditionalProcessingAttributes {}

      /**
       * @see https://www.w3.org/TR/SVG2/embedded.html#ImageElement
       */
      interface Image
        extends
          SVGAttributes<SVGImageElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#PreserveAspectRatioAttribute
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/SVG2/embedded.html#ImageElementHrefAttribute
         */
        href?: AttrString;

        /**
         * @see https://www.w3.org/TR/SVG2/embedded.html#ImageElementCrossoriginAttribute
         */
        crossorigin?: AttrMissing | "anonymous" | "use-credentials";

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#XProperty
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#YProperty
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        height?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/shapes.html#LineElement
       */
      interface Line
        extends
          SVGAttributes<SVGLineElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/shapes.html#LineElementX1Attribute
         */
        x1?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/shapes.html#LineElementY1Attribute
         */
        y1?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/shapes.html#LineElementX2Attribute
         */
        x2?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/shapes.html#LineElementY2Attribute
         */
        y2?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElement
       */
      interface LinearGradient extends SVGAttributes<SVGLinearGradientElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementX1Attribute
         */
        x1?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementY1Attribute
         */
        y1?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementX2Attribute
         */
        x2?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementY2Attribute
         */
        y2?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementGradientUnitsAttribute
         */
        gradientUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementGradientTransformAttribute
         */
        gradientTransform?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementSpreadMethodAttribute
         */
        spreadMethod?: AttrMissing | "pad" | "reflect" | "repeat";

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#LinearGradientElementHrefAttribute
         */
        href?: AttrString;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/painting.html#MarkerElement
       */
      interface Marker extends SVGAttributes<SVGMarkerElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#ViewBoxAttribute
         */
        viewBox?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#PreserveAspectRatioAttribute
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/SVG2/painting.html#MarkerElementRefXAttribute
         */
        refX?: AttrMissing | "left" | "center" | "right" | (string & {});

        /**
         * @see https://www.w3.org/TR/SVG2/painting.html#MarkerElementRefYAttribute
         */
        refY?: AttrMissing | "left" | "center" | "right" | (string & {});

        /**
         * @see https://www.w3.org/TR/SVG2/painting.html#MarkerUnitsAttribute
         */
        markerUnits?: AttrMissing | "strokeWidth" | "userSpaceOnUse";

        /**
         * @see https://www.w3.org/TR/SVG2/painting.html#MarkerWidthAttribute
         */
        markerWidth?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/painting.html#MarkerHeightAttribute
         */
        markerHeight?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/painting.html#OrientAttribute
         */
        orient?:
          | AttrMissing
          | "auto"
          | "auto-start-reverse"
          | number
          | (string & {});
      }

      /**
       * @see https://www.w3.org/TR/css-masking-1/#elementdef-mask
       */
      interface Mask
        extends
          SVGAttributes<SVGMaskElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-mask-x
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-mask-y
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-mask-width
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-mask-height
         */
        height?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-mask-maskunits
         */
        maskUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";

        /**
         * @see https://www.w3.org/TR/css-masking-1/#element-attrdef-mask-maskcontentunits
         */
        maskContentUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#MetadataElement
       */
      interface Metadata extends SVGAttributes<SVGMetadataElement> {}

      /**
       * @see https://svgwg.org/specs/animations/#MPathElement
       */
      interface MPath
        extends
          SVGAttributes<SVGMPathElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://svgwg.org/specs/animations/#MPathElementHrefAttribute
         */
        href?: AttrString;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/paths.html#PathElement
       */
      interface Path
        extends
          SVGAttributes<SVGPathElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#DProperty
         */
        d?: AttrString;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElement
       */
      interface Pattern extends SVGAttributes<SVGPatternElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#ViewBoxAttribute
         */
        viewBox?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#PreserveAspectRatioAttribute
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementXAttribute
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementYAttribute
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementWidthAttribute
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementHeightAttribute
         */
        height?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementPatternUnitsAttribute
         */
        patternUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementPatternContentUnitsAttribute
         */
        patternContentUnits?:
          | AttrMissing
          | "userSpaceOnUse"
          | "objectBoundingBox";

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementPatternTransformAttribute
         */
        patternTransform?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#PatternElementHrefAttribute
         */
        href?: AttrString;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/shapes.html#PolygonElement
       */
      interface Polygon
        extends
          SVGAttributes<SVGPolygonElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/shapes.html#PolygonElementPointsAttribute
         */
        points?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/shapes.html#PolylineElement
       */
      interface Polyline
        extends
          SVGAttributes<SVGPolylineElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/shapes.html#PolygonElementPointsAttribute
         */
        points?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElement
       */
      interface RadialGradient extends SVGAttributes<SVGRadialGradientElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementCXAttribute
         */
        cx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementCYAttribute
         */
        cy?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementRAttribute
         */
        r?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementFXAttribute
         */
        fx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementFYAttribute
         */
        fy?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementFRAttribute
         */
        fr?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementGradientUnitsAttribute
         */
        gradientUnits?: AttrMissing | "userSpaceOnUse" | "objectBoundingBox";

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementGradientTransformAttribute
         */
        gradientTransform?: AttrString;

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementSpreadMethodAttribute
         */
        spreadMethod?: AttrMissing | "pad" | "reflect" | "repeat";

        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#RadialGradientElementHrefAttribute
         */
        href?: AttrString;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/shapes.html#RectElement
       */
      interface Rect
        extends
          SVGAttributes<SVGRectElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/paths.html#PathLengthAttribute
         */
        pathLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#XProperty
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#YProperty
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        height?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#RxProperty
         */
        rx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#RyProperty
         */
        ry?: AttrStringOrNumber;
      }

      /**
       * @see https://svgwg.org/specs/animations/#SetElement
       */
      interface Set
        extends
          Omit<SVGAttributes<SVGSetElement>, "fill">,
          SVGAnimationTargetElementAttributes,
          SVGAnimationAttributeTargetAttributes,
          SVGAnimationTimingAttributes,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://svgwg.org/specs/animations/#SetElementToAttribute
         */
        to?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/pservers.html#StopElement
       */
      interface Stop extends SVGAttributes<SVGStopElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/pservers.html#StopElementOffsetAttribute
         */
        offset?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#SVGElement
       */
      interface SVG
        extends
          SVGAttributes<SVGSVGElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/xml-names/#ns-decl
         */
        xmlns?: AttrString;

        /**
         * A list of four numbers `<min-x>`, `<min-y>`, `<width>` and `<height>`, separated by whitespace and/or a comma
         * @see https://www.w3.org/TR/SVG2/coords.html#ViewBoxAttribute
         */
        viewBox?: AttrString;

        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#PreserveAspectRatioAttribute
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/SVG2/interact.html#ZoomAndPanAttribute
         */
        zoomAndPan?: AttrMissing | "disable" | "magnify";

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#XProperty
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#YProperty
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        height?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#SwitchElement
       */
      interface Switch
        extends
          SVGAttributes<SVGSwitchElement>,
          SVGConditionalProcessingAttributes {}

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#SymbolElement
       */
      interface Symbol extends SVGAttributes<SVGSymbolElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#PreserveAspectRatioAttribute
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#ViewBoxAttribute
         */
        viewBox?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/struct.html#SymbolElementRefXAttribute
         */
        refX?:
          | AttrMissing
          | "left"
          | "center"
          | "right"
          | number
          | (string & {});

        /**
         * @see https://www.w3.org/TR/SVG2/struct.html#SymbolElementRefYAttribute
         */
        refY?:
          | AttrMissing
          | "top"
          | "center"
          | "bottom"
          | number
          | (string & {});

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#XProperty
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#YProperty
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        height?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/text.html#TextElement
       */
      interface Text
        extends
          SVGAttributes<SVGTextElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementLengthAdjustAttribute
         */
        lengthAdjust?: AttrMissing | "spacing" | "spacingAndGlyphs";

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementXAttribute
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementYAttribute
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementDXAttribute
         */
        dx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementDYAttribute
         */
        dy?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementRotateAttribute
         */
        rotate?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementTextLengthAttribute
         */
        textLength?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/text.html#TextPathElement
       */
      interface TextPath
        extends
          SVGAttributes<SVGTextPathElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementLengthAdjustAttribute
         */
        lengthAdjust?: AttrMissing | "spacing" | "spacingAndGlyphs";

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementTextLengthAttribute
         */
        textLength?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextPathElementPathAttribute
         */
        path?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextPathElementHrefAttribute
         */
        href?: AttrString;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextPathElementStartOffsetAttribute
         */
        startOffset?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextPathElementMethodAttribute
         */
        method?: AttrMissing | "align" | "stretch";

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextPathElementSpacingAttribute
         */
        spacing?: AttrMissing | "auto" | "exact";

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextPathElementSideAttribute
         */
        side?: AttrMissing | "left" | "right";
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#TitleElement
       */
      interface Title extends SVGAttributes<SVGTitleElement> {}

      /**
       * @see https://www.w3.org/TR/SVG2/text.html#TextElement
       */
      interface TSpan
        extends
          SVGAttributes<SVGTSpanElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementLengthAdjustAttribute
         */
        lengthAdjust?: AttrMissing | "spacing" | "spacingAndGlyphs";

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementXAttribute
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementYAttribute
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementDXAttribute
         */
        dx?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementDYAttribute
         */
        dy?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementRotateAttribute
         */
        rotate?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/text.html#TextElementTextLengthAttribute
         */
        textLength?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#UseElement
       */
      interface Use
        extends
          SVGAttributes<SVGUseElement>,
          SVGConditionalProcessingAttributes {
        /**
         * @see https://www.w3.org/TR/SVG2/struct.html#UseElementHrefAttribute
         */
        href?: AttrString;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#XProperty
         */
        x?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#YProperty
         */
        y?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        width?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/geometry.html#Sizing
         */
        height?: AttrStringOrNumber;
      }

      /**
       * @see https://www.w3.org/TR/SVG2/linking.html#ViewElement
       */
      interface View extends SVGAttributes<SVGViewElement> {
        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#ViewBoxAttribute
         */
        viewBox?: AttrStringOrNumber;

        /**
         * @see https://www.w3.org/TR/SVG2/coords.html#PreserveAspectRatioAttribute
         */
        preserveAspectRatio?: AttrPreserveAspectRatio;

        /**
         * @see https://www.w3.org/TR/SVG2/interact.html#ZoomAndPanAttribute
         */
        zoomAndPan?: AttrMissing | "disable" | "magnify";
      }
    }

    interface HTMLAttributes<
      T extends Element = Element,
    > extends CommonAttributes<T> {
      /**
       * Specifies a keyboard shortcut to activate or focus on an element.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute
       */
      accesskey?: AttrString;

      /**
       * Controls the capitalization behavior of user input.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize
       */
      autocapitalize?:
        | AttrOnOff
        | "characters"
        | "none"
        | "sentences"
        | "words";

      /**
       * Indicates whether the element should automatically get focus when the page loads.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#the-autofocus-attribute
       */
      autofocus?: AttrBoolean;

      /**
       * Specifies a space-separated list of class names for an element.
       * @see https://markojs.com/docs/syntax/#class-attribute
       * @see https://html.spec.whatwg.org/multipage/dom.html#classes
       */
      class?: AttrClass;

      /**
       * Specifies whether the content of an element is editable or not.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable
       */
      contenteditable?: AttrBooleanString | "plaintext-only";

      /**
       * Specifies the ID of a context menu to show when the element is right-clicked.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-contextmenu
       */
      contextmenu?: AttrString;

      /**
       * Specifies the text direction for the content of an element.
       * @see https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute
       */
      dir?: AttrMissing | "ltr" | "rtl" | "auto";

      /**
       * Specifies whether an element is draggable or not.
       * @see https://html.spec.whatwg.org/multipage/dnd.html#the-draggable-attribute
       */
      draggable?: AttrBooleanString;

      /**
       * A string used to identify the element for performance measurement purposes.
       * @see https://wicg.github.io/element-timing/#sec-elements-exposed
       */
      elementtiming?: AttrString;

      /**
       * Provides a hint to the user agent about the type of action expected from the "Enter" key.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint
       */
      enterkeyhint?:
        | AttrMissing
        | "enter"
        | "done"
        | "go"
        | "next"
        | "previous"
        | "search"
        | "send";

      /**
       * Specifies a list of part names for the element that are available for CSS ::part() selector.
       * @see https://drafts.csswg.org/css-shadow-parts-1/#exportparts-attribute
       */
      exportparts?: AttrString;

      /**
       * Indicates whether the element should be hidden from rendering or not.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute
       */
      hidden?: AttrBoolean | "until-found";

      /**
       * Specifies a unique identifier for the element within the document.
       * @see https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute
       */
      id?: AttrString;

      /**
       * Specifies whether an element should be inert or not, preventing user interaction and making it non-focusable.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#inert-subtrees
       */
      inert?: AttrBoolean;

      /**
       * Provides a hint to the user agent about the type of virtual keyboard to display for text input.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode
       */
      inputmode?:
        | AttrMissing
        | "decimal"
        | "email"
        | "none"
        | "numeric"
        | "search"
        | "tel"
        | "text"
        | "url";

      /**
       * Specifies the name of a custom element to use as a replacement for the standard built-in element.
       * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
       */
      is?: AttrString;

      /**
       * Specifies a globally unique identifier (URI) for the element in the context of microdata.
       * @see https://html.spec.whatwg.org/multipage/microdata.html#attr-itemid
       */
      itemid?: AttrString;

      /**
       * Specifies a list of one or more property names for the element in the context of microdata.
       * @see https://html.spec.whatwg.org/multipage/microdata.html#attr-itemprop
       */
      itemprop?: AttrString;

      /**
       * Specifies a list of IDs of elements that contain additional properties for the item in the context of microdata.
       * @see https://html.spec.whatwg.org/multipage/microdata.html#attr-itemref
       */
      itemref?: AttrString;

      /**
       * Specifies that the element is a microdata item, representing a single entity or concept.
       * @see https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope
       */
      itemscope?: AttrBoolean;

      /**
       * Specifies the type of item represented by the element using a vocabulary URL in the context of microdata.
       * @see https://html.spec.whatwg.org/multipage/microdata.html#attr-itemtype
       */
      itemtype?: AttrString;

      /**
       * Specifies the primary language for the element's contents and for any child elements.
       * @see https://html.spec.whatwg.org/multipage/dom.html#attr-lang
       */
      lang?: AttrString;

      /**
       * Specifies a cryptographic nonce (number used once) for content within a script or style element.
       * @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce
       */
      nonce?: AttrString;

      /**
       * Specifies that the element won't be rendered until it becomes shown, at which point it will be rendered on top of other page content.
       * @see https://html.spec.whatwg.org/multipage/popover.html#attr-popover
       */
      popover?: AttrBoolean | "auto" | "manual";

      /**
       * Specifies a list of part names for the element that can be targeted by the ::part() CSS pseudo-element.
       * @see https://drafts.csswg.org/css-shadow-parts-1/#part-attribute
       */
      part?: AttrString;

      /**
       * Specifies the name of the slot the element should be assigned to when inside a shadow tree.
       * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-slot
       */
      slot?: AttrString;

      /**
       * Specifies whether the element should have its spelling and grammar checked or not.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck
       */
      spellcheck?: AttrBooleanString;

      /**
       * Specifies the inline CSS styles for the element.
       * @see https://markojs.com/docs/syntax/#style-attribute
       * @see https://html.spec.whatwg.org/multipage/dom.html#the-style-attribute
       */
      style?: AttrStyle;

      /**
       * Specifies the order in which elements should be focused when navigating via the keyboard.
       * @see https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex
       */
      tabindex?: AttrStringOrNumber;

      /**
       * Specifies extra information about the element, usually shown as a tooltip.
       * @see https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute
       */
      title?: AttrString;

      /**
       * Specifies whether the element's content should be translated when the page is localized.
       * @see https://html.spec.whatwg.org/multipage/dom.html#the-translate-attribute
       */
      translate?: AttrYesNoString;

      /**
       * Specifies the policy for showing the virtual keyboard when an element receives focus.
       * @see https://w3c.github.io/virtual-keyboard/#dom-elementcontenteditable-virtualkeyboardpolicy
       */
      virtualkeyboardpolicy?: AttrMissing | "auto" | "manual";

      /**
       * Provide body content for the tag as a Marko.Body.
       * @see Marko.Body
       */
      content?:
        | AttrString
        | Marko.Body<[], void>
        | Marko.Template<Record<any, never>, void>;

      /**
       * data-* global attributes form a class of attributes called custom data attributes, that allow proprietary
       * information to be exchanged between the HTML and its DOM representation by scripts.
       * @see https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes
       */
      [data: `data-${string}`]: AttrStringOrNumber | boolean;
    }

    interface SVGAttributes<
      T extends Element = Element,
    > extends CommonAttributes<T> {
      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#IDAttribute
       */
      id?: AttrString;

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#SVGElementTabindexAttribute
       */
      tabindex?: AttrStringOrNumber;

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#LangAttribute
       */
      lang?: string;

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#XMLSpaceAttribute
       * @deprecated New content should use the white-space property instead
       */
      "xml:space"?: AttrMissing | "default" | "preserve";

      /**
       * @see https://www.w3.org/TR/SVG2/styling.html#ClassAttribute
       */
      class?: AttrClass;

      /**
       * @see https://www.w3.org/TR/SVG2/styling.html#StyleAttribute
       */
      style?: AttrStyle;

      /**
       * Provide body content for the tag as a Marko.Body.
       * @see Marko.Body
       */
      content?:
        | AttrString
        | Marko.Body<[], void>
        | Marko.Template<Record<any, never>, void>;

      "alignment-baseline"?: AttrMissing | csstype.Property.AlignmentBaseline;
      "baseline-shift"?: AttrMissing | csstype.Property.BaselineShift | number;
      clip?: AttrMissing | csstype.Property.Clip | number;
      "clip-path"?: AttrMissing | csstype.Property.ClipPath;
      "clip-rule"?: AttrMissing | csstype.Property.ClipRule;
      color?: AttrMissing | csstype.Property.Color;
      "color-interpolation"?: AttrMissing | csstype.Property.ColorInterpolation;
      "color-interpolation-filters"?:
        | AttrMissing
        | csstype.Property.ColorInterpolation;
      "color-rendering"?: AttrMissing | csstype.Property.ColorRendering;
      cursor?: AttrMissing | csstype.Property.Cursor;
      direction?: AttrMissing | csstype.Property.Direction;
      display?: AttrMissing | csstype.Property.Display;
      "dominant-baseline"?:
        | AttrMissing
        | csstype.Property.DominantBaseline
        | number;
      /**
       * @see https://www.w3.org/TR/SVG11/filters.html#EnableBackgroundProperty
       */
      "enable-background"?: AttrMissing | "accumulate" | "new" | (string & {});
      fill?: AttrMissing | "freeze" | "remove" | csstype.Property.Fill;
      "fill-opacity"?: AttrMissing | csstype.Property.FillOpacity | number;
      "fill-rule"?: AttrMissing | csstype.Property.FillRule;
      filter?: AttrMissing | csstype.Property.Filter;
      "flood-color"?: AttrMissing | csstype.Property.FloodColor;
      "flood-opacity"?: AttrMissing | csstype.Property.FloodOpacity | number;
      font?: AttrMissing | csstype.Property.Font;
      "font-family"?: AttrMissing | csstype.Property.FontFamily;
      "font-size"?: AttrMissing | csstype.Property.FontSize | number;
      "font-size-adjust"?:
        | AttrMissing
        | csstype.Property.FontSizeAdjust
        | number;
      "font-stretch"?: AttrMissing | csstype.Property.FontStretch;
      "font-style"?: AttrMissing | csstype.Property.FontStyle;
      "font-variant"?: AttrMissing | csstype.Property.FontVariant;
      "font-weight"?: AttrMissing | csstype.Property.FontWeight | number;
      "glyph-orientation-horizontal"?:
        | AttrMissing
        | csstype.Property.GlyphOrientationVertical;
      "glyph-orientation-vertical"?:
        | AttrMissing
        | csstype.Property.GlyphOrientationVertical;
      "image-rendering"?: AttrMissing | csstype.Property.ImageRendering;
      isolation?: AttrMissing | csstype.Property.Isolation;
      kerning?: AttrMissing | csstype.Property.FontKerning | number;
      "letter-spacing"?: AttrMissing | csstype.Property.LetterSpacing | number;
      "lighting-color"?: AttrMissing | csstype.Property.LightingColor;
      marker?: AttrMissing | csstype.Property.Marker;
      "marker-end"?: AttrMissing | csstype.Property.MarkerEnd;
      "marker-mid"?: AttrMissing | csstype.Property.MarkerMid;
      "marker-start"?: AttrMissing | csstype.Property.MarkerStart;
      mask?: AttrMissing | csstype.Property.Mask;
      opacity?: AttrMissing | csstype.Property.Opacity | number;
      overflow?: AttrMissing | csstype.Property.Overflow;
      "paint-order"?: AttrMissing | csstype.Property.PaintOrder;
      "pointer-events"?: AttrMissing | csstype.Property.PointerEvents;
      "shape-rendering"?: AttrMissing | csstype.Property.ShapeRendering;
      "stop-color"?: AttrMissing | csstype.Property.StopColor;
      "stop-opacity"?: AttrMissing | csstype.Property.StopOpacity | number;
      stroke?: AttrMissing | csstype.Property.Stroke;
      "stroke-dasharray"?:
        | AttrMissing
        | csstype.Property.StrokeDasharray
        | number;
      "stroke-dashoffset"?:
        | AttrMissing
        | csstype.Property.StrokeDashoffset
        | number;
      "stroke-linecap"?: AttrMissing | csstype.Property.StrokeLinecap;
      "stroke-linejoin"?: AttrMissing | csstype.Property.StrokeLinejoin;
      "stroke-miterlimit"?:
        | AttrMissing
        | csstype.Property.StrokeMiterlimit
        | number;
      "stroke-opacity"?: AttrMissing | csstype.Property.StrokeOpacity | number;
      "stroke-width"?: AttrMissing | csstype.Property.StrokeWidth | number;
      "text-anchor"?: AttrMissing | csstype.Property.TextAnchor;
      "text-decoration"?: AttrMissing | csstype.Property.TextDecoration;
      "text-rendering"?: AttrMissing | csstype.Property.TextRendering;
      transform?: AttrMissing | csstype.Property.Transform;
      "unicode-bidi"?: AttrMissing | csstype.Property.UnicodeBidi;
      "vector-effect"?: AttrMissing | csstype.Property.VectorEffect;
      visibility?: AttrMissing | csstype.Property.Visibility;
      "word-spacing"?: AttrMissing | csstype.Property.WordSpacing | number;
      "writing-mode"?: AttrMissing | csstype.Property.WritingMode;

      /**
       * @see https://www.w3.org/TR/SVG2/struct.html#DataAttributes
       */
      [data: `data-${string}`]: AttrStringOrNumber | boolean;
    }
  }
}

interface SVGTransferFunctionElementAttributes {
  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-type
   */
  type?: AttrMissing | "identity" | "table" | "discrete" | "linear" | "gamma";

  /**
   * List of numbers
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-tablevalues
   */
  tableValues?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-slope
   */
  slope?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-intercept
   */
  intercept?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-amplitude
   */
  amplitude?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-exponent
   */
  exponent?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-fecomponenttransfer-offset
   */
  offset?: AttrStringOrNumber;
}

interface SVGAnimationAdditionAttributes {
  /**
   * @see https://svgwg.org/specs/animations/#AdditiveAttribute
   */
  additive?: AttrMissing | "replace" | "sum";

  /**
   * @see https://svgwg.org/specs/animations/#AccumulateAttribute
   */
  accumulate?: AttrMissing | "none" | "sum";
}

interface SVGAnimationTargetElementAttributes {
  /**
   * @see https://svgwg.org/specs/animations/#HrefAttribute
   */
  href?: AttrString;
}

interface SVGAnimationAttributeTargetAttributes {
  /**
   * @see https://svgwg.org/specs/animations/#AttributeNameAttribute
   */
  attributeName?: AttrString;
}

interface SVGAnimationTimingAttributes {
  /**
   * A semicolon separated list of values
   * @see https://svgwg.org/specs/animations/#BeginAttribute
   */
  begin?: AttrString;

  /**
   * @see https://svgwg.org/specs/animations/#DurAttribute
   */
  dur?: AttrMissing | "media" | "indefinite" | number | (string & {});

  /**
   * A semicolon separated list of values
   * @see https://svgwg.org/specs/animations/#EndAttribute
   */
  end?: AttrString;

  /**
   * @see https://svgwg.org/specs/animations/#MinAttribute
   */
  min?: AttrMissing | "media" | number | (string & {});

  /**
   * @see https://svgwg.org/specs/animations/#MaxAttribute
   */
  max?: AttrMissing | "media" | number | (string & {});

  /**
   * @see https://svgwg.org/specs/animations/#RestartAttribute
   */
  restart?: AttrMissing | "always" | "whenNotActive" | "never";

  /**
   * @see https://svgwg.org/specs/animations/#RepeatCountAttribute
   */
  repeatCount?: AttrStringOrNumber;

  /**
   * @see https://svgwg.org/specs/animations/#RepeatDurAttribute
   */
  repeatDur?: AttrStringOrNumber;

  /**
   * @see https://svgwg.org/specs/animations/#FillAttribute
   */
  fill?: AttrMissing | "freeze" | "remove";
}

interface SVGAnimationValueAttributes {
  /**
   * @see https://svgwg.org/specs/animations/#CalcModeAttribute
   */
  calcMode?: AttrMissing | "discrete" | "linear" | "paced" | "spline";

  /**
   * A semicolon-separated list of values
   * @see https://svgwg.org/specs/animations/#ValuesAttribute
   */
  values?: AttrString;

  /**
   * A semicolon-separated list of numbers
   * @see https://svgwg.org/specs/animations/#KeyTimesAttribute
   */
  keyTimes?: AttrStringOrNumber;

  /**
   * A semicolon-separated list of Bézier control points
   * @see https://svgwg.org/specs/animations/#KeySplinesAttribute
   */
  keySplines?: AttrString;

  /**
   * @see https://svgwg.org/specs/animations/#FromAttribute
   */
  from?: AttrStringOrNumber;

  /**
   * @see https://svgwg.org/specs/animations/#FromAttribute
   */
  to?: AttrStringOrNumber;

  /**
   * @see https://svgwg.org/specs/animations/#FromAttribute
   */
  by?: AttrStringOrNumber;
}

interface SVGConditionalProcessingAttributes {
  /**
   * Set of space-separated tokens
   * @see https://www.w3.org/TR/SVG2/struct.html#RequiredExtensionsAttribute
   */
  requiredExtensions?: AttrString;

  /**
   * Set of comma-separated tokens
   * @see https://www.w3.org/TR/SVG2/struct.html#SystemLanguageAttribute
   */
  systemLanguage?: AttrString;
}

interface SVGFilterPrimitiveAttributes {
  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-x
   */
  x?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-y
   */
  y?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-height
   */
  height?: AttrStringOrNumber;

  /**
   * @see https://www.w3.org/TR/filter-effects-1/#element-attrdef-filter-primitive-result
   */
  result?: AttrString;
}

interface CommonAttributes<T extends Element> {
  /**
   * Fired when resource was not fully loaded, but not as the result of an error.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-abort
   */
  onAbort?: AttrEventHandler<Event, T>;
  "on-abort"?: this["onAbort"];
  onabort?: AttrString;

  /**
   * Fired when an Animation unexpectedly aborts.
   * @see https://w3c.github.io/csswg-drafts/css-animations/#eventdef-globaleventhandlers-animationcancel
   */
  onAnimationCancel?: AttrEventHandler<AnimationEvent, T>;
  "on-animationcancel"?: this["onAnimationCancel"];

  /**
   * Fired when an animation has completed.
   * @see https://w3c.github.io/csswg-drafts/css-animations/#eventdef-globaleventhandlers-animationend
   */
  onAnimationEnd?: AttrEventHandler<AnimationEvent, T>;
  "on-animationend"?: this["onAnimationEnd"];

  /**
   * Fired at the end of each iteration of an animation, except when an animationend event would fire at the same time.
   * @see https://w3c.github.io/csswg-drafts/css-animations/#eventdef-globaleventhandlers-animationiteration
   */
  onAnimationIteration?: AttrEventHandler<AnimationEvent, T>;
  "on-animationiteration"?: this["onAnimationIteration"];

  /**
   * Fired when an animation has started.
   * @see https://w3c.github.io/csswg-drafts/css-animations/#eventdef-globaleventhandlers-animationstart
   */
  onAnimationStart?: AttrEventHandler<AnimationEvent, T>;
  "on-animationstart"?: this["onAnimationStart"];

  /**
   * Fired when a non-primary pointing device button (any mouse button other than the primary—usually leftmost—button)
   * has been pressed and released both within the same element.
   * @see https://w3c.github.io/uievents/#event-type-auxclick
   */
  onAuxClick?: AttrEventHandler<PointerEvent, T>;
  "on-auxclick"?: this["onAuxClick"];
  onauxclick?: AttrString;

  /**
   * Fires when the value of an <input>, or <textarea> element is about to be modified.
   * @see https://w3c.github.io/uievents/#event-type-beforeinput
   */
  onBeforeInput?: AttrEventHandler<InputEvent, T>;
  "on-beforeinput"?: this["onBeforeInput"];
  onbeforeinput?: AttrString;

  /**
   * Fired on elements with the hidden=until-found attribute before they are revealed.
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-beforematch
   */
  onBeforeMatch?: AttrEventHandler<Event, T>;
  "on-beforematch"?: this["onBeforeMatch"];
  onbeforematch?: AttrString;

  /**
   * Fired on elements with the popover attribute when they are transitioning between showing and hidden
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-beforetoggle
   */
  onBeforeToggle?: AttrEventHandler<Event, T>;
  "on-beforetoggle"?: this["onBeforeToggle"];
  onbeforetoggle?: AttrString;

  /**
   * Fires when a node loses focus.
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-blur
   */
  onBlur?: AttrEventHandler<Event, T>;
  "on-blur"?: this["onBlur"];
  onblur?: AttrString;

  /**
   * Fired at controls when the user commits a value change (see also the input event)
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-cancel
   */
  onCancel?: AttrEventHandler<Event, T>;
  "on-cancel"?: this["onCancel"];
  oncancel?: AttrString;

  /**
   * Fires when the user agent can resume playback of the media data,
   * but estimates that if playback were to be started now, the media resource could not be rendered at the current
   * playback rate up to its end without having to stop for further buffering of content.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-canplay
   */
  onCanPlay?: AttrEventHandler<Event, T>;
  "on-canplay"?: this["onCanPlay"];
  oncanplay?: AttrString;

  /**
   * Fires when the user agent can play through the media data without having to stop for further buffering of content.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-canplaythrough
   */
  onCanPlayThrough?: AttrEventHandler<Event, T>;
  "on-canplaythrough"?: this["onCanPlayThrough"];
  oncanplaythrough?: AttrString;

  /**
   * Fired when the form elements value is modified.
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-change
   */
  onChange?: AttrEventHandler<Event, T>;
  "on-change"?: this["onChange"];
  onchange?: AttrString;

  /**
   * Normally a mouse event; also synthetically fired at an element before its activation behavior is run,
   * when an element is activated from a non-pointer input device (e.g. a keyboard).
   * @see https://w3c.github.io/uievents/#event-type-click
   */
  onClick?: AttrEventHandler<PointerEvent, T>;
  "on-click"?: this["onClick"];
  onclick?: AttrString;

  /**
   * Fired at dialog elements when they are closed
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-close
   */
  onClose?: AttrEventHandler<Event, T>;
  "on-close"?: this["onClose"];
  onclose?: AttrString;

  /**
   * Fired when a text composition system such as an input method editor completes or cancels the current composition session.
   * @see https://w3c.github.io/uievents/#event-type-compositionend
   */
  onCompositionEnd?: AttrEventHandler<CompositionEvent, T>;
  "on-compositionend"?: this["onCompositionEnd"];

  /**
   * Fired when a text composition system such as an input method editor starts a new composition session.
   * @see https://w3c.github.io/uievents/#event-type-compositionstart
   */
  onCompositionStart?: AttrEventHandler<CompositionEvent, T>;
  "on-compositionstart"?: this["onCompositionStart"];

  /**
   * Fired when a new character is received in the context of a text composition session controlled by a text
   * composition system such as an input method editor.
   * @see https://w3c.github.io/uievents/#event-type-compositionupdate
   */
  onCompositionUpdate?: AttrEventHandler<CompositionEvent, T>;
  "on-compositionupdate"?: this["onCompositionUpdate"];

  /**
   * Fired when the corresponding CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D is lost
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-contextlost
   */
  onContextLost?: AttrEventHandler<Event, T>;
  "on-contextlost"?: this["onContextLost"];
  oncontextlost?: AttrString;

  /**
   * Fired when the user attempts to open a context menu.
   * This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
   * @see https://w3c.github.io/uievents/#event-type-contextmenu
   */
  onContextMenu?: AttrEventHandler<PointerEvent, T>;
  "on-contextmenu"?: this["onContextMenu"];
  oncontextmenu?: AttrString;

  /**
   * Fired when the corresponding CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D is restored after being lost
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-contextrestored
   */
  onContextRestored?: AttrEventHandler<Event, T>;
  "on-contextrestored"?: this["onContextRestored"];
  oncontextrestored?: AttrString;

  /**
   * Fired when the user copies the content of an element.
   * @see https://w3c.github.io/clipboard-apis/#clipboard-event-copy
   */
  onCopy?: AttrEventHandler<ClipboardEvent, T>;
  "on-copy"?: this["onCopy"];
  oncopy?: AttrString;

  /**
   * Fired when one or more cues in the track have become active or stopped being active.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-cuechange
   */
  onCueChange?: AttrEventHandler<Event, T>;
  "on-cuechange"?: this["onCueChange"];
  oncuechange?: AttrString;

  /**
   * Fired when the user cuts the content of an element.
   * @see https://w3c.github.io/clipboard-apis/#clipboard-event-cut
   */
  onCut?: AttrEventHandler<ClipboardEvent, T>;
  "on-cut"?: this["onCut"];
  oncut?: AttrString;

  /**
   * Fired when the user double-clicks on an element.
   * @see https://w3c.github.io/uievents/#event-type-dblclick
   */
  onDblClick?: AttrEventHandler<MouseEvent, T>;
  "on-dblclick"?: this["onDblClick"];
  ondblclick?: AttrString;

  /**
   * Fired every few hundred milliseconds as an element or text selection is being dragged by the user.
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-drag
   */
  onDrag?: AttrEventHandler<DragEvent, T>;
  "on-drag"?: this["onDrag"];
  ondrag?: AttrString;

  /**
   * Fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragend
   */
  onDragEnd?: AttrEventHandler<DragEvent, T>;
  "on-dragend"?: this["onDragEnd"];
  ondragend?: AttrString;

  /**
   * Fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragenter
   */
  onDragEnter?: AttrEventHandler<DragEvent, T>;
  "on-dragenter"?: this["onDragEnter"];
  ondragenter?: AttrString;

  /**
   * Fired when a dragged element or text selection leaves a valid drop target.
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragleave
   */
  onDragLeave?: AttrEventHandler<DragEvent, T>;
  "on-dragleave"?: this["onDragLeave"];
  ondragleave?: AttrString;

  /**
   * Fired an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragover
   */
  onDragOver?: AttrEventHandler<DragEvent, T>;
  "on-dragover"?: this["onDragOver"];
  ondragover?: AttrString;

  /**
   * Fired when an element or text selection has started being dragged.
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragstart
   */
  onDragStart?: AttrEventHandler<DragEvent, T>;
  "on-dragstart"?: this["onDragStart"];
  ondragstart?: AttrString;

  /**
   * Fired when an element or text selection is dropped on a valid drop target.
   * @see https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-drop
   */
  onDrop?: AttrEventHandler<DragEvent, T>;
  "on-drop"?: this["onDrop"];
  ondrop?: AttrString;

  /**
   * Fired when the duration attribute of a media element has just been updated.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-durationchange
   */
  onDurationChange?: AttrEventHandler<Event, T>;
  "on-durationchange"?: this["onDurationChange"];
  ondurationchange?: AttrString;

  /**
   * Fired when a media element's playback stops because its source data has been fully consumed and not looped.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-emptied
   */
  onEmptied?: AttrEventHandler<Event, T>;
  "on-emptied"?: this["onEmptied"];
  onemptied?: AttrString;

  /**
   * Fired when an encrypted media stream is encountered and the user agent recognizes the stream's encryption scheme.
   * @see https://w3c.github.io/encrypted-media/#dom-evt-encrypted
   */
  onEncrypted?: AttrEventHandler<MediaEncryptedEvent, T>;
  "on-encrypted"?: this["onEncrypted"];

  /**
   * Fired when playback of a media element reaches its end, either because the media has reached its end or the loop attribute is not set.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-ended
   */
  onEnded?: AttrEventHandler<Event, T>;
  "on-ended"?: this["onEnded"];
  onended?: AttrString;

  /**
   * Fired when an error occurs while fetching an external resource, such as a script, image, or video.
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-error
   */
  onError?: AttrEventHandler<ErrorEvent | Event, T>;
  "on-error"?: this["onError"];
  onerror?: AttrString;

  /**
   * Fired when an element receives focus, either by user input or via script.
   * @see https://html.spec.whatwg.org/multipage/interaction.html#event-focus
   */
  onFocus?: AttrEventHandler<FocusEvent, T>;
  "on-focus"?: this["onFocus"];
  onfocus?: AttrString;

  /**
   * Fires when an element has received focus, after the focus event. The two events differ in that focusin bubbles, while focus does not.
   * @see HTMLAttributes.onFocus
   * @see https://w3c.github.io/uievents/#event-type-focusin
   */
  onFocusIn?: AttrEventHandler<FocusEvent, T>;
  "on-focusin"?: this["onFocusIn"];

  /**
   * Fires when an element has lost focus, after the blur event. The two events differ in that focusout bubbles, while blur does not.
   * @see HTMLAttributes.onBlur
   * @see https://w3c.github.io/uievents/#event-type-focusout
   */
  onFocusOut?: AttrEventHandler<FocusEvent, T>;
  "on-focusout"?: this["onFocusOut"];

  /**
   * Fired at a form element when it is constructing the entry list
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-formdata
   */
  onFormData?: AttrEventHandler<FormDataEvent, T>;
  "on-formdata"?: this["onFormData"];
  onformdata?: AttrString;

  /**
   * Fired immediately after an Element switches into or out of fullscreen mode.
   * @see https://fullscreen.spec.whatwg.org/#handler-document-onfullscreenchange
   */
  onFullscreenChange?: AttrEventHandler<Event, T>;
  "on-fullscreenchange"?: this["onFullscreenChange"];

  /**
   * Fired when the browser cannot switch to fullscreen mode.
   * @see https://fullscreen.spec.whatwg.org/#handler-document-onfullscreenerror
   */
  onFullscreenError?: AttrEventHandler<Event, T>;
  "on-fullscreenerror"?: this["onFullscreenError"];

  /**
   * Fired when an element captures a pointer using setPointerCapture().
   *
   * @see Element.setPointerCapture
   * @see https://w3c.github.io/pointerevents/#the-gotpointercapture-event
   */
  onGotPointerCapture?: AttrEventHandler<PointerEvent, T>;
  "on-gotpointercapture"?: this["onGotPointerCapture"];

  /**
   * Fired when the form element's value changes, as a result of user input.
   * @see https://w3c.github.io/uievents/#event-type-input
   */
  onInput?: AttrEventHandler<InputEvent, T>;
  "on-input"?: this["onInput"];
  oninput?: AttrString;

  /**
   * Fired when a form element is found to be invalid during submission or constraint validation.
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-invalid
   */
  onInvalid?: AttrEventHandler<Event, T>;
  "on-invalid"?: this["onInvalid"];
  oninvalid?: AttrString;

  /**
   * Fired when a key is first pressed down.
   * @see https://w3c.github.io/uievents/#event-type-keydown
   */
  onKeyDown?: AttrEventHandler<KeyboardEvent, T>;
  "on-keydown"?: this["onKeyDown"];
  onkeydown?: AttrString;

  /**
   * Fired when a key is pressed down and then released, while the element has focus.
   * @see https://w3c.github.io/uievents/#event-type-keypress
   */
  onKeyPress?: AttrEventHandler<KeyboardEvent, T>;
  "on-keypress"?: this["onKeyPress"];
  onkeypress?: AttrString;

  /**
   * Fired when a key is released after being pressed down.
   * @see https://w3c.github.io/uievents/#event-type-keyup
   */
  onKeyUp?: AttrEventHandler<KeyboardEvent, T>;
  "on-keyup"?: this["onKeyUp"];
  onkeyup?: AttrString;

  /**
   * Fired when an element or resource, such as an image, has completely loaded.
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-load
   */
  onLoad?: AttrEventHandler<Event, T>;
  "on-load"?: this["onLoad"];
  onload?: AttrString;

  /**
   * Fired when the user agent can render the media data at the current playback position for the first time.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-loadeddata
   */
  onLoadedData?: AttrEventHandler<Event, T>;
  "on-loadeddata"?: this["onLoadedData"];
  onloadeddata?: AttrString;

  /**
   * Fired when the user agent has just determined the duration and dimensions of the media resource.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-loadedmetadata
   */
  onLoadedMetadata?: AttrEventHandler<Event, T>;
  "on-loadedmetadata"?: this["onLoadedMetadata"];
  onloadedmetadata?: AttrString;

  /**
   * Fired when the user agent begins looking for media data, before the media has begun to load.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-loadstart
   */
  onLoadStart?: AttrEventHandler<Event, T>;
  "on-loadstart"?: this["onLoadStart"];
  onloadstart?: AttrString;

  /**
   * Fired when a captured pointer is released.
   * @see https://w3c.github.io/pointerevents/#dfn-lostpointercapture
   */
  onLostPointerCapture?: AttrEventHandler<PointerEvent, T>;
  "on-lostpointercapture"?: this["onLostPointerCapture"];

  /**
   * Fired when a pointing device button is pressed down over an element.
   * @see https://w3c.github.io/uievents/#event-type-mousedown
   */
  onMouseDown?: AttrEventHandler<MouseEvent, T>;
  "on-mousedown"?: this["onMouseDown"];
  onmousedown?: AttrString;

  /**
   * Fired when a pointing device is moved onto the element.
   * @see https://w3c.github.io/uievents/#event-type-mouseenter
   */
  onMouseEnter?: AttrEventHandler<MouseEvent, T>;
  "on-mouseenter"?: this["onMouseEnter"];
  onmouseenter?: AttrString;

  /**
   * Fired when a pointing device is moved off the element.
   * @see https://w3c.github.io/uievents/#event-type-mouseleave
   */
  onMouseLeave?: AttrEventHandler<MouseEvent, T>;
  "on-mouseleave"?: this["onMouseLeave"];
  onmouseleave?: AttrString;

  /**
   * Fired when a pointing device is moved over an element.
   * @see https://w3c.github.io/uievents/#event-type-mousemove
   */
  onMouseMove?: AttrEventHandler<MouseEvent, T>;
  "on-mousemove"?: this["onMouseMove"];
  onmousemove?: AttrString;

  /**
   * Fired when a pointing device is moved off the element or off one of its children.
   * @see https://w3c.github.io/uievents/#event-type-mouseout
   */
  onMouseOut?: AttrEventHandler<MouseEvent, T>;
  "on-mouseout"?: this["onMouseOut"];
  onmouseout?: AttrString;

  /**
   * Fired when a pointing device is moved onto the element or onto one of its children.
   * @see https://w3c.github.io/uievents/#event-type-mouseover
   */
  onMouseOver?: AttrEventHandler<MouseEvent, T>;
  "on-mouseover"?: this["onMouseOver"];
  onmouseover?: AttrString;

  /**
   * Fired when a pointing device button is released over an element.
   * @see https://w3c.github.io/uievents/#event-type-mouseup
   */
  onMouseUp?: AttrEventHandler<MouseEvent, T>;
  "on-mouseup"?: this["onMouseUp"];
  onmouseup?: AttrString;

  /**
   * Fired when the user has completed a "paste" action, usually through a context menu or keyboard shortcut.
   * @see https://w3c.github.io/clipboard-apis/#clipboard-event-paste
   */
  onPaste?: AttrEventHandler<ClipboardEvent, T>;
  "on-paste"?: this["onPaste"];
  onpaste?: AttrString;

  /**
   * Fired when playback of a media element is paused.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-pause
   */
  onPause?: AttrEventHandler<Event, T>;
  "on-pause"?: this["onPause"];
  onpause?: AttrString;

  /**
   * Fired when playback of a media element is ready to start after having been paused.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-play
   */
  onPlay?: AttrEventHandler<Event, T>;
  "on-play"?: this["onPlay"];
  onplay?: AttrString;

  /**
   * Fired when playback of a media element is ready to start, or when playback is resumed after a pause event.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-playing
   */
  onPlaying?: AttrEventHandler<Event, T>;
  "on-playing"?: this["onPlaying"];
  onplaying?: AttrString;

  /**
   * Fired when the pointing device's hardware triggers a cancellation of the pointer event, such as due to a system event.
   * @see https://w3c.github.io/pointerevents/#the-pointercancel-event
   */
  onPointerCancel?: AttrEventHandler<PointerEvent, T>;
  "on-pointercancel"?: this["onPointerCancel"];

  /**
   * Fired when a pointing device's button is pressed down on an element.
   * @see https://w3c.github.io/pointerevents/#the-pointerdown-event
   */
  onPointerDown?: AttrEventHandler<PointerEvent, T>;
  "on-pointerdown"?: this["onPointerDown"];

  /**
   * Fired when a pointing device is moved onto the element.
   * @see https://w3c.github.io/pointerevents/#the-pointerenter-event
   */
  onPointerEnter?: AttrEventHandler<PointerEvent, T>;
  "on-pointerenter"?: this["onPointerEnter"];

  /**
   * Fired when a pointing device is moved off the element.
   * @see https://w3c.github.io/pointerevents/#the-pointerleave-event
   */
  onPointerLeave?: AttrEventHandler<PointerEvent, T>;
  "on-pointerleave"?: this["onPointerLeave"];

  /**
   * Fired when a pointing device is moved over an element.
   * @see https://w3c.github.io/pointerevents/#the-pointermove-event
   */
  onPointerMove?: AttrEventHandler<PointerEvent, T>;
  "on-pointermove"?: this["onPointerMove"];

  /**
   * Fired when a pointing device is moved off the element or off one of its children.
   * @see https://w3c.github.io/pointerevents/#the-pointerout-event
   */
  onPointerOut?: AttrEventHandler<PointerEvent, T>;
  "on-pointerout"?: this["onPointerOut"];

  /**
   * Fired when a pointing device is moved onto the element or onto one of its children.
   * @see https://w3c.github.io/pointerevents/#the-pointerover-event
   */
  onPointerOver?: AttrEventHandler<PointerEvent, T>;
  "on-pointerover"?: this["onPointerOver"];

  /**
   * Fired when a pointing device's button is released over an element.
   * @see https://w3c.github.io/pointerevents/#the-pointerup-event
   */
  onPointerUp?: AttrEventHandler<PointerEvent, T>;
  "on-pointerup"?: this["onPointerUp"];

  /**
   * Fired when the user agent is downloading media data or resources, to indicate progress.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-progress
   */
  onProgress?: AttrEventHandler<Event, T>;
  "on-progress"?: this["onProgress"];
  onprogress?: AttrString;

  /**
   * Fired when the playback rate of a media element has changed.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-ratechange
   */
  onRateChange?: AttrEventHandler<Event, T>;
  "on-ratechange"?: this["onRateChange"];
  onratechange?: AttrString;

  /**
   * Fired when a form is reset, either by user interaction or through a script.
   * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#event-reset
   */
  onReset?: AttrEventHandler<Event, T>;
  "on-reset"?: this["onReset"];
  onreset?: AttrString;

  /**
   * Fired at the Window when the viewport is resized. Fired at VisualViewport when the visual viewport is resized or the layout viewport is scaled.
   * @see https://drafts.csswg.org/cssom-view/#eventdef-window-resize
   */
  onResize?: AttrEventHandler<Event, T>;
  "on-resize"?: this["onResize"];
  onresize?: AttrString;

  /**
   * Fired when an element's scrollbar is being scrolled.
   * @see https://drafts.csswg.org/cssom-view/#eventdef-document-scroll
   */
  onScroll?: AttrEventHandler<Event, T>;
  "on-scroll"?: this["onScroll"];
  onscroll?: AttrString;

  /**
   * Fired when element scrolling has completed. Scrolling is considered completed when the scroll position has no more pending updates and the user has completed their gesture.
   * @see https://drafts.csswg.org/cssom-view/#eventdef-document-scrollend
   */
  onScrollEnd?: AttrEventHandler<Event, T>;
  "on-scrollend"?: this["onScrollEnd"];
  onscrollend?: AttrString;

  /**
   * Fired when a security policy violation occurs, such as when an attempted resource load is blocked due to the security settings of the browser or when an inline script violates the Content Security Policy (CSP) of the page.
   * @see https://w3c.github.io/webappsec-csp/#eventdef-globaleventhandlers-securitypolicyviolation
   */
  onSecurityPolicyViolation?: AttrEventHandler<SecurityPolicyViolationEvent, T>;
  "on-securitypolicyviolation"?: this["onSecurityPolicyViolation"];
  onsecuritypolicyviolation?: AttrString;

  /**
   * Fired when a seek operation on a media element completes.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-seeked
   */
  onSeeked?: AttrEventHandler<Event, T>;
  "on-seeked"?: this["onSeeked"];
  onseeked?: AttrString;

  /**
   * Fired when a seek operation on a media element begins.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-seeking
   */
  onSeeking?: AttrEventHandler<Event, T>;
  "on-seeking"?: this["onSeeking"];
  onseeking?: AttrString;

  /**
   * Fired when some text is selected within an input or textarea element.
   * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#event-select
   */
  onSelect?: AttrEventHandler<Event, T>;
  "on-select"?: this["onSelect"];
  onselect?: AttrString;

  /**
   * Fired when a <slot> element's distributed nodes change.
   * @see https://dom.spec.whatwg.org/#eventdef-htmlslotelement-slotchange
   */
  onSlotChange?: AttrEventHandler<Event, T>;
  "on-slotchange"?: this["onSlotChange"];
  onslotchange?: AttrString;

  /**
   * Fired when a media element's data downloading has been stalled due to an issue, such as a lack of data.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-stalled
   */
  onStalled?: AttrEventHandler<Event, T>;
  "on-stalled"?: this["onStalled"];
  onstalled?: AttrString;

  /**
   * Fired at a form element when it is submitted
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-submit
   */
  onSubmit?: AttrEventHandler<SubmitEvent, T>;
  "on-submit"?: this["onSubmit"];
  onsubmit?: AttrString;

  /**
   * Fired when the user agent intentionally does not download media data.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-suspend
   */
  onSuspend?: AttrEventHandler<Event, T>;
  "on-suspend"?: this["onSuspend"];
  onsuspend?: AttrString;

  /**
   * Fired when the current playback position of a media element changes as part of normal playback or due to a seek operation.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-timeupdate
   */
  onTimeUpdate?: AttrEventHandler<Event, T>;
  "on-timeupdate"?: this["onTimeUpdate"];
  ontimeupdate?: AttrString;

  /**
   * Fired at details elements when they open or close; fired on elements with the popover attribute when they are transitioning between showing and hidden
   * @see https://html.spec.whatwg.org/multipage/indices.html#event-toggle
   */
  onToggle?: AttrEventHandler<Event, T>;
  "on-toggle"?: this["onToggle"];
  ontoggle?: AttrString;

  /**
   * Fired when a touch event is interrupted, such as by a modal window or an incoming phone call.
   * @see https://w3c.github.io/touch-events/#event-touchcancel
   */
  onTouchCancel?: AttrEventHandler<TouchEvent, T>;
  "on-touchcancel"?: this["onTouchCancel"];

  /**
   * Fired when a finger is lifted from a touch surface.
   * @see https://w3c.github.io/touch-events/#event-touchend
   */
  onTouchEnd?: AttrEventHandler<TouchEvent, T>;
  "on-touchend"?: this["onTouchEnd"];

  /**
   * Fired when a finger is moved along a touch surface.
   * @see https://w3c.github.io/touch-events/#event-touchmove
   */
  onTouchMove?: AttrEventHandler<TouchEvent, T>;
  "on-touchmove"?: this["onTouchMove"];

  /**
   * Fired when a finger is placed on a touch surface.
   * @see https://w3c.github.io/touch-events/#event-touchstart
   */
  onTouchStart?: AttrEventHandler<TouchEvent, T>;
  "on-touchstart"?: this["onTouchStart"];

  /**
   * Fired when a CSS transition is canceled.
   * @see https://drafts.csswg.org/css-transitions/#transitioncancel
   */
  onTransitionCancel?: AttrEventHandler<TransitionEvent, T>;
  "on-transitioncancel"?: this["onTransitionCancel"];

  /**
   * Fired when a CSS transition has completed.
   * @see https://drafts.csswg.org/css-transitions/#transitionend
   */
  onTransitionEnd?: AttrEventHandler<TransitionEvent, T>;
  "on-transitionend"?: this["onTransitionEnd"];

  /**
   * Fired when a CSS transition is first created, i.e. before any transition-delay has begun.
   * @see https://drafts.csswg.org/css-transitions/#transitionrun
   */
  onTransitionRun?: AttrEventHandler<TransitionEvent, T>;
  "on-transitionrun"?: this["onTransitionRun"];

  /**
   * Fired when a CSS transition has actually started, i.e., after any transition-delay has ended.
   * @see https://drafts.csswg.org/css-transitions/#transitionstart
   */
  onTransitionStart?: AttrEventHandler<TransitionEvent, T>;
  "on-transitionstart"?: this["onTransitionStart"];

  /**
   * Fired when the volume level or muted state of a media element changes.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-volumechange
   */
  onVolumeChange?: AttrEventHandler<Event, T>;
  "on-volumechange"?: this["onVolumeChange"];
  onvolumechange?: AttrString;

  /**
   * Fired when a media element is waiting for data to continue playback, such as when buffering.
   * @see https://html.spec.whatwg.org/multipage/media.html#event-media-waiting
   */
  onWaiting?: AttrEventHandler<Event, T>;
  "on-waiting"?: this["onWaiting"];
  onwaiting?: AttrString;

  /**
   * Fired when a user rotates a mouse wheel or similar input device over an element.
   * @see https://w3c.github.io/uievents/#event-type-wheel
   */
  onWheel?: AttrEventHandler<WheelEvent, T>;
  "on-wheel"?: this["onWheel"];
  onwheel?: AttrString;

  /**
   * Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant
   */
  "aria-activedescendant"?: AttrString;
  /**
   * Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-atomic
   * @see aria-relevant
   */
  "aria-atomic"?: AttrBooleanString;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete
   */
  "aria-autocomplete"?: AttrMissing | "both" | "inline" | "list" | "none";
  /**
   * Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-busy
   */
  "aria-busy"?: AttrBooleanString;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-checked
   */
  "aria-checked"?: AttrTriState;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-colcount
   */
  "aria-colcount"?: AttrStringOrNumber;
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-colindex
   */
  "aria-colindex"?: AttrStringOrNumber;
  /**
   * Defines a human readable text alternative of aria-colindex.
   * @see https://w3c.github.io/aria/#aria-colindextext
   * @see aria-colindex
   */
  "aria-colindextext"?: AttrString;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-colspan
   */
  "aria-colspan"?: AttrStringOrNumber;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-controls
   * @see aria-owns
   */
  "aria-controls"?: AttrString;
  /**
   * Indicates the element that represents the current item within a container or set of related elements.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-current
   */
  "aria-current"?:
    | AttrBooleanString
    | "date"
    | "location"
    | "page"
    | "step"
    | "time"
    | "true";
  /**
   * Identifies the element (or elements) that describes the object.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-describedby
   * @see aria-labelledby
   */
  "aria-describedby"?: AttrString;
  /**
   * Defines a string value that describes or annotates the current element.
   * @see https://w3c.github.io/aria/#aria-description
   * @see aria-describedby
   */
  "aria-description"?: AttrString;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-details
   * @see aria-describedby
   */
  "aria-details"?: AttrString;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
   */
  "aria-disabled"?: AttrBooleanString;
  /**
   * @deprecated Indicates what functions can be performed when a dragged object is released on the drop target.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect
   * */
  "aria-dropeffect"?:
    | AttrMissing
    | "copy"
    | "execute"
    | "link"
    | "move"
    | "none"
    | "popup";
  /**
   * Identifies the element that provides an error message for the object.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage
   * @see aria-invalid
   * @see aria-describedby
   */
  "aria-errormessage"?: AttrString;
  /**
   * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
   * @see aria-controls
   */
  "aria-expanded"?: AttrBooleanString;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-flowto
   */
  "aria-flowto"?: AttrString;
  /**
   * @deprecated Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed
   */
  "aria-grabbed"?: AttrBooleanString;
  /**
   * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
   */
  "aria-haspopup"?:
    | AttrBooleanString
    | "dialog"
    | "grid"
    | "listbox"
    | "menu"
    | "tree";
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
   * @see aria-disabled
   */
  "aria-hidden"?: AttrBooleanString;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-invalid
   * @see aria-errormessage
   */
  "aria-invalid"?: AttrBooleanString | "grammar" | "spelling";
  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts
   */
  "aria-keyshortcuts"?: AttrString;
  /**
   * Defines a string value that labels the current element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-label
   * @see aria-labelledby
   */
  "aria-label"?: AttrString;
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby
   * @see aria-decribedby
   */
  "aria-labelledby"?: AttrString;
  /**
   * Defines the hierarchical level of an element within a structure.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-level
   */
  "aria-level"?: AttrString;
  /**
   * Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies,
   * and user can expect from the live region.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-live
   */
  "aria-live"?: AttrMissing | "assertive" | "off" | "polite";
  /**
   * Indicates whether an element is modal when displayed.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-modal
   */
  "aria-modal"?: AttrBooleanString;
  /**
   * Indicates whether a text box accepts multiple lines of input or only a single line.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-multiline
   */
  "aria-multiline"?: AttrBooleanString;
  /**
   * Indicates that the user may select more than one item from the current selectable descendants.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable
   */
  "aria-multiselectable"?: AttrBooleanString;
  /**
   * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-orientation
   */
  "aria-orientation"?: AttrMissing | "horizontal" | "vertical";
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-owns
   */
  "aria-owns"?: AttrString;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder
   */
  "aria-placeholder"?: AttrString;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems.
   * Not required if all elements in the set are present in the DOM.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-posinset
   */
  "aria-posinset"?: AttrStringOrNumber;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
   */
  "aria-pressed"?: AttrTriState;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
   */
  "aria-readonly"?: AttrBooleanString;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-relevant
   */
  "aria-relevant"?:
    | AttrMissing
    | "additions removals"
    | "additions text"
    | "additions"
    | "all"
    | "removals additions"
    | "removals text"
    | "removals"
    | "text additions"
    | "text removals"
    | "text";
  /**
   * Indicates that user input is required on the element before a form may be submitted.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-required
   */
  "aria-required"?: AttrBooleanString;
  /**
   * Defines a human-readable, author-localized description for the role of an element.
   */
  "aria-roledescription"?: AttrString;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount
   */
  "aria-rowcount"?: AttrStringOrNumber;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex
   */
  "aria-rowindex"?: AttrStringOrNumber;
  /**
   * Defines a human readable text alternative of aria-rowindex.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowindextext
   * @see aria-rowindex
   */
  "aria-rowindextext"?: AttrString;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan
   */
  "aria-rowspan"?: AttrStringOrNumber;
  /**
   * Indicates the current "selected" state of various widgets.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-selected
   */
  "aria-selected"?: AttrBooleanString;
  /**
   * Defines the number of items in the current set of listitems or treeitems.
   * Not required if all elements in the set are present in the DOM.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-setsize
   */
  "aria-setsize"?: AttrStringOrNumber;
  /**
   * Indicates if items in a table or grid are sorted in ascending or descending order.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-sort
   */
  "aria-sort"?: "ascending" | "descending" | "none" | "other";
  /**
   * Defines the maximum allowed value for a range widget.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax
   * @see aria-valuenow
   */
  "aria-valuemax"?: AttrStringOrNumber;
  /**
   * Defines the minimum allowed value for a range widget.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin
   * @see aria-valuenow
   */
  "aria-valuemin"?: AttrStringOrNumber;
  /**
   * Defines the current value for a range widget.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow
   * @see aria-valuetext
   * @see aria-valuemin
   * @see aria-valuemax
   */
  "aria-valuenow"?: AttrStringOrNumber;
  /**
   * Defines the human readable text alternative of aria-valuenow for a range widget.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext
   * @see aria-valuenow
   */
  "aria-valuetext"?: AttrString;
  /**
   * Defines the ARIA role of an element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#role_definitions
   */
  role?:
    | AttrMissing
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "meter"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem";
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
type AttrPreserveAspectRatio =
  | AttrMissing
  | `${"none" | `x${"Min" | "Mid" | "Max"}Y${"Min" | "Mid" | "Max"}`}${" meet" | " slice" | ""}`;

type AttrFEIn =
  | AttrMissing
  | "SourceGraphic"
  | "SourceAlpha"
  | "BackgroundImage"
  | "BackgroundAlpha"
  | "FillPaint"
  | "StrokePaint"
  | (string & {});
