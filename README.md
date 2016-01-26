# crip-input 

Microplugin for beutiful inputs

[See demo](http://rawgit.com/crip-design/input/master/examples/example.html)

## Installation
Download from github page or install via bower:
```cmd 
bower install crip-input --save
```

### To use in code:

[See example file source code](https://github.com/crip-design/input/blob/master/examples/example.html)

Add reference to css file:
```html
<link rel="stylesheet" href="bower_components/crip-input/build/crip-input.min.css">
```

Add reference to jQuery and plugin js file and enable plugin on page load:
```html
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="bower_components/crip-input/build/crip-input.min.js"></script>
<script>
    (function ($) {
        $('.form-group.crip').cripInput();
    })(jQuery);
</script>
```

Usage in html is similar with bootstrap3. If you are using bootstrap, it`s ok and will not break anything
```html
<div class="form-group crip">
    <label class="control-label" for="test">Label</label>
    <input type="text" class="form-control" name="test" id="test">
</div>
```

### To use in angular:
Add reference to css file:
```html
<link rel="stylesheet" href="bower_components/crip-input/build/crip-input.min.css">
```

Add reference to angular and plugin.angular js file and enable plugin in angular app:
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script src="bower_components/crip-input/build/crip-input.angular.min.js"></script>
<script>
    (function (angular) {
        'use strict';
        
        angular.module('app', 
            ['crip.input']
        );
    })(angular);
</script>
```

Usage in angular template requires to add model for directive to react on model changes and change it state dynamically
```html
<div class="form-group" crip-input="vm.inputModel">
    <label class="control-label" for="title">Title</label>
    <input type="text" name="title" class="form-control" id="title" ng-model="vm.inputModel">
</div>
```