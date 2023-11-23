export function getBackgroundColor(title: string) {
  switch (title) {
    case "html":
      return "#FFF1E9";

    case "css":
      return "#E0FDEF";

    case "javascript":
      return "#EBF0FF";

    default:
      return "#F6E7FF";
  }
}

export function getQuestionColor(title: string) {
  switch (title) {
    case "selected":
      return "#A729F5";

    case "success":
      return "#26D782";

    default:
      return "#EE5454";
  }
}
