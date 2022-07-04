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
teenPerks.push(new Perk("Evil Eye",1,4,"Jess"));
teenPerks.push(new Perk("Evil Eye",2,5,"Jess"));
teenPerks.push(new Perk("Evil Eye",3,7,"Jess"));
teenPerks.push(new Perk("Low Profile",1,4,"Jess"));
teenPerks.push(new Perk("Low Profile",2,8,"Jess"));
teenPerks.push(new Perk("Low Profile",3,12,"Jess"));
teenPerks.push(new Perk("Silent Shadow",1,3,"Jess"));
teenPerks.push(new Perk("Silent Shadow",2,5,"Jess"));
teenPerks.push(new Perk("Silent Shadow",3,8,"Jess"));

//add Faith perks
teenPerks.push(new Perk("Healing Hands",1,3,"Faith"));
teenPerks.push(new Perk("Healing Hands",2,6,"Faith"));
teenPerks.push(new Perk("Healing Hands",3,9,"Faith"));
teenPerks.push(new Perk("Magic Touch",1,3,"Faith"));
teenPerks.push(new Perk("Magic Touch",2,6,"Faith"));
teenPerks.push(new Perk("Magic Touch",3,9,"Faith"));
teenPerks.push(new Perk("Secret Admirer",1,4,"Faith"));
teenPerks.push(new Perk("Secret Admirer",2,6,"Faith"));
teenPerks.push(new Perk("Secret Admirer",3,8,"Faith"));

//add Brett perks
teenPerks.push(new Perk("Born Tough",1,4,"Brett"));
teenPerks.push(new Perk("Born Tough",2,8,"Brett"));
teenPerks.push(new Perk("Born Tough",3,12,"Brett"));
teenPerks.push(new Perk("Never Say Die",1,3,"Brett"));
teenPerks.push(new Perk("Never Say Die",2,6,"Brett"));
teenPerks.push(new Perk("Never Say Die",3,9,"Brett"));
teenPerks.push(new Perk("Vice Grip",1,6,"Brett"));
teenPerks.push(new Perk("Vice Grip",2,8,"Brett"));
teenPerks.push(new Perk("Vice Grip",3,12,"Brett"));

//add Leo perks
teenPerks.push(new Perk("Head Trip",1,3,"Leo"));
teenPerks.push(new Perk("Head Trip",2,4,"Leo"));
teenPerks.push(new Perk("Head Trip",3,5,"Leo"));
teenPerks.push(new Perk("Quick Fix",1,4,"Leo"));
teenPerks.push(new Perk("Quick Fix",2,6,"Leo"));
teenPerks.push(new Perk("Quick Fix",3,8,"Leo"));
teenPerks.push(new Perk("Street Smart",1,4,"Leo"));
teenPerks.push(new Perk("Street Smart",2,6,"Leo"));
teenPerks.push(new Perk("Street Smart",3,8,"Leo"));

//add Gloria perks
teenPerks.push(new Perk("Friend Zone",1,4,"Gloria"));
teenPerks.push(new Perk("Friend Zone",2,6,"Gloria"));
teenPerks.push(new Perk("Friend Zone",3,8,"Gloria"));
teenPerks.push(new Perk("Lightning Fast",1,6,"Gloria"));
teenPerks.push(new Perk("Lightning Fast",2,8,"Gloria"));
teenPerks.push(new Perk("Lightning Fast",3,10,"Gloria"));
teenPerks.push(new Perk("Team Spirit",1,6,"Gloria"));
teenPerks.push(new Perk("Team Spirit",2,9,"Gloria"));
teenPerks.push(new Perk("Team Spirit",3,12,"Gloria"));

function onLoad() {
	// alert(teenPerks[0].name);
	populatePerks();
	perk1Change();
}

// adds perk names and tiers to the perk selection table
function populatePerks() {
	var perk1Name = document.getElementById("perk1Name");
	var perk2Name = document.getElementById("perk2Name");
	var perk3Name = document.getElementById("perk3Name");
	var perk4Name = document.getElementById("perk4Name");
	var perk5Name = document.getElementById("perk5Name");
	
	var perk1Tier = document.getElementById("perk1Tier");
	var perk2Tier = document.getElementById("perk2Tier");
	var perk3Tier = document.getElementById("perk3Tier");
	var perk4Tier = document.getElementById("perk4Tier");
	var perk5Tier = document.getElementById("perk5Tier");
	
	// Add perk names to html page
	for(var i=0; i<teenPerks.length; i=i+3) {
		var perk = teenPerks[i];
		
		var el1 = document.createElement("option");
		el1.text = perk.name;
		el1.value = perk.name;
		var el2 = document.createElement("option");
		el2.text = perk.name;
		el2.value = perk.name;
		var el3 = document.createElement("option");
		el3.text = perk.name;
		el3.value = perk.name;
		var el4 = document.createElement("option");
		el4.text = perk.name;
		el4.value = perk.name;
		var el5 = document.createElement("option");
		el5.text = perk.name;
		el5.value = perk.name;
		
		perk1Name.add(el1);
		perk2Name.add(el2);
		perk3Name.add(el3);
		perk4Name.add(el4);
		perk5Name.add(el5);
	}
	
	// Add perk tiers to html page
	for(var i=1; i<4; i++) {
		var roman;
		if(i==1) {
			roman = "I";
		}
		else if (i==2) {
			roman = "II"
		}
		else if (i==3) {
			roman = "III"
		}
		
		var slot1Tier = document.createElement("option");
		slot1Tier.text = "Tier " + roman;
		slot1Tier.value = "Tier " + roman;
		var slot2Tier = document.createElement("option");
		slot2Tier.text = "Tier " + roman;
		slot2Tier.value = "Tier " + roman;
		var slot3Tier = document.createElement("option");
		slot3Tier.text = "Tier " + roman;
		slot3Tier.value = "Tier " + roman;
		var slot4Tier = document.createElement("option");
		slot4Tier.text = "Tier " + roman;
		slot4Tier.value = "Tier " + roman;
		var slot5Tier = document.createElement("option");
		slot5Tier.text = "Tier " + roman;
		slot5Tier.value = "Tier " + roman;
		
		perk1Tier.add(slot1Tier);
		perk2Tier.add(slot2Tier);
		perk3Tier.add(slot3Tier);
		perk4Tier.add(slot4Tier);
		perk5Tier.add(slot5Tier);
	}
}

