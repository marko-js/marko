import { SourceType, type References, type Source } from "./references";

export function isStatefulReferences(references: References) {
  if (references) {
    if (Array.isArray(references)) {
      for (const ref of references) {
        if (isStatefulSource(ref.source)) {
          return true;
        }
      }
    } else {
      return isStatefulSource(references.source);
    }
  }

  return false;
}

export function isStatefulSource(source: Source) {
  switch (source.type) {
    case SourceType.let:
    case SourceType.input:
    case SourceType.param:
      return true;
    default:
      if (source.upstream && isStatefulReferences(source.upstream.references)) {
        return true;
      }
  }
}
