# Project: 0x01. Basic authentication

- Weight: 1
- Project will start Aug 5, 2024 6:00 AM, must end by Aug 7, 2024 6:00 AM
- Checker was released at Aug 5, 2024 6:00 PM
- An auto review will be launched at the deadline

## Background Context
In this project, you will learn what the authentication process means and implement a Basic Authentication on a simple API.

In the industry, you should not implement your own Basic authentication system and use a module or framework that doing it for you (like in Python-Flask: Flask-HTTPAuth). Here, for the learning purpose, we will walk through each step of this mechanism to understand it by doing.

![image](https://github.com/user-attachments/assets/5319b215-9ff3-413e-bb98-a62a8b3956b6)

## Resources

### Read or watch:-

- [REST API Authentication Mechanisms](https://www.youtube.com/watch?v=501dpx2IjGY)
- [Base64 in Python](https://docs.python.org/3.7/library/base64.html)
- [HTTP header Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
- [Flask](https://palletsprojects.com/p/flask/)
- [Base64 - concept](https://en.wikipedia.org/wiki/Base64)

## Learning Objectives

### General

- What authentication means
- What Base64 is
- How to encode a string in Base64
- What Basic authentication means
- How to send the Authorization header

## Simple API

Simple HTTP API for playing with `User` model.

## Files

### `models/`

- `base.py`: base of all models of the API - handle serialization to file
- `user.py`: user model

### `api/v1`

- `app.py`: entry point of the API
- `views/index.py`: basic endpoints of the API: `/status` and `/stats`
- `views/users.py`: all users endpoints

## Setup

```bash
pip3 install -r requirements.txt
```

## Run

```bash
API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
```

## Routes

- `GET /api/v1/status`: returns the status of the API
- `GET /api/v1/stats`: returns some stats of the API
- `GET /api/v1/users`: returns the list of users
- `GET /api/v1/users/:id`: returns an user based on the ID
- `DELETE /api/v1/users/:id`: deletes an user based on the ID
- `POST /api/v1/users`: creates a new user (JSON parameters: `email`, `password`, `last_name` (optional) and `first_name` (optional))
- `PUT /api/v1/users/:id`: updates an user based on the ID (JSON parameters: `last_name` and `first_name`)

## Minor Walkthrough for setting up and configuration of the project

- I tried running my flask app when I installed all dependencies inside the `requirement.txt` and I kept getting errors like the `markupsafe` in my current environment not being compatible with the version of `Jinja2` that was installed and other little PoS errors like that.
- So what I did was create a virtual environment for the Basic Auth project and I went on to install the `requirement.txt` file again and I began to downgrade some dependencies versions to make it all comaptible with each other...
- See the following bash session below for details...

```bash
ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ source myvenv/bin/activate
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ pip3 install -r requirements.txt 
Collecting Flask==1.1.2
  Using cached Flask-1.1.2-py2.py3-none-any.whl (94 kB)
Collecting Flask-Cors==3.0.8
  Using cached Flask_Cors-3.0.8-py2.py3-none-any.whl (14 kB)
Collecting Jinja2==2.11.2
  Using cached Jinja2-2.11.2-py2.py3-none-any.whl (125 kB)
Collecting requests==2.18.4
  Using cached requests-2.18.4-py2.py3-none-any.whl (88 kB)
Collecting pycodestyle==2.6.0
  Using cached pycodestyle-2.6.0-py2.py3-none-any.whl (41 kB)
Collecting Werkzeug>=0.15
  Using cached werkzeug-3.0.3-py3-none-any.whl (227 kB)
Collecting click>=5.1
  Using cached click-8.1.7-py3-none-any.whl (97 kB)
Collecting itsdangerous>=0.24
  Using cached itsdangerous-2.2.0-py3-none-any.whl (16 kB)
Collecting Six
  Using cached six-1.16.0-py2.py3-none-any.whl (11 kB)
Collecting MarkupSafe>=0.23
  Using cached MarkupSafe-2.1.5-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (26 kB)
Collecting certifi>=2017.4.17
  Using cached certifi-2024.2.2-py3-none-any.whl (163 kB)
Collecting chardet<3.1.0,>=3.0.2
  Using cached chardet-3.0.4-py2.py3-none-any.whl (133 kB)
Collecting idna<2.7,>=2.5
  Using cached idna-2.6-py2.py3-none-any.whl (56 kB)
Collecting urllib3<1.23,>=1.21.1
  Using cached urllib3-1.22-py2.py3-none-any.whl (132 kB)
Installing collected packages: MarkupSafe, Werkzeug, Jinja2, click, itsdangerous, Flask, Six, Flask-Cors, certifi, chardet, idna, urllib3, requests, pycodestyle
Successfully installed Flask-1.1.2 Flask-Cors-3.0.8 Jinja2-2.11.2 MarkupSafe-2.1.5 Six-1.16.0 Werkzeug-3.0.3 certifi-2024.2.2 chardet-3.0.4 click-8.1.7 idna-2.6 itsdangerous-2.2.0 pycodestyle-2.6.0 requests-2.18.4 urllib3-1.22
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
Traceback (most recent call last):
  File "/usr/lib/python3.8/runpy.py", line 194, in _run_module_as_main
    return _run_code(code, main_globals, None,
  File "/usr/lib/python3.8/runpy.py", line 87, in _run_code
    exec(code, run_globals)
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/api/v1/app.py", line 6, in <module>
    from api.v1.views import app_views
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/api/v1/views/__init__.py", line 4, in <module>
    from flask import Blueprint
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/flask/__init__.py", line 19, in <module>
    from . import json
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/flask/json/__init__.py", line 15, in <module>
    from itsdangerous import json as _json
ImportError: cannot import name 'json' from 'itsdangerous' (/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/itsdangerous/__init__.py)
```

- Uninstalled `itsdangerous` and reinstalled a compatible version

```bash
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ pip uninstall itsdangerous
Found existing installation: itsdangerous 2.2.0
Uninstalling itsdangerous-2.2.0:
  Would remove:
    /home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/itsdangerous-2.2.0.dist-info/*
    /home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/itsdangerous/*
Proceed (y/n)? y 
  Successfully uninstalled itsdangerous-2.2.0
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ pip install itsdangerous==1.1.0
Collecting itsdangerous==1.1.0
  Downloading itsdangerous-1.1.0-py2.py3-none-any.whl (16 kB)
Installing collected packages: itsdangerous
Successfully installed itsdangerous-1.1.0
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
Traceback (most recent call last):
  File "/usr/lib/python3.8/runpy.py", line 194, in _run_module_as_main
    return _run_code(code, main_globals, None,
  File "/usr/lib/python3.8/runpy.py", line 87, in _run_code
    exec(code, run_globals)
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/api/v1/app.py", line 6, in <module>
    from api.v1.views import app_views
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/api/v1/views/__init__.py", line 4, in <module>
    from flask import Blueprint
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/flask/__init__.py", line 21, in <module>
    from .app import Flask
  File "/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/flask/app.py", line 32, in <module>
    from werkzeug.wrappers import BaseResponse
ImportError: cannot import name 'BaseResponse' from 'werkzeug.wrappers' (/home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/werkzeug/wrappers/__init__.py)
```

- Ran into another error and then repeated the same process with `werkzeug`

```bash
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ pip uninstall werkzeug
Found existing installation: werkzeug 3.0.3
Uninstalling werkzeug-3.0.3:
  Would remove:
    /home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/werkzeug-3.0.3.dist-info/*
    /home/ayomide/alx-backend-user-data/0x01-Basic_authentication/myvenv/lib/python3.8/site-packages/werkzeug/*
Proceed (y/n)? y
  Successfully uninstalled werkzeug-3.0.3
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ pip install werkzeug==1.0.1
Collecting werkzeug==1.0.1
  Downloading Werkzeug-1.0.1-py2.py3-none-any.whl (298 kB)
     |█                               | 10 kB 426 kB/s e
     |██▏                             | 20 kB 368 kB/s e
     |███▎                            | 30 kB 546 kB/s e
     |████▍                           | 40 kB 194 kB/s e
     |█████▌                          | 51 kB 179 kB/s e
     |██████▋                         | 61 kB 215 kB/s e
     |███████▊                        | 71 kB 250 kB/s e
     |████████▉                       | 81 kB 286 kB/s e
     |█████████▉                      | 92 kB 321 kB/s e
     |███████████                     | 102 kB 260 kB/s 
     |████████████                    | 112 kB 260 kB/s 
     |█████████████▏                  | 122 kB 260 kB/s 
     |██████████████▎                 | 133 kB 260 kB/s 
     |███████████████▍                | 143 kB 260 kB/s 
     |████████████████▌               | 153 kB 260 kB/s 
     |█████████████████▋              | 163 kB 260 kB/s 
     |██████████████████▋             | 174 kB 260 kB/s 
     |███████████████████▊            | 184 kB 260 kB/s 
     |████████████████████▉           | 194 kB 260 kB/s 
     |██████████████████████          | 204 kB 260 kB/s 
     |███████████████████████         | 215 kB 260 kB/s 
     |████████████████████████▏       | 225 kB 260 kB/s 
     |█████████████████████████▎      | 235 kB 260 kB/s 
     |██████████████████████████▍     | 245 kB 260 kB/s 
     |███████████████████████████▍    | 256 kB 260 kB/s 
     |████████████████████████████▌   | 266 kB 260 kB/s 
     |█████████████████████████████▋  | 276 kB 260 kB/s 
     |██████████████████████████████▊ | 286 kB 260 kB/s 
     |███████████████████████████████▉| 296 kB 260 kB/s 
     |████████████████████████████████| 298 kB 260 kB/s 
Installing collected packages: werkzeug
Successfully installed werkzeug-1.0.1
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ pip list | grep werkzeug
```

- At this point, all seemed to be compatible with each other and then I can proceed

```bash
(myvenv) ayomide@Kazzywiz:~/alx-backend-user-data/0x01-Basic_authentication$ API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
127.0.0.1 - - [20/May/2024 21:49:39] "GET / HTTP/1.1" 404 -
127.0.0.1 - - [20/May/2024 21:49:39] "GET /favicon.ico HTTP/1.1" 404 -
127.0.0.1 - - [20/May/2024 21:50:42] "GET /api/v1/status HTTP/1.1" 200 -
```

## Tasks

### 0. [Simple-basic-API](./) :-

Download and start your project from this `[archive.zip](https://intranet.alxswe.com/rltoken/2o4gAozNufil_KjoxKI5bA)`

In this archive, you will find a simple API with one model: `User`. Storage of these users is done via a serialization/deserialization in files.

#### Setup and start server

```bash
bob@dylan:~$ pip3 install -r requirements.txt
...
bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
 * Serving Flask app "app" (lazy loading)
...
bob@dylan:~$
```

#### Use the API (in another tab or in your browser)

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status" -vvv
*   Trying 0.0.0.0...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
> GET /api/v1/status HTTP/1.1
> Host: 0.0.0.0:5000
> User-Agent: curl/7.54.0
> Accept: */*
> 
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Content-Type: application/json
< Content-Length: 16
< Access-Control-Allow-Origin: *
< Server: Werkzeug/1.0.1 Python/3.7.5
< Date: Mon, 18 May 2020 20:29:21 GMT
< 
{"status":"OK"}
* Closing connection 0
bob@dylan:~$
```

### 1. [Error handler: Unauthorized](api/v1) | [api/v1/app.py](./api/v1/app.py), [api/v1/views/index.py](./api/v1/views/index.py) :-

What the HTTP status code for a request unauthorized? `401` of course!

Edit `api/v1/app.py`:

- Add a new error handler for this status code, the response must be:
  - a JSON: `{"error": "Unauthorized"}`
  - status code `401`
  - you must use `jsonify` from Flask

For testing this new error handler, add a new endpoint in `api/v1/views/index.py`:

- Route: `GET /api/v1/unauthorized`
- This endpoint must raise a 401 error by using `abort` - [Custom Error Pages](https://flask.palletsprojects.com/en/1.1.x/patterns/errorpages/)

By calling `abort(401)`, the error handler for 401 will be executed.

In the first terminal:

```bash
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
```

In a second terminal:

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/unauthorized"
{
  "error": "Unauthorized"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/unauthorized" -vvv
*   Trying 0.0.0.0...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
> GET /api/v1/unauthorized HTTP/1.1
> Host: 0.0.0.0:5000
> User-Agent: curl/7.54.0
> Accept: */*
> 
* HTTP 1.0, assume close after body
< HTTP/1.0 401 UNAUTHORIZED
< Content-Type: application/json
< Content-Length: 30
< Server: Werkzeug/0.12.1 Python/3.4.3
< Date: Sun, 24 Sep 2017 22:50:40 GMT
< 
{
  "error": "Unauthorized"
}
* Closing connection 0
bob@dylan:~$
```

### 2. [Error handler: Forbidden](api/v1) | [api/v1/app.py](./api/v1/app.py), [api/v1/views/index.py](./api/v1/views/index.py) :-

What the HTTP status code for a request where the user is authenticate but not allowed to access to a resource? `403` of course!

Edit `api/v1/app.py`:

- Add a new error handler for this status code, the response must be:
  - a JSON: `{"error": "Forbidden"}`
  - status code `403`
  - you must use `jsonify` from Flask

For testing this new error handler, add a new endpoint in `api/v1/views/index.py`:

- Route: `GET /api/v1/forbidden`
- This endpoint must raise a `403` error by using `abort` - [Custom Error Pages](https://flask.palletsprojects.com/en/1.1.x/patterns/errorpages/)

By calling `abort(403)`, the error handler for 403 will be executed.

In the first terminal:

```bash
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
```

In a second terminal:

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/forbidden"
{
  "error": "Forbidden"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/forbidden" -vvv
*   Trying 0.0.0.0...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
> GET /api/v1/forbidden HTTP/1.1
> Host: 0.0.0.0:5000
> User-Agent: curl/7.54.0
> Accept: */*
> 
* HTTP 1.0, assume close after body
< HTTP/1.0 403 FORBIDDEN
< Content-Type: application/json
< Content-Length: 27
< Server: Werkzeug/0.12.1 Python/3.4.3
< Date: Sun, 24 Sep 2017 22:54:22 GMT
< 
{
  "error": "Forbidden"
}
* Closing connection 0
bob@dylan:~$
```

### 3. [Auth class](api/v1) | [api/v1/auth](./api/v1/auth), [api/v1/auth/__init__.py](./api/v1/auth/__init__.py), [api/v1/auth/auth.py](./api/v1/auth/auth.py) :-

Now you will create a class to manage the API authentication.

- Create a folder `api/v1/auth`
- Create an empty file `api/v1/auth/__init__.py`
- Create the class `Auth`:
  - in the file `api/v1/auth/auth.py`
  - import `request` from `flask`
  - class name `Auth`
  - public method `def require_auth(self, path: str, excluded_paths: List[str]) -> bool:` that returns `False` - `path` and `excluded_paths` will be used later, now, you don’t need to take care of them
  - public method `def authorization_header(self, request=None) -> str:` that returns `None` - `request` will be the Flask request object
  - public method `def current_user(self, request=None) -> TypeVar('User'):` that returns `None` - `request` will be the Flask request object

This class is the template for all authentication system you will implement.

```bash
bob@dylan:~$ cat main_0.py
#!/usr/bin/env python3
""" Main 0
"""
from api.v1.auth.auth import Auth

a = Auth()

print(a.require_auth("/api/v1/status/", ["/api/v1/status/"]))
print(a.authorization_header())
print(a.current_user())

bob@dylan:~$ 
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_0.py
False
None
None
bob@dylan:~$
```

### 4. [Define which routes don't need authentication](api/v1/auth) | [api/v1/auth/auth.py](./api/v1/auth/auth.py) :-

Update the method `def require_auth(self, path: str, excluded_paths: List[str]) -> bool:` in `Auth` that returns `True` if the `path` is not in the list of strings `excluded_paths`:

- Returns `True` if `excluded_paths` is `None` or empty
- Returns `False` if `path` is in `excluded_paths`
- Returns `True` if `path` is `None`
- You can assume `excluded_paths` contains string `path` always ending by a `/`
- This method must be slash tolerant: `path=/api/v1/status` and `path=/api/v1/status/` must be returned `False` if `excluded_paths` contains `/api/v1/status/`

```bash
bob@dylan:~$ cat main_1.py
#!/usr/bin/env python3
""" Main 1
"""
from api.v1.auth.auth import Auth

a = Auth()

print(a.require_auth(None, None))
print(a.require_auth(None, []))
print(a.require_auth("/api/v1/status/", []))
print(a.require_auth("/api/v1/status/", ["/api/v1/status/"]))
print(a.require_auth("/api/v1/status", ["/api/v1/status/"]))
print(a.require_auth("/api/v1/users", ["/api/v1/status/"]))
print(a.require_auth("/api/v1/users", ["/api/v1/status/", "/api/v1/stats"]))

bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_1.py
True
True
True
False
False
True
True
bob@dylan:~$
```

### 5. [Request validation!](api/v1) | [api/v1/app.py](./api/v1/app.py), [api/v1/auth/auth.py](./api/v1/auth/auth.py) :-

Now you will validate all requests to secure the API:

Update the method `def authorization_header(self, request=None) -> str: in api/v1/auth/auth.py:`

- If `request` is `None`, returns `None`
- If `request` doesn’t contain the header key `Authorization`, returns `None`
- Otherwise, return the value of the header request `Authorization`

Update the file `api/v1/app.py`:

- Create a variable `auth` initialized to `None` after the `CORS` definition
- Based on the environment variable `AUTH_TYPE`, load and assign the right instance of authentication to `auth`
  - if `auth`:
    - import `Auth` from `api.v1.auth.auth`
    - create an instance of `Auth` and assign it to the variable `auth`

Now the biggest piece is the filtering of each request. For that you will use the Flask method [before_request](https://flask.palletsprojects.com/en/1.1.x/api/#flask.Blueprint.before_request)

- Add a method in api/v1/app.py to handler before_request
  - if `auth` is `None`, do nothing
  - if `request.path` is not part of this list `['/api/v1/status/', '/api/v1/unauthorized/', '/api/v1/forbidden/']`, do nothing - you must use the method `require_auth` from the auth instance
  - if `auth.authorization_header(request)` returns `None`, raise the error `401` - you must use `abort`
  - if `auth.current_user(request)` returns `None`, raise the error `403` - you must use `abort`

In the first terminal:

```bash
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=auth python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
```

In a second terminal:

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status"
{
  "status": "OK"
}
bob@dylan:~$ 
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status/"
{
  "status": "OK"
}
bob@dylan:~$ 
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users"
{
  "error": "Unauthorized"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Test"
{
  "error": "Forbidden"
}
bob@dylan:~$
```

### 6. [Basic auth](api/v1) | [api/v1/app.py](./api/v1/app.py), [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Create a class `BasicAuth` that inherits from `Auth`. For the moment this class will be empty.

Update `api/v1/app.py` for using `BasicAuth` class instead of `Auth` depending of the value of the environment variable `AUTH_TYPE`, If `AUTH_TYPE` is equal to `basic_auth`:

- import `BasicAuth` from `api.v1.auth.basic_auth`
- create an instance of `BasicAuth` and assign it to the variable `auth`

Otherwise, keep the previous mechanism with `auth` an instance of `Auth`.

In the first terminal:

```bash
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=basic_auth python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
```

In a second terminal:

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status"
{
  "status": "OK"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status/"
{
  "status": "OK"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users"
{
  "error": "Unauthorized"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Test"
{
  "error": "Forbidden"
}
bob@dylan:~$
```

### 7. [Basic - Base64 part](api/v1) | [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Add the method `def extract_base64_authorization_header(self, authorization_header: str) -> str:` in the class `BasicAuth` that returns the Base64 part of the `Authorization` header for a Basic Authentication:

- Return `None` if `authorization_header` is `None`
- Return `None` if `authorization_header` is not a string
- Return `None` if `authorization_header` doesn’t start by `Basic` (with a space at the end)
- Otherwise, return the value after `Basic` (after the space)
- You can assume `authorization_header` contains only one `Basic`

```bash
bob@dylan:~$ cat main_2.py
#!/usr/bin/env python3
""" Main 2
"""
from api.v1.auth.basic_auth import BasicAuth

a = BasicAuth()

print(a.extract_base64_authorization_header(None))
print(a.extract_base64_authorization_header(89))
print(a.extract_base64_authorization_header("Holberton School"))
print(a.extract_base64_authorization_header("Basic Holberton"))
print(a.extract_base64_authorization_header("Basic SG9sYmVydG9u"))
print(a.extract_base64_authorization_header("Basic SG9sYmVydG9uIFNjaG9vbA=="))
print(a.extract_base64_authorization_header("Basic1234"))

bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_2.py
None
None
None
Holberton
SG9sYmVydG9u
SG9sYmVydG9uIFNjaG9vbA==
None
bob@dylan:~$
```

### 8. [Basic - Base64 decode](api/v1) | [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Add the method `def decode_base64_authorization_header(self, base64_authorization_header: str) -> str:` in the class `BasicAuth` that returns the decoded value of a Base64 string `base64_authorization_header`:

- Return `None` if `base64_authorization_header` is `None`
- Return `None` if `base64_authorization_header` is not a string
- Return `None` if `base64_authorization_header` is not a valid Base64 - you can use `try/except`
- Otherwise, return the decoded value as UTF8 string - you can use `decode('utf-8')`

```bash
bob@dylan:~$ cat main_3.py
#!/usr/bin/env python3
""" Main 3
"""
from api.v1.auth.basic_auth import BasicAuth

a = BasicAuth()

print(a.decode_base64_authorization_header(None))
print(a.decode_base64_authorization_header(89))
print(a.decode_base64_authorization_header("Holberton School"))
print(a.decode_base64_authorization_header("SG9sYmVydG9u"))
print(a.decode_base64_authorization_header("SG9sYmVydG9uIFNjaG9vbA=="))
print(a.decode_base64_authorization_header(a.extract_base64_authorization_header("Basic SG9sYmVydG9uIFNjaG9vbA==")))

bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_3.py
None
None
None
Holberton
Holberton School
Holberton School
bob@dylan:~$
```

### 9. [Basic - User credentials](api/v1/auth), [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Add the method `def extract_user_credentials(self, decoded_base64_authorization_header: str) -> (str, str)` in the class `BasicAuth` that returns the user email and password from the Base64 decoded value.

- This method must return 2 values
- Return `None, None` if `decoded_base64_authorization_header` is `None`
- Return `None, None` if `decoded_base64_authorization_header` is not a string
- Return `None, None` if `decoded_base64_authorization_header` doesn’t contain `:`
- Otherwise, return the user email and the user password - these 2 values must be separated by a `:`
- You can assume `decoded_base64_authorization_header` will contain only one `:`

```bash
bob@dylan:~$ cat main_4.py
#!/usr/bin/env python3
""" Main 4
"""
from api.v1.auth.basic_auth import BasicAuth

a = BasicAuth()

print(a.extract_user_credentials(None))
print(a.extract_user_credentials(89))
print(a.extract_user_credentials("Holberton School"))
print(a.extract_user_credentials("Holberton:School"))
print(a.extract_user_credentials("bob@gmail.com:toto1234"))

bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_4.py
(None, None)
(None, None)
(None, None)
('Holberton', 'School')
('bob@gmail.com', 'toto1234')
bob@dylan:~$
```

### 10. [Basic - User object](api/v1/auth) | [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Add the method `def user_object_from_credentials(self, user_email: str, user_pwd: str) -> TypeVar('User'):` in the class `BasicAuth` that returns the `User` instance based on his email and password.

- Return `None` if `user_email` is `None` or not a string
- Return `None` if `user_pwd` is `None` or not a string
- Return `None` if your database (file) doesn’t contain any `User` instance with email equal to `user_email` - you should use the class method `search` of the `User` to lookup the list of users based on their email. - Don’t forget to test all cases: “what if there is no user in DB?”, etc.
- Return `None` if `user_pwd` is not the password of the `User` instance found - you must use the method `is_valid_password` of `User`
- Otherwise, return the `User` instance

```bash
bob@dylan:~$ cat main_5.py
#!/usr/bin/env python3
""" Main 5
"""
import uuid
from api.v1.auth.basic_auth import BasicAuth
from models.user import User

""" Create a user test """
user_email = str(uuid.uuid4())
user_clear_pwd = str(uuid.uuid4())
user = User()
user.email = user_email
user.first_name = "Bob"
user.last_name = "Dylan"
user.password = user_clear_pwd
print("New user: {}".format(user.display_name()))
user.save()

""" Retreive this user via the class BasicAuth """

a = BasicAuth()

u = a.user_object_from_credentials(None, None)
print(u.display_name() if u is not None else "None")

u = a.user_object_from_credentials(89, 98)
print(u.display_name() if u is not None else "None")

u = a.user_object_from_credentials("email@notfound.com", "pwd")
print(u.display_name() if u is not None else "None")

u = a.user_object_from_credentials(user_email, "pwd")
print(u.display_name() if u is not None else "None")

u = a.user_object_from_credentials(user_email, user_clear_pwd)
print(u.display_name() if u is not None else "None")

bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_5.py 
New user: Bob Dylan
None
None
None
None
Bob Dylan
bob@dylan:~$
```

### 11. [Basic - Overload current_user - and BOOM!](api/v1/auth) | [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Now, you have all pieces for having a complete Basic authentication.

Add the method `def current_user(self, request=None) -> TypeVar('User')` in the class `BasicAuth` that overloads `Auth` and retrieves the `User` instance for a request:

- You must use `authorization_header`
- You must use `extract_base64_authorization_header`
- You must use `decode_base64_authorization_header`
- You must use `extract_user_credentials`
- You must use `user_object_from_credentials`

With this update, now your API is fully protected by a Basic Authentication. Enjoy!

In the first terminal:

```bash
bob@dylan:~$ cat main_6.py
#!/usr/bin/env python3
""" Main 6
"""
import base64
from api.v1.auth.basic_auth import BasicAuth
from models.user import User

""" Create a user test """
user_email = "bob@hbtn.io"
user_clear_pwd = "H0lbertonSchool98!"
user = User()
user.email = user_email
user.password = user_clear_pwd
print("New user: {} / {}".format(user.id, user.display_name()))
user.save()

basic_clear = "{}:{}".format(user_email, user_clear_pwd)
print("Basic Base64: {}".format(base64.b64encode(basic_clear.encode('utf-8')).decode("utf-8")))

bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_6.py 
New user: 9375973a-68c7-46aa-b135-29f79e837495 / bob@hbtn.io
Basic Base64: Ym9iQGhidG4uaW86SDBsYmVydG9uU2Nob29sOTgh
bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=basic_auth python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
```

In a second terminal:

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status"
{
  "status": "OK"
}
bob@dylan:~$ 
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users"
{
  "error": "Unauthorized"
}
bob@dylan:~$ 
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Test"
{
  "error": "Forbidden"
}
bob@dylan:~$ 
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Basic test"
{
  "error": "Forbidden"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Basic Ym9iQGhidG4uaW86SDBsYmVydG9uU2Nob29sOTgh"
[
  {
    "created_at": "2017-09-25 01:55:17", 
    "email": "bob@hbtn.io", 
    "first_name": null, 
    "id": "9375973a-68c7-46aa-b135-29f79e837495", 
    "last_name": null, 
    "updated_at": "2017-09-25 01:55:17"
  }
]
bob@dylan:~$ 
```

### 12. [Basic - Allow password with ":"](api/v1/auth) | [api/v1/auth/basic_auth.py](./api/v1/auth/basic_auth.py) :-

Improve the method `def extract_user_credentials(self, decoded_base64_authorization_header)` to allow password with `:`.

In the first terminal:

```bash
bob@dylan:~$ cat main_100.py
#!/usr/bin/env python3
""" Main 100
"""
import base64
from api.v1.auth.basic_auth import BasicAuth
from models.user import User

""" Create a user test """
user_email = "bob100@hbtn.io"
user_clear_pwd = "H0lberton:School:98!"

user = User()
user.email = user_email
user.password = user_clear_pwd
print("New user: {}".format(user.id))
user.save()

basic_clear = "{}:{}".format(user_email, user_clear_pwd)
print("Basic Base64: {}".format(base64.b64encode(basic_clear.encode('utf-8')).decode("utf-8")))

bob@dylan:~$ 
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 ./main_100.py 
New user: 5891469b-d2d5-4d33-b05d-02617d665368
Basic Base64: Ym9iMTAwQGhidG4uaW86SDBsYmVydG9uOlNjaG9vbDo5OCE=
bob@dylan:~$
bob@dylan:~$ API_HOST=0.0.0.0 API_PORT=5000 AUTH_TYPE=basic_auth python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
```

In a second terminal:

```bash
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/status"
{
  "status": "OK"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users"
{
  "error": "Unauthorized"
}
bob@dylan:~$ 
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Test"
{
  "error": "Forbidden"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Basic test"
{
  "error": "Forbidden"
}
bob@dylan:~$
bob@dylan:~$ curl "http://0.0.0.0:5000/api/v1/users" -H "Authorization: Basic Ym9iMTAwQGhidG4uaW86SDBsYmVydG9uOlNjaG9vbDo5OCE="
[
  {
    "created_at": "2017-09-25 01:55:17", 
    "email": "bob@hbtn.io", 
    "first_name": null, 
    "id": "9375973a-68c7-46aa-b135-29f79e837495", 
    "last_name": null, 
    "updated_at": "2017-09-25 01:55:17"
  },
  {
    "created_at": "2017-09-25 01:59:42", 
    "email": "bob100@hbtn.io", 
    "first_name": null, 
    "id": "5891469b-d2d5-4d33-b05d-02617d665368", 
    "last_name": null, 
    "updated_at": "2017-09-25 01:59:42"
  }
]
bob@dylan:~$ 
```

### 13. [Require auth with stars](./api/v1/auth/basic_auth.py) :-

Improve `def require_auth(self, path, excluded_paths)` by allowing `*` at the end of excluded paths.

Example for `excluded_paths = ["/api/v1/stat*"]`:

- `/api/v1/users` will return `True`
- `/api/v1/status` will return `False`
- `/api/v1/stats` will return `False`
