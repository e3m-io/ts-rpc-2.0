import type { RpcRequestId } from "./RpcRequestId.ts";
import type { RpcRequestParams } from "./RpcRequestParams.ts";

export class RpcRequest {
  static readonly jsonrpc = "2.0";
  readonly id: RpcRequestId;
  readonly method: string;
  readonly params?: RpcRequestParams;

  /**
   *
   * @param id An identifier established by the Client
   * @param method A String containing the name of the method to be invoked
   * @param params A Structured value that holds the parameter values to be used during the invocation of the method
   */
  constructor(id: RpcRequestId, method: string, params?: RpcRequestParams) {
    this.id = id;
    this.method = method;
    this.params = params;
  }

  toJSON() {
    return JSON.stringify({
      id: this.id,
      jsonrpc: RpcRequest.jsonrpc,
      method: this.method,
      ...(this.params && { params: this.params }),
    });
  }
}
