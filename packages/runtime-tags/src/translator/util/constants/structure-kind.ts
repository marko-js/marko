export const Node = "node";
export const Text = "text";
export const Child = "child";
export const ModuleRead = "moduleRead";
export const SectionRef = "sectionRef";
export const ExportRef = "exportRef";

type Self = typeof import("./structure-kind");
export type Value = Self[keyof Self];
