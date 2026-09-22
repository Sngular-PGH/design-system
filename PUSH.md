# Subir este repositorio a GitHub

El remoto ya apunta a `https://github.com/Sngular-PGH/design-system.git`.

## Si el repositorio de GitHub está vacío

```bash
cd sngular-design-system
git push -u origin main
```

## Si ya tiene contenido (README, licencia, etc.)

```bash
cd sngular-design-system
git pull origin main --allow-unrelated-histories --no-rebase
# resuelve los conflictos si aparecen (normalmente solo en README.md), y después:
git add . && git commit -m "Merge Sngular Design System v1"
git push -u origin main
```

Si la rama por defecto del repositorio se llama `master` en lugar de `main`, cambia `main` por `master` en los comandos.
Si prefieres revisarlo antes, sube una rama: `git checkout -b design-system-v1 && git push -u origin design-system-v1` y abre un Pull Request.
