import runtimeInfo from "../util/runtime-info";
import AttrsTag from "./attrs";
import AwaitTag from "./await";
import ClientTag from "./client";
import ConstTag from "./const";
import DebugTag from "./debug";
import DefineTag from "./define";
import EffectTag from "./effect";
import ExportTag from "./export";
import ForTag from "./for";
import HTMLCommentTag from "./html-comment";
import HTMLScriptTag from "./html-script";
import HTMLStyleTag from "./html-style";
import IdTag from "./id";
import { ElseIfTag, ElseTag, IfTag } from "./if";
import ImportTag from "./import";
import LetTag from "./let";
import LifecycleTag from "./lifecycle";
import LogTag from "./log";
import ReturnTag from "./return";
import ScriptTag from "./script";
import ServerTag from "./server";
import StaticTag from "./static";
import StyleTag from "./style";
import TextAreaTag from "./textarea";
import TitleTag from "./title";
import TryTag from "./try";

export default {
  taglibId: runtimeInfo.taglibId,
  "<attrs>": AttrsTag,
  "<await>": AwaitTag,
  "<client>": ClientTag,
  "<const>": ConstTag,
  "<debug>": DebugTag,
  "<define>": DefineTag,
  "<effect>": EffectTag,
  "<else-if>": ElseIfTag,
  "<else>": ElseTag,
  "<export>": ExportTag,
  "<for>": ForTag,
  "<html-comment>": HTMLCommentTag,
  "<html-script>": HTMLScriptTag,
  "<html-style>": HTMLStyleTag,
  "<id>": IdTag,
  "<if>": IfTag,
  "<import>": ImportTag,
  "<let>": LetTag,
  "<lifecycle>": LifecycleTag,
  "<log>": LogTag,
  "<return>": ReturnTag,
  "<script>": ScriptTag,
  "<server>": ServerTag,
  "<static>": StaticTag,
  "<style>": StyleTag,
  "<textarea>": TextAreaTag,
  "<title>": TitleTag,
  "<try>": TryTag,
};
