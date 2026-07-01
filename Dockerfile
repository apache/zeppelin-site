# Use the latest official Ruby runtime as a parent image
FROM ruby:3.3.5

# Set the working directory to /app
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container at /app
COPY Gemfile Gemfile.lock ./

# Install bundler (pinned to the version recorded in Gemfile.lock's BUNDLED WITH)
RUN gem install bundler -v 4.0.13

# Install the project dependencies
RUN bundle install

# Specify the command to run when the container starts
CMD ["bundle", "exec", "jekyll", "serve", "--incremental", "--watch"]
