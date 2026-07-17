import { fs1 } from "../imports/imports.js";
import { App, FileNameCreation, isEmpty, OnErrorFile, } from "../Functions/Functions.js";
const main = () => {
    const q = getOnStrings();
    OnErrorFile(q);
};
const getOnStrings = () => {
    const q = {
        question: "Enter File Or Folder Name: ",
    };
    if (isEmpty(q.question)) {
        console.log("Empty".toUpperCase());
    }
    return q;
};
main();
//# sourceMappingURL=main.js.map