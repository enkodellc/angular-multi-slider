angular-multi-slider
===================

Code licensed under New BSD License.

AngularJS multi slider component with multiple sliders and thumbs support. Easily bind to 'value' and 'title' json objects. 
CSS style is very simple easily customize your slider handles and bubbles. No Jquery needed, the only dependency is Angular.

*[Derived from angular-rangeslider](https://github.com/supertorio/angular-rangeslider-directive) 

###Installing via Bower
```
bower install angular-multi-slider
```
Include both multislider.js and multislider.css, then add `angularMultiSlider` to your `angular.module` dependencies.

## Examples

* [Demo site](http://keithfimreite.com/angular-multi-slider-directive.aspx)

## Preview

![Angular Multiple Sliders](http://keithfimreite.com/BlogFiles/keithfimreite/angular/multislider/angular-multiple-sliders.png)


###Usage
```html
    <multi-slider
      floor="0"
      step="10"
      precision="2"
      ceiling="500"
      bubbles="true"
      sliders="sliders">
    </multi-slider>
```
controller scope for sliders:
```js
    $scope.sliders = [
      {title:'User 1: ',value:100},
      {title:'User 2: ',value:200},
      {title:'User 3: ',value:450}
    ];
```
## Properties:

* __floor__ `{number}` Minimum Value for Slider
* __ceiling__ `{number}` Maximum Value for Slider
* __step__ `{number}` Value between steps in snapping on the scale
* __highlight__ `{string}` true or false for showing the persistent bubbles or false for just on hover
* __precision__ `{number}` Maximum Value for Slider
* __sliders__ `{object}` Bound values for sliders, requires 'value' for slider and 'title' for bubble

## Submitting an issue

Please be responsible, the open source community is not there to guess your problem or to do your job. When submitting an issue try as much as possible to:

1. Search in the already existing issues. if your issue has not been raised before.

2. Give a precise description including angular version, angular-multi-slider version.

3. Give a way to reproduce your issue, the best would be with a <strong>running example</strong>, you can use [plunkr](http://plnkr.co/), or [codepen](http://codepen.io/). **Tip:** See below for a list of base codepen's you can fork

4. Isolate your code sample on the probable issue to avoid pollution and noise.

5. Close your issue when a solution has been found (and share it with the community)

Note that 80% of the open issues are actually not issues but "problem" due to developers laziness or lack of investigation. These "issues" are a waste of time for us and especially if we have to setup a sample to reproduce the issue which those developers could have done. Any open issue which does not fulfill this contract will be closed without investigation.
