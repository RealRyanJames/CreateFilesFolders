import fs from "fs";
import { question } from "readline-sync";
function getUserAnswer(questionUser) {
    return question(questionUser.toString());
}
class App {
    setup(setupApp) {
        return getUserAnswer(setupApp);
    }
}
function main() {
    const app = new App();
    try {
        const q = {
            question: "Enter File Or Folder Name: ",
        };
        if (q.question.startsWith("/Folder")) {
            if (fs.existsSync(q.question)) {
                fs.mkdirSync(q.question);
            }
        }
        else if (q.question.startsWith("/File")) {
            const fileName = question("Enter File Name: ").toUpperCase();
            fs.writeFileSync(fileName, "");
            console.log("Created File Called: " + fileName);
        }
        app.setup(q.question);
    }
    catch (e) {
        console.log(e);
    }
}
main();
//# sourceMappingURL=main.js.map