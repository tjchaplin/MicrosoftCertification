# Animation

## CSS3 Transitions

Available Properties
* transition-property: The name of the CSS property to which the transition is applied.
* transition-duration: The length of time that the transition takes. The default value is zero seconds, which means the transition happens all at once. This has the same effect as not applying a transition.
* transition-timing-function: Specifies how the speed of the transition varies during its execution. Possible values include "linear", "ease", "ease-in", "ease-out", and "ease-in-out". The default value is "ease".
* transition-delay: The length of time that must elapse before the transition starts. The default value is zero seconds, which means the transition starts immediately.
* transition: Shorthand property for the other four transition properties, in the order transition-property transition-duration transition-timing-function transition-delay. If any of these values are not specified, the default values described above apply.

When defining `transition-duration` if used fewer values than defined in `transition-property` the last value defined will be used for the duration of all transitions.  Example:
```
{
	transition-property: width, height, font-size,
	transition-duration: 2s /* 2s will be used for width height and font-size */
}
```

#### Transition Events
transitionend event-handler function has two properties:

* propertyName: The name of the CSS property for which the transition has completed, such as width, height, or font-size.
* elapsedTime: The elapsed time of the transition in seconds, excluding any delay that occurred before the transition started.