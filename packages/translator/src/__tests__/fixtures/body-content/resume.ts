import { init, register } from "@marko/runtime-fluurt/src/dom";
import {
  FancyButton$onclick_effect,
  clickHandler,
  subscribe_clickCount$renderBody,
} from "./browser";

register("FancyButton$onclick_effect", FancyButton$onclick_effect);
register("subscribe_clickCount$renderBody", subscribe_clickCount$renderBody);
register("clickHandler", clickHandler);
init();
