import { taglibId } from "../util/is-core-tag";
import FlushHereAndAfter from "./__flush_here_and_after__";
import AttrsTag from "./attrs";
import ElseTag from "./condition/else";
import ElseIfTag from "./condition/else-if";
import IfTag from "./condition/if";
import ConstTag from "./const";
import DefineTag from "./define";
import DoTag from "./do";
import EffectTag from "./effect";
import ExportTag from "./export";
import ForTag from "./for";
import HTMLCommentTag from "./html-comment";
import IdTag from "./id";
import ImportTag from "./import";
import LetTag from "./let";
import LifecycleTag from "./lifecycle";
import LogTag from "./log";
import NoopTag from "./noop";
import ReturnTag from "./return";
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
  "<lifecycle>": LifecycleTag,
  "<id>": IdTag,
  "<html-comment>": HTMLCommentTag,
  "<return>": ReturnTag,
  "<style>": StyleTag,
  "<await-reorderer>": NoopTag,
  "<init-widgets>": NoopTag,
  "<init-components>": NoopTag,
  "<static>": StaticTag,
  "<__flush_here_and_after__>": FlushHereAndAfter,
};
