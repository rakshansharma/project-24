class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
        
		restitution:0.3,
		friction: 1,
		density:4

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS)
			fill('red')
			ellipse(50, 50, 30, 30);
			ellipseMode(CENTER);
			fill('green')
			ellipse(50, 50, 30, 30);
			pop()
	}

}