function wakeUp(wakeUpTime, timeout) {
    return new Promise((resolve, reject) => {
        const haveTimeForShower = wakeUpTime <= 7;
        setTimeout(() => {
            console.log('Good morning!');
            resolve(haveTimeForShower);
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
