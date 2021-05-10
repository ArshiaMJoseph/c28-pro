class Launcher{
    constructor(bodyA,pointB){
        var launch_options ={
            length: 10,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
        }
        this.launch = Matter.Constraint.create(launch_options) 
        World.add(world,this.launch)
    
        this.pointB = pointB
    
    
    }
    
    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
                strokeWeight(4)
                line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    
        }
    
    }
    
    fly(){
    
    this.launch.bodyA = null;
    
    
    
    
    }
}