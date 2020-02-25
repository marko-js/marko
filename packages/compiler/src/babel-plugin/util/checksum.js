import { createHash } from "crypto";

export default function checksum(filename) {
  const hash = createHash("sha1");
  hash.update(filename);
  return hash
    .digest("base64")
    .slice(0, 8)
    .replace(/\//g, "-")
    .replace(/\+/g, "_");
}
