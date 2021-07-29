function wakeUp(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good morning!');
            resolve();
        }, timeout);
    })
}

function haveShower(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Enjoy Your Bath');
            resolve();
        }, timeout);
    })
}

function haveBreakfast(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bon Appetit');
            resolve();
        }, timeout);
    })
}

function takeChildToTheKindergarten(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Have a nice day!!!');
            resolve();
        }, timeout);
    })
}

function goToWork(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hurry up');
            resolve();
        }, timeout);
    })
}

function workHard(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I love my work!');
            resolve();
        }, timeout);
    })
}

function haveLunch(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('it is so testy)');
            resolve();
        }, timeout);
    })
}

function goHome(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hurry up');
            resolve();
        }, timeout);
    })
}

function goForAWalk(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Walk together');
            resolve();
        }, timeout);
    })
}

function goToSleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Good night!!!');
            resolve();
        }, timeout);
    })
}



wakeUp(652)
    .then(() => {
        return haveShower(100);
    })
    .then(() => {
        return haveBreakfast(1000);
    })
    .then(() => {
        return takeChildToTheKindergarten(1500);
    })
    .then(() => {
        return goToWork(200);
    })
    .then(() => {
        return workHard(2000);
    })
    .then(() => {
        return haveLunch(500);
    })
    .then(() => {
        return goHome(600);
    })
    .then(() => {
        return goForAWalk(2500);
    })
    .then(() => {
        return goToSleep(200);
    })
    .then(() => {
        console.log('The day is ended)')
    });