const units = ["", "K", "M"];
export const lib = {
  format(value: string) {
    return value.toUpperCase() + units[value.length % units.length];
  },
};
