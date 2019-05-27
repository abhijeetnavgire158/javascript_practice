console.log('WORKER WORKED');
self.addEventListener('message', function(e){
    var data = e.data;
    switch (data.cmd) {
        case 'start': 
            self.postMessage("WORKER START " + data.msg);
            break;
        case 'break':
            self.postMessage("WORKER TAKE LUNCH BREAK " + data.msg);            
            break;
        default:
            self.postMessage('WORKER STOP ' + data.msg);
            self.close();
            break;
    }
},false);