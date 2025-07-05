# ts-rpc-2.0

A TypeScript implementation of [JSON-RPC 2.0](https://www.jsonrpc.org/specification)

## Usage

```typescript
import {
  RpcRequest,
  RpcResponseResult,
  RpcResponseError,
  parseRpcMessage,
} from "@e3m-io/ts-rpc-2.0";

webview.onDidReceiveMessage((message) => {
  const rpcMessage = parseRpcMessage(JSON.parse(message));

  if (rpcMessage instanceof RpcRequest) {
    switch (rpcMessage.method) {
      case "ping":
        webview.postMessage(
          new RpcResponseResult(rpcMessage.id, "pong").toJSON()
        );
        break;

      default:
        webview.postMessage(
          new RpcResponseError(
            rpcMessage.id,
            -32601,
            "Method not found"
          ).toJSON()
        );
    }
  } else {
    webview.postMessage(
      new RpcResponseError(rpcMessage.id, -32600, "Invalid Request").toJSON()
    );
  }
});
```
