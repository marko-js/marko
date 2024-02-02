import {
  init,
  register,
  registerSubscriber,
} from "@marko/runtime-tags/dom";
import {
  FancyButton$onclick_effect,
  clickCount$renderBody,
  clickHandler,
} from "./browser";

register("FancyButton$onclick_effect", FancyButton$onclick_effect);
registerSubscriber("subscribe_clickCount$renderBody", clickCount$renderBody);
register("clickHandler", clickHandler);
init();
