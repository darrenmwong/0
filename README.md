## Butchershop HTML5 Static Build

Spinning up an html splash gets repetitive. The reason for this is to optimize workflow and templatize our toolsets.

## Out of the box
  - jQuery
  - Normalize.css
  - Foundation
  - SASS
  - Gulp
  - Gulp Live Reload
  - Gulp HTML Templates(Gulp @@include)

## Instructions
   If we are spinning this up to a new repo:

1. Be sure to delete .git files leaving disco-dog behind
2. Change package.json name
3. Leave node_modules/ behind (will take longer to transfer over)
4. Leave dist/ behind (gulp will build that)

  - `npm Install` creates node_module dependencies
  - `gulp` or `gulp default` for standard watch of files
  - `gulp live` for livereload + watch and build

