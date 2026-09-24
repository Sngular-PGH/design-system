#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "sngular-design";

function parseArgs(argv) {
  const args = { global: false, force: false, help: false };
  for (const a of argv) {
    if (a === "--global" || a === "-g") args.global = true;
    else if (a === "--force" || a === "-f") args.force = true;
    else if (a === "--help" || a === "-h") args.help = true;
  }
  return args;
}

function printHelp() {
  console.log(`
install-sngular-skill

Installs the "${SKILL_NAME}" Claude Code skill.

Usage:
  npx github:Sngular-PGH/design-system [options]

Options:
  -g, --global   Install to ~/.claude/skills/${SKILL_NAME} (all your projects)
                 Default: install to ./.claude/skills/${SKILL_NAME} (this project only)
  -f, --force    Replace an existing installation (use this to upgrade)
  -h, --help     Show this help
`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  // This script lives at <repo-root>/bin/install.js, and the skill source
  // lives at <repo-root>/skills/sngular-design. npx clones the whole repo
  // before running the bin script, so this relative path is always valid.
  const source = path.join(__dirname, "..", "skills", SKILL_NAME);

  if (!fs.existsSync(source)) {
    console.error(`Could not find skill source at ${source}.`);
    console.error("Are you running this from the design-system repo?");
    process.exit(1);
  }

  const destRoot = args.global
    ? path.join(os.homedir(), ".claude", "skills")
    : path.join(process.cwd(), ".claude", "skills");
  const dest = path.join(destRoot, SKILL_NAME);

  if (fs.existsSync(dest) && !args.force) {
    console.error(`Skill already installed at ${dest}`);
    console.error("Re-run with --force to overwrite it.");
    process.exit(1);
  }

  // Replace rather than merge, so files removed in a newer version don't linger.
  if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(destRoot, { recursive: true });
  fs.cpSync(source, dest, {
    recursive: true,
    filter: (src) => path.basename(src) !== "evals" && path.basename(src) !== ".DS_Store",
  });

  console.log(`Installed "${SKILL_NAME}" to ${dest}`);
  console.log(
    args.global
      ? "Available to Claude Code across all your projects."
      : "Available to Claude Code in this project. Commit .claude/skills/ if you want it shared via git."
  );
}

main();
