define({ "api": [
  {
    "group": "Comments",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/comments/:issueId/getCommentsOnIssue",
    "title": "To get all comments on issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Comment details found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"commentId\": \"cMeUUHJZs\",\n            \"issueId\": \"Wl7Gfp2Ad\",\n            \"userId\": \"0uDHZaVDK\",\n            \"userName\": \"Shubham Thute\",\n            \"comment\": \"Text Comment1\",\n            \"commentedOn\": \"2018-10-11T12:55:09.137Z\",\n            \"_id\": \"5bbfa969495b8a177cf4bc35\",\n            \"__v\": 0\n        },\n        {\n            \"commentId\": \"rkT0BbzSM\",\n            \"issueId\": \"Wl7Gfp2Ad\",\n            \"userId\": \"0uDHZaVDK\",\n            \"userName\": \"Shubham Thute\",\n            \"comment\": \"Text Comment2\",\n            \"commentedOn\": \"2018-10-11T12:55:09.137Z\",\n            \"_id\": \"5bbfa978495b8a177cf4bc36\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No comment details Found\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Comments",
    "name": "GetApiV1CommentsIssueidGetcommentsonissue"
  },
  {
    "group": "Comments",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/comments/addComment",
    "title": "To add comment.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of the User. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment of user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Comment added\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"CcvsI9xtn\"\n        \"userId\": \"eKOTSdkn7\"\n        \"userName\": \"Shubham Thute\"\n        \"comment\": \"Dummy text comment\"\n        \"commentedOn\": \"2018-09-23T11:50:23.820Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to add comment\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Comments",
    "name": "PostApiV1CommentsAddcomment"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issues/allIssues",
    "title": "To get all Issues",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All Issue Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"issueId\": \"pYd3NsrdB\",\n            \"issueTitle\": \"Demo Issue\",\n            \"reporterId\": \"0uDHZaVDK\",\n            \"reporterName\": \"Shubham Thute\",\n            \"status\": \"in-test\",\n            \"description\": \"Dummy Description\",\n            \"attachments\": [\n                \"https://issue-bucket.s3.amazonaws.com/jquery1.png\"\n            ],\n            \"comments\": [],\n            \"watchers\": [],\n            \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n            \"assignee\": \"Akshay Kumar\"\n        },\n        {\n            \"issueId\": \"Wl7Gfp2Ad\",\n            \"issueTitle\": \"Test Issue\",\n            \"reporterId\": \"0uDHZaVDK\",\n            \"reporterName\": \"Shubham Thute\",\n            \"status\": \"in-progress\",\n            \"description\": \"Des-test\",\n            \"attachments\": [\n                \"https://issue-bucket.s3.amazonaws.com/jquery_icon.png\"\n            ],\n            \"comments\": [],\n            \"watchers\": [],\n            \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n            \"assignee\": \"Akshay Kumar\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues",
    "name": "GetApiV1IssuesAllissues"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/issues/:issueId/getIssue",
    "title": "To get single issue details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue details found\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"Wl7Gfp2Ad\",\n        \"issueTitle\": \"Test Issue\",\n        \"reporterId\": \"0uDHZaVDK\",\n        \"reporterName\": \"Shubham Thute\",\n        \"status\": \"in-progress\",\n        \"description\": \"Description-edited\",\n        \"attachments\": [\n            \"https://issue-bucket.s3.amazonaws.com/jquery_icon.png\"\n        ],\n        \"comments\": [],\n        \"watchers\": [],\n        \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n        \"_id\": \"5bbfa299495b8a177cf4bc34\",\n        \"assignee\": \"Akshay Kumar\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues",
    "name": "GetApiV1IssuesIssueidGetissue"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issues/:issueId/deleteIssue",
    "title": "To delete single issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues",
    "name": "PostApiV1IssuesIssueidDeleteissue"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issues/registerIssue",
    "title": "To register issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueTitle",
            "description": "<p>Title of the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterId",
            "description": "<p>ID of the reporter. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>Name of the Reporter. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Breif Description of the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attachments",
            "description": "<p>Array to store related attachments of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": "<p>Assignee to whom reporter will assign his/her issue to fix. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue registered successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"CcvsI9xtn\"\n        \"issueTitle\": \"Performance of System\"\n        \"reporterId\": \"eKOTSdkn7\"\n        \"reporterName\": \"Shubham Thute\"\n        \"status\": \"in-progress\"\n        \"description\": \"This is Test Description\"\n        \"attachments\": [\n            \"https://s3.ap-south-1.amazonaws.com/issue-bucket/rla4BtiEsScreenshot.png\"\n        ]\n        \"assignee\": \"Akshay Kumar\"\n        \"comments\": [],\n        \"watchers\": [],\n        \"reportedOn\": \"2018-09-23T11:50:23.820Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to register issue\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues",
    "name": "PostApiV1IssuesRegisterissue"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/issues/:issueId/editIssue",
    "title": "To edit single issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue details edited/updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues",
    "name": "PutApiV1IssuesIssueidEditissue"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/userDetails",
    "title": "To get details of user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"eKOTSdkn7\",\n        \"firstName\": \"Shubham\",\n        \"lastName\": \"thute\",\n        \"email\": \"thuteshubham@gmail.com\",\n        \"mobileNumber\": \" 91-undefined\",\n        \"country\": \"IN\",\n        \"userVerificationStatus\": true,\n        \"createdOn\": \"2018-09-19T06:40:15.000Z\",\n        \"modifiedOn\": \"2018-09-19T06:40:15.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersUseridUserdetails"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/allUsers",
    "title": "To get All users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"eKOTSdkn7\",\n            \"firstName\": \"Shubham\",\n            \"lastName\": \"thute\",\n            \"password\": \"$2b$10$fQHYrFiuqMhDkRZDOCWPeuRAu25vEDAmdTYOrFhw.3CSdSJS/GL2e\",\n            \"email\": \"thuteshubham@gmail.com\",\n            \"mobileNumber\": \" 91-7276789024\",\n            \"country\": \"IN\",\n            \"userVerificationStatus\": true,\n            \"createdOn\": \"2018-09-19T06:40:15.000Z\",\n            \"modifiedOn\": \"2018-09-19T06:40:15.000Z\"\n        },\n        ..........\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersViewAllusers"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/:userId/deleteUser",
    "title": "To delete single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersUseridDeleteuser"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  }
] });
