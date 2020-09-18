import { createHash } from "crypto";

export default function checksum(filename) {
  return createHash("MD5")
    .update(filename)
    .digest("base64")
    .slice(0, 8);
}
