# Storage

## Storage types
* Session Storage - Storage used for the users session.  Available until the user closes the browser.
* Local Storage - Data is persisted even after browser session has ended
* DB storage - database
## Storage Methods

### Getting and Setting

* setItem - key, value
* getItem - key

Example
```javascript
session.setItem("myKey","some text value");
var textFromSession = sessionStorage.getItem("myKey");
```

### Removing
* removeItem(key) - Remove a specific key
* clear - Remove session before the session is ended

Example
```javascript
sessionStorage.removeItem("myKey");
sessionStorage.clear();
```

## Storage Events

* storage - changes to data held in a store. fires when data is modified

Event can be used as follows and contains the following properties
```
function myStorage(e){
	var value = {
		key : e.key,
		oldValue : e.oldValue,
		newValue : e.newValue,
		url : e.url,
		storageArea : e.storageArea
	}
}
```

## Application Cache
Developer to declare which static files should be cached


### Cache Manifest
Contains: Cache, Network, and Fallback
* Cache - Downloaded once, then only cached used
* Network - always be downloaded if the network is available, not cached
* Fallback - Not cached resource is not available, then use the cached resource

Example:
```
CACHE MANIFEST

CACHE:
index.html
verification.js
site.css
graphics/logo.jpg

NETWORK:
login

# alternatives paths
FALLBACK:
ajax/account/    noCode.htm
```

Web pages requiring the manifest need to add the following:
<html manifest="appcache.manifest">

### Events
* checking
* downloading
* updateready
* obsolete
* cached
* error
* noupdate
* progress

Application cache statuses:
Status|Meaning|Description
0|uncached|
1|IDLE|
2|Checking|
3|Downloading|
4|Updateready|
5|obsolete|


