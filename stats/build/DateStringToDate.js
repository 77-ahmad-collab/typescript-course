"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateStringToDate = void 0;
const DateStringToDate = (dateString) => {
    const dateParts = dateString
        .split("/")
        .map((value) => parseInt(value));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.DateStringToDate = DateStringToDate;
