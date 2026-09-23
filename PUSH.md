# Pushing this repository to GitHub

The remote already points to `https://github.com/Sngular-PGH/design-system.git`.

## If the GitHub repository is empty

```bash
cd sngular-design-system
git push -u origin main
```

## If it already has content (README, license, etc.)

```bash
cd sngular-design-system
git pull origin main --allow-unrelated-histories --no-rebase
# resolve conflicts if they appear (usually only in README.md), then:
git add . && git commit -m "Merge Sngular Design System v1"
git push -u origin main
```

If the repository's default branch is called `master` instead of `main`, swap `main` for `master` in the commands above.
If you'd rather review it first, push a branch: `git checkout -b design-system-v1 && git push -u origin design-system-v1` and open a Pull Request.
