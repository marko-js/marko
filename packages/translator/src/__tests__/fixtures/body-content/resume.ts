import {
  FancyButton$onclick_resume,
  subscribe_clickCount$renderBody,
  clickHandler,
} from "./browser";
import { init, register } from "@marko/runtime-fluurt/src/dom";

register("FancyButton$onclick_resume", FancyButton$onclick_resume);
register("subscribe_clickCount$renderBody", subscribe_clickCount$renderBody);
register("clickHandler", clickHandler);
init();
