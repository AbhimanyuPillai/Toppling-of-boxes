class Box
{
    constructor(x,y,width,height)
    {
        var option1 = 
        {
           restitution : 1,
           friction : 0.3,
           density : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,option1)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display()
    {   var posi = this.body.position
        var angle = this.body.angle
        push()
        translate(posi.x,posi.y)
        rotate(angle)
        rectMode(CENTER)
        fill(255)
        rect(0,0,this.width,this.height)
        pop()

    }
}