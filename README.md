# Project Configurations

Short Description

![alt text][project-image-url-reference]

## Table of Contents

- [Folder Structure](#folder-structure)
- [Development](#development)
- - [Installing](#installing)
- [Production](#production)
- - [Releases](#releases)
- [Todo](#todo)

## Folder Structure

```bash
project-configurations/
|-- README.md
|-- app
|-- composer.json
|-- package.json
|-- phpunit.xml
|-- resources
|   |-- images
|   |-- js
|   |   `-- app.js
|   `-- sass
|       `-- app.scss
|-- tests
|   |-- js
|   |   |-- Functional
|   |   |   `-- ExampleTest.js
|   |   |-- Integration
|   |   `-- Unit
|   `-- php
|       |-- CreatesApplication.php
|       |-- Functional
|       |   `-- ExampleTest.php
|       |-- Integration
|       |-- TestCase.php
|       `-- Unit
`-- webpack.mix.js
```

** For a print out like the above you can use the shell script below **

```bash
#!/bin/bash

SEDMAGIC='s;[^/]*/;|____;g;s;____|; |;g'

if [ "$#" -gt 0 ] ; then
   dirlist="$@"
else
   dirlist="."
fi

for x in $dirlist; do
     find "$x" -print | sed -e "$SEDMAGIC"
done
```

## Development

Project Development description.

### Installing

Project Development installation description.

## Production

Production description.

### Releases

Production Releases description.

## TODO

- TODO list item
- TODO list item
- TODO list item

[project-image-url-reference]: https://assets-cdn.github.com/images/modules/logos_page/Octocat.png "Project Logo"
[project-link-reference]: https://username.github.io/project-configurations
