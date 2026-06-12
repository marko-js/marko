"use strict";

var flushHereAndAfter = require("../../core-tags/core/__flush_here_and_after__");
var escapeScript = require("../html/helpers/escape-script-placeholder");
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var kAssets = Symbol();
var kBlockIndex = Symbol();
var kDeferIndex = Symbol();
var kOriginal = Symbol();
var assetFlush;

exports.withPageAssets = function withPageAssets(typeId, template, runtime) {
  assetFlush = runtime;
  var render = template[kOriginal] || (template[kOriginal] = template._);
  var flushBeforeInput = { renderBody: flush };
  template._ = function (input, out) {
    var hasAssets = !!out.global[kAssets];
    var key = out.___assignedKey;
    var def = out.___assignedComponentDef;
    var component = def && def.___component;
    addAsset(out.global, typeId);

    if (hasAssets) {
      if (willRerender(def)) {
        out.bf(key + "s", component, true);
        flush(out);
        out.ef();
      } else {
        flush(out);
      }
    } else {
      flushHereAndAfter(flushBeforeInput, out);
    }

    render(input, out);
  };
  return template;
};

exports.withLoadAssets = function withLoadAssets(typeId, template, triggers) {
  if (template[kOriginal]) return template;
  var render = (template[kOriginal] = template._);
  template._ = function (input, out) {
    var key = out.___assignedKey;
    var def = out.___assignedComponentDef;
    addAsset(out.global, typeId, triggers);

    if (willRerender(def)) {
      out.bf(key + "s", def.___component, true);
      flush(out);
      out.ef();
      out.bf(key, def.___component, true);
      render(input, out);
      out.ef();
    } else {
      flush(out);
      render(input, out);
    }
  };
  return template;
};

exports.flushHead = function flushHead(out) {
  if (out.global[kAssets]) {
    flush(out);
  }
};

function willRerender(def) {
  return def && def.___flags & FLAG_WILL_RERENDER_IN_BROWSER ? true : false;
}

function flush(out) {
  var g = out.global;
  var result = "";
  var assets = g[kAssets];
  var length = assets.length;
  var bi = g[kBlockIndex];
  var di = g[kDeferIndex];

  for (; bi < length; bi++) {
    result += assetFlush(g, "block", assets[bi].id);
  }

  for (; di < length; di++) {
    var asset = assets[di];
    var deferHTML = assetFlush(g, "defer", asset.id);
    if (asset.triggers) {
      if (deferHTML) out.script(triggerScript(deferHTML, asset.triggers));
    } else {
      result += deferHTML;
    }
  }

  g[kBlockIndex] = bi;
  g[kDeferIndex] = di;
  out.write(result);
}

function addAsset(g, id, triggers) {
  var assets = g[kAssets];
  if (!assets) {
    g[kAssets] = [{ id: id, triggers: triggers }];
    g[kBlockIndex] = g[kDeferIndex] = 0;
  } else if (
    !assets.find(function (a) {
      return a.id === id;
    })
  ) {
    assets.push({ id: id, triggers: triggers });
  }
}

function triggerScript(html, triggers) {
  var htmlStr = escapeScript(JSON.stringify(html));
  var exprs = triggers.map(function (trigger) {
    var options = trigger.options && toObjectExpression(trigger.options);
    switch (trigger.type) {
      case "visible":
        return (
          "(e=>e&&new IntersectionObserver((e,i)=>e.some(e=>e.isIntersecting)&&i.disconnect()+l()" +
          (options ? "," + options : "") +
          ").observe(e))(document.querySelector(" +
          JSON.stringify(trigger.selector) +
          ")||l())"
        );
      case "idle":
        return (
          "(self.requestIdleCallback||l)(l" +
          (options ? "," + options : "") +
          ")"
        );
      case "media":
        return (
          '(m=>m.matches?l():m.addEventListener("change",l,{once:1}))(matchMedia(' +
          JSON.stringify(trigger.selector) +
          "))"
        );
      default:
        return (
          '(e=>e?.addEventListener("' +
          trigger.type.slice("on-".length) +
          '",l,{once:1}))(document.querySelector(' +
          JSON.stringify(trigger.selector) +
          ")||l())"
        );
    }
  });
  return (
    '((p,h,d,l=$=>d||p.insertAdjacentHTML("afterend",d=h))=>' +
    (exprs.length > 1 ? "{" + exprs.join(";") + "}" : exprs[0]) +
    ")(document.currentScript," +
    htmlStr +
    ")"
  );
}

function toObjectExpression(options) {
  var result = "{";
  var sep = "";
  for (var key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      result += sep + JSON.stringify(key) + ":" + JSON.stringify(options[key]);
      sep = ",";
    }
  }
  return result + "}";
}
