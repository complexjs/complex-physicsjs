# complex-physicsjs

#Install
    npm i complex-physicsjs --save

# System

Add system to current world

BEHAVIOURS is an array of physicsjs behaviours. Check out their doc


    let cxPhysicsJsSystem = require('complex-physicsjs').cxPhysicsJsSystem;

    this.world.addSystem( new cxPhysicsJsSystem(30, 4, BEHAVIOURS) );
