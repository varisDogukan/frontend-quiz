export function getBackgroundColor(title: string) {
  switch (title) {
    case "HTML":
      return "bg-question-HTML";

    case "CSS":
      return "bg-question-CSS";

    case "JavaScript":
      return "bg-question-JavaScript";

    default:
      return "bg-question-Accessibility";
  }
}
