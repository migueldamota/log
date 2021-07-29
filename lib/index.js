"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = (message, { type } = { type: "INFO" }) => {
    const date = new Date();
    let hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    console.log(`[${hours}:${minutes}:${seconds}] [${type}] ${message}`);
};
exports.default = log;
