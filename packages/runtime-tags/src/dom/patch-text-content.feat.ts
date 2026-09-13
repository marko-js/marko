import { type Accessor, PatchKey } from "../common/types";
import { _text_content } from "./dom";
import { patchers } from "./resume";

patchers[PatchKey.TextContent] = (scope, key, value) =>
  _text_content(
    scope[key.slice(PatchKey.TextContent.length) as Accessor] as ParentNode,
    value,
  );
