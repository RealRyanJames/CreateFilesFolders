import { question } from "readline-sync";
import { fs1 } from "../imports/imports.js";
function getUserAnswer(questionUser) {
    return question(questionUser.toString());
}
class App {
    setup(setupApp) {
        return getUserAnswer(setupApp);
    }
}
const isEmpty = (e) => {
    return e === "";
};
function FileNameCreation(name) {
    return fs1.writeFileSync(name, "");
}
function main() {
    const app = new App();
    try {
        const q = {
            question: "Enter File Or Folder Name: ",
        };
        if (isEmpty(q.question)) {
            console.log("Empty".toUpperCase());
        }
        if (q.question.startsWith("/Folder")) {
            if (fs1.existsSync(q.question)) {
                fs1.mkdirSync(q.question);
            }
        }
        else if (q.question.startsWith("/File")) {
            FileNameCreation(q.question);
            console.log("Created File Called: " + q.question);
        }
        app.setup(q.question);
    }
    catch (e) {
        console.log(e);
    }
}
main();
//# sourceMappingURL=main.js.map