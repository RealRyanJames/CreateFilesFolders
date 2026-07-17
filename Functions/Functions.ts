import { question } from "readline-sync";
import { fs1, type FILENAME, type UserQuestion } from "../imports/imports.js";

export function getUserAnswer(questionUser: string): UserQuestion | string {
  return question(questionUser.toString());
}

export class App {
  setup(setupApp: string) {
    return getUserAnswer(setupApp);
  }
}

export const isEmpty = (e: string) => {
  return e === "";
};

export const GetFile = (file: FILENAME) => {
  return file.toLowerCase();
};

export function FileNameCreation(name: string) {
  let file = GetFile(name);
  return fs1.writeFileSync(file, "");
}

export const OnErrorFile = (q: UserQuestion) => {
  try {
    if (q.question.startsWith("/Folder")) {
      if (fs1.existsSync(q.question)) {
        fs1.mkdirSync(q.question);
      }
    }

    if (q.question.startsWith("/File")) {
      FileNameCreation(q.question);
      console.log("Created File Called: " + q.question);
    }
  } catch (e) {
    console.log(e);
  }
};
