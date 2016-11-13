'use strict';

let cxVoidSystem = require('complex-engine').cxVoidSystem;
let Physics = require('physicsjs');

module.exports = class cxPhysicsJsSystem extends cxVoidSystem
{
    /**
     * Physic update system
     * @param  {float} fps       FPS
     * @param  {[type]} ipf       Iterations Per Frame
     * @param  {Array<PhysicJS.Behavior>} behaviors Initial behaviors
     */
    constructor( fps, ipf, behaviors ){
        super();
        this.tag = 'cx.physicsjs.system';

        behaviors = behaviors || [];       
        fps = fps || 30;
        ipf = ipf || 4;

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

    /**
     * Called when a new entity is added to the cxWorld object
     * @param cxEntity cxEntity
     */
    added( cxEntity ){
        let comps = cxEntity.getComponents('cx.physicsjs.component');
        for (let i = 0; i < comps.length; i++){
            this._world.add(comps[i].body);
        }
    }

    update ()
    {
    }
}
