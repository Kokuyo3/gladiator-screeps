import { Globals } from "../../Globals";
import { LogLevel } from "./LogLevel";

export class Log {
  private readonly level: LogLevel;
  private readonly fileName: string;

  public constructor(fileName: string) {
    this.fileName = fileName;
    this.level = Globals.logLevel;
  }

  public error(message: string): void {
    console.log(`ERROR [${this.fileName}] ${message}`);
  }

  public warn(message: string): void {
    if (this.level >= LogLevel.WARN) {
      console.log(`WARN [${this.fileName}] ${message}`);
    }
  }

  public info(message: string): void {
    if (this.level >= LogLevel.INFO) {
      console.log(`INFO [${this.fileName}] ${message}`);
    }
  }

  public debug(message: string): void {
    if (this.level >= LogLevel.DEBUG) {
      console.log(`DEBUG [${this.fileName}] ${message}`);
    }
  }
}
