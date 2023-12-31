---
layout: page
title: Zeppelin
tagline: Less Development, More analysis!
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
<br />
<h1 class="index-header">
  What is Apache Zeppelin ?
</h1>

<br /><br /><br />
<div class="row">
  <div class="col-md-6" style="padding-right:0">
    <h1 style="color:#4c555a">Multi-purpose Notebook</h1>
    <p>
      The Notebook is the place for all your needs
    </p>
    <ul style="list-style-type: none;padding-left:10px;" >
      <li style="font-size:18px; margin: 5px;"><span class="glyphicon glyphicon-import" style="margin-right:10px"></span> Data Ingestion</li>
      <li style="font-size:18px; margin: 5px;"><span class="glyphicon glyphicon-eye-open" style="margin-right:10px"></span> Data Discovery</li>
      <li style="font-size:18px; margin: 5px;"><span class="glyphicon glyphicon-wrench" style="margin-right:10px"></span> Data Analytics</li>
      <li style="font-size:18px; margin: 5px;"><span class="glyphicon glyphicon-dashboard" style="margin-right:10px"></span> Data Visualization & Collaboration</li>
    </ul>
  </div>
  <div class="col-md-6" style="padding:0">
    <img class="img-responsive" style="border: 1px solid #ecf0f1;" src="./assets/themes/zeppelin/img/notebook.png" />
  </div>
</div>

<br />
## Multiple Language Backend
[Apache Zeppelin interpreter](./docs/latest/usage/interpreter/overview.html) concept allows any language/data-processing-backend to be plugged into Zeppelin.
Currently Apache Zeppelin supports many interpreters such as Apache Spark, Apache Flink, Python, R, JDBC, Markdown and Shell.

<img class="img-responsive" width="500px" style="margin:0 auto; padding: 26px;" src="./assets/themes/zeppelin/img/available_interpreters.png" />

Adding new language-backend is really simple. Learn [how to create a new interpreter](./docs/latest/development/writing_zeppelin_interpreter.html#make-your-own-interpreter).

#### Apache Spark integration
Especially, Apache Zeppelin provides built-in [Apache Spark](http://spark.apache.org/) integration. You don't need to build a separate module, plugin or library for it.

<img class="img-responsive" src="./assets/themes/zeppelin/img/spark_logo.jpg" width="140px" />

Apache Zeppelin with Spark integration provides

- Automatic SparkContext and SQLContext injection
- Runtime jar dependency loading from local filesystem or maven repository. Learn more about [dependency loader](./docs/latest/interpreter/spark.html#dependencyloading).
- Canceling job and displaying its progress

For the further information about Apache Spark in Apache Zeppelin, please see [Spark interpreter for Apache Zeppelin](./docs/latest/interpreter/spark.html).

<br />
## Data visualization

Some basic charts are already included in Apache Zeppelin. Visualizations are not limited to SparkSQL query, any output from any language backend can be recognized and visualized.

<div class="row">
  <div class="col-md-6">
    <img class="img-responsive" src="./assets/themes/zeppelin/img/graph1.png" />
  </div>
  <div class="col-md-6">
    <img class="img-responsive" src="./assets/themes/zeppelin/img/graph2.png" />
  </div>
</div>

### Pivot chart

Apache Zeppelin aggregates values and displays them in pivot chart with simple drag and drop. You can easily create chart with multiple aggregated values including sum, count, average, min, max.

<div class="row">
  <div class="col-md-12">
    <img class="img-responsive" style="margin: 16px auto;" src="./assets/themes/zeppelin/img/screenshots/pivot.png" width="480px" />
  </div>
</div>

Learn more about [basic display systems](./docs/latest/usage/display_system/basic.html) and Angular API([frontend](./docs/latest/usage/display_system/angular_frontend.html) , [backend](./docs/latest/usage/display_system/angular_backend.html)) in Apache Zeppelin.

<br />
## Dynamic forms

Apache Zeppelin can dynamically create some input forms in your notebook.
<div class="row">
  <div class="col-md-12">
    <img class="img-responsive" style="margin: 16px auto;" src="./assets/themes/zeppelin/img/screenshots/dynamicform.png" />
  </div>
</div>
Learn more about [Dynamic Forms](./docs/latest/usage/dynamic_form/intro.html).

<br />
## Collaborate by sharing your Notebook & Paragraph
Your notebook URL can be shared among collaborators. Then Apache Zeppelin will broadcast any changes in realtime, just like the collaboration in Google docs.

<div class="row">
  <div class="col-md-12">
    <img class="img-responsive" style="margin: 20px auto" src="./assets/themes/zeppelin/img/screenshots/publish.png" width="650px"/>
  </div>
</div>

Apache Zeppelin provides an URL to display the result only, that page does not include any menus and buttons inside of notebooks.
You can easily embed it as an iframe inside of your website in this way.
If you want to learn more about this feature, please visit [this page](./docs/latest/usage/other_features/publishing_paragraphs.html).

<br />
## 100% Opensource

<img class="img-responsive" style="margin:0 auto; padding: 15px;" src="./assets/themes/zeppelin/img/asf_logo.png" width="250px"/>

Apache Zeppelin is Apache2 Licensed software. Please check out the [source repository](https://github.com/apache/zeppelin) and [how to contribute](./docs/latest/development/contribution/how_to_contribute_code.html).
Apache Zeppelin has a very active development community.
Join to our [Mailing list](https://zeppelin.apache.org/community.html) and report issues on [Jira Issue tracker](https://issues.apache.org/jira/browse/ZEPPELIN).
</div>
<br />
