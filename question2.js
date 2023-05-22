let para =
  "Lodash is a JavaScript library that helps programmers write more concise and maintainable \
            JavaScript. It can be broken down into several main areas: Utilities - for simplifying common programming \
            tasks such as determining type as well as simplifying math operations";

const newParagraph = (paragraph) => {
  // match Javascript in a case insensitive way
  let newParagraph = paragraph.replace(/Javascript/gi, "javascript");
  let paragraphArray = newParagraph.split(".");
  return paragraphArray;
};

console.log(newParagraph(para));
