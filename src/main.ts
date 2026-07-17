import fs from "fs";

export type UserQuestion = {
  question: string;
};

export type upperText = {
  text: string;
};

import { question } from "readline-sync";

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
      if (fs.existsSync(q.question)) {
        fs.mkdirSync(q.question);
      }
    } else if (q.question.startsWith("/File")) {
      const fileName = question("Enter File Name: ").toUpperCase();
      fs.writeFileSync(fileName, "");
      console.log("Created File Called: " + fileName);
    }

    app.setup(q.question);
  } catch (e) {
    console.log(e);
  }
}

main();
