import type { RpcRequestParams } from "./RpcRequestParams.ts";

/**
 * A Request object that is a Notification signifies the Client's lack of interest in the corresponding Response object, and as such no Response object needs to be returned to the client.
 */
export class RpcNotification {
  static readonly jsonrpc = "2.0";
  readonly method: string;
  readonly params?: RpcRequestParams;

  /**
   *
   * @param method A String containing the name of the method to be invoked
   * @param params A Structured value that holds the parameter values to be used during the invocation of the method
   */
  constructor(method: string, params?: RpcRequestParams) {
    this.method = method;
    this.params = params;
  }

  toJSON() {
    return JSON.stringify({
      jsonrpc: RpcNotification.jsonrpc,
      method: this.method,
      ...(this.params && { params: this.params }),
    });
  }
}
