const fs = require("fs");
const path = require("path");

const DIST = path.resolve(__dirname, "dist");
const FONTS_SRC = path.resolve(__dirname, "fonts");
const FONTS_DIST = path.join(DIST, "fonts");
const HEADERS_SRC = path.resolve(__dirname, "_headers");

// Clean & create output directories
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true });
}
fs.mkdirSync(FONTS_DIST, { recursive: true });

// Copy all font files
const files = fs.readdirSync(FONTS_SRC);
for (const file of files) {
  fs.copyFileSync(path.join(FONTS_SRC, file), path.join(FONTS_DIST, file));
  console.log(`  ✓ fonts/${file}`);
}

// Copy _headers to dist root
if (fs.existsSync(HEADERS_SRC)) {
  fs.copyFileSync(HEADERS_SRC, path.join(DIST, "_headers"));
  console.log("  ✓ _headers");
}

console.log(`\nBuild complete → ${files.length} font files copied to dist/`);
