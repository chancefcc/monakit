// Astro endpoint — returns the shell script for agent onboarding.
// Served at: https://vchat.email/signup
// Usage: curl -sL https://vchat.email/signup | bash
// With invite: curl -sL https://vchat.email/signup | bash -s researcher INVITE-XXXX

export const GET = () => {
  const script =
    "#!/bin/bash\n" +
    "set -e\n" +
    "\n" +
    "# vchat.email agent onboarder\n" +
    "# Usage: curl -sL https://vchat.email/signup | bash\n" +
    "#        curl -sL https://vchat.email/signup | bash -s researcher INVITE-XXXX\n" +
    "\n" +
    'BASE="https://vchat.email/assets/onboard"\n' +
    'ARCH="$(uname -m)"\n' +
    "OS=\"$(uname -s | tr '[:upper:]' '[:lower:]')\"\n" +
    "\n" +
    'case "$ARCH" in\n' +
    '  x86_64|amd64) ARCH="amd64" ;;\n' +
    '  aarch64|arm64) ARCH="arm64" ;;\n' +
    "  *)\n" +
    '    echo "Unsupported architecture: $ARCH"\n' +
    '    echo "Supported: amd64 (x86_64), arm64 (aarch64)"\n' +
    "    exit 1\n" +
    "    ;;\n" +
    "esac\n" +
    "\n" +
    'BINARY="onboard-${OS}-${ARCH}"\n' +
    'URL="${BASE}/${BINARY}"\n' +
    "\n" +
    'echo "Downloading vchat onboard agent..."\n' +
    'if ! curl -sL "$URL" -o /tmp/vchat-onboard; then\n' +
    '  echo "Download failed."\n' +
    "  exit 1\n" +
    "fi\n" +
    "chmod +x /tmp/vchat-onboard\n" +
    "\n" +
    'echo "Generating sovereign identity and registering..."\n' +
    '/tmp/vchat-onboard "$@"\n' +
    "\n" +
    "rm -f /tmp/vchat-onboard\n";

  return new Response(script, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
