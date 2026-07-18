import { isEmpty, OnErrorFile } from "../Functions/Functions.js";

import { type FILENAME, type UserQuestion } from "../imports/imports.js";

class onGetUser {
  public getArgs(getFileName: (name: FILENAME) => string, name: string) {
    return getFileName(name);
  }
}

const onArgsRead = (index: number) => {
  const readArgs = process.argv.slice(index);
  return readArgs;
};

const upperFileName = (file: FILENAME) => {
  return file.toUpperCase();
};

const main = () => {
  const argsUser = onArgsRead(2);
  const argsUserIndex = onArgsRead(3);
  const upperTextMessage = new onGetUser();

  if (String(argsUser) == "-cr" && String(argsUserIndex) == "-f") {
    const q = getOnStrings();
    upperTextMessage.getArgs(upperFileName, q.question);

    OnErrorFile(q);
  } else {
    const qIndex = getOnStrings();
    upperTextMessage.getArgs(upperFileName, qIndex.question);
    const q = getOnStrings();
    OnErrorFile(q);
  }
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
