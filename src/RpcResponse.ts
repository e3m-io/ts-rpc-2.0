import type { RpcResponseError } from "./RpcResponseError";
import type { RpcResponseResult } from "./RpcResponseResult";

export type RpcResponse = RpcResponseResult | RpcResponseError;
