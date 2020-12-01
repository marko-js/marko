import { escapeXML as _escapeXML, toString as _toString, write as _write } from "@marko/runtime-fluurt/src/html";

_write(`Hello ${_escapeXML(input.name)}! Hello ${_toString(input.name)}! Hello ${_toString(input.missing)}!`);