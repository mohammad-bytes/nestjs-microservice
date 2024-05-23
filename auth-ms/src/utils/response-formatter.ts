export class ResponseFormatter {
    constructor(public statusCode: number, public message: string, public log: string, public data: any = null) {
        this.statusCode = statusCode;
        this.message=message;
        this.log = message;
        this.data = data;
    }
}