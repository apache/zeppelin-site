---
layout: page
title: "Security"
description: "This page explains what security characteristics can be expected from Apache Zeppelin, what measures operators of a Zeppelin instance will have to take, and how to report any security issues found in the Zeppelin software."
group:
---
<!--
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
{% include JB/setup %}

# Zeppelin Security

This page explains what security characteristics can be expected from
Apache Zeppelin, what measures operators of a Zeppelin instance will have to
take, and how to report any security issues found in the Zeppelin
software.

## Code execution on the server

It is the nature of the Zeppelin software that it allows
uploading code from the browser and executing it on the server.

Because of this, you should make sure your Zeppelin instance is only
available to trusted users, and the server on which Zeppelin is
installed does not contain any secrets or have privileges beyond
those the users are trusted with.

All interpreters should be assumed to be able to access the local 
shell and execute arbitrary commands with the privileges of the user
running the Zeppelin server. As generic interpreters such as sh, Groovy,
Java and Python make this especially trivial, we plan to disable the sh
interpreter by default from version 0.11.1 onward.

### JDBC Interpreter

This is the component that we get the most Security reports about.
Many JDBC drivers have support for specifying powerful query parameters in the
JDBC URLs. Many of the driver jars have security issues that are fixed in newer
versions. Zeppelin users should be very careful about which jars they add to their
Zeppelin deployments. Always use the latest available jars and ensure that you
set up Zeppelin on a secure network to stop malicious users gaining access to
your deployment (see below).

**Note:** The JDBC connection string (URL) can accept a variety of parameters, some of which may have significant security implications. In untrusted or shared environments, you must carefully review and monitor all parameters included in the JDBC URL. Certain parameters can enable features such as external network access, file access, or privilege escalation, which may introduce security risks. Always ensure that only safe and intended parameters are used, and regularly audit connection strings for suspicious or unnecessary options.

### Zeppelin on Docker

When the Zeppelin interpreter is [run in a Docker container](https://zeppelin.apache.org/docs/latest/quickstart/docker.html),
this isolates the operating environment of the interpreter through the Docker container.
This isolation can provide an operational benefit on large deployments, but is not intended as a security boundary:
access to your Zeppelin instances should be restricted regardless of how they are deployed.

### Zeppelin on Kubernetes

When Zeppelin is [deployed on Kubernetes](https://zeppelin.apache.org/docs/latest/quickstart/kubernetes.html),
Zeppelin creates pods for individual interpreters.
Also, the Spark interpreter is auto configured to use Spark on Kubernetes in client mode.
This isolation can provide an operational benefit on large deployments, but is not intended as a security boundary:
access to your Zeppelin instances should be restricted regardless of how they are deployed.

## JavaScript code execution in the browser

Zeppelin allows notes to produce rich output, including HTML and even
executing JavaScript code. This means that when users view each others'
notes, HTML and JavaScript controlled by the creator of the note will
be executed in the browser that views it.

Because of this, you should make sure your Zeppelin instance is only
available to trusted users. When deploying Zeppelin on a domain that
is shared with other applications, appropriate measures may have to be
taken to avoid a compromised Zeppelin notebook to also grant access
to other services on the same domain.

## Authentication

If you expose your Zeppelin instance on a network you don't fully trust,
you should configure [Apache Shiro authentication](https://zeppelin.apache.org/docs/latest/setup/security/shiro_authentication.html).

Non-authenticated users cannot view, store or execute notes, so they
cannot execute code on the server or on other users' browsers.
Authenticated users, however, have the same access as described above,
so even when using authentication it is still important to only give
trusted users access to Zeppelin. Specifically, users technically
have access to all notes by other users.

## Executable verification

When running Zeppelin service, be mindful that it utilizes executables
which might be pre-installed on your server or container. These
executables could potentially be altered for malicious purposes. 
To mitigate this risk, it's recommended to set the paths to trusted
locations for these executables, such as PYTHON and SPARK_HOME.

# Known Security Issues

It is always best to use the latest Apache Zeppelin [release](https://zeppelin.apache.org/download.html).
A good place to check for CVE announcements is the [Zeppelin users mailing list](https://lists.apache.org/list?users@zeppelin.apache.org).
Many third party sites maintain lists of CVEs by product. One example is [OpenCVE](https://app.opencve.io/cve/?vendor=apache&product=zeppelin).

# Reporting Security Issues

If you have found a potential security issue in Apache Zeppelin,
such as a way to bypass the Shiro authentication,
we encourage you to report this problem at
[security@zeppelin.apache.org](mailto:security@zeppelin.apache.org).
This is a private mailing list. Please send one plain-text email
for each vulnerability you are reporting.

## Vulnerability handling

An overview of the vulnerability handling process is:

* The reporter reports the vulnerability privately to [security@zeppelin.apache.org](mailto:security@zeppelin.apache.org).
* The Zeppelin project security team works privately with the reporter to resolve the vulnerability.
* The Zeppelin project creates a new release of the package the vulnerability affects to deliver its fix.
* The Zeppelin project publicly announces the vulnerability and describes how to apply the fix.

Committers should read a [more detailed description of the process](https://www.apache.org/security/committers.html). Reporters of security vulnerabilities may also find it useful.
