import "./types/patch";
import "./generator/patch";
import "./traverse/patch";

import * as types from "@babel/types";
import { MARKO_TYPES } from "./types/definitions";

types.MARKO_TYPES = MARKO_TYPES;

export { types };
