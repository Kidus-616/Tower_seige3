class Connection {

    constructor(A,B){
    var properties={
        bodyA: A,
        pointB: B,
        stiffness: 0.04,
        length: 10
    }
    this.connection= Constraint.create(properties)
    World.add(world,this.connection);
    
    }
    
    display(){
       
        if(this.connection.bodyA!= null)
        {
            var A =this.connection.bodyA.position
            var B=this.connection.pointB
            push ()
            stroke (48,22,8)
            strokeWeight(5)
            line (A.x,A.y,B.x,B.y)
            pop () 
        }
    
    }
    
    breakConnection(){
      this.connection.bodyA= null  
    }
    
    }