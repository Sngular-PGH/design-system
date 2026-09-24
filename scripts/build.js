#!/usr/bin/env node
"use strict";

// Keeps the skill's copies of the shared assets identical to design-system/
// and repackages dist/sngular-design.skill.
//
//   npm run build   copy assets, then rebuild the .skill zip
//   npm run check   fail if any copy differs from design-system/ (no writes)

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DS = path.join(ROOT, "design-system");
const SKILL = path.join(ROOT, "skills", "sngular-design");
const DIST = path.join(ROOT, "dist", "sngular-design.skill");

// [source in design-system/, destination in the skill]
function assetPairs() {
  const pairs = [
    ["tokens.json", "assets/tokens.json"],
    ["tokens.css", "assets/tokens.css"],
    ["fonts/Outfit-VariableFont_wght.ttf", "assets/fonts/Outfit-VariableFont_wght.ttf"],
    ["fonts/OFL.txt", "assets/fonts/OFL.txt"],
  ];
  for (const f of fs.readdirSync(path.join(DS, "assets", "logos"))) {
    if (f.endsWith(".svg")) pairs.push([`assets/logos/${f}`, `assets/logos/${f}`]);
  }
  return pairs.map(([s, d]) => [path.join(DS, s), path.join(SKILL, d)]);
}

function same(a, b) {
  return fs.existsSync(b) && fs.readFileSync(a).equals(fs.readFileSync(b));
}

function check() {
  const drift = assetPairs().filter(([s, d]) => !same(s, d));
  for (const [s, d] of drift) {
    console.error(`Out of sync: ${path.relative(ROOT, d)} (source: ${path.relative(ROOT, s)})`);
  }
  if (drift.length) {
    console.error("Run `npm run build` to fix.");
    process.exit(1);
  }
  console.log("Skill assets match design-system/.");
}

function build() {
  for (const [s, d] of assetPairs()) {
    if (same(s, d)) continue;
    fs.mkdirSync(path.dirname(d), { recursive: true });
    fs.copyFileSync(s, d);
    console.log(`Copied ${path.relative(ROOT, s)} -> ${path.relative(ROOT, d)}`);
  }

  // The zip's root folder must be named after the skill.
  fs.rmSync(DIST, { force: true });
  fs.mkdirSync(path.dirname(DIST), { recursive: true });
  execFileSync(
    "zip",
    ["-rqX", DIST, "sngular-design", "-x", "*/evals/*", "*.DS_Store"],
    { cwd: path.join(ROOT, "skills"), stdio: "inherit" }
  );
  console.log(`Packaged ${path.relative(ROOT, DIST)}`);
}

if (process.argv.includes("--check")) check();
else build();
