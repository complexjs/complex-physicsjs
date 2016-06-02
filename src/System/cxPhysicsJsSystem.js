'use strict';

let cxVoidSystem = require('complex-engine-system').cxVoidSystem;
let Physics = require('physicsjs')

class cxPhysicsJsSystem extends cxVoidSystem
{
    /**
     * Physic update system
     * @param  {float} fps       FPS
     * @param  {[type]} ipf       Iterations Per Frame
     * @param  {Array<PhysicJS.Behavior>} behaviors Initial behaviors
     */
    constructor( fps, ipf, behaviors ){
        super();
        this._world = Physics({
            timestep : fps,
            maxIPF: ipf,
        });

        let len = behaviors.length;
        for(let i  =0; i < len; i++){
            this._world.add( behaviors[i] );
        }

        Physics.util.ticker.on( ( time, dt ) => {
            this._world.step( time );
        });
        Physics.util.ticker.start();
    }

    added( cxEntity ){
        let comp = cxEntity.getComponent('cx.physicsjs.component');

        if(comp){
            this._world.add(comp.body);
        }
    }

    update ()
    {
    }
}

module.exports = cxPhysicsJsSystem;
