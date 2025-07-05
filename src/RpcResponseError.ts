import type { RpcRequestId } from "./RpcRequestId.ts";

export class RpcResponseError {
  static readonly jsonrpc = "2.0";
  readonly id: RpcRequestId;
  readonly error: RpcResponseErrorObject;

  /**
   *
   * @param id The same as the value of the id member in the corresponding Request Object
   * @param code A Number that indicates the error type that occurred
   * @param message A String providing a short description of the error
   * @param data A Primitive or Structured value that contains additional information about the error
   */
  constructor(
    id: RpcRequestId,
    code: RpcResponseErrorObject["code"],
    message: RpcResponseErrorObject["message"],
    data?: RpcResponseErrorObject["data"]
  ) {
    this.id = id;
    this.error = {
      code,
      data,
      message,
    };
  }

  toJSON() {
    return JSON.stringify({
      error: this.error,
      id: this.id,
      jsonrpc: RpcResponseError.jsonrpc,
    });
  }
}

type RpcResponseErrorObject = {
  code: number;
  message: string;
  data?: unknown;
};
