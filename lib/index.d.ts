declare type LogType = "INFO" | "ERROR" | "WARNING";
declare const log: (message: string, { type }?: {
    type: LogType;
}) => void;
export default log;
