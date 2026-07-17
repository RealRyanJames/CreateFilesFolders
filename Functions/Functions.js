import { question } from "readline-sync";
import { fs1 } from "../imports/imports.js";
export function getUserAnswer(questionUser) {
    return question(questionUser.toString());
}
export class App {
    setup(setupApp) {
        return getUserAnswer(setupApp);
    }
}
export const isEmpty = (e) => {
    return e === "";
};
export const GetFile = (file) => {
    return file.toLowerCase();
};
export function FileNameCreation(name) {
    let file = GetFile(name);
    return fs1.writeFileSync(file, "");
}
export const OnErrorFile = (q) => {
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
    }
    catch (e) {
        console.log(e);
    }
};
//# sourceMappingURL=Functions.js.map