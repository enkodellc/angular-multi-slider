angular-multi-slider Version 0.1.4
===================

AngularJS multi slider component with multiple sliders and thumbs support. Easily bind to 'value' and 'title' json objects. 
CSS style is very simple easily customize your slider handles and bubbles. No JQuery dependency required. The only dependency is Angular.
I have added a key / legend and collision detection. The collision detection / bubble adjustment has a delay since the bubbles 
have an animation to them. Collision detection and bubble adjustment is not perfect but very good. If you have some ideas on improving
this directive feel free to let me know.

## Show Some Love
If you utilize this directive please give it a Star. It will motivate me to add features and continually maintain it. 

*[Derived from angular-rangeslider](https://github.com/supertorio/angular-rangeslider-directive) 

### Installing via Bower
```
bower install angular-multi-slider
```
	
Include both multislider.js and multislider.css, then add `angularMultiSlider` to your `angular.module` dependencies.

## Examples

* [Here is a plunker you can fork](http://plnkr.co/edit/uTrlSK4R0iEhmg3mF2Cv?p=preview)
* [Demo site](http://keithfimreite.com/angular-multi-slider-directive.aspx)

## Preview

![Angular Multiple Sliders](http://keithfimreite.com/BlogFiles/keithfimreite/angular/multislider/angular-multiple-sliders.png)

### Usage

1. Add the `angularMultiSlider` dependency to your Angular project. example:
	* `angular.module('myApp', ['angularMultiSlider'])`	
2. Create a 'multi-slider' directive in your view and give it a model, where `ng-model` is a variable on `$scope`.
```html
    <multi-slider
      floor="0"
      step="10"
      precision="2"
      ceiling="500"
      bubbles="true"
      ng-model="sliders">
    </multi-slider>
```
Controller scope for sliders:
```js
    $scope.sliders = [
      {title:'User 1: ', value:100, color: 'Red'},
      {title:'User 2: ', value:200, color: '#00FF00' },
      {title:'User 3: ', value:450, }
    ];
```

## Multi-Slider Directive Properties

* __floor__ `{number}` Minimum Value for Slider
* __ceiling__ `{number}` Maximum Value for Slider
* __step__ `{number}` Value between steps in snapping on the scale. Examples (100, 10, 1, .1}
* __precision__ `{number / integer}` The precision to which round each step is rounded to. Default: 2
* __display-filter__ `{$filter}` Optional angular filter expression.
* __ng-model__ `{object}` Bound values for sliders, requires 'value' for slider and 'title' for bubble
* __bubbles__ `{string}` true or false for showing the persistent bubbles or false for just on hover
* __maintain-order__ `{string}` true or false for maintaining the order of the sliders. To function properly you your slider array is required to be sorted by value

## NgModel Properties

* __title__ `{string}` Optional Title for the bubbles that popup during grab or persistently set
* __value__ `{number}` Required - Value for the slider handle. This value should be between floor and ceiling inclusive
* __color__ `{HEX, RGB, or HTML color}` Optional color for the handle. Basically and valid CSS color: This can be a HEX color, RGB Color, or HTML color 

## CSS Style Properties Tips

* __handle__ `.angular-multi-slider div.handle` - Override the *background-color* in CSS for all the handles or use the NgModel *color* property  
* __bar height__ `.angular-multi-slider` - Override the *height* to set the thickness of the slider line bar
* __bar color__ `.angular-multi-slider div.bar` - Override the *border-radius* and *background* to set the color of the slider line bar
* __bubble__ `.angular-multi-slider div.bubble.active` - Override the bubble *background-color*, *color*, *font-size*, etc. for the bubbles
* __bar color__ `.angular-multi-slider div.bar` - Override the *border-radius* and *background* to set the color of the slider line bar
* __limit__ `.angular-multi-slider div.limit` - Override the limits *color* and *margin-top*
* __limit floor__ `.angular-multi-slider div.limit .floor` - Override the limits *color* and *margin-top* for the floor only
* __limit ceiling__ `.angular-multi-slider div.limit .ceiling` - Override the limits *color* and *margin-top* for the ceiling only

## Multi-Slide-Key Directive

This optional directive will create a key for the slider. Similar to __multi-slider__ bind to the same 'ng-model' and use CSS to customize.

## Todo

* ~~Set Dirty / Pristine~~
* ~~Color option within json object for each slider~~
* ~~Handle overlapping tooltips by checking handle proximity~~
* ~~A key directive~~
* ~~Bind / Watch to Ceiling & Floor for adjusting endpoints~~
* ~~Add filter to directive property for possible dates / angular filter~~
* ~~Added overlap prevention for sequential sliders [__no-overlap__ branch](https://github.com/enkodellc/angular-multi-slider/tree/no-overlap)~~
* ~~ng-Hide~~
* ~~Maintain Order of sliders so they do not overlap each other~~
* ~~Adding new Sliders after initial directive render~~
* Set individual handles Visible / Enabled
* Minify src -> dist folders
* Tests

## Submitting an issue

Please be responsible, the open source community is not there to guess your problem or to do your job. When submitting an issue try as much as possible to:

1. Search in the already existing issues. if your issue has not been raised before.

2. Give a precise description including angular version, angular-multi-slider version.

3. Give a way to reproduce your issue, the best would be with a <strong>running example</strong>, you can use [plunkr](http://plnkr.co/), or [codepen](http://codepen.io/). 
**Tip:** [Here is a plunker you can fork](http://plnkr.co/edit/uTrlSK4R0iEhmg3mF2Cv?p=preview)

4. Isolate your code sample on the probable issue to avoid pollution and noise.

5. Close your issue when a solution has been found (and share it with the community)

Note that 80% of the open issues are actually not issues but "problem" due to developers laziness or lack of investigation. These "issues" are a waste of time for us and especially if we have to setup a sample to reproduce the issue which those developers could have done. Any open issue which does not fulfill this contract will be closed without investigation.

## License

Code licensed under New BSD License.