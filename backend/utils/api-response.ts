type API_RESPONSE_STATUS = "success" | "error";

export class API_RESPONSE {
  private status: API_RESPONSE_STATUS; 
  private code: number;
  private message: string;

  constructor(status: API_RESPONSE_STATUS, code: number, message: string) {
    this.status = status;
    this.code = code;
    this.message = message;
  }
}