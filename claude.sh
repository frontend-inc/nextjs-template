#!/bin/bash

# 1. Sync the current date automatically in Linux
timedatectl set-ntp true

# 2. Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# 3. Execute claude
claude