## Zeppelin Project Website
This readme will walk you through building the Zeppelin website

## Requirements
- **Docker**: Ensure Docker is installed and running on your machine.
- **Ruby**: Check that your Ruby version is compatible with all gems listed in the Gemfile.

## Develop website

Follow these steps to set up and run the development environment:

**1. Clone the Repository**
```bash
$ git clone <repository-url>
$ cd <repository-directory>
```

**2. Ensure Docker is Running**:

Make sure Docker is installed and running on your machine. Below is an example how.
```bash
$ open -a Docker
```

**3. Build the Docker Image**:
```bash
$ ./zeppelin-site.sh --build-image
```

**4. Run the Development Server**:
```bash
$ ./zeppelin-site.sh
```

**5. Open the Website**:

Open your web browser and go to [http://localhost:4000](http://localhost:4000) or [http://127.0.0.1:4000](http://127.0.0.1:4000).

### Adding a new page

```bash
$  rake page name="new-page.md"
```

## Build  website

Follow these steps to build the production site:

**1. Build the Production Site**:
```bash
$ ./zeppelin-site.sh --build-dist
```

**2. The built site will be available in the _site directory.**

## Publish website

ASF Infra builds `master` to the `asf-staging` branch according to `.asf.yaml`.
After checking [https://zeppelin.staged.apache.org](https://zeppelin.staged.apache.org),
committers with write access can manually promote the staged site to production:

1. Open the `Promote ASF staging to site` workflow in GitHub Actions.
2. Click `Run workflow` on the `master` branch.
3. Type `promote` in the `confirm` input.
4. Run the workflow.

The workflow fetches `asf-site` and `asf-staging`, resets `asf-site` to
`asf-staging`, pushes with `--force-with-lease`, and verifies that both remote
branches point to the same commit.

## Troubleshooting and Notes:
Ensure all dependencies are correctly listed and installed. 

If you encounter issues, you may need to run:
```bash
$ docker run --rm -it -v "$(pwd):/app" zeppelin-site-dev:latest /bin/bash
$ bundle install
```

Dockerfile and Gemfile Adjustments: 
- Updates to the Dockerfile or Gemfile may include necessary system dependencies for gems like Nokogiri. 
- Refer to these files for specific details.
