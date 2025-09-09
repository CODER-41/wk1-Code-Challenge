
//SPEED DETECTOR//
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit){
        return "ok"
    }else{
        const points = Math.floor((speed-speedLimit) / kmPerPoint);

        if(points > 12){
            return "License suspended";
        }else{
            return `points: ${points}`
        }
    }
 }
console.log(checkSpeed(90));
console.log(checkSpeed(200));
