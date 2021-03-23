new fullpage('#fullpage', {
	licenseKey: 'XYZ',
	autoScrolling:true,
	anchors:['slide1', 'slide2', 'slide3', 'slide4'],
	
	onLeave: function(origin, destination, direction){
		if (origin.index == 1 && direction == 'up') {
			document.getElementById("project-number").style.opacity = "0";
			document.getElementById("project-number").style.visibility = "hidden";
		} else if(origin.index == 0 && direction == 'down') {
			document.getElementById("project-number").style.opacity = "1";
			document.getElementById("project-number").style.visibility = "visible";
		}

		if (destination.index == 1) {
			document.getElementById("project1").classList.add("active");
			document.getElementById("project2").classList.remove("active");
			document.getElementById("project3").classList.remove("active");
		} else if (destination.index == 2) {
			document.getElementById("project1").classList.remove("active");
			document.getElementById("project2").classList.add("active");
			document.getElementById("project3").classList.remove("active");
		} else if (destination.index == 3) {
			document.getElementById("project1").classList.remove("active");
			document.getElementById("project2").classList.remove("active");
			document.getElementById("project3").classList.add("active");
		}
	}
});

//methods
fullpage_api.setAllowScrolling(true);
