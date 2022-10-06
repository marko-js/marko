import {
  FancyButton$onclick_hydrate,
  subscribe_clickCount$renderBody,
  clickHandler,
} from "./browser";
import { init, register } from "../../../dom/index";

register("FancyButton$onclick_hydrate", FancyButton$onclick_hydrate);
register("subscribe_clickCount$renderBody", subscribe_clickCount$renderBody);
register("clickHandler", clickHandler);
init();
