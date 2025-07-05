type ByPositionParams = unknown[];
type ByNameParams = Record<string, unknown>;

export type RpcRequestParams = ByPositionParams | ByNameParams;
