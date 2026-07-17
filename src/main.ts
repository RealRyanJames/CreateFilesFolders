import { question } from "readline-sync";
import { fs1 } from "../imports/imports.js";

export type UserQuestion = {
  question: string;
};

export type upperText = {
  text: string;
};

function getUserAnswer(questionUser: string): UserQuestion | string {
  return question(questionUser.toString());
}

class App {
  setup(setupApp: string) {
    return getUserAnswer(setupApp);
  }
}

const isEmpty = (e: string) => {
  return e === "";
};

function FileNameCreation(name: string) {
  return fs1.writeFileSync(name, "");
}

function main() {
  const app = new App();

  try {
    const q: UserQuestion = {
      question: "Enter File Or Folder Name: ",
    };

    if (isEmpty(q.question)) {
      console.log("Empty".toUpperCase());
    }

    if (q.question.startsWith("/Folder")) {
      if (fs1.existsSync(q.question)) {
        fs1.mkdirSync(q.question);
      }
    } else if (q.question.startsWith("/File")) {
      FileNameCreation(q.question);
      console.log("Created File Called: " + q.question);
    }

    app.setup(q.question);
  } catch (e) {
    console.log(e);
  }
}

main();
