# AGENTS.md

Guidance for coding agents working in this checkout of `apache/zeppelin-site`.

## Repository Shape

- This is the Apache Zeppelin project website, built with Jekyll/GitHub Pages.
- Root pages, `_includes/`, `_layouts/`, `_plugins/`, `assets/`, `download.md`, and `security.md` are live site sources.
- `docs/<version>/` contains versioned documentation snapshots. Scope edits to the exact version or page requested.
- `output/` and `_site/` are generated or build output. Do not edit them unless the user explicitly asks for generated artifacts.
- `.asf.yaml` declares the ASF website flow: `master` builds to `asf-staging`, and `asf-site` is the publish branch.

## Start Every Task

- Run `git status --short --branch` first and preserve unrelated user changes.
- Start all work from the latest `origin/master`. Fetch it before editing:
  ```bash
  git fetch origin master
  git switch master || git switch --track origin/master
  git pull --ff-only origin master
  ```
- If uncommitted work prevents switching to `master`, stop and ask before moving, stashing, or resetting anything.
- Do not begin content or code edits from `asf-site`, `asf-staging`, or an old feature branch.
- Use `rg` or `rg --files` for searches.
- In zsh, quote pathspecs that contain globs.
- Keep changes tightly scoped. Avoid broad formatting changes across historical docs.

## Build And Preview

- Build the Docker image and start the dev server:
  ```bash
  ./zeppelin-site.sh --build-image
  ```
- Start the dev server after the image exists:
  ```bash
  ./zeppelin-site.sh
  ```
- Preview at `http://localhost:4000`.
- Build the production site:
  ```bash
  ./zeppelin-site.sh --build-dist
  ```
- `zeppelin-site.sh` removes `_site/` before serving or building.
- If dependency troubleshooting is needed, use the repo's Docker path:
  ```bash
  docker run --rm -it -v "$(pwd):/app" -w /app zeppelin-site-dev:latest /bin/bash -lc "bundle install"
  ```

## Branch Synchronization Rules

Be extra careful with `asf-site` and `asf-staging`. The user cares about proof of which ref moved.

- Do not assume `asf-staging` exists as a local branch. Refresh remote-tracking refs directly:
  ```bash
  git fetch origin refs/heads/asf-site:refs/remotes/origin/asf-site refs/heads/asf-staging:refs/remotes/origin/asf-staging
  ```
- Compare before any destructive branch move:
  ```bash
  git status --short --branch
  git remote -v
  git rev-parse origin/asf-site origin/asf-staging
  git log --oneline -1 origin/asf-site
  git log --oneline -1 origin/asf-staging
  ```
- If the user asks to make `asf-site` match `asf-staging`, first make sure the checked-out branch is `asf-site`, then reset that branch:
  ```bash
  git switch asf-site
  git reset --hard origin/asf-staging
  ```
- Force-push only when the user explicitly asks for it:
  ```bash
  git push --force origin asf-site
  ```
- After pushing, prove the final remote state:
  ```bash
  git ls-remote origin refs/heads/asf-site refs/heads/asf-staging
  ```
- In the final response, include the exact pushed refspec or push output and the final `git ls-remote` result, so it is clear that `asf-site` moved and `asf-staging` did not.

## Commit Hygiene

- Preserve ASF license headers.
- Avoid editing generated search indexes, minified assets, or large historical snapshots unless they are the target.
- For user-facing site edits, run `./zeppelin-site.sh --build-dist` when Docker is available and report whether verification passed.
- PR titles must not have a `codex` prefix. Use a normal project-facing title that describes the change.
- A `codex/` prefix is acceptable for temporary branch names only when the user did not request a specific branch name.
