# SSH Setup for SmartHydra Landing Page Repository

## Quick SSH Setup Command

```bash
# Start SSH agent and add the correct key for this repository
eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519_opal
```

## Full SSH Setup Instructions

### 1. Check Available SSH Keys
```bash
ls -la ~/.ssh/
```

### 2. Start SSH Agent (if not running)
```bash
eval "$(ssh-agent -s)"
```

### 3. Add the Correct SSH Key
For the SmartHydra landing page repository, use:
```bash
ssh-add ~/.ssh/id_ed25519_opal
```

### 4. Verify SSH Connection
```bash
ssh -T git@github.com
```
Expected output: `Hi opalharmonyco! You've successfully authenticated...`

### 5. Check Git Remote Configuration
```bash
git remote -v
```
Should show: `origin git@github.com:opalharmonyco/smarthydra-landing.git`

## Troubleshooting

### If SSH Agent is Not Running
```bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add the key
ssh-add ~/.ssh/id_ed25519_opal
```

### If Wrong Key is Added
```bash
# List current keys
ssh-add -l

# Remove all keys
ssh-add -D

# Add the correct key
ssh-add ~/.ssh/id_ed25519_opal
```

### If Remote URL is Wrong
```bash
# Set correct SSH remote
git remote set-url origin git@github.com:opalharmonyco/smarthydra-landing.git
```

## Repository Information
- **Repository**: opalharmonyco/smarthydra-landing
- **SSH Key**: ~/.ssh/id_ed25519_opal (opalharmonyco@gmail.com)
- **Remote URL**: git@github.com:opalharmonyco/smarthydra-landing.git

## One-Line Setup
```bash
eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519_opal && git remote set-url origin git@github.com:opalharmonyco/smarthydra-landing.git
```
