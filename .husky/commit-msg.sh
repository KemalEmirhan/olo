#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

node @commitlint/cli/lib/cli.js --edit $1