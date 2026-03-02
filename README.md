# pi-qwen-fix

A [pi](https://github.com/badlogic/pi) extension that fixes Qwen API compatibility issues with the `alibaba-qwen` provider.

## Problem

Qwen's DashScope API has two incompatibilities with the standard OpenAI API format:

1. **Tool arguments**: Qwen expects `function.arguments` to be a JSON **object**, not a stringified JSON string
2. **Developer role**: Qwen doesn't support the `developer` role (used by OpenAI for reasoning models)

This causes errors like:
```
Error: <400> InternalError.Algo.InvalidParameter: The "function.arguments" parameter of the code model must be in JSON format.
Error: 400 developer is not one of ['system', 'assistant', 'user', 'tool', 'function']
```

## Solution

This extension overrides the `alibaba-qwen` provider with the correct compatibility settings:
- `stringifyToolArguments: false` - Sends tool arguments as JSON objects
- `supportsDeveloperRole: false` - Uses "system" role instead of "developer"

## Installation

### Option 1: Local Installation

1. Clone or download this repository to your pi extensions directory:
   ```bash
   git clone https://github.com/ricardo-nth/pi-qwen-fix.git ~/.pi/agent/extensions/qwen-fix
   ```

2. Add the extension to your `~/.pi/agent/settings.json`:
   ```json
   {
     "packages": [
       "./extensions/qwen-fix"
     ]
   }
   ```

3. Restart pi

### Option 2: NPM Package (Recommended)

Once published to npm:

```bash
npm install -g pi-qwen-fix
```

Then add to `~/.pi/agent/settings.json`:
```json
{
  "packages": [
    "npm:pi-qwen-fix@1.0.0"
  ]
}
```

## Usage

After installation, all Qwen models from the `alibaba-qwen` provider will work correctly with tool calling and reasoning features.

### Available Models

- `qwen-max-latest` - Qwen Max (Latest)
- `qwen3.5-plus` - Qwen 3.5 Plus (Free)
- `qwen3.5-397b-a17b` - Qwen 3.5 397B A17B (Free)
- `qwen3.5-flash` - Qwen 3.5 Flash (Free)
- And 15+ more Qwen models

## Configuration

The extension automatically configures all Qwen models with the correct compatibility settings. No additional configuration is needed.

If you need to customize your API key, edit the extension's `index.ts` file and update the `apiKey` field.

## Why This Exists

This fix should ideally be part of pi's core `alibaba-qwen` provider definition. However, until it's merged upstream, this extension provides a workaround that survives pi updates.

### For pi Maintainers

The fix requires adding these compat settings to the `alibaba-qwen` provider in pi's models.json:

```json
{
  "id": "qwen3.5-plus",
  "name": "Qwen 3.5 Plus",
  "reasoning": true,
  "input": ["text", "image"],
  "cost": { "input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0 },
  "contextWindow": 128000,
  "maxTokens": 32768,
  "compat": {
    "stringifyToolArguments": false,
    "supportsDeveloperRole": false
  }
}
```

And updating the auto-detection in `openai-completions.ts` to recognize Qwen's DashScope API.

## License

MIT

## Contributing

Feel free to submit issues or PRs if you encounter other Qwen API compatibility issues!
