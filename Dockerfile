# Use the latest official Ruby runtime as a parent image
FROM ruby:3.0.6

# Set the working directory to /app
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container at /app
COPY Gemfile Gemfile.lock ./

# Install bundler
RUN gem install bundler

# Install the project dependencies
RUN bundle install

# Specify the command to run when the container starts
CMD ["bundle", "exec", "jekyll", "serve", "--incremental", "--watch"]
