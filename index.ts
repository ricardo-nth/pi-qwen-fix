/**
 * Qwen API Fix for pi
 * 
 * Fixes compatibility issues with Qwen's DashScope API:
 * 1. Tool arguments must be JSON objects, not stringified JSON
 * 2. Developer role is not supported (use system role instead)
 * 
 * @see https://github.com/ricardo-nth/pi-qwen-fix
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

// Your DashScope API key from https://dashscope.console.aliyun.com/
const QWEN_API_KEY = "YOUR_API_KEY";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("alibaba-qwen", {
    baseUrl: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    apiKey: QWEN_API_KEY,
    api: "openai-completions",
    models: [
      {
        id: "qwen-max-latest",
        name: "Qwen Max (Latest)",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 0.4, output: 1.2, cacheRead: 0.1, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-plus",
        name: "Qwen 3.5 Plus [FREE]",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen-turbo-latest",
        name: "Qwen Turbo (Latest)",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0.08, output: 0.3, cacheRead: 0.02, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen-coder-plus",
        name: "Qwen Coder Plus",
        reasoning: false,
        input: ["text"],
        cost: { input: 0.15, output: 0.6, cacheRead: 0.0375, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-122b-a10b",
        name: "Qwen 3.5 122B A10B [FREE]",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3-235b-a22b",
        name: "Qwen3 235B A22B",
        reasoning: true,
        input: ["text"],
        cost: { input: 0.8, output: 2.4, cacheRead: 0.2, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3-30b-a3b",
        name: "Qwen3 30B A3B",
        reasoning: true,
        input: ["text"],
        cost: { input: 0.2, output: 0.6, cacheRead: 0.05, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-flash",
        name: "Qwen 3.5 Flash [FREE]",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-flash-2026-02-23",
        name: "Qwen 3.5 Flash 2026-02-23 [FREE]",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-27b",
        name: "Qwen 3.5 27B [FREE]",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-35b-a3b",
        name: "Qwen 3.5 35B A3B [FREE]",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-397b-a17b",
        name: "Qwen 3.5 397B A17B [FREE]",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3.5-plus-2026-02-15",
        name: "Qwen 3.5 Plus 2026-02-15 [FREE]",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3-max-2026-01-23",
        name: "Qwen3 Max 2026-01-23 [FREE]",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3-vl-plus-2025-12-19",
        name: "Qwen3 VL Plus 2025-12-19 [FREE]",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3-vl-flash-2026-01-22",
        name: "Qwen3 VL Flash 2026-01-22 [FREE]",
        reasoning: false,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen3-coder-next",
        name: "Qwen3 Coder Next [FREE]",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen-plus-character",
        name: "Qwen Plus Character [FREE]",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen-flash-character",
        name: "Qwen Flash Character [FREE]",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      },
      {
        id: "qwen-mt-lite",
        name: "Qwen MT Lite [FREE]",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 32768,
        compat: { stringifyToolArguments: false, supportsDeveloperRole: false }
      }
    ]
  });
}
