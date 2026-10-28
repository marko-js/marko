import { PatchKey } from "../../common/types";
import { _text_content } from "../dom";
import { setupPatchers, patchers } from "./apply";

setupPatchers[PatchKey.TextContent] = patchers[PatchKey.TextContent] = (
  scope,
  accessor,
  value,
) => _text_content(scope[accessor] as ParentNode, value);
