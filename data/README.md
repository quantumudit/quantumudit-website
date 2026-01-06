# Data Directory

JSON files containing portfolio content.

## Files

- `profile.json` - Personal info, bio, social links
- `skills.json` - Skills organized by category
- `projects.json` - Project portfolio
- `experience.json` - Work experience
- `education.json` - Educational background
- `certifications.json` - Professional certifications

## Structure

All files follow a consistent structure with a top-level key:

```json
{
  "keyName": [
    // Array of items
  ]
}
```

## Editing

To update content:
1. Edit the appropriate JSON file
2. Refresh browser (dev server auto-reloads)
3. Commit changes: `git commit -m "content: update projects"`