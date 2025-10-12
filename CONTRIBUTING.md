# Contributing to Opineeo Widget

Thank you for your interest in Opineeo Widget!

## Proprietary Software Notice

This is proprietary software owned by OBRA GURU SERVIÇOS DIGITAIS LTDA. External contributions are not accepted at this time.

## Internal Development Guidelines

For internal team members:

### Code Standards

- Follow the existing code style
- Use TypeScript for type safety
- Write mobile-first, responsive code
- Use Tailwind CSS for styling
- Follow accessibility best practices (ARIA labels, keyboard navigation)
- Use descriptive variable and function names
- Implement early returns for better readability

### Component Guidelines

- Use functional components with hooks
- Define types for all props
- Use `const` instead of `function` for component definitions
- Prefix event handlers with "handle" (e.g., `handleClick`, `handleSubmit`)
- Add proper ARIA attributes for accessibility

### Before Committing

1. Run linter: `npm run lint`
2. Build the project: `npm run build`
3. Test the demo: `npm run dev`
4. Update CHANGELOG.md if applicable
5. Update version in package.json following semantic versioning

### Commit Messages

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add custom trigger icon prop
fix: resolve mobile overflow issue
docs: update installation instructions
```

## Questions?

Contact: support@opineeo.com

