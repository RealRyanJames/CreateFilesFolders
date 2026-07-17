import { type FILENAME, type UserQuestion } from "../imports/imports.js";
export declare function getUserAnswer(questionUser: string): UserQuestion | string;
export declare class App {
    setup(setupApp: string): string | UserQuestion;
}
export declare const isEmpty: (e: string) => e is "";
export declare const GetFile: (file: FILENAME) => string;
export declare function FileNameCreation(name: string): void;
export declare const OnErrorFile: (q: UserQuestion) => void;
//# sourceMappingURL=Functions.d.ts.map