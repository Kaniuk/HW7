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