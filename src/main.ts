import { isEmpty, OnErrorFile } from "../Functions/Functions.js";

import { fs1, type FILENAME, type UserQuestion } from "../imports/imports.js";

const main = () => {
  const q = getOnStrings();
  OnErrorFile(q);
};

const getOnStrings = () => {
  const q: UserQuestion = {
    question: "Enter File Or Folder Name: ",
  };

  if (isEmpty(q.question)) {
    console.log("Empty".toUpperCase());
  }
  return q;
};

main();
