import { wait } from "../../utils/resolve";

export const steps = [
  {
    $global: {
      cspNonce: "default-nonce",
      serializedGlobals: { cspNonce: true },
    },
  },
  wait,
];
