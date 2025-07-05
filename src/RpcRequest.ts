import type { RpcRequestId } from "./RpcRequestId.ts";
import type { RpcRequestParams } from "./RpcRequestParams.ts";

export class RpcRequest {
  static readonly jsonrpc = "2.0";
  readonly method: string;
  readonly id: RpcRequestId;
  readonly params?: RpcRequestParams;

  /**
   *
   * @param method A String containing the name of the method to be invoked
   * @param id An identifier established by the Client
   * @param params A Structured value that holds the parameter values to be used during the invocation of the method
   */
  constructor(method: string, id: RpcRequestId, params?: RpcRequestParams) {
    this.method = method;
    this.id = id;
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
