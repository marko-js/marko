import ImportTag from "./import";
import ExportTag from "./export";
import AttrsTag from "./attrs";
import IfTag from "./condition/if";
import ElseIfTag from "./condition/else-if";
import ElseTag from "./condition/else";
import ConstTag from "./const";
import EffectTag from "./effect";
import ForTag from "./for";
import GetTag from "./get";
import HTMLCommentTag from "./html-comment";
import LetTag from "./let";
import SetTag from "./set";
import StyleTag from "./style";
import TagTag from "./tag";
import YieldTag from "./yield";
import StaticTag from "./static";
import NoopTag from "./noop";
import FlushHereAndAfter from "./__flush_here_and_after__";
import { taglibId } from "../util/is-core-tag";

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
  "<effect>": EffectTag,
  "<html-comment>": HTMLCommentTag,
  "<tag>": TagTag,
  "<set>": SetTag,
  "<get>": GetTag,
  "<yield>": YieldTag,
  "<style>": StyleTag,
  "<await-reorderer>": NoopTag,
  "<init-widgets>": NoopTag,
  "<init-components>": NoopTag,
  "<static>": StaticTag,
  "<__flush_here_and_after__>": FlushHereAndAfter,
};
