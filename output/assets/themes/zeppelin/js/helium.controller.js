angular.module("app", ['ui.bootstrap'])
  .controller("HeliumPkgCtrl", function($rootScope, $scope, $window, $sce) {
  $rootScope.keys = Object.keys
  $scope.HeliumPkgs = [{"spark-scala-2.11": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "spark-scala-2.11",
        "version": "0.8.2",
        "published": "2019-09-25T21:26:09-07:00",
        "artifact": "spark-scala-2.11@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-scala-2.11"
      }
    },
    "sogou-map-geo": {
      "1.0.0": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.0",
        "published": "2018-07-10T08:15:18.760Z",
        "artifact": "sogou-map-geo@1.0.0",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.1",
        "published": "2018-07-10T08:56:45.109Z",
        "artifact": "sogou-map-geo@1.0.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.2",
        "published": "2018-07-10T10:25:47.391Z",
        "artifact": "sogou-map-geo@1.0.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.3",
        "published": "2018-07-10T12:08:27.865Z",
        "artifact": "sogou-map-geo@1.0.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.4",
        "published": "2018-07-10T12:16:29.034Z",
        "artifact": "sogou-map-geo@1.0.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.5",
        "published": "2018-07-10T13:14:21.726Z",
        "artifact": "sogou-map-geo@1.0.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.6",
        "published": "2018-07-11T01:51:24.623Z",
        "artifact": "sogou-map-geo@1.0.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.7",
        "published": "2018-07-11T03:30:42.712Z",
        "artifact": "sogou-map-geo@1.0.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.8",
        "published": "2018-07-11T05:37:58.867Z",
        "artifact": "sogou-map-geo@1.0.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.9": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.9",
        "published": "2018-07-11T06:25:05.749Z",
        "artifact": "sogou-map-geo@1.0.9",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.10",
        "published": "2018-07-11T06:56:08.847Z",
        "artifact": "sogou-map-geo@1.0.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.11",
        "published": "2018-07-11T07:20:35.348Z",
        "artifact": "sogou-map-geo@1.0.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.13": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.13",
        "published": "2018-07-11T08:16:30.781Z",
        "artifact": "sogou-map-geo@1.0.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.14": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.14",
        "published": "2018-07-11T09:07:34.729Z",
        "artifact": "sogou-map-geo@1.0.14",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.15": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.15",
        "published": "2018-07-11T09:49:49.293Z",
        "artifact": "sogou-map-geo@1.0.15",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.16": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.16",
        "published": "2018-07-11T11:15:05.062Z",
        "artifact": "sogou-map-geo@1.0.16",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.17": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.17",
        "published": "2018-07-11T11:39:10.139Z",
        "artifact": "sogou-map-geo@1.0.17",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.18": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.18",
        "published": "2018-07-11T12:04:48.987Z",
        "artifact": "sogou-map-geo@1.0.18",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.19": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.19",
        "published": "2018-07-11T12:45:08.942Z",
        "artifact": "sogou-map-geo@1.0.19",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.20": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.20",
        "published": "2018-07-11T12:58:55.105Z",
        "artifact": "sogou-map-geo@1.0.20",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.21": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.21",
        "published": "2018-07-12T02:38:26.001Z",
        "artifact": "sogou-map-geo@1.0.21",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.22": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.22",
        "published": "2018-07-12T02:51:35.057Z",
        "artifact": "sogou-map-geo@1.0.22",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.23": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.23",
        "published": "2018-07-12T03:18:07.254Z",
        "artifact": "sogou-map-geo@1.0.23",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.24": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.24",
        "published": "2018-07-12T03:25:09.263Z",
        "artifact": "sogou-map-geo@1.0.24",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.25": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.25",
        "published": "2018-07-12T06:34:36.735Z",
        "artifact": "sogou-map-geo@1.0.25",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.26": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.26",
        "published": "2018-07-12T07:24:08.297Z",
        "artifact": "sogou-map-geo@1.0.26",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.27": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.27",
        "published": "2018-07-12T08:48:13.695Z",
        "artifact": "sogou-map-geo@1.0.27",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.28": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.28",
        "published": "2018-07-12T08:59:59.555Z",
        "artifact": "sogou-map-geo@1.0.28",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.29": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.29",
        "published": "2018-07-12T11:52:31.785Z",
        "artifact": "sogou-map-geo@1.0.29",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.30": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.30",
        "published": "2018-07-12T12:28:33.936Z",
        "artifact": "sogou-map-geo@1.0.30",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.31": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.31",
        "published": "2018-07-12T12:51:02.920Z",
        "artifact": "sogou-map-geo@1.0.31",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "sogou-map-geo",
        "version": "1.0.32",
        "published": "2018-07-12T13:26:44.816Z",
        "artifact": "sogou-map-geo@1.0.32",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      }
    },
    "sap": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "sap",
        "version": "0.8.2",
        "published": "2019-09-25T21:22:33-07:00",
        "artifact": "sap@0.8.2",
        "description": "Zeppelin SAP support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "sap"
      }
    },
    "geospark-zeppelin": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "geospark-zeppelin",
        "version": "0.0.1",
        "published": "2019-02-28T07:38:22.944Z",
        "artifact": "geospark-zeppelin@0.0.1",
        "author": "Jia Yu",
        "description": "Zeppelin visualization support for GeoSpark",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "geospark-zeppelin",
        "version": "1.2.0",
        "published": "2019-03-03T10:34:36.560Z",
        "artifact": "geospark-zeppelin@1.2.0",
        "author": "Jia Yu",
        "description": "Zeppelin visualization support for GeoSpark",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      }
    },
    "spark-interpreter": {
      "latest": {
        "type": "INTERPRETER",
        "name": "spark-interpreter",
        "version": "0.9.0-preview1",
        "published": "2020-03-23T02:39:13-07:00",
        "artifact": "spark-interpreter@0.9.0-preview1",
        "description": "Zeppelin spark support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-interpreter"
      }
    },
    "snappydata-zeppelin": {
      "latest": {
        "type": "INTERPRETER",
        "name": "snappydata-zeppelin",
        "version": "0.7.3.6",
        "published": "2019-09-03T07:49:48+00:00",
        "artifact": "snappydata-zeppelin@0.7.3.6",
        "description": "SnappyData distributed data store and execution engine",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "io.snappydata",
        "artifactId": "snappydata-zeppelin"
      },
      "0.7.3.5": {
        "type": "INTERPRETER",
        "name": "snappydata-zeppelin",
        "version": "0.7.3.5",
        "published": "2019-05-24T11:28:01+00:00",
        "artifact": "snappydata-zeppelin@0.7.3.5",
        "description": "SnappyData distributed data store and execution engine",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "io.snappydata",
        "artifactId": "snappydata-zeppelin"
      }
    },
    "spark1-shims": {
      "latest": {
        "type": "INTERPRETER",
        "name": "spark1-shims",
        "version": "0.8.2",
        "published": "2019-09-26T04:24:06+00:00",
        "artifact": "spark1-shims@0.8.2",
        "description": "Zeppelin Spark Support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark1-shims"
      },
      "0.8.1": {
        "type": "INTERPRETER",
        "name": "spark1-shims",
        "version": "0.8.1",
        "published": "2019-01-17T03:12:47+00:00",
        "artifact": "spark1-shims@0.8.1",
        "description": "Zeppelin Spark Support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark1-shims"
      }
    },
    "spark2-shims": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "spark2-shims",
        "version": "0.8.2",
        "published": "2019-09-25T21:21:31-07:00",
        "artifact": "spark2-shims@0.8.2",
        "description": "Zeppelin Spark Support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark2-shims"
      }
    },
    "spark-scala-parent": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "spark-scala-parent",
        "version": "0.8.2",
        "published": "2019-09-25T21:24:19-07:00",
        "artifact": "spark-scala-parent@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-scala-parent"
      }
    },
    "spark-scala-2.10": {
      "latest": {
        "type": "INTERPRETER",
        "name": "spark-scala-2.10",
        "version": "0.8.2",
        "published": "2019-09-26T04:25:03+00:00",
        "artifact": "spark-scala-2.10@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-scala-2.10"
      },
      "0.8.1": {
        "type": "INTERPRETER",
        "name": "spark-scala-2.10",
        "version": "0.8.1",
        "published": "2019-01-17T03:12:05+00:00",
        "artifact": "spark-scala-2.10@0.8.1",
        "description": "Zeppelin Spark Support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-scala-2.10"
      }
    },
    "ultimate-column-chart-negative-values": {
      "0.0.2": {
        "type": "VISUALIZATION",
        "name": "ultimate-column-chart-negative-values",
        "version": "0.0.2",
        "published": "2017-06-27T19:04:41.438Z",
        "artifact": "ultimate-column-chart-negative-values@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-column-chart-negative-values",
        "version": "0.0.3",
        "published": "2017-07-06T18:58:27.137Z",
        "artifact": "ultimate-column-chart-negative-values@0.0.3",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      }
    },
    "zeppelin-highcharts-columnrange": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-columnrange",
        "version": "0.0.1",
        "published": "2017-02-11T08:09:32.044Z",
        "artifact": "zeppelin-highcharts-columnrange@0.0.1",
        "author": "1ambda",
        "description": "Column Range Chart for Apache Zeppelin using highcharts.js",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-align-center\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-columnrange",
        "version": "0.0.4",
        "published": "2017-02-11T17:05:07.668Z",
        "artifact": "zeppelin-highcharts-columnrange@0.0.4",
        "author": "1ambda",
        "description": "Column Range Chart for Apache Zeppelin using highcharts.js",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-align-center\"></i>"
      }
    },
    "ultimate-pie-chart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "ultimate-pie-chart",
        "version": "0.0.1",
        "published": "2017-04-12T09:59:02.580Z",
        "artifact": "ultimate-pie-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Pie Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,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\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-pie-chart",
        "version": "0.0.2",
        "published": "2018-01-23T02:47:47.769Z",
        "artifact": "ultimate-pie-chart@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Pie Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,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\" >"
      }
    },
    "zeppelin-highcharts-heatmap": {
      "0.0.4": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-heatmap",
        "version": "0.0.4",
        "published": "2017-02-11T07:47:56.338Z",
        "artifact": "zeppelin-highcharts-heatmap@0.0.4",
        "author": "1ambda",
        "description": "Heatmap Charts for Apache Zeppelin using highcharts.js",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-th\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-heatmap",
        "version": "0.0.5",
        "published": "2017-02-14T12:46:02.732Z",
        "artifact": "zeppelin-highcharts-heatmap@0.0.5",
        "author": "1ambda",
        "description": "Heatmap Charts for Apache Zeppelin using highcharts.js",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-th\"></i>"
      }
    },
    "zeppelin-highmaps": {
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highmaps",
        "version": "1.0.0",
        "published": "2018-01-30T15:46:40.265Z",
        "artifact": "zeppelin-highmaps@1.0.0",
        "author": "odnoklassniki",
        "description": "Zeppelin plugin to visualize data using Highmaps",
        "license": "Apache-2.0",
        "icon": "<i class='fa fa-globe' style='color: #ee8208;'></i>"
      }
    },
    "zeppelin-highcharts-spline": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.1",
        "published": "2017-01-16T08:53:38.470Z",
        "artifact": "zeppelin-highcharts-spline@0.0.1",
        "author": "ahyoung",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "0.0.2": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.2",
        "published": "2017-01-16T10:49:56.230Z",
        "artifact": "zeppelin-highcharts-spline@0.0.2",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "0.0.3": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.3",
        "published": "2017-01-20T05:39:22.177Z",
        "artifact": "zeppelin-highcharts-spline@0.0.3",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "0.0.4": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.4",
        "published": "2017-01-20T07:13:35.958Z",
        "artifact": "zeppelin-highcharts-spline@0.0.4",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "&#8967;"
      },
      "0.0.5": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.5",
        "published": "2017-01-20T09:07:45.758Z",
        "artifact": "zeppelin-highcharts-spline@0.0.5",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "&#8967;"
      },
      "0.0.6": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.6",
        "published": "2017-01-22T13:33:58.177Z",
        "artifact": "zeppelin-highcharts-spline@0.0.6",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "&#8967;"
      },
      "0.0.7": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.7",
        "published": "2017-01-22T13:38:48.895Z",
        "artifact": "zeppelin-highcharts-spline@0.0.7",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-vine\"></i>"
      },
      "0.0.8": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.8",
        "published": "2017-01-23T05:36:57.596Z",
        "artifact": "zeppelin-highcharts-spline@0.0.8",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-vine\"></i>"
      },
      "0.0.9": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.0.9",
        "published": "2017-02-12T05:47:43.594Z",
        "artifact": "zeppelin-highcharts-spline@0.0.9",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-vine\"></i>"
      },
      "0.1.0": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.1.0",
        "published": "2017-02-12T05:56:54.943Z",
        "artifact": "zeppelin-highcharts-spline@0.1.0",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-vine\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-spline",
        "version": "0.1.1",
        "published": "2017-02-12T06:00:23.310Z",
        "artifact": "zeppelin-highcharts-spline@0.1.1",
        "author": "AhyoungRyu",
        "description": "Draw spline graph using Highcharts library",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<i class=\"fa fa-vine\"></i>"
      }
    },
    "ultimate-scatter-chart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "ultimate-scatter-chart",
        "version": "0.0.1",
        "published": "2017-04-12T10:01:36.918Z",
        "artifact": "ultimate-scatter-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Scatter Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Heat-Map\" src=\"data:image/png;base64,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\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-scatter-chart",
        "version": "0.0.2",
        "published": "2018-01-23T03:43:29.010Z",
        "artifact": "ultimate-scatter-chart@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Scatter Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Heat-Map\" src=\"data:image/png;base64,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\" >"
      }
    },
    "ultimate-range-chart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "ultimate-range-chart",
        "version": "0.0.1",
        "published": "2017-04-12T10:02:44.987Z",
        "artifact": "ultimate-range-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Range Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEaUlEQVRoQ+2af0xbVRTHz/vVH64gzFgt44eAmDBUhjYqmTHMKMlMiEuMGqZSulGCzMTNZNBtMRAWJsoSlkh0jHaAQ/zLsEVdzGJkLEM3Ya4zcTWDLZO2QzoLbmBL+9671zxcDaMIj9e+tJD2v6Y993w/53t773knJWCVvAiBo3JPSwvGcKm9aVfnSuWaBTGZW/oIgP4jTbvq4yBRrkDckSgbEJI+7shijmw9snsDTRL5ADgJk2A7tq25X24HI+5IubW2FWG8Q8kwXoamuWmfL5GmqG8R+Eo7jYf+kgsooiCGo7X7KSD3FhUUkA8m3zereXrGB6dtPyOv3/+9xdD44ooAKbPU4MK8RyFbt+4uvQLM8bNngEO4oKey2SYHTNARBwHAYYDrUpPwKr+GS53Qv1b0PChoJmSZEwNnkddJXKMnE5xScywW92+LYj5kx4DHCYDTUpPwSjaJTfvz3S3PPgcalTpkmS/P9CH/OPOVwpMoqyMRaVEM1lrvY5lZ6sezHr4L5I9JD3x3YQhIiszsNDZJdn1JRyLVa5m69272z3AnBZCslBRQ0DQ43G4YumLHaqWyrbW0/m2pji8VF9FTS0i2rdNcjHg4gTBSCe8pgvQrGOZAW9n+hqXEhPN5xEGCYso7zA8FWD5JrlNqPrRsIOFUV0psHERK1eSMiTsiZ3WFtWc7aIp4GWNcBJiwYQL6uys+Ov5/eWPSEWOXuYJnUXvimjX+dO0DlOf2rcCYx3MPQ9FtVuOBqoVgYg7kzrPMxfnN58TUbTg1+BMXQPyrCzkTcyBl7TX192o075cUbiTnV37oih1GXK4LR40f6Be8RyrNLRNAQLLc+17M+myqB/Jy02B+vybEBns21VVdyFLBAd0gwvArAER9QMdm3HwnRZf8yqYNT4SItY/+DpeGh2+Qw9o3Yv5mf9NSs4UE6H3p6UJYm5D4n94Ax8I3534AjucPthsad8c8iCBwR0/dFzOBwOvZulQiTauFyakpsI9eB5bnHRZDY/qKOLWCIk1d+6oBoNrPsnkKRjFKk2Tv4bcadq6oe0TMobAitlYcJFKPulIqGamYmLvZpYItC6S8Y2cSzynqKJIoRhivJylygEe85dj25qhfpKJBBAgS1OcZmspcn5HFJCdowHnTDSNOF0dQZIfV0FgptZqRiBMPYq1tVSoVVSXPbKTmThKFrvTk+R8BYbSp23RQ8oAvXBjRvRbKcX+en5OTkpueEZKzz3YRu254ehWj2o/DFSQ1/s7IdOnudyZ7DF54Ug/BKfvchL9cG4HLvzmBdqyVqiPsONFba3vXHlu2bl2+/pHckKRfnxuAW9N/N3RVfFgXtiKJC4gGMX22r4rn0SfF+qeIuV3p1TEXDF62c4jEOXLNdcWwiQYRFqvuqeuZ9vpKU+/XzrbYDvc4THm9nFLFvPfp1oao/T4EbcsCEQKE5wU1Q5cgjAsAE6d4QIej6UTQrWWDiLE5Gt+Jg0Sj6ovlXF2OrJq/OcXaNpGi5x99qVCZXaMquwAAAABJRU5ErkJggg==\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-range-chart",
        "version": "0.0.2",
        "published": "2018-01-23T03:42:31.049Z",
        "artifact": "ultimate-range-chart@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Range Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEaUlEQVRoQ+2af0xbVRTHz/vVH64gzFgt44eAmDBUhjYqmTHMKMlMiEuMGqZSulGCzMTNZNBtMRAWJsoSlkh0jHaAQ/zLsEVdzGJkLEM3Ya4zcTWDLZO2QzoLbmBL+9671zxcDaMIj9e+tJD2v6Y993w/53t773knJWCVvAiBo3JPSwvGcKm9aVfnSuWaBTGZW/oIgP4jTbvq4yBRrkDckSgbEJI+7shijmw9snsDTRL5ADgJk2A7tq25X24HI+5IubW2FWG8Q8kwXoamuWmfL5GmqG8R+Eo7jYf+kgsooiCGo7X7KSD3FhUUkA8m3zereXrGB6dtPyOv3/+9xdD44ooAKbPU4MK8RyFbt+4uvQLM8bNngEO4oKey2SYHTNARBwHAYYDrUpPwKr+GS53Qv1b0PChoJmSZEwNnkddJXKMnE5xScywW92+LYj5kx4DHCYDTUpPwSjaJTfvz3S3PPgcalTpkmS/P9CH/OPOVwpMoqyMRaVEM1lrvY5lZ6sezHr4L5I9JD3x3YQhIiszsNDZJdn1JRyLVa5m69272z3AnBZCslBRQ0DQ43G4YumLHaqWyrbW0/m2pji8VF9FTS0i2rdNcjHg4gTBSCe8pgvQrGOZAW9n+hqXEhPN5xEGCYso7zA8FWD5JrlNqPrRsIOFUV0psHERK1eSMiTsiZ3WFtWc7aIp4GWNcBJiwYQL6uys+Ov5/eWPSEWOXuYJnUXvimjX+dO0DlOf2rcCYx3MPQ9FtVuOBqoVgYg7kzrPMxfnN58TUbTg1+BMXQPyrCzkTcyBl7TX192o075cUbiTnV37oih1GXK4LR40f6Be8RyrNLRNAQLLc+17M+myqB/Jy02B+vybEBns21VVdyFLBAd0gwvArAER9QMdm3HwnRZf8yqYNT4SItY/+DpeGh2+Qw9o3Yv5mf9NSs4UE6H3p6UJYm5D4n94Ax8I3534AjucPthsad8c8iCBwR0/dFzOBwOvZulQiTauFyakpsI9eB5bnHRZDY/qKOLWCIk1d+6oBoNrPsnkKRjFKk2Tv4bcadq6oe0TMobAitlYcJFKPulIqGamYmLvZpYItC6S8Y2cSzynqKJIoRhivJylygEe85dj25qhfpKJBBAgS1OcZmspcn5HFJCdowHnTDSNOF0dQZIfV0FgptZqRiBMPYq1tVSoVVSXPbKTmThKFrvTk+R8BYbSp23RQ8oAvXBjRvRbKcX+en5OTkpueEZKzz3YRu254ehWj2o/DFSQ1/s7IdOnudyZ7DF54Ug/BKfvchL9cG4HLvzmBdqyVqiPsONFba3vXHlu2bl2+/pHckKRfnxuAW9N/N3RVfFgXtiKJC4gGMX22r4rn0SfF+qeIuV3p1TEXDF62c4jEOXLNdcWwiQYRFqvuqeuZ9vpKU+/XzrbYDvc4THm9nFLFvPfp1oao/T4EbcsCEQKE5wU1Q5cgjAsAE6d4QIej6UTQrWWDiLE5Gt+Jg0Sj6ovlXF2OrJq/OcXaNpGi5x99qVCZXaMquwAAAABJRU5ErkJggg==\" >"
      }
    },
    "spark-shims": {
      "latest": {
        "type": "INTERPRETER",
        "name": "spark-shims",
        "version": "0.8.2",
        "published": "2019-09-26T04:30:27+00:00",
        "artifact": "spark-shims@0.8.2",
        "description": "Zeppelin Spark Support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-shims"
      },
      "0.8.1": {
        "type": "INTERPRETER",
        "name": "spark-shims",
        "version": "0.8.1",
        "published": "2019-01-17T03:12:35+00:00",
        "artifact": "spark-shims@0.8.1",
        "description": "Zeppelin Spark Support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "spark-shims"
      }
    },
    "volume-leaflet": {
      "1.0.1": {
        "type": "VISUALIZATION",
        "name": "volume-leaflet",
        "version": "1.0.1",
        "published": "2017-05-02T18:50:05.500Z",
        "artifact": "volume-leaflet@1.0.1",
        "author": "Tom Grant",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.2": {
        "type": "VISUALIZATION",
        "name": "volume-leaflet",
        "version": "1.0.2",
        "published": "2017-11-03T13:54:18.512Z",
        "artifact": "volume-leaflet@1.0.2",
        "author": "Tom Grant",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "volume-leaflet",
        "version": "1.0.3",
        "published": "2017-12-11T20:16:56.719Z",
        "artifact": "volume-leaflet@1.0.3",
        "author": "Tom Grant",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      }
    },
    "ultimate-column-chart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "ultimate-column-chart",
        "version": "0.0.1",
        "published": "2017-04-12T10:00:25.424Z",
        "artifact": "ultimate-column-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-column-chart",
        "version": "0.0.2",
        "published": "2018-01-23T03:11:59.022Z",
        "artifact": "ultimate-column-chart@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      }
    },
    "zeppelin-csv-spell": {
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-csv-spell",
        "version": "0.0.1",
        "published": "2017-02-28T04:57:05.463Z",
        "artifact": "zeppelin-csv-spell@0.0.1",
        "author": "1ambda",
        "description": "Parse CSV to table for Apache Zeppelin",
        "license": "MIT",
        "icon": "<img height=\"20\" width=\"20\" src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMTguMTg4IDMxOC4xODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxOC4xODggMzE4LjE4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0U0RTRFNDsiIHBvaW50cz0iMjI3LjMyMSw3LjUgNDAuMzQyLDcuNSA0MC4zNDIsMzEwLjY4OCAyNzcuODQ2LDMxMC42ODggMjc3Ljg0Niw1OC4wMjUgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNzkzNDsiIHBvaW50cz0iMjM1LjE0LDMyLjc2MyA0MC4zNDIsMzIuNzYzIDQwLjM0Miw3LjUgMjI3LjMyMSw3LjUgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0QxRDNEMzsiIHBvaW50cz0iMjI3LjMyMSw1OC4wMjUgMjc3Ljg0Niw1OC4wMjUgMjI3LjMyMSw3LjUgICIvPgoJPGc+CgkJPHJlY3QgeD0iMTQyLjQ1NyIgeT0iODcuODQ0IiBzdHlsZT0iZmlsbDojMDA3OTM0OyIgd2lkdGg9IjMzLjI3NCIgaGVpZ2h0PSIxNS40MTgiLz4KCQk8cmVjdCB4PSIxODMuMTAyIiB5PSI4Ny44NDQiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjczIiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxyZWN0IHg9IjE0Mi40NTciIHk9IjExMC4xNjEiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjc0IiBoZWlnaHQ9IjE1LjQxOSIvPgoJCTxyZWN0IHg9IjE4My4xMDIiIHk9IjExMC4xNjEiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjczIiBoZWlnaHQ9IjE1LjQxOSIvPgoJCTxyZWN0IHg9IjE0Mi40NTciIHk9IjEzMi40NzkiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjc0IiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxyZWN0IHg9IjE4My4xMDIiIHk9IjEzMi40NzkiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjczIiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxyZWN0IHg9IjEwMS44MTIiIHk9IjEzMi40NzkiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjczIiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxyZWN0IHg9IjE0Mi40NTciIHk9IjE1NC43OTgiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjc0IiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxyZWN0IHg9IjE4My4xMDIiIHk9IjE1NC43OTgiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjczIiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxyZWN0IHg9IjEwMS44MTIiIHk9IjE1NC43OTgiIHN0eWxlPSJmaWxsOiMwMDc5MzQ7IiB3aWR0aD0iMzMuMjczIiBoZWlnaHQ9IjE1LjQxOCIvPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMDA3OTM0OyIgZD0iTTEzNC41ODgsMTIzLjY2MmgtMTAuMDQxbC02LjI2Mi0xMC4wNDFsLTYuMTk2LDEwLjA0MWgtOS44MjFsMTAuNjU2LTE2LjQzNUwxMDIuOTA2LDkxLjU0aDkuNjI0ICAgICBsNS44LDkuOTMybDUuNTgxLTkuOTMyaDkuOTA5bC0xMC4xNzMsMTYuMzY5TDEzNC41ODgsMTIzLjY2MnoiLz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzRTQ4OyIgZD0iTTI4My4xNDksNTIuNzIzTDIzMi42MjUsMi4xOTdDMjMxLjIxOCwwLjc5LDIyOS4zMTEsMCwyMjcuMzIxLDBINDAuMzQyYy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41ICAgdjMwMy4xODhjMCw0LjE0MywzLjM1OCw3LjUsNy41LDcuNWgyMzcuNTA0YzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjVWNTguMDI1QzI4NS4zNDYsNTYuMDM2LDI4NC41NTYsNTQuMTI5LDI4My4xNDksNTIuNzIzeiAgICBNMjM0LjgyMSwyNS42MDZsMjQuOTE4LDI0LjkxOWgtMjQuOTE4TDIzNC44MjEsMjUuNjA2TDIzNC44MjEsMjUuNjA2eiBNNDcuODQyLDE1aDE3MS45Nzl2MTAuMjYzSDQ3Ljg0MlYxNXogTTI3MC4zNDYsMzAzLjE4OCAgIEg0Ny44NDJWNDAuMjYzaDE3MS45Nzl2MTcuNzYzYzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVoNDMuMDI0djIzNy42NjJIMjcwLjM0NnogTTEyMi4zNzIsMjM1LjQ4NCAgIGMxLjk2OSwwLDMuODA5LDAuMjc1LDUuNTIzLDAuODI2YzEuNzEzLDAuNTUsMy40MjgsMS4yMjcsNS4xNDEsMi4wMzFsMy44NDEtOS44NzFjLTQuNTctMi4xOC05LjM2Mi0zLjI3LTE0LjM3OC0zLjI3ICAgYy00LjU5MSwwLTguNTg1LDAuOTc5LTExLjk4LDIuOTM3Yy0zLjM5NiwxLjk1Ny01Ljk5OSw0Ljc1NS03LjgwOCw4LjM5NWMtMS44MSwzLjY0LTIuNzE0LDcuODYtMi43MTQsMTIuNjYzICAgYzAsNy42ODIsMS44NjcsMTMuNTUzLDUuNjAyLDE3LjYxNXM5LjEwNCw2LjA5NCwxNi4xMDcsNi4wOTRjNC44ODgsMCw5LjI2OC0wLjg1NywxMy4xNC0yLjU3di0xMC42MDIgICBjLTEuOTQ3LDAuODA1LTMuODgzLDEuNDkyLTUuODA4LDIuMDYzYy0xLjkyNiwwLjU3MS0zLjkxNSwwLjg1Ni01Ljk2NywwLjg1NmMtNi43OTMsMC0xMC4xODgtNC40NjQtMTAuMTg4LTEzLjM5MyAgIGMwLTQuMjk1LDAuODM2LTcuNjY1LDIuNTA3LTEwLjEwOUMxMTcuMDYyLDIzNi43MDcsMTE5LjM5LDIzNS40ODQsMTIyLjM3MiwyMzUuNDg0eiBNMTU1LjYwMywyMzYuMDg4ICAgYzAuNzQtMC41NzEsMS45MjUtMC44NTcsMy41NTUtMC44NTdjMy4xNTIsMCw2Ljg5NywwLjk5NSwxMS4yMzQsMi45ODRsMy44NDEtOS42ODFjLTQuOTk0LTIuMjIyLTkuODkyLTMuMzMzLTE0LjY5NC0zLjMzMyAgIGMtNS40MzgsMC05LjcxMywxLjE5Ni0xMi44MjIsMy41ODdjLTMuMTExLDIuMzkyLTQuNjY2LDUuNzI0LTQuNjY2LDkuOTk3YzAsMi4yODUsMC4zNjUsNC4yNjQsMS4wOTUsNS45MzYgICBzMS44NTIsMy4xNTIsMy4zNjQsNC40NDNzMy43ODIsMi42MjQsNi44MDksMy45OTljMy4zNDMsMS41MDMsNS40LDIuNDk3LDYuMTczLDIuOTgzYzAuNzcxLDAuNDg2LDEuMzMzLDAuOTY4LDEuNjgyLDEuNDQ0ICAgYzAuMzUsMC40NzYsMC41MjQsMS4wMzEsMC41MjQsMS42NjZjMCwxLjAxNi0wLjQzNSwxLjg0Ny0xLjMwMiwyLjQ5MWMtMC44NjgsMC42NDYtMi4yMzIsMC45NjktNC4wOTUsMC45NjkgICBjLTIuMTU4LDAtNC41MjctMC4zNDQtNy4xMDktMS4wMzJjLTIuNTgxLTAuNjg3LTUuMDY3LTEuNjQ1LTcuNDU4LTIuODcydjExLjE3MmMyLjI2NCwxLjA3OSw0LjQ0MywxLjgzNiw2LjUzOCwyLjI3ICAgczQuNjg3LDAuNjUsNy43NzUsMC42NWMzLjcwMywwLDYuOTMtMC42MTksOS42ODEtMS44NTZjMi43NS0xLjIzOCw0Ljg1Ni0yLjk3Myw2LjMxNS01LjIwNWMxLjQ2MS0yLjIzMiwyLjE5LTQuNzg3LDIuMTktNy42NjUgICBjMC0zLjEzMS0wLjc3Ny01LjcyOS0yLjMzMy03Ljc5MmMtMS41NTUtMi4wNjMtNC4zMzItMy45OTMtOC4zMzEtNS43OTJjLTQuMTY5LTEuOTA0LTYuNzI0LTMuMjE2LTcuNjY1LTMuOTM2ICAgYy0wLjk0MS0wLjcxOS0xLjQxMi0xLjUzMy0xLjQxMi0yLjQ0M0MxNTQuNDkxLDIzNy4zNjgsMTU0Ljg2MSwyMzYuNjU5LDE1NS42MDMsMjM2LjA4OHogTTIwMS4wMjEsMjQ5LjUxNCAgIGMtMC4zMzksMS4yNy0wLjczLDMuMDE1LTEuMTc0LDUuMjM2Yy0wLjQ0NSwyLjIyMi0wLjc0MSw0LjA3My0wLjg4OSw1LjU1NWMtMC4xMjctMi4wNTMtMC44NDctNS42OTEtMi4xNTgtMTAuOTE4bC02LjMxNi0yMy41MTkgICBoLTE0LjA5MmwxNS4xMzksNDYuNDAxaDE0Ljc1OWwxNS4yMDItNDYuNDAxaC0xNC4wMjdMMjAxLjAyMSwyNDkuNTE0eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\" />",
        "spell": {"magic": "%csv", "usage": "%csv <CSV>"}
      }
    },
    "ultimate-dual-column-chart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "ultimate-dual-column-chart",
        "version": "0.0.1",
        "published": "2017-06-09T16:15:22.329Z",
        "artifact": "ultimate-dual-column-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      },
      "0.0.2": {
        "type": "VISUALIZATION",
        "name": "ultimate-dual-column-chart",
        "version": "0.0.2",
        "published": "2017-06-09T16:52:33.969Z",
        "artifact": "ultimate-dual-column-chart@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      },
      "0.0.3": {
        "type": "VISUALIZATION",
        "name": "ultimate-dual-column-chart",
        "version": "0.0.3",
        "published": "2017-06-16T14:17:57.853Z",
        "artifact": "ultimate-dual-column-chart@0.0.3",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      },
      "0.0.4": {
        "type": "VISUALIZATION",
        "name": "ultimate-dual-column-chart",
        "version": "0.0.4",
        "published": "2017-06-27T19:04:04.764Z",
        "artifact": "ultimate-dual-column-chart@0.0.4",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-dual-column-chart",
        "version": "0.0.5",
        "published": "2017-07-06T18:57:35.252Z",
        "artifact": "ultimate-dual-column-chart@0.0.5",
        "author": "ZEPL",
        "description": "The Ultimate Column Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB1ElEQVRoQ+1azUrDQBCebFMPtWlJPejRd1AQvFihIPgMpVS0dw9SFC/tQZDiG7RgKX0JpWC9in2HHlXQHFJyaDcb2dAFtY2bkByWMntbMkP225nv29kfDVakaSuCA5QCUmnXG0DACzu5jLHnfu1uyO3VAtKpe0YmM9H1FJWBsSdOlrruTa/WaigJpLSzC1vmhgwHPI5e4OPLaiIQ6VTFMKh06h5GJMYEJu6KEVFRfpEjItHL7YsiIeQgSuL3TlvNKPYy20Q4wssDQshV3lh3ZD+k1NVtx8n2zlqJVgaJASnkjPPjvf28DMib9QmD0SsgkICZwoj8lF/OEUwtGalCfsfUwtRC+f2fLMgR5MgSjvhFp0aeQiqtb8Y8diiOc3hfidQSQPh+IkzjtZrSQMqlozA4oD94QCB8pgLPteLWWiK1MCKqkR0jghH5cxqPZJ+vGqha8xsn5UoUVC1ULVQtgGVHpqhaqFoB19O4squ4sqfTqeuCkdNle9XpjII1sX/djwiyb5qmzN3//m5ZS7e6ZtaAtbR0CGDZNkxndPHlgz8QIMVQo5gbiecTvFu9v9xmlFWj+BOddLsnt2Ph4z+qidAYsKGSj2oiYFgwTfQOMM5A4vp+A403Sm9lQCHKAAAAAElFTkSuQmCC\" >"
      }
    },
    "ultimate-line-chart": {
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-line-chart",
        "version": "0.0.1",
        "published": "2017-04-12T09:57:45.479Z",
        "artifact": "ultimate-line-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Line Chart for Apache Zeppelin using <a href src=\"https://www.amcharts.com/\">amcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Line-Chart\" src=\"data:image/png;base64,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\" >"
      }
    },
    "ultimate-heatmap-chart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "ultimate-heatmap-chart",
        "version": "0.0.1",
        "published": "2017-04-12T10:05:54.251Z",
        "artifact": "ultimate-heatmap-chart@0.0.1",
        "author": "ZEPL",
        "description": "The Ultimate Heatmap Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Gantt-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEHklEQVRoQ+1aXWgcVRT+dmbcmexmN5N2szW1abNJTahdI0TpQ6RJQKggNqCoCP3Blz70pSg0Gh8KBUGjKSh96YMvohRERaUVQUFIUxpQasCY/iQ22Wy3ZOtmNzvJ/mR2M7ORu0iImzk7q01/DHde5+y59zv3nO+bc+46sEEexwbBgRUgx0+fe12As8cOmMNMhx3G/LSd3b15X7jQ33tkkK21AqT39PeDglzT5fFWLVObSKd0h1fK5qrF1CJl4/V4pOxixjSMgqUfSRIcriq3uJBKGZQPp+wUJFF0ZLOLJmUTm9PchmG829975OQaIKp/a9fe7ifIYA4P/Y7mOhkvdbfQNldCCDbWw+tWLG0WMjrGpqPo2B0gfURiScxn9aIf6jlz9rx+M/rn+xwIP5G/c4SnVkmx8BphAfnfsJao1HapajVJeYlECi5ZgMf1EGljmgXs2bUZvlpr+mXvM3qepGfmOJc3YBQKcCtOcp3LI2P58anwe2vo980Pv/xkU+2mg807tonUr6+ENcjuKvh8NeQC49ci2N+xDYF6r6UN22RsPo2GOpX0wQhBNwz4a+ig/jj0S+7GdKR/DZC+gY9Pbq/f8tbRA/utQwng1BcjUP0+tO7aTm7i3NeXcOjZFrQ11d0fQeRASuLOT2RVQO7oW4unFk+tu/QZz1LrsUeb+pp3BmSKWy+OJhDXcuvS/L3QufWO/EzeCOWu/jFlrSOBhvq+V59/hgQyMhGFIApQq13kJj77YQLBtgC8qttaR7QMxkZDOHH4SdJHTEsV1T/w8GbS5vPvfsqFItH/Joiss6txKWjw15IL9J65hI7OIKn+8fg8hofGMHD06bvTIVbCWhzIqtjzE6m0seKpVRKpB6LY7eg3dDtRbHb8qodknHc+/RW72wJQiV4ikVjA9athHN7XSvrQ0lmYBRPtLfRcqyz92gliJQr2zdBMJWa2Nj5Vxt42WkfKCqJdY1UJ/Q7bTBpHp2bBRLPnRVpHxq/dhBaL4/gr7SRgcoqyXsXOgayKPT8RFgyeWiXlyGtkPWtkZ2ND377OPWQ/wgZriiSVnRJGZrXiYE12SpbUGYou4PzwrbKzsdszCRj5HIIBul2YDM8Yc3Pxsx+88fJrbKGVqzdWI61NO95+qj1IzilZsyMJArlJ5pBNCZn6i6JgCSSe1PHz9QQEkRxoIp3NI79UgEo0Z8yxpmVg6tqFgWPPda8Bci8EsZL7ka8GJzA5m0NH5+OkIF4c/A1abIYDsW117ViLn0hJkvHUYgFZj69fnlr/JrVkp/PEI1t81gIAQFGUYue2lF8iadHtdkHXdbArNquH6Qvzk8lkSR/JvAtJXUG5a0BNS8PUk5b0y4SlKC73+ylIauOy6G6028cyjG9PHev56B+CaPejB/39hvm/1l9zuh9+d3X4DAAAAABJRU5ErkJggg==\" >"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "ultimate-heatmap-chart",
        "version": "0.0.2",
        "published": "2018-01-23T03:46:12.597Z",
        "artifact": "ultimate-heatmap-chart@0.0.2",
        "author": "ZEPL",
        "description": "The Ultimate Heatmap Chart for Apache Zeppelin using <a href src=\"http://www.highcharts.com/\">highcharts</a>",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Gantt-Chart\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEHklEQVRoQ+1aXWgcVRT+dmbcmexmN5N2szW1abNJTahdI0TpQ6RJQKggNqCoCP3Blz70pSg0Gh8KBUGjKSh96YMvohRERaUVQUFIUxpQasCY/iQ22Wy3ZOtmNzvJ/mR2M7ORu0iImzk7q01/DHde5+y59zv3nO+bc+46sEEexwbBgRUgx0+fe12As8cOmMNMhx3G/LSd3b15X7jQ33tkkK21AqT39PeDglzT5fFWLVObSKd0h1fK5qrF1CJl4/V4pOxixjSMgqUfSRIcriq3uJBKGZQPp+wUJFF0ZLOLJmUTm9PchmG829975OQaIKp/a9fe7ifIYA4P/Y7mOhkvdbfQNldCCDbWw+tWLG0WMjrGpqPo2B0gfURiScxn9aIf6jlz9rx+M/rn+xwIP5G/c4SnVkmx8BphAfnfsJao1HapajVJeYlECi5ZgMf1EGljmgXs2bUZvlpr+mXvM3qepGfmOJc3YBQKcCtOcp3LI2P58anwe2vo980Pv/xkU+2mg807tonUr6+ENcjuKvh8NeQC49ci2N+xDYF6r6UN22RsPo2GOpX0wQhBNwz4a+ig/jj0S+7GdKR/DZC+gY9Pbq/f8tbRA/utQwng1BcjUP0+tO7aTm7i3NeXcOjZFrQ11d0fQeRASuLOT2RVQO7oW4unFk+tu/QZz1LrsUeb+pp3BmSKWy+OJhDXcuvS/L3QufWO/EzeCOWu/jFlrSOBhvq+V59/hgQyMhGFIApQq13kJj77YQLBtgC8qttaR7QMxkZDOHH4SdJHTEsV1T/w8GbS5vPvfsqFItH/Joiss6txKWjw15IL9J65hI7OIKn+8fg8hofGMHD06bvTIVbCWhzIqtjzE6m0seKpVRKpB6LY7eg3dDtRbHb8qodknHc+/RW72wJQiV4ikVjA9athHN7XSvrQ0lmYBRPtLfRcqyz92gliJQr2zdBMJWa2Nj5Vxt42WkfKCqJdY1UJ/Q7bTBpHp2bBRLPnRVpHxq/dhBaL4/gr7SRgcoqyXsXOgayKPT8RFgyeWiXlyGtkPWtkZ2ND377OPWQ/wgZriiSVnRJGZrXiYE12SpbUGYou4PzwrbKzsdszCRj5HIIBul2YDM8Yc3Pxsx+88fJrbKGVqzdWI61NO95+qj1IzilZsyMJArlJ5pBNCZn6i6JgCSSe1PHz9QQEkRxoIp3NI79UgEo0Z8yxpmVg6tqFgWPPda8Bci8EsZL7ka8GJzA5m0NH5+OkIF4c/A1abIYDsW117ViLn0hJkvHUYgFZj69fnlr/JrVkp/PEI1t81gIAQFGUYue2lF8iadHtdkHXdbArNquH6Qvzk8lkSR/JvAtJXUG5a0BNS8PUk5b0y4SlKC73+ylIauOy6G6028cyjG9PHev56B+CaPejB/39hvm/1l9zuh9+d3X4DAAAAABJRU5ErkJggg==\" >"
      }
    },
    "zeppelin-beam": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-beam",
        "version": "0.8.2",
        "published": "2019-09-25T21:28:02-07:00",
        "artifact": "zeppelin-beam@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-beam"
      }
    },
    "zeppelin-ignite": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-ignite",
        "version": "0.6.0",
        "published": "2016-06-27T23:22:33+00:00",
        "artifact": "zeppelin-ignite@0.6.0",
        "description": "Zeppelin: Apache Ignite interpreter",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-ignite"
      }
    },
    "zeppelin-highcharts-scatterplot": {
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-scatterplot",
        "version": "0.0.2",
        "published": "2017-02-14T12:17:22.411Z",
        "artifact": "zeppelin-highcharts-scatterplot@0.0.2",
        "author": "1ambda",
        "description": "Scatter plot for Apache Zeppelin using highcharts.js",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<img class=\"icon icons8-Scatter-Plot\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFUUlEQVRoQ+2ZQWwbVRCGZ9brCEQtYlVtaCuSNEUQSmldpQK1QiVGiAsHnAsHVAdH2L02kbAFp7S3ykaquWKjOHbFgQtG4oQq4iKEBCSq20uTigY3QKFBEIcUtarXO+g9e53tetfZXTtOLHUvVpz3duZ78+Z/88Z4+sMLBNVHJvAmz0/klL+302dg6oP+crk8iQA+AOwGojwgpNLB2MfMT+wEkHc+CXtEAWY4gOYhgGwmGB3pCBB/MpJHgCNGO4QIJrY9SCUaeEWBGHp2ENyuHXBt8SYsr6xUvibKb3uQU4n3hwUUZpi/u91ueGPoJe77nyt/w6W52VqQOgqkSxTB98pJ6BKdcH3pFszdmK9GBFa3DISrkCSfASQPABYRKKcokDoXAlPj3bLUVQCEJ9n3DMbtcsEdZVtVBk9vCYj/03AACafqkpcoL4iOkdTY+YL6f4bjeX7AqiAKnraDaJO3Xk4plwnGvNrvOYyMcSUylRyny2WC8c9Ox9qf7KPJSAoA3mWOOEURnu/tg7v378Hi7ds132WSvRdDH+kezCz52UCZsMgAlEltj4g/Ec4h4qvMgZNHPNC7q4f78tUP30NxbU1J3nPpUPSs0bmh9/2Wghx/4RAc2LOvM0HUW4sp0MCefXxr/fbXcm2hJZmOqreNmci0PSJMdmVJZgUfl9O6ZCe6nAnFeB5YedoOwpzjyoWY08IwFXKIJV9qLF60AsHGNgXCDqsyOXkxV5Zg1cp24HNlpw9l7OcqBHJOT6nM2rANMpqInAWESfXKEVDO4SiN2FlRvQhYsWELZDQZjgPgGd3w89O55G0WxqoNyyA8WcvyLwrEE48/Bk7RuX4G8BMXJjKhaNzqPlfG27FhGcSfiIwjwgVmlEG8+fIJXo1eW/yZ3xHYw5LWjvIoIHZsWAZR71uj+0GzIHZsWAY5lYz4BIAvlNU7fvAQj8zcwgKs3K2UGET0ZSYU89ndWnZsWAbhclh25hGwz8hRvaKPz5O6JhEpoDQRmMqVZZjQyrYdG5ZBmPP8+glC1uB0nk4HowE1ZOVy5JwBRI/OWV6UZPBqYazasAXCnKnc8MpxBBxmQARwFZDimfdirEx/6NE7DzRDCulgdL92nhUbtkGs7H9/MlxQtuLA3r1w4uCLdc0DO4Wi2oe2gIwmI7Vu5utDx+Ap907uw9dzP9ZaOo0uU2YWrS0g6ogMPt0Hx54bhH/W/oVLcz/BA0nifm46CKtUHQKwcoQXdwBQcDgc57QNgkar1rDc4P0DupUJxpT3mwlA3ZiGETHuXpCu0hh5sJGcygAjF4PRrC2C6iRDEG29oyebgqO032xxWDlHnClEfEt5F4sEAY43C8HeZwii3g6s28Hu1yVJgtmFef7JHkIa05PbRivLgCRJ9Gi7IM1EoyGIuttxeOAAHB54htuavXEd5peWKnYJLHc7mnXYaL5hRPyJcFbZBor2s5fkrl5ZbxR0Bsh6uc4A3DtcfDGUwrCRZPI7uWM9FwRBmLaicnai1li1GvzAYlSqG0mtnXyyAtQQpFrrMKXhncGa2hh0OzaqqVohs5ZzRD2hWonyXpNElDXqlowmIkWlIu52uaB31264+cfv8N+9+1VxoHw6FDtqZaXNjm1ZiaL+ZYkZf3v4NX4FZl3E7Hff1vxJB6No1jkr4zYd5IFUgs9z33QOCPNUXeX2uN3Q494Jvy7fWb8Ct6CmaipHzIZ4o2TfTOVq2dZSYNUHqWYB6q7AZhfIzLiWgzCj1S6Ij4j6EbEgk5wy+gXKjJNmxmwKiBnDrR7zCKTVK9rs+x6KSLMv28r5j0C2cvX1bP8Pf6sbRhuKm9EAAAAASUVORK5CYII=\" width=\"15\" height=\"15\" />"
      }
    },
    "sogou-map-vis-linkid": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.1",
        "published": "2018-08-02T05:39:17.292Z",
        "artifact": "sogou-map-vis-linkid@0.0.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.2",
        "published": "2018-08-02T05:54:06.042Z",
        "artifact": "sogou-map-vis-linkid@0.0.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.3",
        "published": "2018-08-02T09:19:50.633Z",
        "artifact": "sogou-map-vis-linkid@0.0.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.4",
        "published": "2018-08-02T09:32:41.848Z",
        "artifact": "sogou-map-vis-linkid@0.0.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.5",
        "published": "2018-08-02T10:52:13.758Z",
        "artifact": "sogou-map-vis-linkid@0.0.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.6",
        "published": "2018-08-02T10:58:30.785Z",
        "artifact": "sogou-map-vis-linkid@0.0.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.7",
        "published": "2018-08-02T11:24:11.342Z",
        "artifact": "sogou-map-vis-linkid@0.0.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.8",
        "published": "2018-08-06T10:56:50.591Z",
        "artifact": "sogou-map-vis-linkid@0.0.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.9": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.9",
        "published": "2018-08-06T11:12:15.710Z",
        "artifact": "sogou-map-vis-linkid@0.0.9",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.10",
        "published": "2018-08-06T11:35:41.256Z",
        "artifact": "sogou-map-vis-linkid@0.0.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.11",
        "published": "2018-08-06T13:42:49.555Z",
        "artifact": "sogou-map-vis-linkid@0.0.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.12": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.12",
        "published": "2018-08-06T15:26:24.884Z",
        "artifact": "sogou-map-vis-linkid@0.0.12",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.13": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.13",
        "published": "2018-08-07T10:58:22.797Z",
        "artifact": "sogou-map-vis-linkid@0.0.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.14": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.14",
        "published": "2018-08-08T08:47:48.206Z",
        "artifact": "sogou-map-vis-linkid@0.0.14",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.15": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.15",
        "published": "2018-08-08T09:01:50.347Z",
        "artifact": "sogou-map-vis-linkid@0.0.15",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.16": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.16",
        "published": "2018-08-08T12:25:25.910Z",
        "artifact": "sogou-map-vis-linkid@0.0.16",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.17": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.17",
        "published": "2018-08-08T12:53:48.510Z",
        "artifact": "sogou-map-vis-linkid@0.0.17",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.18": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.18",
        "published": "2018-08-08T16:13:32.491Z",
        "artifact": "sogou-map-vis-linkid@0.0.18",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.19": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.19",
        "published": "2018-08-08T16:26:06.797Z",
        "artifact": "sogou-map-vis-linkid@0.0.19",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.20": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.20",
        "published": "2018-08-08T17:13:01.064Z",
        "artifact": "sogou-map-vis-linkid@0.0.20",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.21": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.21",
        "published": "2018-08-08T21:25:45.367Z",
        "artifact": "sogou-map-vis-linkid@0.0.21",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.22": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.22",
        "published": "2018-08-08T22:35:02.397Z",
        "artifact": "sogou-map-vis-linkid@0.0.22",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.23": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.23",
        "published": "2018-08-08T22:47:52.345Z",
        "artifact": "sogou-map-vis-linkid@0.0.23",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.24": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.24",
        "published": "2018-08-09T01:51:49.401Z",
        "artifact": "sogou-map-vis-linkid@0.0.24",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.25": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.25",
        "published": "2018-08-09T06:39:12.874Z",
        "artifact": "sogou-map-vis-linkid@0.0.25",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.26": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.26",
        "published": "2018-08-09T07:43:56.580Z",
        "artifact": "sogou-map-vis-linkid@0.0.26",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.27": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.27",
        "published": "2018-08-09T08:26:28.270Z",
        "artifact": "sogou-map-vis-linkid@0.0.27",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.28": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.28",
        "published": "2018-08-09T09:13:41.178Z",
        "artifact": "sogou-map-vis-linkid@0.0.28",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.29": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.29",
        "published": "2018-08-09T09:34:22.288Z",
        "artifact": "sogou-map-vis-linkid@0.0.29",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.30": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.30",
        "published": "2018-08-09T09:51:24.735Z",
        "artifact": "sogou-map-vis-linkid@0.0.30",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.31": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.31",
        "published": "2018-08-09T11:26:08.168Z",
        "artifact": "sogou-map-vis-linkid@0.0.31",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.32": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.32",
        "published": "2018-08-09T12:03:39.871Z",
        "artifact": "sogou-map-vis-linkid@0.0.32",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.33": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.33",
        "published": "2018-08-09T12:08:10.057Z",
        "artifact": "sogou-map-vis-linkid@0.0.33",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.34": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.34",
        "published": "2018-08-09T12:30:53.792Z",
        "artifact": "sogou-map-vis-linkid@0.0.34",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.35": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.35",
        "published": "2018-08-09T12:52:20.540Z",
        "artifact": "sogou-map-vis-linkid@0.0.35",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.36": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.36",
        "published": "2018-08-09T12:57:32.955Z",
        "artifact": "sogou-map-vis-linkid@0.0.36",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.37": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.37",
        "published": "2018-08-09T13:07:58.482Z",
        "artifact": "sogou-map-vis-linkid@0.0.37",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.38": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.38",
        "published": "2018-08-10T02:34:55.772Z",
        "artifact": "sogou-map-vis-linkid@0.0.38",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.39": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.39",
        "published": "2018-08-10T03:26:36.337Z",
        "artifact": "sogou-map-vis-linkid@0.0.39",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.40": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.40",
        "published": "2018-08-10T04:46:42.875Z",
        "artifact": "sogou-map-vis-linkid@0.0.40",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.41": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.41",
        "published": "2018-08-10T05:44:55.565Z",
        "artifact": "sogou-map-vis-linkid@0.0.41",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.42": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.42",
        "published": "2018-08-10T06:55:40.102Z",
        "artifact": "sogou-map-vis-linkid@0.0.42",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.43": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.43",
        "published": "2018-08-10T07:33:53.118Z",
        "artifact": "sogou-map-vis-linkid@0.0.43",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.44": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.44",
        "published": "2018-08-10T08:07:13.302Z",
        "artifact": "sogou-map-vis-linkid@0.0.44",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.45": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.45",
        "published": "2018-08-12T08:34:46.850Z",
        "artifact": "sogou-map-vis-linkid@0.0.45",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.46": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.46",
        "published": "2018-08-12T09:06:06.076Z",
        "artifact": "sogou-map-vis-linkid@0.0.46",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.47": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.47",
        "published": "2018-08-12T11:03:37.718Z",
        "artifact": "sogou-map-vis-linkid@0.0.47",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.48": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.48",
        "published": "2018-08-12T13:03:50.334Z",
        "artifact": "sogou-map-vis-linkid@0.0.48",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.49": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.49",
        "published": "2018-08-12T14:43:44.450Z",
        "artifact": "sogou-map-vis-linkid@0.0.49",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.50": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.50",
        "published": "2018-08-12T16:21:50.621Z",
        "artifact": "sogou-map-vis-linkid@0.0.50",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.51": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.51",
        "published": "2018-08-12T16:49:29.676Z",
        "artifact": "sogou-map-vis-linkid@0.0.51",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.52": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.52",
        "published": "2018-08-12T17:07:07.584Z",
        "artifact": "sogou-map-vis-linkid@0.0.52",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.53": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.53",
        "published": "2018-08-13T02:05:05.518Z",
        "artifact": "sogou-map-vis-linkid@0.0.53",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.54": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.54",
        "published": "2018-08-13T04:47:22.360Z",
        "artifact": "sogou-map-vis-linkid@0.0.54",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.55": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.55",
        "published": "2018-08-13T05:35:51.518Z",
        "artifact": "sogou-map-vis-linkid@0.0.55",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.56": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.56",
        "published": "2018-08-13T05:47:33.632Z",
        "artifact": "sogou-map-vis-linkid@0.0.56",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.57": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.57",
        "published": "2018-08-13T06:25:18.807Z",
        "artifact": "sogou-map-vis-linkid@0.0.57",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.58": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.58",
        "published": "2018-08-13T07:05:07.848Z",
        "artifact": "sogou-map-vis-linkid@0.0.58",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.59": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.59",
        "published": "2018-08-13T07:32:19.502Z",
        "artifact": "sogou-map-vis-linkid@0.0.59",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.60": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.60",
        "published": "2018-08-15T11:41:29.120Z",
        "artifact": "sogou-map-vis-linkid@0.0.60",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.61": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.61",
        "published": "2018-08-15T12:39:30.184Z",
        "artifact": "sogou-map-vis-linkid@0.0.61",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.62": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.62",
        "published": "2018-08-15T12:58:55.383Z",
        "artifact": "sogou-map-vis-linkid@0.0.62",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.63": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.63",
        "published": "2018-08-16T03:39:10.118Z",
        "artifact": "sogou-map-vis-linkid@0.0.63",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.64": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.64",
        "published": "2018-08-16T07:58:19.071Z",
        "artifact": "sogou-map-vis-linkid@0.0.64",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.65": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.65",
        "published": "2018-08-16T08:13:46.643Z",
        "artifact": "sogou-map-vis-linkid@0.0.65",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.0.66": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.0.66",
        "published": "2018-08-16T08:17:43.137Z",
        "artifact": "sogou-map-vis-linkid@0.0.66",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.0": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.0",
        "published": "2018-08-17T05:37:55.546Z",
        "artifact": "sogou-map-vis-linkid@0.1.0",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.1",
        "published": "2018-08-17T05:58:14.054Z",
        "artifact": "sogou-map-vis-linkid@0.1.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.2",
        "published": "2018-08-28T03:38:32.723Z",
        "artifact": "sogou-map-vis-linkid@0.1.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.3",
        "published": "2018-08-28T06:25:57.549Z",
        "artifact": "sogou-map-vis-linkid@0.1.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.4",
        "published": "2018-08-28T07:17:36.379Z",
        "artifact": "sogou-map-vis-linkid@0.1.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.5",
        "published": "2018-09-03T02:03:14.047Z",
        "artifact": "sogou-map-vis-linkid@0.1.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.6",
        "published": "2018-09-03T03:41:43.329Z",
        "artifact": "sogou-map-vis-linkid@0.1.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.7",
        "published": "2018-09-03T06:05:06.935Z",
        "artifact": "sogou-map-vis-linkid@0.1.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.8",
        "published": "2018-09-03T06:29:00.330Z",
        "artifact": "sogou-map-vis-linkid@0.1.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.10",
        "published": "2018-09-03T07:54:13.486Z",
        "artifact": "sogou-map-vis-linkid@0.1.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.11",
        "published": "2018-09-03T09:28:24.349Z",
        "artifact": "sogou-map-vis-linkid@0.1.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.12": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.12",
        "published": "2018-09-13T08:32:13.155Z",
        "artifact": "sogou-map-vis-linkid@0.1.12",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "0.1.13": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.13",
        "published": "2019-02-19T03:03:41.706Z",
        "artifact": "sogou-map-vis-linkid@0.1.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-linkid",
        "version": "0.1.14",
        "published": "2019-02-19T03:42:40.257Z",
        "artifact": "sogou-map-vis-linkid@0.1.14",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:green'></i>"
      }
    },
    "sogou-map-vis-routeid": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.1",
        "published": "2018-08-02T07:15:50.539Z",
        "artifact": "sogou-map-vis-routeid@0.0.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.2",
        "published": "2018-08-02T07:42:20.218Z",
        "artifact": "sogou-map-vis-routeid@0.0.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.3",
        "published": "2018-08-02T08:41:01.209Z",
        "artifact": "sogou-map-vis-routeid@0.0.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.4",
        "published": "2018-08-02T08:53:26.403Z",
        "artifact": "sogou-map-vis-routeid@0.0.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.5",
        "published": "2018-08-02T11:46:30.427Z",
        "artifact": "sogou-map-vis-routeid@0.0.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.6",
        "published": "2018-08-06T15:34:19.462Z",
        "artifact": "sogou-map-vis-routeid@0.0.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.7",
        "published": "2018-08-08T10:43:34.612Z",
        "artifact": "sogou-map-vis-routeid@0.0.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.8",
        "published": "2018-08-08T12:25:36.951Z",
        "artifact": "sogou-map-vis-routeid@0.0.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.9": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.9",
        "published": "2018-08-08T12:53:55.214Z",
        "artifact": "sogou-map-vis-routeid@0.0.9",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.10",
        "published": "2018-08-08T16:13:43.510Z",
        "artifact": "sogou-map-vis-routeid@0.0.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.11",
        "published": "2018-08-08T16:22:30.590Z",
        "artifact": "sogou-map-vis-routeid@0.0.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.12": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.12",
        "published": "2018-08-08T17:13:15.529Z",
        "artifact": "sogou-map-vis-routeid@0.0.12",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.13": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.13",
        "published": "2018-08-08T21:25:48.395Z",
        "artifact": "sogou-map-vis-routeid@0.0.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.14": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.14",
        "published": "2018-08-08T22:35:06.181Z",
        "artifact": "sogou-map-vis-routeid@0.0.14",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.15": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.15",
        "published": "2018-08-08T22:47:48.341Z",
        "artifact": "sogou-map-vis-routeid@0.0.15",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.16": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.16",
        "published": "2018-08-09T06:26:23.135Z",
        "artifact": "sogou-map-vis-routeid@0.0.16",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.17": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.17",
        "published": "2018-08-09T06:49:34.867Z",
        "artifact": "sogou-map-vis-routeid@0.0.17",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.18": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.18",
        "published": "2018-08-09T07:50:27.680Z",
        "artifact": "sogou-map-vis-routeid@0.0.18",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.19": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.19",
        "published": "2018-08-09T08:26:19.202Z",
        "artifact": "sogou-map-vis-routeid@0.0.19",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.20": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.20",
        "published": "2018-08-09T08:38:28.235Z",
        "artifact": "sogou-map-vis-routeid@0.0.20",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.21": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.21",
        "published": "2018-08-09T09:13:41.382Z",
        "artifact": "sogou-map-vis-routeid@0.0.21",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.22": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.22",
        "published": "2018-08-09T11:01:56.679Z",
        "artifact": "sogou-map-vis-routeid@0.0.22",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.23": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.23",
        "published": "2018-08-09T11:26:12.878Z",
        "artifact": "sogou-map-vis-routeid@0.0.23",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.24": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.24",
        "published": "2018-08-10T02:35:06.732Z",
        "artifact": "sogou-map-vis-routeid@0.0.24",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.25": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.25",
        "published": "2018-08-10T03:26:39.757Z",
        "artifact": "sogou-map-vis-routeid@0.0.25",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.26": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.26",
        "published": "2018-08-10T04:46:44.236Z",
        "artifact": "sogou-map-vis-routeid@0.0.26",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.27": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.27",
        "published": "2018-08-10T05:44:59.213Z",
        "artifact": "sogou-map-vis-routeid@0.0.27",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.28": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.28",
        "published": "2018-08-10T06:55:36.568Z",
        "artifact": "sogou-map-vis-routeid@0.0.28",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.29": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.29",
        "published": "2018-08-10T07:33:49.941Z",
        "artifact": "sogou-map-vis-routeid@0.0.29",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.30": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.30",
        "published": "2018-08-10T08:07:17.014Z",
        "artifact": "sogou-map-vis-routeid@0.0.30",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.31": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.31",
        "published": "2018-08-12T08:34:53.777Z",
        "artifact": "sogou-map-vis-routeid@0.0.31",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.32": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.32",
        "published": "2018-08-12T09:16:35.990Z",
        "artifact": "sogou-map-vis-routeid@0.0.32",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.33": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.33",
        "published": "2018-08-12T11:03:32.530Z",
        "artifact": "sogou-map-vis-routeid@0.0.33",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.34": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.34",
        "published": "2018-08-12T13:03:54.906Z",
        "artifact": "sogou-map-vis-routeid@0.0.34",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.35": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.35",
        "published": "2018-08-12T14:43:53.463Z",
        "artifact": "sogou-map-vis-routeid@0.0.35",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.36": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.36",
        "published": "2018-08-12T16:21:56.528Z",
        "artifact": "sogou-map-vis-routeid@0.0.36",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.37": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.37",
        "published": "2018-08-12T16:49:25.918Z",
        "artifact": "sogou-map-vis-routeid@0.0.37",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.38": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.38",
        "published": "2018-08-12T17:07:12.237Z",
        "artifact": "sogou-map-vis-routeid@0.0.38",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.39": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.39",
        "published": "2018-08-13T02:05:09.522Z",
        "artifact": "sogou-map-vis-routeid@0.0.39",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.40": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.40",
        "published": "2018-08-13T04:47:36.285Z",
        "artifact": "sogou-map-vis-routeid@0.0.40",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.41": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.41",
        "published": "2018-08-13T05:36:20.562Z",
        "artifact": "sogou-map-vis-routeid@0.0.41",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.42": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.42",
        "published": "2018-08-13T05:47:38.058Z",
        "artifact": "sogou-map-vis-routeid@0.0.42",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.43": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.43",
        "published": "2018-08-13T06:25:20.828Z",
        "artifact": "sogou-map-vis-routeid@0.0.43",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.44": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.44",
        "published": "2018-08-13T07:05:07.661Z",
        "artifact": "sogou-map-vis-routeid@0.0.44",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.45": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.45",
        "published": "2018-08-13T07:32:23.144Z",
        "artifact": "sogou-map-vis-routeid@0.0.45",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.46": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.46",
        "published": "2018-08-15T11:41:31.887Z",
        "artifact": "sogou-map-vis-routeid@0.0.46",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.47": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.47",
        "published": "2018-08-15T12:39:38.145Z",
        "artifact": "sogou-map-vis-routeid@0.0.47",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.48": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.48",
        "published": "2018-08-15T12:58:57.970Z",
        "artifact": "sogou-map-vis-routeid@0.0.48",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.49": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.49",
        "published": "2018-08-16T01:47:11.371Z",
        "artifact": "sogou-map-vis-routeid@0.0.49",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.50": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.50",
        "published": "2018-08-16T03:39:21.804Z",
        "artifact": "sogou-map-vis-routeid@0.0.50",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.0.51": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.0.51",
        "published": "2018-08-16T08:20:07.791Z",
        "artifact": "sogou-map-vis-routeid@0.0.51",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.0": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.0",
        "published": "2018-08-17T05:38:00.235Z",
        "artifact": "sogou-map-vis-routeid@0.1.0",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.1",
        "published": "2018-08-17T05:58:17.685Z",
        "artifact": "sogou-map-vis-routeid@0.1.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.2",
        "published": "2018-08-21T14:05:09.957Z",
        "artifact": "sogou-map-vis-routeid@0.1.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.3",
        "published": "2018-08-21T14:41:33.884Z",
        "artifact": "sogou-map-vis-routeid@0.1.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.4",
        "published": "2018-08-28T03:38:42.748Z",
        "artifact": "sogou-map-vis-routeid@0.1.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.5",
        "published": "2018-08-28T06:25:53.386Z",
        "artifact": "sogou-map-vis-routeid@0.1.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.6",
        "published": "2018-08-28T07:17:42.062Z",
        "artifact": "sogou-map-vis-routeid@0.1.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.7",
        "published": "2018-09-03T02:03:41.184Z",
        "artifact": "sogou-map-vis-routeid@0.1.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.8",
        "published": "2018-09-03T03:41:50.889Z",
        "artifact": "sogou-map-vis-routeid@0.1.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.9": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.9",
        "published": "2018-09-03T06:05:11.025Z",
        "artifact": "sogou-map-vis-routeid@0.1.9",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.10",
        "published": "2018-09-03T06:29:04.443Z",
        "artifact": "sogou-map-vis-routeid@0.1.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.11",
        "published": "2018-09-03T07:54:38.973Z",
        "artifact": "sogou-map-vis-routeid@0.1.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "0.1.12": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.12",
        "published": "2018-09-03T09:28:31.289Z",
        "artifact": "sogou-map-vis-routeid@0.1.12",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis-routeid",
        "version": "0.1.13",
        "published": "2018-09-13T08:34:08.862Z",
        "artifact": "sogou-map-vis-routeid@0.1.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe' style='color:blue'></i>"
      }
    },
    "zeppelin-json-spell": {
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-json-spell",
        "version": "0.0.3",
        "published": "2017-02-28T04:49:27.897Z",
        "artifact": "zeppelin-json-spell@0.0.3",
        "author": "1ambda",
        "description": "Use JSON editor in paragraphs",
        "license": "Apache-2.0",
        "icon": "<img height=\"20\" width=\"20\" src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0U5RTlFMDsiIGQ9Ik0zNi45ODUsMEg3Ljk2M0M3LjE1NSwwLDYuNSwwLjY1NSw2LjUsMS45MjZWNTVjMCwwLjM0NSwwLjY1NSwxLDEuNDYzLDFoNDAuMDc0ICAgYzAuODA4LDAsMS40NjMtMC42NTUsMS40NjMtMVYxMi45NzhjMC0wLjY5Ni0wLjA5My0wLjkyLTAuMjU3LTEuMDg1TDM3LjYwNywwLjI1N0MzNy40NDIsMC4wOTMsMzcuMjE4LDAsMzYuOTg1LDB6Ii8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDlEN0NBOyIgcG9pbnRzPSIzNy41LDAuMTUxIDM3LjUsMTIgNDkuMzQ5LDEyICAiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM5Nzc3QTg7IiBkPSJNNDguMDM3LDU2SDcuOTYzQzcuMTU1LDU2LDYuNSw1NS4zNDUsNi41LDU0LjUzN1YzOWg0M3YxNS41MzdDNDkuNSw1NS4zNDUsNDguODQ1LDU2LDQ4LjAzNyw1NnoiLz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTcuMDIxLDQyLjcxOXY3Ljg0OGMwLDAuNDc0LTAuMDg3LDAuODczLTAuMjYsMS4xOTZzLTAuNDA1LDAuNTgzLTAuNjk3LDAuNzc5ICAgIHMtMC42MjcsMC4zMzMtMS4wMDUsMC40MWMtMC4zNzgsMC4wNzctMC43NjgsMC4xMTYtMS4xNjksMC4xMTZjLTAuMiwwLTAuNDM2LTAuMDIxLTAuNzA0LTAuMDYycy0wLjU0Ny0wLjEwNC0wLjgzNC0wLjE5MSAgICBzLTAuNTYzLTAuMTg1LTAuODI3LTAuMjk0cy0wLjQ4Ny0wLjIzMi0wLjY3LTAuMzY5bDAuNjk3LTEuMTA3YzAuMDkxLDAuMDYzLDAuMjIxLDAuMTMsMC4zOSwwLjE5OHMwLjM1NCwwLjEzMiwwLjU1NCwwLjE5MSAgICBzMC40MSwwLjExMSwwLjYyOSwwLjE1N3MwLjQyNCwwLjA2OCwwLjYxNSwwLjA2OGMwLjQ4MywwLDAuODY4LTAuMDk0LDEuMTU1LTAuMjhzMC40MzktMC41MDQsMC40NTgtMC45NXYtNy43MTFIMTcuMDIxeiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjUuMTg0LDUwLjIzOGMwLDAuMzY0LTAuMDc1LDAuNzE4LTAuMjI2LDEuMDZzLTAuMzYyLDAuNjQzLTAuNjM2LDAuOTAycy0wLjYxLDAuNDY3LTEuMDEyLDAuNjIyICAgIHMtMC44NTYsMC4yMzItMS4zNjcsMC4yMzJjLTAuMjE5LDAtMC40NDQtMC4wMTItMC42NzctMC4wMzRzLTAuNDY3LTAuMDYyLTAuNzA0LTAuMTE2Yy0wLjIzNy0wLjA1NS0wLjQ2My0wLjEzLTAuNjc3LTAuMjI2ICAgIHMtMC4zOTgtMC4yMTItMC41NTQtMC4zNDlsMC4yODctMS4xNzZjMC4xMjgsMC4wNzMsMC4yODksMC4xNDQsMC40ODUsMC4yMTJzMC4zOTgsMC4xMzIsMC42MDgsMC4xOTFzMC40MTksMC4xMDcsMC42MjksMC4xNDQgICAgczAuNDA1LDAuMDU1LDAuNTg4LDAuMDU1YzAuNTU2LDAsMC45ODItMC4xMywxLjI3OC0wLjM5czAuNDQ0LTAuNjQ1LDAuNDQ0LTEuMTU1YzAtMC4zMS0wLjEwNC0wLjU3NC0wLjMxNC0wLjc5MyAgICBzLTAuNDcyLTAuNDE3LTAuNzg2LTAuNTk1cy0wLjY1NC0wLjM1NS0xLjAxOS0wLjUzM3MtMC43MDYtMC4zODgtMS4wMjUtMC42MjlzLTAuNTgzLTAuNTI2LTAuNzkzLTAuODU0cy0wLjMxNC0wLjczOC0wLjMxNC0xLjIzICAgIGMwLTAuNDQ2LDAuMDgyLTAuODQzLDAuMjQ2LTEuMTg5czAuMzg1LTAuNjQxLDAuNjYzLTAuODgyczAuNjAyLTAuNDI2LDAuOTcxLTAuNTU0czAuNzU5LTAuMTkxLDEuMTY5LTAuMTkxICAgIGMwLjQxOSwwLDAuODQzLDAuMDM5LDEuMjcxLDAuMTE2czAuNzc0LDAuMjAzLDEuMDM5LDAuMzc2Yy0wLjA1NSwwLjExOC0wLjExOCwwLjI0OC0wLjE5MSwwLjM5cy0wLjE0MiwwLjI3My0wLjIwNSwwLjM5NiAgICBzLTAuMTE4LDAuMjI2LTAuMTY0LDAuMzA4cy0wLjA3MywwLjEyOC0wLjA4MiwwLjEzN2MtMC4wNTUtMC4wMjctMC4xMTYtMC4wNjMtMC4xODUtMC4xMDlzLTAuMTY2LTAuMDkxLTAuMjk0LTAuMTM3ICAgIHMtMC4yOTYtMC4wNzctMC41MDYtMC4wOTZzLTAuNDc5LTAuMDE0LTAuODA3LDAuMDE0Yy0wLjE4MywwLjAxOS0wLjM1NSwwLjA3LTAuNTIsMC4xNTdzLTAuMzEsMC4xOTMtMC40MzgsMC4zMjEgICAgcy0wLjIyOCwwLjI3MS0wLjMwMSwwLjQzMXMtMC4xMDksMC4zMTMtMC4xMDksMC40NThjMCwwLjM2NCwwLjEwNCwwLjY1OCwwLjMxNCwwLjg4MnMwLjQ3LDAuNDE5LDAuNzc5LDAuNTg4ICAgIHMwLjY0NywwLjMzMywxLjAxMiwwLjQ5MnMwLjcwNCwwLjM1NCwxLjAxOSwwLjU4MXMwLjU3NiwwLjUxMywwLjc4NiwwLjg1NFMyNS4xODQsNDkuNywyNS4xODQsNTAuMjM4eiIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzUuMDgyLDQ3LjkxNGMwLDAuODQ4LTAuMTA3LDEuNTk1LTAuMzIxLDIuMjQycy0wLjUxMSwxLjE4NS0wLjg4OSwxLjYxM3MtMC44MiwwLjc1Mi0xLjMyNiwwLjk3MSAgICBzLTEuMDYsMC4zMjgtMS42NjEsMC4zMjhzLTEuMTU1LTAuMTA5LTEuNjYxLTAuMzI4cy0wLjk0OC0wLjU0Mi0xLjMyNi0wLjk3MXMtMC42NzUtMC45NjYtMC44ODktMS42MTNzLTAuMzIxLTEuMzk1LTAuMzIxLTIuMjQyICAgIHMwLjEwNy0xLjU5MywwLjMyMS0yLjIzNXMwLjUxMS0xLjE3OCwwLjg4OS0xLjYwNnMwLjgyLTAuNzU0LDEuMzI2LTAuOTc4czEuMDYtMC4zMzUsMS42NjEtMC4zMzVzMS4xNTUsMC4xMTEsMS42NjEsMC4zMzUgICAgczAuOTQ4LDAuNTQ5LDEuMzI2LDAuOTc4czAuNjc1LDAuOTY0LDAuODg5LDEuNjA2UzM1LjA4Miw0Ny4wNjYsMzUuMDgyLDQ3LjkxNHogTTMwLjg0NCw1MS43MjljMC4zMzcsMCwwLjY1OC0wLjA2NiwwLjk2NC0wLjE5OCAgICBzMC41NzktMC4zNDksMC44Mi0wLjY0OXMwLjQzMS0wLjY5NSwwLjU2Ny0xLjE4M3MwLjIxLTEuMDgyLDAuMjE5LTEuNzg0Yy0wLjAwOS0wLjY4NC0wLjA4LTEuMjY1LTAuMjEyLTEuNzQzICAgIHMtMC4zMTQtMC44NzMtMC41NDctMS4xODNzLTAuNDk3LTAuNTMzLTAuNzkzLTAuNjdzLTAuNjA4LTAuMjA1LTAuOTM3LTAuMjA1Yy0wLjMzNywwLTAuNjU4LDAuMDYzLTAuOTY0LDAuMTkxICAgIHMtMC41NzksMC4zNDQtMC44MiwwLjY0OXMtMC40MzEsMC42OTktMC41NjcsMS4xODNjLTAuMTM3LDAuNDgzLTAuMjEsMS4wNzUtMC4yMTksMS43NzdjMC4wMDksMC42ODQsMC4wOCwxLjI2NywwLjIxMiwxLjc1ICAgIHMwLjMxNCwwLjg3NywwLjU0NywxLjE4M3MwLjQ5NywwLjUyOCwwLjc5MywwLjY3UzMwLjUxNiw1MS43MjksMzAuODQ0LDUxLjcyOXoiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTQ0LjY4LDQyLjkyNFY1M2gtMS42NjhsLTMuOTUxLTYuOTQ1VjUzaC0xLjY2OFY0Mi45MjRoMS42NjhsMy45NTEsNi45NDV2LTYuOTQ1SDQ0LjY4eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izk3NzdBODsiIGQ9Ik0xOS41LDE5di00YzAtMC41NTEsMC40NDgtMSwxLTFjMC41NTMsMCwxLTAuNDQ4LDEtMXMtMC40NDctMS0xLTFjLTEuNjU0LDAtMywxLjM0Ni0zLDN2NCAgICBjMCwxLjEwMy0wLjg5NywyLTIsMmMtMC41NTMsMC0xLDAuNDQ4LTEsMXMwLjQ0NywxLDEsMWMxLjEwMywwLDIsMC44OTcsMiwydjRjMCwxLjY1NCwxLjM0NiwzLDMsM2MwLjU1MywwLDEtMC40NDgsMS0xICAgIHMtMC40NDctMS0xLTFjLTAuNTUyLDAtMS0wLjQ0OS0xLTF2LTRjMC0xLjItMC41NDItMi4yNjYtMS4zODItM0MxOC45NTgsMjEuMjY2LDE5LjUsMjAuMiwxOS41LDE5eiIvPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6Izk3NzdBODsiIGN4PSIyNy41IiBjeT0iMTguNSIgcj0iMS41Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izk3NzdBODsiIGQ9Ik0zOS41LDIxYy0xLjEwMywwLTItMC44OTctMi0ydi00YzAtMS42NTQtMS4zNDYtMy0zLTNjLTAuNTUzLDAtMSwwLjQ0OC0xLDFzMC40NDcsMSwxLDEgICAgYzAuNTUyLDAsMSwwLjQ0OSwxLDF2NGMwLDEuMiwwLjU0MiwyLjI2NiwxLjM4MiwzYy0wLjg0LDAuNzM0LTEuMzgyLDEuOC0xLjM4MiwzdjRjMCwwLjU1MS0wLjQ0OCwxLTEsMWMtMC41NTMsMC0xLDAuNDQ4LTEsMSAgICBzMC40NDcsMSwxLDFjMS42NTQsMCwzLTEuMzQ2LDMtM3YtNGMwLTEuMTAzLDAuODk3LTIsMi0yYzAuNTUzLDAsMS0wLjQ0OCwxLTFTNDAuMDUzLDIxLDM5LjUsMjF6Ii8+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izk3NzdBODsiIGQ9Ik0yNy41LDI0Yy0wLjU1MywwLTEsMC40NDgtMSwxdjNjMCwwLjU1MiwwLjQ0NywxLDEsMXMxLTAuNDQ4LDEtMXYtMyAgICBDMjguNSwyNC40NDgsMjguMDUzLDI0LDI3LjUsMjR6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />",
        "spell": {"magic": "%json", "usage": "%json <JSON>"}
      }
    },
    "zeppelin-ignite_2.11": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-ignite_2.11",
        "version": "0.8.2",
        "published": "2019-09-25T21:28:09-07:00",
        "artifact": "zeppelin-ignite_2.11@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-ignite_2.11"
      }
    },
    "zeppelin-leaflet": {
      "1.0.2": {
        "type": "VISUALIZATION",
        "name": "zeppelin-leaflet",
        "version": "1.0.2",
        "published": "2017-10-31T09:31:51.660Z",
        "artifact": "zeppelin-leaflet@1.0.2",
        "author": "Mitchell Yuwono",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.3": {
        "type": "VISUALIZATION",
        "name": "zeppelin-leaflet",
        "version": "1.0.3",
        "published": "2017-11-01T12:47:14.830Z",
        "artifact": "zeppelin-leaflet@1.0.3",
        "author": "Mitchell Yuwono",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.4": {
        "type": "VISUALIZATION",
        "name": "zeppelin-leaflet",
        "version": "1.0.4",
        "published": "2017-11-05T08:24:52.404Z",
        "artifact": "zeppelin-leaflet@1.0.4",
        "author": "Mitchell Yuwono",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-leaflet",
        "version": "1.0.5",
        "published": "2019-06-14T08:51:38.202Z",
        "artifact": "zeppelin-leaflet@1.0.5",
        "author": "Mitchell Yuwono",
        "description": "Geospatial visualization using the Leaflet map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      }
    },
    "zeppelin-mathjax-spell": {
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-mathjax-spell",
        "version": "0.0.1",
        "published": "2017-03-08T10:04:18.787Z",
        "artifact": "zeppelin-mathjax-spell@0.0.1",
        "author": "1ambda",
        "description": "MathJax Spell For Apache Zeppelin",
        "license": "Apache-2.0",
        "icon": "<img width=\"20\" height=\"20\" src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzZEQzgyQTsiIGQ9Ik0yNTYsNTEyQzExNC44MzksNTEyLDAsMzk3LjE1NiwwLDI1NlMxMTQuODM5LDAsMjU2LDBzMjU2LDExNC44NDQsMjU2LDI1NlMzOTcuMTYxLDUxMiwyNTYsNTEyeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNjFCMzI1OyIgZD0iTTUxMiwyNTZDNTEyLDExNC44NDQsMzk3LjE2MSwwLDI1NiwwdjUxMkMzOTcuMTYxLDUxMiw1MTIsMzk3LjE1Niw1MTIsMjU2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE4OS40MTksNDA0Ljg1M2MtNi4yMjQsMC0xMS45MS0zLjUxMS0xNC42OTMtOS4wNzhsLTYyLjI1OC0xMjQuNTE3SDg5LjIyMyAgYy05LjA3MiwwLTE2LjQyOC03LjM1LTE2LjQyOC0xNi40MjhzNy4zNTQtMTYuNDI4LDE2LjQyOC0xNi40MjhoMzMuMzk5YzYuMjI0LDAsMTEuOTEsMy41MTEsMTQuNjkzLDkuMDc4bDUyLjEwNCwxMDQuMjA4ICBsMTA3Ljc2OC0yMTUuNTM3YzIuNzgzLTUuNTY2LDguNDY5LTkuMDc4LDE0LjY5My05LjA3OGg3Ny45M2M5LjA3MiwwLDE2LjQyOCw3LjM1LDE2LjQyOCwxNi40MjhzLTcuMzU0LDE2LjQyOC0xNi40MjgsMTYuNDI4ICBoLTY3Ljc3NkwyMDQuMTEyLDM5NS43NzVDMjAxLjMyOSw0MDEuMzQyLDE5NS42NDMsNDA0Ljg1MywxODkuNDE5LDQwNC44NTN6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkU2QjM7IiBkPSJNMzg5LjgxLDEyNy4wNzVoLTc3LjkzYy02LjIyNCwwLTExLjkxLDMuNTExLTE0LjY5Myw5LjA3OGwtNDAuOTcxLDgxLjk0MnY3My40NzJsNjUuODE5LTEzMS42MzcgIGg2Ny43NzZjOS4wNzIsMCwxNi40MjgtNy4zNSwxNi40MjgtMTYuNDI4QzQwNi4yMzgsMTM0LjQyNSwzOTguODg0LDEyNy4wNzUsMzg5LjgxLDEyNy4wNzV6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\" />",
        "spell": {"magic": "%mathjax", "usage": "%mathjax <TEXT>"}
      }
    },
    "zeppelin-alluxio": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-alluxio",
        "version": "0.8.2",
        "published": "2019-09-25T21:28:40-07:00",
        "artifact": "zeppelin-alluxio@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-alluxio"
      }
    },
    "zeppelin-number": {
      "1.0.0": {
        "type": "VISUALIZATION",
        "name": "zeppelin-number",
        "version": "1.0.0",
        "published": "2018-07-22T18:55:33.637Z",
        "artifact": "zeppelin-number@1.0.0",
        "author": "Saravanan Elumalai",
        "description": "Zeppelin plugin to visualize number",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-number",
        "version": "1.0.1",
        "published": "2018-07-25T19:27:29.007Z",
        "artifact": "zeppelin-number@1.0.1",
        "author": "Saravanan Elumalai",
        "description": "Zeppelin plugin to visualize number",
        "license": "Apache-2.0",
        "icon": "<i style='margin-left: -5px;'>123</i>"
      }
    },
    "zeppelin-jdbc": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-jdbc",
        "version": "0.8.2",
        "published": "2019-09-25T21:30:34-07:00",
        "artifact": "zeppelin-jdbc@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-jdbc"
      }
    },
    "zeppelin-kylin": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-kylin",
        "version": "0.8.2",
        "published": "2019-09-25T21:23:02-07:00",
        "artifact": "zeppelin-kylin@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-kylin"
      }
    },
    "zeppelin-ignite_2.10": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-ignite_2.10",
        "version": "0.8.2",
        "published": "2019-09-25T21:27:42-07:00",
        "artifact": "zeppelin-ignite_2.10@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-ignite_2.10"
      }
    },
    "zeppelin-season-table": {
      "1.0.0": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.0",
        "published": "2017-09-06T18:48:38.146Z",
        "artifact": "zeppelin-season-table@1.0.0",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "1.0.1": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.1",
        "published": "2017-09-07T06:41:58.860Z",
        "artifact": "zeppelin-season-table@1.0.1",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "1.0.2": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.2",
        "published": "2017-09-07T12:13:52.038Z",
        "artifact": "zeppelin-season-table@1.0.2",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "1.0.3": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.3",
        "published": "2017-09-08T02:11:43.043Z",
        "artifact": "zeppelin-season-table@1.0.3",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "1.0.4": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.4",
        "published": "2017-09-08T07:57:27.600Z",
        "artifact": "zeppelin-season-table@1.0.4",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "1.0.5": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.5",
        "published": "2017-09-11T05:50:20.415Z",
        "artifact": "zeppelin-season-table@1.0.5",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "1.0.6": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.6",
        "published": "2017-09-11T06:22:13.210Z",
        "artifact": "zeppelin-season-table@1.0.6",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-season-table",
        "version": "1.0.7",
        "published": "2017-09-11T08:41:21.586Z",
        "artifact": "zeppelin-season-table@1.0.7",
        "author": "sherry",
        "description": "",
        "license": "ISC",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      }
    },
    "zeppelin-cassandra_2.11": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-cassandra_2.11",
        "version": "0.8.2",
        "published": "2019-09-25T21:22:50-07:00",
        "artifact": "zeppelin-cassandra_2.11@0.8.2",
        "description": "Zeppelin cassandra support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-cassandra_2.11"
      }
    },
    "zeppelin-jupyter-interpreter": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-jupyter-interpreter",
        "version": "0.9.0-preview1",
        "published": "2020-03-23T02:23:54-07:00",
        "artifact": "zeppelin-jupyter-interpreter@0.9.0-preview1",
        "description": "Zeppelin: Jupyter Interpreter",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-jupyter-interpreter"
      }
    },
    "zeppelin-flink_2.11": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-flink_2.11",
        "version": "0.8.2",
        "published": "2019-09-25T21:29:35-07:00",
        "artifact": "zeppelin-flink_2.11@0.8.2",
        "description": "Zeppelin flink support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-flink_2.11"
      }
    },
    "zeppelin-display": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-display",
        "version": "0.9.0-preview1",
        "published": "2020-03-23T02:11:46-07:00",
        "artifact": "zeppelin-display@0.9.0-preview1",
        "description": "Zeppelin: Display system apis",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-display"
      },
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-display",
        "version": "0.8.2",
        "published": "2019-09-25T21:23:21-07:00",
        "artifact": "zeppelin-display@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-display"
      }
    },
    "zeppelin-markdown-spell": {
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-markdown-spell",
        "version": "0.0.3",
        "published": "2017-03-07T19:17:35.975Z",
        "artifact": "zeppelin-markdown-spell@0.0.3",
        "author": "1ambda",
        "description": "Parse markdown using https://github.com/evilstreak/markdown-js",
        "license": "MIT",
        "icon": "<img width=\"21\" height=\"21\" class=\"icon icons8-Markdown\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACe0lEQVRoQ+1ZsXLTQBDdtURBGtxkJqghfxDnD+LB0PIJ2INJHb4k1NiMwx9Ai804fxDzB6HxZIYCpQlFJC2zSi5IsmSdZOlyUU6VZny3u++93b21DqEhDzYEBxgguilpFDGK1MSASa2aiC1ttlmK7Mwnu+j7xwDQQYDd0rQo3EgA5wCwIMv6cNEdnCODaPn+GQC0FcZRpSs3sKx9fD4dfUXEN1VaVm2LiL6hMxv/ecBqhJxxmjEQUs1gHf4MkDpY3cTm41Fk2RvGDk1nNj4BgLc57H1Z9ob96BqZWkzxJV2/uYokjbfnk/aW758CwF4GmJ9XlnXgdgeu1kA4uO3vnzpPEE8B8VkMDNHlNdHB79eHiyRI7RQRAe78+NxvEU2iAQeIg4uX7zj1Vh5tgXCkialgpS60Ti1OK5E6XC9PfT9Mo7+W1RF1EV0jwGiniDMdnV3ZdjcaNAcbBbflefPlq/f7Wityy+zJsjccZNQC102/TCsts0fEULj9ihRJK+xoA8gLal1jyDqj0hrMxkAAwL0Ogq5IqbAlt1pzMUnnAeEAioBZB4JtlVbkZn6mBdcLv3JdAGJHMCQDJElGlhJJktLWbQbkxqI4N2IjiSQQ3h9TNhmkDIjNFcmiEAAKALlTNjnWhONQQuksl1Uokmq7EJBImgowRUDoo8h/Ku7aujMbh218jeixn/RRJALm9lUahJQisozc97pcRe47QFn/BogsU6rWoTMduSv/9FR5r8gPAfxqzifT8CO25y0erCpEl4Ft8y0CQHit4HkfeehDgBcVKV6rGU4nHlrJto/Ca4VavSk0boAoJFvKlVFEiiaFi4wiCsmWctUYRf4BU7yc5SpD5zUAAAAASUVORK5CYII=\" >",
        "spell": {"magic": "%markdown", "usage": "%markdown <TEXT>"}
      }
    },
    "zeppelin-livy": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-livy",
        "version": "0.8.2",
        "published": "2019-09-25T21:29:26-07:00",
        "artifact": "zeppelin-livy@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-livy"
      }
    },
    "zeppelin-neo4j": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-neo4j",
        "version": "0.8.2",
        "published": "2019-09-25T21:25:29-07:00",
        "artifact": "zeppelin-neo4j@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-neo4j"
      }
    },
    "zeppelin-bigquery": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-bigquery",
        "version": "0.8.2",
        "published": "2019-09-25T21:21:08-07:00",
        "artifact": "zeppelin-bigquery@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-bigquery"
      }
    },
    "zeppelin-display_2.10": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-display_2.10",
        "version": "0.7.3",
        "published": "2017-09-18T16:29:25+00:00",
        "artifact": "zeppelin-display_2.10@0.7.3",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-display_2.10"
      }
    },
    "zeppelin-markdown": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-markdown",
        "version": "0.8.2",
        "published": "2019-09-25T21:22:08-07:00",
        "artifact": "zeppelin-markdown@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-markdown"
      }
    },
    "zeppelin-file": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-file",
        "version": "0.8.2",
        "published": "2019-09-25T21:24:29-07:00",
        "artifact": "zeppelin-file@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-file"
      }
    },
    "zeppelin-sigma-spell": {
      "0.0.1": {
        "type": "SPELL",
        "name": "zeppelin-sigma-spell",
        "version": "0.0.1",
        "published": "2017-03-08T10:09:23.660Z",
        "artifact": "zeppelin-sigma-spell@0.0.1",
        "author": "datalayer",
        "description": "Sigma.js Network Visualization",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-sigma-spell",
        "version": "0.0.2",
        "published": "2017-03-10T09:31:56.802Z",
        "artifact": "zeppelin-sigma-spell@0.0.2",
        "author": "datalayer",
        "description": "Sigma.js Network Visualization",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      }
    },
    "zeppelin-flink": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-flink",
        "version": "0.9.0-preview1",
        "published": "2020-03-23T02:14:53-07:00",
        "artifact": "zeppelin-flink@0.9.0-preview1",
        "description": "Zeppelin flink support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-flink"
      }
    },
    "zeppelin-postgresql": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-postgresql",
        "version": "0.7.3",
        "published": "2017-09-18T16:33:12+00:00",
        "artifact": "zeppelin-postgresql@0.7.3",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-postgresql"
      }
    },
    "zeppelin-elasticsearch": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-elasticsearch",
        "version": "0.8.2",
        "published": "2019-09-25T21:29:02-07:00",
        "artifact": "zeppelin-elasticsearch@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-elasticsearch"
      }
    },
    "zeppelin-shell": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-shell",
        "version": "0.8.2",
        "published": "2019-09-25T21:23:42-07:00",
        "artifact": "zeppelin-shell@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-shell"
      }
    },
    "zeppelin-plotly-bubble": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "zeppelin-plotly-bubble",
        "version": "0.0.1",
        "published": "2017-09-20T09:18:12.714Z",
        "artifact": "zeppelin-plotly-bubble@0.0.1",
        "author": "Jun Kim",
        "description": "Bubble chart of Plotly.js for Apache Zeppelin",
        "license": "MIT",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-plotly-bubble",
        "version": "0.0.2",
        "published": "2017-11-07T09:38:48.307Z",
        "artifact": "zeppelin-plotly-bubble@0.0.2",
        "author": "Jun Kim",
        "description": "Bubble chart of Plotly.js for Apache Zeppelin",
        "license": "MIT",
        "icon": "<i class='fa fa-heartbeat'></i>"
      }
    },
    "zeppelin-groovy": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-groovy",
        "version": "0.8.2",
        "published": "2019-09-25T21:21:52-07:00",
        "artifact": "zeppelin-groovy@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-groovy"
      }
    },
    "zeppelin-python": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-python",
        "version": "0.8.2",
        "published": "2019-09-25T21:30:11-07:00",
        "artifact": "zeppelin-python@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-python"
      }
    },
    "zeppelin-display_2.11": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-display_2.11",
        "version": "0.7.3",
        "published": "2017-09-18T16:29:38+00:00",
        "artifact": "zeppelin-display_2.11@0.7.3",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-display_2.11"
      }
    },
    "zeppelin-interpreter-parent": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-interpreter-parent",
        "version": "0.9.0-preview1",
        "published": "2020-03-23T02:18:34-07:00",
        "artifact": "zeppelin-interpreter-parent@0.9.0-preview1",
        "description": "Zeppelin: Interpreter Parent",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-interpreter-parent"
      }
    },
    "sogou-map-vis": {
      "1.0.0": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.0",
        "published": "2018-07-06T08:22:24.716Z",
        "artifact": "sogou-map-vis@1.0.0",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.1",
        "published": "2018-07-07T08:04:59.051Z",
        "artifact": "sogou-map-vis@1.0.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.2",
        "published": "2018-07-07T14:11:53.250Z",
        "artifact": "sogou-map-vis@1.0.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.3",
        "published": "2018-07-07T14:24:02.923Z",
        "artifact": "sogou-map-vis@1.0.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.4",
        "published": "2018-07-07T14:41:28.937Z",
        "artifact": "sogou-map-vis@1.0.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.5",
        "published": "2018-07-08T08:10:46.242Z",
        "artifact": "sogou-map-vis@1.0.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.6",
        "published": "2018-07-13T03:06:41.159Z",
        "artifact": "sogou-map-vis@1.0.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.7",
        "published": "2018-07-13T03:40:09.231Z",
        "artifact": "sogou-map-vis@1.0.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.8",
        "published": "2018-07-13T03:54:40.428Z",
        "artifact": "sogou-map-vis@1.0.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.9": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.9",
        "published": "2018-07-13T06:26:18.292Z",
        "artifact": "sogou-map-vis@1.0.9",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.10",
        "published": "2018-07-13T09:36:16.680Z",
        "artifact": "sogou-map-vis@1.0.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.11",
        "published": "2018-07-13T09:57:58.047Z",
        "artifact": "sogou-map-vis@1.0.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.12": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.12",
        "published": "2018-07-13T10:06:51.172Z",
        "artifact": "sogou-map-vis@1.0.12",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.13": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.13",
        "published": "2018-07-16T07:16:41.972Z",
        "artifact": "sogou-map-vis@1.0.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.14": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.14",
        "published": "2018-07-16T08:28:52.733Z",
        "artifact": "sogou-map-vis@1.0.14",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.15": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.15",
        "published": "2018-07-16T08:59:03.510Z",
        "artifact": "sogou-map-vis@1.0.15",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.16": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.16",
        "published": "2018-07-16T12:04:18.774Z",
        "artifact": "sogou-map-vis@1.0.16",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.17": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.17",
        "published": "2018-07-16T15:28:55.810Z",
        "artifact": "sogou-map-vis@1.0.17",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.18": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.18",
        "published": "2018-07-16T15:49:44.345Z",
        "artifact": "sogou-map-vis@1.0.18",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.19": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.19",
        "published": "2018-07-17T01:49:25.665Z",
        "artifact": "sogou-map-vis@1.0.19",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.20": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.20",
        "published": "2018-07-17T02:25:48.828Z",
        "artifact": "sogou-map-vis@1.0.20",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.21": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.21",
        "published": "2018-07-17T02:37:33.739Z",
        "artifact": "sogou-map-vis@1.0.21",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.31": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.31",
        "published": "2018-07-17T08:26:16.990Z",
        "artifact": "sogou-map-vis@1.0.31",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.32": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.32",
        "published": "2018-07-17T08:34:21.665Z",
        "artifact": "sogou-map-vis@1.0.32",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.33": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.33",
        "published": "2018-07-17T09:30:44.205Z",
        "artifact": "sogou-map-vis@1.0.33",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.34": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.34",
        "published": "2018-07-17T09:57:48.095Z",
        "artifact": "sogou-map-vis@1.0.34",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.35": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.35",
        "published": "2018-07-17T11:33:46.681Z",
        "artifact": "sogou-map-vis@1.0.35",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.36": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.36",
        "published": "2018-07-19T08:14:28.614Z",
        "artifact": "sogou-map-vis@1.0.36",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.37": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.37",
        "published": "2018-07-19T08:51:58.942Z",
        "artifact": "sogou-map-vis@1.0.37",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.38": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.38",
        "published": "2018-07-19T09:09:58.592Z",
        "artifact": "sogou-map-vis@1.0.38",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.39": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.39",
        "published": "2018-07-19T09:33:22.779Z",
        "artifact": "sogou-map-vis@1.0.39",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.40": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.40",
        "published": "2018-07-19T09:42:07.830Z",
        "artifact": "sogou-map-vis@1.0.40",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.41": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.41",
        "published": "2018-07-19T10:59:43.954Z",
        "artifact": "sogou-map-vis@1.0.41",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.42": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.42",
        "published": "2018-07-19T11:16:02.860Z",
        "artifact": "sogou-map-vis@1.0.42",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.43": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.43",
        "published": "2018-07-19T11:36:49.856Z",
        "artifact": "sogou-map-vis@1.0.43",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.44": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.44",
        "published": "2018-07-19T11:54:01.078Z",
        "artifact": "sogou-map-vis@1.0.44",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.45": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.45",
        "published": "2018-07-19T12:04:34.388Z",
        "artifact": "sogou-map-vis@1.0.45",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.46": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.46",
        "published": "2018-07-19T12:12:52.155Z",
        "artifact": "sogou-map-vis@1.0.46",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.47": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.47",
        "published": "2018-07-19T12:17:54.942Z",
        "artifact": "sogou-map-vis@1.0.47",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.48": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.48",
        "published": "2018-07-20T07:49:33.102Z",
        "artifact": "sogou-map-vis@1.0.48",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.49": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.49",
        "published": "2018-07-20T08:09:33.198Z",
        "artifact": "sogou-map-vis@1.0.49",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.50": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.50",
        "published": "2018-07-20T08:29:00.316Z",
        "artifact": "sogou-map-vis@1.0.50",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.51": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.51",
        "published": "2018-07-20T08:42:49.097Z",
        "artifact": "sogou-map-vis@1.0.51",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.52": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.52",
        "published": "2018-07-20T08:59:17.601Z",
        "artifact": "sogou-map-vis@1.0.52",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.53": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.53",
        "published": "2018-07-20T09:01:56.716Z",
        "artifact": "sogou-map-vis@1.0.53",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.54": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.54",
        "published": "2018-07-23T02:34:43.717Z",
        "artifact": "sogou-map-vis@1.0.54",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.55": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.55",
        "published": "2018-07-24T08:21:08.920Z",
        "artifact": "sogou-map-vis@1.0.55",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.56": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.56",
        "published": "2018-07-24T08:28:35.565Z",
        "artifact": "sogou-map-vis@1.0.56",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.57": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.57",
        "published": "2018-07-24T08:55:16.757Z",
        "artifact": "sogou-map-vis@1.0.57",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.58": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.58",
        "published": "2018-07-24T09:07:46.054Z",
        "artifact": "sogou-map-vis@1.0.58",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.59": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.59",
        "published": "2018-07-24T09:15:23.585Z",
        "artifact": "sogou-map-vis@1.0.59",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.60": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.60",
        "published": "2018-07-24T09:48:12.952Z",
        "artifact": "sogou-map-vis@1.0.60",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.61": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.61",
        "published": "2018-07-24T11:34:27.864Z",
        "artifact": "sogou-map-vis@1.0.61",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.62": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.62",
        "published": "2018-07-24T12:40:08.342Z",
        "artifact": "sogou-map-vis@1.0.62",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.63": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.63",
        "published": "2018-07-24T12:57:00.551Z",
        "artifact": "sogou-map-vis@1.0.63",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.64": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.64",
        "published": "2018-07-25T09:17:55.533Z",
        "artifact": "sogou-map-vis@1.0.64",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.65": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.65",
        "published": "2018-07-25T09:35:23.470Z",
        "artifact": "sogou-map-vis@1.0.65",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.66": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.66",
        "published": "2018-07-25T09:44:50.206Z",
        "artifact": "sogou-map-vis@1.0.66",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.67": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.67",
        "published": "2018-07-25T10:00:29.630Z",
        "artifact": "sogou-map-vis@1.0.67",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.68": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.68",
        "published": "2018-07-25T11:23:02.946Z",
        "artifact": "sogou-map-vis@1.0.68",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.69": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.69",
        "published": "2018-07-25T11:49:38.602Z",
        "artifact": "sogou-map-vis@1.0.69",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.70": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.70",
        "published": "2018-07-25T12:28:22.002Z",
        "artifact": "sogou-map-vis@1.0.70",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.71": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.71",
        "published": "2018-07-25T13:01:27.137Z",
        "artifact": "sogou-map-vis@1.0.71",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.72": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.72",
        "published": "2018-07-26T01:52:14.015Z",
        "artifact": "sogou-map-vis@1.0.72",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.73": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.73",
        "published": "2018-07-26T02:07:35.585Z",
        "artifact": "sogou-map-vis@1.0.73",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.74": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.74",
        "published": "2018-07-26T02:46:53.826Z",
        "artifact": "sogou-map-vis@1.0.74",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.75": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.75",
        "published": "2018-07-26T02:59:05.736Z",
        "artifact": "sogou-map-vis@1.0.75",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.76": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.76",
        "published": "2018-07-26T03:30:22.441Z",
        "artifact": "sogou-map-vis@1.0.76",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.77": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.77",
        "published": "2018-07-26T03:34:42.161Z",
        "artifact": "sogou-map-vis@1.0.77",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.78": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.78",
        "published": "2018-07-26T03:44:29.749Z",
        "artifact": "sogou-map-vis@1.0.78",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.0.79": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.0.79",
        "published": "2018-07-26T03:52:12.297Z",
        "artifact": "sogou-map-vis@1.0.79",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.0": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.0",
        "published": "2018-07-26T05:06:37.195Z",
        "artifact": "sogou-map-vis@1.1.0",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.1": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.1",
        "published": "2018-07-26T05:24:35.199Z",
        "artifact": "sogou-map-vis@1.1.1",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.2": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.2",
        "published": "2018-07-26T05:46:04.475Z",
        "artifact": "sogou-map-vis@1.1.2",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.3": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.3",
        "published": "2018-07-26T05:51:26.273Z",
        "artifact": "sogou-map-vis@1.1.3",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.4": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.4",
        "published": "2018-07-26T06:07:53.747Z",
        "artifact": "sogou-map-vis@1.1.4",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.5": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.5",
        "published": "2018-07-26T06:24:51.416Z",
        "artifact": "sogou-map-vis@1.1.5",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.6": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.6",
        "published": "2018-07-26T07:17:26.724Z",
        "artifact": "sogou-map-vis@1.1.6",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.7": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.7",
        "published": "2018-07-27T03:32:42.330Z",
        "artifact": "sogou-map-vis@1.1.7",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.8": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.8",
        "published": "2018-07-27T03:51:55.800Z",
        "artifact": "sogou-map-vis@1.1.8",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.9": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.9",
        "published": "2018-07-27T06:17:09.634Z",
        "artifact": "sogou-map-vis@1.1.9",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.10": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.10",
        "published": "2018-07-27T10:34:28.662Z",
        "artifact": "sogou-map-vis@1.1.10",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.11": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.11",
        "published": "2018-07-30T06:49:40.451Z",
        "artifact": "sogou-map-vis@1.1.11",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.12": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.12",
        "published": "2018-07-30T07:13:30.486Z",
        "artifact": "sogou-map-vis@1.1.12",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.13": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.13",
        "published": "2018-07-30T07:31:04.007Z",
        "artifact": "sogou-map-vis@1.1.13",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.14": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.14",
        "published": "2018-07-30T07:33:39.484Z",
        "artifact": "sogou-map-vis@1.1.14",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.15": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.15",
        "published": "2018-07-30T07:40:51.318Z",
        "artifact": "sogou-map-vis@1.1.15",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.16": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.16",
        "published": "2018-07-30T08:08:19.062Z",
        "artifact": "sogou-map-vis@1.1.16",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.17": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.17",
        "published": "2018-07-30T08:14:50.743Z",
        "artifact": "sogou-map-vis@1.1.17",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.18": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.18",
        "published": "2018-07-30T09:27:51.452Z",
        "artifact": "sogou-map-vis@1.1.18",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.19": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.19",
        "published": "2018-07-30T09:33:16.084Z",
        "artifact": "sogou-map-vis@1.1.19",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.20": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.20",
        "published": "2018-07-31T03:54:20.369Z",
        "artifact": "sogou-map-vis@1.1.20",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.21": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.21",
        "published": "2018-07-31T04:54:54.995Z",
        "artifact": "sogou-map-vis@1.1.21",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.22": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.22",
        "published": "2018-07-31T05:06:13.986Z",
        "artifact": "sogou-map-vis@1.1.22",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.23": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.23",
        "published": "2018-07-31T06:02:22.887Z",
        "artifact": "sogou-map-vis@1.1.23",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.24": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.24",
        "published": "2018-07-31T06:14:38.001Z",
        "artifact": "sogou-map-vis@1.1.24",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.25": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.25",
        "published": "2018-07-31T06:24:26.462Z",
        "artifact": "sogou-map-vis@1.1.25",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.26": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.26",
        "published": "2018-07-31T06:56:01.648Z",
        "artifact": "sogou-map-vis@1.1.26",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.27": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.27",
        "published": "2018-07-31T07:41:21.417Z",
        "artifact": "sogou-map-vis@1.1.27",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.28": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.28",
        "published": "2018-07-31T08:00:49.680Z",
        "artifact": "sogou-map-vis@1.1.28",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.29": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.29",
        "published": "2018-07-31T08:09:54.076Z",
        "artifact": "sogou-map-vis@1.1.29",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.30": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.30",
        "published": "2018-07-31T08:30:38.496Z",
        "artifact": "sogou-map-vis@1.1.30",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.31": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.31",
        "published": "2018-07-31T08:40:36.020Z",
        "artifact": "sogou-map-vis@1.1.31",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.32": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.32",
        "published": "2018-07-31T09:09:36.588Z",
        "artifact": "sogou-map-vis@1.1.32",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.33": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.33",
        "published": "2018-07-31T09:39:11.141Z",
        "artifact": "sogou-map-vis@1.1.33",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.34": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.34",
        "published": "2018-07-31T11:25:38.628Z",
        "artifact": "sogou-map-vis@1.1.34",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.35": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.35",
        "published": "2018-07-31T11:39:48.242Z",
        "artifact": "sogou-map-vis@1.1.35",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.36": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.36",
        "published": "2018-07-31T11:54:25.507Z",
        "artifact": "sogou-map-vis@1.1.36",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.37": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.37",
        "published": "2018-07-31T12:03:47.352Z",
        "artifact": "sogou-map-vis@1.1.37",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.38": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.38",
        "published": "2018-07-31T12:42:04.621Z",
        "artifact": "sogou-map-vis@1.1.38",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.39": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.39",
        "published": "2018-07-31T12:55:57.933Z",
        "artifact": "sogou-map-vis@1.1.39",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.40": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.40",
        "published": "2018-08-01T02:38:02.134Z",
        "artifact": "sogou-map-vis@1.1.40",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.41": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.41",
        "published": "2018-08-01T02:47:23.515Z",
        "artifact": "sogou-map-vis@1.1.41",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.42": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.42",
        "published": "2018-08-01T02:50:18.875Z",
        "artifact": "sogou-map-vis@1.1.42",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.43": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.43",
        "published": "2018-08-01T05:42:59.925Z",
        "artifact": "sogou-map-vis@1.1.43",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.44": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.44",
        "published": "2018-08-01T07:31:17.797Z",
        "artifact": "sogou-map-vis@1.1.44",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.45": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.45",
        "published": "2018-08-01T07:41:22.970Z",
        "artifact": "sogou-map-vis@1.1.45",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.46": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.46",
        "published": "2018-08-01T07:56:09.139Z",
        "artifact": "sogou-map-vis@1.1.46",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.47": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.47",
        "published": "2018-08-01T08:07:23.299Z",
        "artifact": "sogou-map-vis@1.1.47",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.48": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.48",
        "published": "2018-08-02T01:53:27.855Z",
        "artifact": "sogou-map-vis@1.1.48",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.49": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.49",
        "published": "2018-08-02T02:07:19.326Z",
        "artifact": "sogou-map-vis@1.1.49",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.50": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.50",
        "published": "2018-08-02T02:15:44.156Z",
        "artifact": "sogou-map-vis@1.1.50",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.51": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.51",
        "published": "2018-08-02T12:25:05.684Z",
        "artifact": "sogou-map-vis@1.1.51",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "1.1.52": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.52",
        "published": "2018-08-02T12:35:15.188Z",
        "artifact": "sogou-map-vis@1.1.52",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "sogou-map-vis",
        "version": "1.1.53",
        "published": "2018-08-02T12:41:35.788Z",
        "artifact": "sogou-map-vis@1.1.53",
        "author": "Robin Liew",
        "description": "Geospatial visualization using the sogou map library.",
        "license": "BSD-2-Clause",
        "icon": "<i class='fa fa-globe'></i>"
      }
    },
    "zeppelin-lens": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-lens",
        "version": "0.8.2",
        "published": "2019-09-25T21:30:46-07:00",
        "artifact": "zeppelin-lens@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-lens"
      }
    },
    "zeppelin-bubblechart": {
      "0.0.1": {
        "type": "VISUALIZATION",
        "name": "zeppelin-bubblechart",
        "version": "0.0.1",
        "published": "2017-01-08T09:56:42.707Z",
        "artifact": "zeppelin-bubblechart@0.0.1",
        "author": "leemoonsoo",
        "description": "Animated bubble chart",
        "license": "BSD-2-Clause",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "0.0.2": {
        "type": "VISUALIZATION",
        "name": "zeppelin-bubblechart",
        "version": "0.0.2",
        "published": "2017-01-08T09:58:44.775Z",
        "artifact": "zeppelin-bubblechart@0.0.2",
        "author": "leemoonsoo",
        "description": "Animated bubble chart",
        "license": "BSD-2-Clause",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "0.0.3": {
        "type": "VISUALIZATION",
        "name": "zeppelin-bubblechart",
        "version": "0.0.3",
        "published": "2017-01-08T10:41:15.275Z",
        "artifact": "zeppelin-bubblechart@0.0.3",
        "author": "leemoonsoo",
        "description": "Animated bubble chart",
        "license": "BSD-2-Clause",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      },
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-bubblechart",
        "version": "0.0.4",
        "published": "2017-01-23T20:42:34.373Z",
        "artifact": "zeppelin-bubblechart@0.0.4",
        "author": "leemoonsoo",
        "description": "Animated bubble chart",
        "license": "BSD-2-Clause",
        "icon": "<svg viewBox='0 0 70 70'><circle cx='26' cy='28' stroke='black' style='stroke-width: 1px;' r='25' fill='seagreen'/><circle cx='42' cy='44' stroke='black' style='stroke-width: 1px;' r='20' fill='DodgerBlue'/><circle cx='54' cy='24' stroke='black' style='stroke-width: 1px;' r='15' fill='crimson'/></svg>"
      }
    },
    "zeppelin-d3-spell": {
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-d3-spell",
        "version": "0.0.1",
        "published": "2017-03-08T10:08:51.022Z",
        "artifact": "zeppelin-d3-spell@0.0.1",
        "author": "datalayer",
        "description": "D3.js Network Visualization for Apache Zeppelin",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-question-circle\"></i>"
      }
    },
    "zeppelin-toc-spell": {
      "0.0.1": {
        "type": "SPELL",
        "name": "zeppelin-toc-spell",
        "version": "0.0.1",
        "published": "2017-10-14T01:09:22.968Z",
        "artifact": "zeppelin-toc-spell@0.0.1",
        "author": "Ryan Munro",
        "description": "Table of Contents for Zeppelin Notebooks",
        "license": "ISC",
        "icon": "<i class='fa fa-list-ol'></i>",
        "spell": {"magic": "%toc", "usage": "%toc"}
      },
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-toc-spell",
        "version": "0.0.2",
        "published": "2017-10-14T01:22:54.639Z",
        "artifact": "zeppelin-toc-spell@0.0.2",
        "author": "Ryan Munro",
        "description": "Table of Contents for Zeppelin Notebooks",
        "license": "ISC",
        "icon": "<i class='fa fa-list-ol'></i>",
        "spell": {"magic": "%toc", "usage": "%toc"}
      }
    },
    "zeppelin-translator-spell": {
      "latest": {
        "type": "SPELL",
        "name": "zeppelin-translator-spell",
        "version": "0.0.1",
        "published": "2017-03-05T07:52:58.069Z",
        "artifact": "zeppelin-translator-spell@0.0.1",
        "author": "1ambda",
        "description": "Translate text using Google Translator API",
        "license": "Apache-2.0",
        "icon": "<img width:\"20\" height=\"20\" class=\"icon icons8-Globe\" src=\"data:image/png;base64,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\" >",
        "config": {
          "access-token": {
            "type": "string",
            "description": "access token for Google Translation API",
            "defaultValue": "EXAMPLE-TOKEN"
          }
        },
        "spell": {
          "magic": "%translator",
          "usage": "%translator source=<source> target=<target> <TEXT>"
        }
      }
    },
    "zeppelin-solr": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-solr",
        "version": "0.1.6",
        "published": "2020-01-09T07:19:24-08:00",
        "artifact": "zeppelin-solr@0.1.6",
        "description": "Zeppelin Solr support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "com.lucidworks.zeppelin",
        "artifactId": "zeppelin-solr"
      },
      "0.1.5": {
        "type": "INTERPRETER",
        "name": "zeppelin-solr",
        "version": "0.1.5",
        "published": "2019-04-10T07:49:04-07:00",
        "artifact": "zeppelin-solr@0.1.5",
        "description": "Zeppelin Solr support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "com.lucidworks.zeppelin",
        "artifactId": "zeppelin-solr"
      }
    },
    "zeppelin-cassandra_2.10": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-cassandra_2.10",
        "version": "0.8.2",
        "published": "2019-09-25T21:24:04-07:00",
        "artifact": "zeppelin-cassandra_2.10@0.8.2",
        "description": "Zeppelin cassandra support",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-cassandra_2.10"
      }
    },
    "zeppelin-highcharts-bubble": {
      "latest": {
        "type": "VISUALIZATION",
        "name": "zeppelin-highcharts-bubble",
        "version": "0.0.2",
        "published": "2017-02-14T12:30:44.199Z",
        "artifact": "zeppelin-highcharts-bubble@0.0.2",
        "author": "1ambda",
        "description": "Bubble Chart for Apache Zeppelin using highcharts.js",
        "license": "SEE LICENSE IN <LICENSE>",
        "icon": "<svg id=\"Слой_1\" style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><style type=\"text/css\"> .st0{fill:none;stroke:#FFFFFF;stroke-width:7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:#248139;stroke:#FFFFFF;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st2{fill:#F5BE40;stroke:#FFFFFF;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st3{fill:#32A9B8;stroke:#FFFFFF;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st4{fill:#CF3722;stroke:#FFFFFF;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style><g><polyline class=\"st0\" points=\"33.9,54.6 33.9,485.6 473,485.6  \"/><circle class=\"st1\" cx=\"100.5\" cy=\"414.8\" r=\"35.7\"/><circle class=\"st2\" cx=\"186.4\" cy=\"293.1\" r=\"55.1\"/><circle class=\"st3\" cx=\"314.7\" cy=\"379.1\" r=\"32.2\"/><circle class=\"st4\" cx=\"322.7\" cy=\"141.9\" r=\"66\"/><circle class=\"st1\" cx=\"421\" cy=\"283\" r=\"40.7\"/><circle class=\"st3\" cx=\"123.7\" cy=\"152.1\" r=\"23.2\"/></g></svg>"
      }
    },
    "zeppelin-zengine": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-zengine",
        "version": "0.9.0-preview1",
        "published": "2020-03-23T02:32:36-07:00",
        "artifact": "zeppelin-zengine@0.9.0-preview1",
        "description": "Zeppelin Zengine",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-zengine"
      },
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-zengine",
        "version": "0.8.2",
        "published": "2019-09-25T21:27:36-07:00",
        "artifact": "zeppelin-zengine@0.8.2",
        "description": "Zeppelin Zengine",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-zengine"
      }
    },
    "zeppelin-hbase": {
      "0.8.2": {
        "type": "INTERPRETER",
        "name": "zeppelin-hbase",
        "version": "0.8.2",
        "published": "2019-09-25T21:29:14-07:00",
        "artifact": "zeppelin-hbase@0.8.2",
        "description": "Zeppelin project",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "org.apache.zeppelin",
        "artifactId": "zeppelin-hbase"
      }
    },
    "zeppelin-viyadb": {
      "latest": {
        "type": "INTERPRETER",
        "name": "zeppelin-viyadb",
        "version": "0.7.3",
        "published": "2017-09-25T18:44:57+00:00",
        "artifact": "zeppelin-viyadb@0.7.3",
        "description": "Zeppelin interpreter extension for ViyaDB",
        "license": "Apache-2.0",
        "icon": "<i class=\"fa fa-rocket\"></i>",
        "groupId": "com.github.viyadb",
        "artifactId": "zeppelin-viyadb"
      }
    }}]
  $scope.intpDefaultIcon = $sce.trustAsHtml('<img src="assets/themes/zeppelin/img/maven_default_icon.png" style="width: 12px"/>');
  $scope.latestPkgInfo = {}
  $scope.allTypePkgs = {}

  const HeliumType = [
    'VISUALIZATION',
    'SPELL',
    'INTERPRETER',
  ]

  $scope.allPackageTypes = HeliumType
  $scope.pkgListByType = 'ALL'

  var init = function () {
    createLatestPkgInfo()
    classifyPkgByType($scope.latestPkgInfo)

    // pagination
    $scope.itemsPerPage = 10
    $scope.currentPage = 1
    $scope.maxSize = 5
  }

  var createLatestPkgInfo = function() {
    var latestPkgInfo = []
    var pkgsInfo = $scope.HeliumPkgs

    for (var idx in pkgsInfo) {
      var eachPkgInfo = pkgsInfo[idx]
      for (var key in eachPkgInfo) {
        // key: pkg's name
        var latestPkg = eachPkgInfo[key]
        for (var ver in latestPkg){
          if (ver == "latest") {
            latestPkgInfo.push(latestPkg[ver])
            latestPkg[ver].icon = $sce.trustAsHtml(latestPkg[ver].icon)

          }
        }
      }
    }

    $scope.latestPkgInfo = latestPkgInfo
  }

  var orderPackageByPubDate = function(a, b) {
    return new Date(a.published).getTime() - new Date(b.published).getTime();
  };

  var classifyPkgByType = function(latestPkgInfo) {
    var vizTypePkgs = []
    var spellTypePkgs = []
    var interpreterTypePkgs = []
    var allTypePkgs = {}

    latestPkgInfo = latestPkgInfo.sort(orderPackageByPubDate).reverse();

    for (var idx in latestPkgInfo) {
      switch (latestPkgInfo[idx].type) {
        case "VISUALIZATION":
          vizTypePkgs.push(latestPkgInfo[idx])
          break
        case "SPELL":
          spellTypePkgs.push(latestPkgInfo[idx])
          break
        case "INTERPRETER":
          interpreterTypePkgs.push(latestPkgInfo[idx])
          break
      }
    }

    var tmpArr = [
      vizTypePkgs,
      spellTypePkgs,
      interpreterTypePkgs,
    ]
    for (var key in HeliumType) {
      allTypePkgs[HeliumType[key]] = tmpArr[key]
    }

    $scope.allTypePkgs = allTypePkgs
  }

  init()
});
