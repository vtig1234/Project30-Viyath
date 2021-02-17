 class ball{
   constructor(x,y,diameter){
     var options={
       //Make it able to move
       isStatic:false,
       //Give it bounciness
       restitution:0.3,
       //Add friction
       friction:0.5,
       //Add density
       density:1.2
     }
     //Create a circle
     this.body=Bodies.circle(x,y,diameter,options);
     //Add it to the world
     World.add(world,this.body);
  }
   //Define the x and y positions
  x_pos(){
      return this.body.position.x ;
}
   
     y_pos(){
      return this.body.position.y ;
}
   
   display(){
     //Create a variable for the position of the body
     var pos = this.body.position
     rectMode(CENTER);
     fill(255);
     //Make a circle following the body
     circle(pos.x,pos.y,20);
   }
 }


