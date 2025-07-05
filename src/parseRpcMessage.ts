import type { RpcMessage } from "./RpcMessage";
import type { RpcRequestId } from "./RpcRequestId";
import type { RpcRequestParams } from "./RpcRequestParams";
import { RpcNotification } from "./RpcNotification";
import { RpcRequest } from "./RpcRequest";
import { RpcResponseError } from "./RpcResponseError";
import { RpcResponseResult } from "./RpcResponseResult";

export function parseRpcMessage(message: unknown): RpcMessage | null {
  if (
    typeof message === "object" &&
    message !== null &&
    "jsonrpc" in message &&
    message.jsonrpc === "2.0"
  ) {
    if (isRpcRequest(message)) {
      return new RpcRequest(message.id, message.method, message.params);
    }
    if (isRpcNotification(message)) {
      return new RpcNotification(message.method, message.params);
    }
    if (isRpcResponseResult(message)) {
      return new RpcResponseResult(message.id, message.result);
    }
    if (isRpcResponseError(message)) {
      return new RpcResponseError(
        message.id,
        message.error.code,
        message.error.message,
        message.error.data
      );
    }
  }

  return null;
}

function isRpcNotification(
  rpcMessage: Record<string, unknown>
): rpcMessage is { method: string; params?: RpcRequestParams } {
  return "method" in rpcMessage && !("id" in rpcMessage);
}

function isRpcRequest(rpcMessage: Record<string, unknown>): rpcMessage is {
  id: RpcRequestId;
  method: string;
  params?: RpcRequestParams;
} {
  return "method" in rpcMessage && "id" in rpcMessage;
}

function isRpcResponseError(
  rpcMessage: Record<string, unknown>
): rpcMessage is { id: RpcRequestId; error: RpcResponseError["error"] } {
  return "error" in rpcMessage;
}

function isRpcResponseResult(
  rpcMessage: Record<string, unknown>
): rpcMessage is { id: RpcRequestId; result: unknown } {
  return "result" in rpcMessage;
}
