var promiseExp = new Promise(function(resolve, reject){
    const a = 2;
    const b = 3;
    
    if (a == b) {
        resolve();
    } else {
        reject();
    }
});

promiseExp.then(function() {
    console.log('simple promise example : success');
}, function(error) {
    console.log('simple promise example : error');
});

//catch is same as then(null, function(error) {});
promiseExp.catch(function(error) {
    console.log('simple promise example (Catch) : error');
});

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344,    
  };

  const myExecutor = function (resolve, reject) {
      if (inventory.sunglasses > 0) {
          resolve('Sunglasses order processed.');
      } else {
          reject('That item is sold out.');
      }
  }

  const orderSunglassPromise = new Promise(myExecutor).then(function(result) {
    console.log(result);
  }, function(error) {
    console.log(error);
  });


var orderSunglasses = function() {
    var orderPromise = new Promise(myExecutor);
    return orderPromise;
}

var orderPromise = orderSunglasses().then(
    function(result) {
        console.log(result);
    },function(error) {
        console.log(error);
    }
);


console.log('Addition program');
function getSum(a, b) {
    var promise = new Promise(function(resolve, reject) {
        if(a<0 || b<=0) {
            //throw('Numbers should be +ve');
            reject(Error('-ve number not allowed'));
        } else {
            resolve(a + b);
        }
    });

    return promise;
}

getSum(2,4).then(function(success) {
    console.log(success);
    return getSum(2,-4)
}, function(error) {
    console.log(error);   
}).then(function(success) {
    console.log(success);
}, function(error) {
    console.log(error);
    return getSum(5,6);
}).then(function(success) {
    console.log(success);
}, function(error) {
    console.log(error);
});