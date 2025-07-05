import type { RpcNotification } from "./RpcNotification";
import type { RpcRequest } from "./RpcRequest";
import type { RpcResponse } from "./RpcResponse";

export type RpcMessage = RpcRequest | RpcNotification | RpcResponse;
