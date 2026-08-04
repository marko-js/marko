import type { TestConfig } from "../../main.test";

// A `<script>` reading an element of its branch: the constructed shell must
// claim the marker before the shell's mount effect runs, so the script sees
// the branch's filled content.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true, label: "Sale" },
    { title: "Store", show: false },
    { title: "Store", show: true, label: "Back" },
  ],
};
