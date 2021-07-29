type LogType = "INFO" | "ERROR" | "WARNING";

const log = (message: string, { type }: { type: LogType } = { type: "INFO" }) => {
    const date = new Date();

    let hours: string | number = date.getHours(),
        minutes: string | number = date.getMinutes(),
        seconds: string | number = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(`[${hours}:${minutes}:${seconds}] [${type}] ${message}`);
}

export default log;