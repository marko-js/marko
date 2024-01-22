import { taglibId } from "../util/is-core-tag";
import FlushHereAndAfter from "./__flush_here_and_after__";
import AttrsTag from "./attrs";
import ElseTag from "./condition/else";
import ElseIfTag from "./condition/else-if";
import IfTag from "./condition/if";
import ConstTag from "./const";
import EffectTag from "./effect";
import ExportTag from "./export";
import ForTag from "./for";
import HTMLCommentTag from "./html-comment";
import IdTag from "./id";
import ImportTag from "./import";
import LetTag from "./let";
import LifecycleTag from "./lifecycle";
import NoopTag from "./noop";
import ReturnTag from "./return";
import StaticTag from "./static";
import StyleTag from "./style";
import TagTag from "./tag";

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
  "<lifecycle>": LifecycleTag,
  "<id>": IdTag,
  "<html-comment>": HTMLCommentTag,
  "<tag>": TagTag,
  "<return>": ReturnTag,
  "<style>": StyleTag,
  "<await-reorderer>": NoopTag,
  "<init-widgets>": NoopTag,
  "<init-components>": NoopTag,
  "<static>": StaticTag,
  "<__flush_here_and_after__>": FlushHereAndAfter,
};
