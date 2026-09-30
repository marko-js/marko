import { $signalReset } from "./abort-signal";
import { installSignalReset } from "./patch-effect.feat";

// A patch re-run resets an effect's `$signal`s, as its render would.
installSignalReset($signalReset);