// calculates perk costs once a new perk/tier is selected
function perk1Change() {
	var perk1Name = document.getElementById("perk1Name").value;
	var perk1Tier = document.getElementById("perk1Tier").value;
	var perk1Cost = 0;
	var slot1Cost = document.getElementById("slot1Cost");

	// convert perk 1's tier
	if(perk1Tier === "Tier I") {
		perk1Tier = 1;
	}
	else if(perk1Tier === "Tier II") {
		perk1Tier = 2;
	}
	else if(perk1Tier === "Tier III") {
		perk1Tier = 3;
	}
	
	// get and assign the object for the slot 1 perk
	if(perk1Name === "--None--") {
		slot1Cost.innerHTML = 0;
	}
	else{
		var perk1 = teenPerks.filter(perk => perk.name === perk1Name);
		perk1 = perk1.filter(perk => perk.tier == perk1Tier);
		perk1 = perk1[0];
		perk1Cost = perk1.cost;
		
		slot1Cost.innerHTML = perk1Cost;
	}
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk costs once a new perk/tier is selected
function perk2Change() {
	var perk2Name = document.getElementById("perk2Name").value;
	var perk2Tier = document.getElementById("perk2Tier").value;
	var perk2Cost = 0;

	// convert perk 2's tier
	if(perk2Tier === "Tier I") {
		perk2Tier = 1;
	}
	else if(perk2Tier === "Tier II") {
		perk2Tier = 2;
	}
	else if(perk2Tier === "Tier III") {
		perk2Tier = 3;
	}
	
	// get and assign the object for the slot 2 perk
	var perk2 = teenPerks.filter(perk => perk.name === perk2Name);
	perk2 = perk2.filter(perk => perk.tier == perk2Tier);
	perk2 = perk2[0];
	perk2Cost = perk2.cost;
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk costs once a new perk/tier is selected
function perk3Change() {
	var perk3Name = document.getElementById("perk3Name").value;
	var perk3Tier = document.getElementById("perk3Tier").value;
	var perk3Cost = 0;

	// convert perk 3's tier
	if(perk3Tier === "Tier I") {
		perk3Tier = 1;
	}
	else if(perk3Tier === "Tier II") {
		perk3Tier = 2;
	}
	else if(perk3Tier === "Tier III") {
		perk3Tier = 3;
	}
	
	// get and assign the object for the slot 3 perk
	var perk3 = teenPerks.filter(perk => perk.name === perk3Name);
	perk3 = perk3.filter(perk => perk.tier == perk3Tier);
	perk3 = perk3[0];
	perk3Cost = perk3.cost;
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk costs once a new perk/tier is selected
function perk4Change() {
	var perk4Name = document.getElementById("perk4Name").value;
	var perk4Tier = document.getElementById("perk4Tier").value;
	var perk4Cost = 0;

	// convert perk 4's tier
	if(perk4Tier === "Tier I") {
		perk4Tier = 1;
	}
	else if(perk4Tier === "Tier II") {
		perk4Tier = 2;
	}
	else if(perk4Tier === "Tier III") {
		perk4Tier = 3;
	}
	
	// get and assign the object for the slot 4 perk
	var perk4 = teenPerks.filter(perk => perk.name === perk4Name);
	perk4 = perk4.filter(perk => perk.tier == perk4Tier);
	perk4 = perk4[0];
	perk4Cost = perk4.cost;
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk costs once a new perk/tier is selected
function perk5Change() {
	var perk5Name = document.getElementById("perk5Name").value;
	var perk5Tier = document.getElementById("perk5Tier").value;
	var perk5Cost = 0;

	// convert perk 5's tier
	if(perk5Tier === "Tier I") {
		perk5Tier = 1;
	}
	else if(perk5Tier === "Tier II") {
		perk5Tier = 2;
	}
	else if(perk5Tier === "Tier III") {
		perk5Tier = 3;
	}
	
	// get and assign the object for the slot 5 perk
	var perk5 = teenPerks.filter(perk => perk.name === perk5Name);
	perk5 = perk5.filter(perk => perk.tier == perk5Tier);
	perk5 = perk5[0];
	perk5Cost = perk5.cost;
	
	// todo: add in function that calculates the optimal teen
}





























