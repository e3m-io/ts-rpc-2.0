import type { RpcRequestId } from "./RpcRequestId";

export class RpcResponseResult {
  static readonly jsonrpc = "2.0";
  readonly id: RpcRequestId;
  readonly result: unknown;

  /**
   *
   * @param id The same as the value of the id member in the corresponding Request Object
   * @param result The result of the method called in the corresponding Request Object
   */
  constructor(id: RpcRequestId, result: unknown) {
    this.id = id;
    this.result = result;
  }

  toJSON() {
    return JSON.stringify({
      id: this.id,
      jsonrpc: RpcResponseResult.jsonrpc,
      result: this.result,
    });
  }
}
