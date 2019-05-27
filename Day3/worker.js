console.log('worker.js file called');
self.addEventListener('message', function(e){
    self.postMessage(e.data);
}, false);