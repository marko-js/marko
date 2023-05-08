import {
  FancyButton$onclick_effect,
  subscribe_clickCount$renderBody,
  clickHandler,
} from "./browser";
import { init, register } from "@marko/runtime-fluurt/src/dom";

register("FancyButton$onclick_effect", FancyButton$onclick_effect);
register("subscribe_clickCount$renderBody", subscribe_clickCount$renderBody);
register("clickHandler", clickHandler);
init();
