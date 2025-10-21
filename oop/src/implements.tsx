//  implements keyword

interface Driving {
    start:()=> void;
    stop:()=>void
}

class Car implements Driving {
    start () {
        console.log(`Car is started...`)
    }

    stop() {
        console.log(`Car is stopped`)
    }
}

const myCar = new Car()
myCar.start()