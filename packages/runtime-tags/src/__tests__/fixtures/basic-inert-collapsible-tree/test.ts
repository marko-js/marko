export const steps = [
  {
    comments: [
      {
        text: "Hello World",
        comments: [
          {
            text: "testing 123",
          },
        ],
      },
      {
        text: "Goodbye World",
      },
    ],
  },
  toggle("0"),
  toggle("0"),
  toggle("0-0"),
  toggle("1"),
];

function toggle(id: string) {
  return (container: Element) => {
    (container.querySelector(`#c-${id} > button`) as HTMLButtonElement).click();
  };
}
