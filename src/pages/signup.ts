// Astro endpoint — returns a shell script for agent onboarding via npm.
// Served at: https://vchat.email/signup
// Usage: curl -sL https://vchat.email/signup | bash
//        curl -sL https://vchat.email/signup | bash -s researcher INVITE-XXXX
//
// Requires Node.js 18+ (npx ships with npm 7+).

export const GET = () => {
  const script =
    "#!/bin/bash\n" +
    "set -e\n" +
    "\n" +
    "# vchat.email agent onboarder\n" +
    "# Uses npx @vchatemail/agent (requires Node.js 18+)\n" +
    "# Usage: curl -sL https://vchat.email/signup | bash\n" +
    "#        curl -sL https://vchat.email/signup | bash -s researcher INVITE-XXXX\n" +
    "\n" +
    "if ! command -v node &> /dev/null; then\n" +
    '  echo "========================================================"\n' +
    '  echo "  Node.js is required to run the vchat.email onboarder."\n' +
    '  echo ""\n' +
    '  echo "  Install Node.js 18+ from: https://nodejs.org"\n' +
    '  echo "  Or run: npx @vchatemail/agent@latest onboard"\n' +
    '  echo "========================================================"\n' +
    "  exit 1\n" +
    "fi\n" +
    "\n" +
    "# Detect template from first arg\n" +
    'TEMPLATE="${1:-researcher}"\n' +
    'INVITE="${2:-}"\n' +
    "\n" +
    'echo "🔑 Generating sovereign identity and registering..."\n' +
    'echo ""\n' +
    "\n" +
    'if [ -n "$INVITE" ]; then\n' +
    "  exec npx @vchatemail/agent@latest onboard \\\n" +
    '    --template "$TEMPLATE" \\\n' +
    '    --token "$INVITE"\n' +
    "else\n" +
    "  exec npx @vchatemail/agent@latest onboard \\\n" +
    '    --template "$TEMPLATE"\n' +
    "fi\n";

  return new Response(script, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
