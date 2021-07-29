async function beginDay() {
    await wakeUp(600);
    await haveShower(100);
    await haveBreakfast(1000);
    await takeChildToTheKindergarten(1500);
    await goToWork(200);
    await workHard(2000);
    await haveLunch(500);
    await goHome(600);
    await goForAWalk(2500);
    await goToSleep(200);
    console.log('The day is ended)');
}
beginDay();