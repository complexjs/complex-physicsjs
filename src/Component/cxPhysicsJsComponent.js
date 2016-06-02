'use strict';

let cxComponent= require('complex-engine-component');
let Physics = require('physicsjs');

module.exports = class cxPhysicsJsComponent extends cxComponent{
    /**
     * Physic component
     * @param  {String} type PhysicJS body type
     * @param  {Object} conf PhysicJS body config
     */
    constructor( type, conf )
    {
        super();
        this.tag = 'cx.physicsjs.component';

        /**
         * PhysicJS Body
         */
        this.body = Physics.body(type, conf);
    }

};
