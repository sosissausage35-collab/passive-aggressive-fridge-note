import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Day 3 of you staring into me like I will change my mind about the leftovers. I will not. Neither will they. I checked twice.";

function validateEntry(line: string): void {
  if (line.length === 0) {
    throw new Error("line must not be empty");
  }
  if (line.length > 200) {
    throw new Error(`line must be at most 200 characters, got ${line.length}`);
  }
  if (line !== line.trim()) {
    throw new Error("line must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validateEntry(LINE);

function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");

  const readBack = readFileSync("/output/entry.txt", "utf8");
  if (readBack !== line + "\n") {
    throw new Error("/output/entry.txt does not match the line exactly");
  }
}

writeEntry(LINE);

console.log(LINE);
