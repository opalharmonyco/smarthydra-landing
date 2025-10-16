# Deploy Landing Page

Deploys the SmartHydra landing page to production by committing changes and pushing to the main branch.

## Usage

```
/deploy-landing-page
```

## What it does

1. **Validates Environment**: Checks if you're in the correct repository directory
2. **Checks for Changes**: Verifies there are changes to commit
3. **Shows Status**: Displays current git status
4. **Adds Changes**: Stages all modified files
5. **Generates Commit Message**: Creates a meaningful commit message based on file types
6. **Commits Changes**: Creates a commit with descriptive message
7. **Sets up SSH**: Ensures SSH authentication is configured
8. **Pushes to Main**: Deploys to the main branch
9. **Triggers Deployment**: Vercel automatically deploys the changes

## Requirements

- Must be run from the `smarthydra-landing-page/` directory
- Git must be configured with proper remote
- SSH key must be set up for GitHub authentication (use `/ssh-setup` if needed)

## Commit Message Format

The command automatically generates commit messages based on the types of files changed:

- **Style changes** (`.scss`, `.css`): `style(landing-page): Update styling and layout`
- **JavaScript changes** (`.js`): `feat(landing-page): Update JavaScript functionality`
- **HTML changes** (`.html`): `feat(landing-page): Update page content and structure`
- **Documentation** (`.md`, `.txt`): `docs(landing-page): Update documentation`
- **Other changes**: `feat(landing-page): Update landing page`

## Example Output

```
🚀 Deploying SmartHydra Landing Page...
📋 Current git status:
M  css/main.css
M  js/translations.js
📦 Adding all changes...
💬 Commit message:
feat(landing-page): Update JavaScript functionality

Files changed:
  - css/main.css
  - js/translations.js

Auto-deployed via Cursor command

💾 Committing changes...
📤 Pushing to main branch...
🎉 Successfully deployed to production!
🌐 Vercel will automatically deploy the changes
```

## Troubleshooting

### SSH Authentication Issues
If you get SSH authentication errors, run:
```
/ssh-setup
```

### No Changes to Commit
If there are no changes, the command will exit gracefully:
```
✅ No changes to commit. Repository is up to date.
```

### Push Failures
If the push fails, the command will suggest running `/ssh-setup` to fix authentication.

## Related Commands

- `/ssh-setup` - Configure SSH authentication for the repository
- Standard git commands for manual operations

## Deployment Flow

1. **Local Changes** → 2. **Git Commit** → 3. **GitHub Push** → 4. **Vercel Auto-Deploy** → 5. **Live Site**

The entire process typically takes 1-2 minutes from command execution to live deployment.
