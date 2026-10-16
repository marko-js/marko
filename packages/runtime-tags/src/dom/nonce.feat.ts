import { installNonce } from "./walker";

// Injected where a template's walk sets the page's nonce on a script or style.
installNonce();
