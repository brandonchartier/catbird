# Catbird
Watch files, run npm scripts

## Config schema

```json
[
	{
		"path": "src/**/*.js",
		"cmd": "build"
	},
	{
		"path": "src/**/*.scss",
		"cmd": "sass"
	}
]
```

## CLI Usage

- `catbird [options]`
- `-c --config` - JSON schema to use, defaults to "catbird.json"

## Example

`catbird -c watcher.json`
