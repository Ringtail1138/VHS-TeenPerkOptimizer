class Perk{
	constructor(name, tier, cost, teen){
		this.name = name;
		this.tier = tier;
		this.cost = cost;
		this.teen = teen;
	}
}

// Array of Teen perks and their tier, costs, and Teen
let teenPerks = [];
//add Jess perks
teenPerks.push(new Perk("Evil Eye 1",1,4,"Jess"));
teenPerks.push(new Perk("Evil Eye 2",2,5,"Jess"));
teenPerks.push(new Perk("Evil Eye 3",3,7,"Jess"));
teenPerks.push(new Perk("Low Profile 1",1,4,"Jess"));
teenPerks.push(new Perk("Low Profile 2",2,8,"Jess"));
teenPerks.push(new Perk("Low Profile 3",3,12,"Jess"));


function onLoad() {
	// alert(teenPerks[0].name);
	populatePerks();
}



function populatePerks() {
	var perk1 = document.getElementById("perk1");
	var perk2 = document.getElementById("perk2");
	var perk3 = document.getElementById("perk3");
	var perk4 = document.getElementById("perk4");
	var perk5 = document.getElementById("perk5");
	
	for(var i=0; i<teenPerks.length; i++) {
		var perk = teenPerks[i];
		
		var el = document.createElement("option");
		el.text = perk.name;
		el.value = perk.name;
		
		perk1.add(el);
	}
}