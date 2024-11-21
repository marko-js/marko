import { taglibId } from "../util/is-core-tag";
import AttrsTag from "./attrs";
import ClientTag from "./client";
import ConstTag from "./const";
import DebugTag from "./debug";
import DefineTag from "./define";
import DoTag from "./do";
import EffectTag from "./effect";
import ExportTag from "./export";
import ForTag from "./for";
import HTMLCommentTag from "./html-comment";
import IdTag from "./id";
import { ElseIfTag, ElseTag, IfTag } from "./if";
import ImportTag from "./import";
import LetTag from "./let";
import LifecycleTag from "./lifecycle";
import LogTag from "./log";
import NoopTag from "./noop";
import ReturnTag from "./return";
import ServerTag from "./server";
import StaticTag from "./static";
import StyleTag from "./style";

export default {
  taglibId,
  "<import>": ImportTag,
  "<export>": ExportTag,
  "<attrs>": AttrsTag,
  "<if>": IfTag,
  "<else-if>": ElseIfTag,
  "<else>": ElseTag,
  "<for>": ForTag,
  "<let>": LetTag,
  "<const>": ConstTag,
  "<define>": DefineTag,
  "<effect>": EffectTag,
  "<do>": DoTag,
  "<log>": LogTag,
  "<debug>": DebugTag,
  "<lifecycle>": LifecycleTag,
  "<id>": IdTag,
  "<html-comment>": HTMLCommentTag,
  "<return>": ReturnTag,
  "<style>": StyleTag,
  "<await-reorderer>": NoopTag,
  "<init-widgets>": NoopTag,
  "<init-components>": NoopTag,
  "<static>": StaticTag,
  "<server>": ServerTag,
  "<client>": ClientTag,
};
