const MathLibrary= Object.freeze({
		integral: function(f_o_x,a,b,dx)
		{
			let sum=0;
			for (let i=a;i<b;i+=dx)
			{
				let j=f_o_x(i);
				sum+=j;
			}
			return sum;
		}
		derivative: function(f_o_x,x,dx)
		{
			return ((f_o_x(x+dx)-f_o_x(x)/dx));
		}
});
