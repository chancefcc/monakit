#!/bin/bash
set -e

# Build the onboard binary for all target platforms
# Output: landing/public/assets/onboard/

OUTPUT_DIR="$(dirname "$0")/../public/assets/onboard"
mkdir -p "$OUTPUT_DIR"

cd "$(dirname "$0")/../../vgate"

PLATFORMS=(
  "linux/amd64"
  "linux/arm64"
  "darwin/amd64"
  "darwin/arm64"
)

for PLATFORM in "${PLATFORMS[@]}"; do
  GOOS="${PLATFORM%/*}"
  GOARCH="${PLATFORM#*/}"
  BINARY="onboard-${GOOS}-${GOARCH}"

  echo "Building $BINARY..."
  GOOS=$GOOS GOARCH=$GOARCH go build -o "../vchat-landing/public/assets/onboard/$BINARY" ./cmd/onboard/
done

echo "Generating checksums..."
cd "$OUTPUT_DIR"
if command -v sha256sum &> /dev/null; then
	sha256sum onboard-* > sha256sums.txt
elif command -v shasum &> /dev/null; then
	shasum -a 256 onboard-* > sha256sums.txt
else
	echo "Warning: no SHA-256 tool found, skipping checksums"
fi
cat sha256sums.txt 2>/dev/null || true

echo "✅ Binaries built in $OUTPUT_DIR"
ls -lh "$OUTPUT_DIR"
