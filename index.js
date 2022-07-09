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

function onLoad() {
	populatePerkArray();
	populatePerks();
	populateTeenTables();
	checkInputs();
	perk1Change();
	perk2Change();
	perk3Change();
	perk4Change();
	perk5Change();
	
}

function populatePerkArray() {
	//add Jess perks
	teenPerks.push(new Perk("Evil Eye",1,4,"Jess")); //0
	teenPerks.push(new Perk("Evil Eye",2,5,"Jess"));
	teenPerks.push(new Perk("Evil Eye",3,7,"Jess"));
	teenPerks.push(new Perk("Low Profile",1,4,"Jess")); //3
	teenPerks.push(new Perk("Low Profile",2,8,"Jess"));
	teenPerks.push(new Perk("Low Profile",3,12,"Jess"));
	teenPerks.push(new Perk("Silent Shadow",1,3,"Jess")); //6
	teenPerks.push(new Perk("Silent Shadow",2,5,"Jess"));
	teenPerks.push(new Perk("Silent Shadow",3,8,"Jess"));

	//add Faith perks
	teenPerks.push(new Perk("Healing Hands",1,3,"Faith")); //9
	teenPerks.push(new Perk("Healing Hands",2,6,"Faith"));
	teenPerks.push(new Perk("Healing Hands",3,9,"Faith"));
	teenPerks.push(new Perk("Magic Touch",1,3,"Faith")); //12
	teenPerks.push(new Perk("Magic Touch",2,6,"Faith"));
	teenPerks.push(new Perk("Magic Touch",3,9,"Faith"));
	teenPerks.push(new Perk("Secret Admirer",1,4,"Faith")); //15
	teenPerks.push(new Perk("Secret Admirer",2,6,"Faith"));
	teenPerks.push(new Perk("Secret Admirer",3,8,"Faith"));

	//add Brett perks
	teenPerks.push(new Perk("Born Tough",1,4,"Brett")); //18
	teenPerks.push(new Perk("Born Tough",2,8,"Brett"));
	teenPerks.push(new Perk("Born Tough",3,12,"Brett"));
	teenPerks.push(new Perk("Never Say Die",1,3,"Brett")); //21
	teenPerks.push(new Perk("Never Say Die",2,6,"Brett"));
	teenPerks.push(new Perk("Never Say Die",3,9,"Brett"));
	teenPerks.push(new Perk("Vice Grip",1,6,"Brett")); //24
	teenPerks.push(new Perk("Vice Grip",2,8,"Brett"));
	teenPerks.push(new Perk("Vice Grip",3,12,"Brett"));

	//add Leo perks
	teenPerks.push(new Perk("Head Trip",1,3,"Leo")); //27
	teenPerks.push(new Perk("Head Trip",2,4,"Leo"));
	teenPerks.push(new Perk("Head Trip",3,5,"Leo"));
	teenPerks.push(new Perk("Quick Fix",1,4,"Leo")); //30
	teenPerks.push(new Perk("Quick Fix",2,6,"Leo"));
	teenPerks.push(new Perk("Quick Fix",3,8,"Leo"));
	teenPerks.push(new Perk("Street Smart",1,4,"Leo")); //33
	teenPerks.push(new Perk("Street Smart",2,6,"Leo"));
	teenPerks.push(new Perk("Street Smart",3,8,"Leo"));

	//add Gloria perks
	teenPerks.push(new Perk("Friend Zone",1,4,"Gloria")); //36
	teenPerks.push(new Perk("Friend Zone",2,6,"Gloria"));
	teenPerks.push(new Perk("Friend Zone",3,8,"Gloria"));
	teenPerks.push(new Perk("Lightning Fast",1,6,"Gloria")); //39
	teenPerks.push(new Perk("Lightning Fast",2,8,"Gloria"));
	teenPerks.push(new Perk("Lightning Fast",3,10,"Gloria"));
	teenPerks.push(new Perk("Team Spirit",1,6,"Gloria")); //42
	teenPerks.push(new Perk("Team Spirit",2,9,"Gloria"));
	teenPerks.push(new Perk("Team Spirit",3,12,"Gloria"));
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

function populateTeenTables() {
	// set the costs on the teen tables
	// Jess' table
	document.getElementById("evilEye1Cost").innerHTML = teenPerks[0].cost;
	document.getElementById("evilEye2Cost").innerHTML = teenPerks[1].cost;
	document.getElementById("evilEye3Cost").innerHTML = teenPerks[2].cost;
	document.getElementById("lowProfile1Cost").innerHTML = teenPerks[3].cost;
	document.getElementById("lowProfile2Cost").innerHTML = teenPerks[4].cost;
	document.getElementById("lowProfile3Cost").innerHTML = teenPerks[5].cost;
	document.getElementById("silentShadow1Cost").innerHTML = teenPerks[6].cost;
	document.getElementById("silentShadow2Cost").innerHTML = teenPerks[7].cost;
	document.getElementById("silentShadow3Cost").innerHTML = teenPerks[8].cost;

	// Faith's table
	document.getElementById("healingHands1Cost").innerHTML = teenPerks[9].cost;
	document.getElementById("healingHands2Cost").innerHTML = teenPerks[10].cost;
	document.getElementById("healingHands3Cost").innerHTML = teenPerks[11].cost;
	document.getElementById("magicTouch1Cost").innerHTML = teenPerks[12].cost;
	document.getElementById("magicTouch2Cost").innerHTML = teenPerks[13].cost;
	document.getElementById("magicTouch3Cost").innerHTML = teenPerks[14].cost;
	document.getElementById("secretAdmirer1Cost").innerHTML = teenPerks[15].cost;
	document.getElementById("secretAdmirer2Cost").innerHTML = teenPerks[16].cost;
	document.getElementById("secretAdmirer3Cost").innerHTML = teenPerks[17].cost;

	// Brett's table
	document.getElementById("bornTough1Cost").innerHTML = teenPerks[18].cost;
	document.getElementById("bornTough2Cost").innerHTML = teenPerks[19].cost;
	document.getElementById("bornTough3Cost").innerHTML = teenPerks[20].cost;
	document.getElementById("neverSayDie1Cost").innerHTML = teenPerks[21].cost;
	document.getElementById("neverSayDie2Cost").innerHTML = teenPerks[22].cost;
	document.getElementById("neverSayDie3Cost").innerHTML = teenPerks[23].cost;
	document.getElementById("viceGrip1Cost").innerHTML = teenPerks[24].cost;
	document.getElementById("viceGrip2Cost").innerHTML = teenPerks[25].cost;
	document.getElementById("viceGrip3Cost").innerHTML = teenPerks[26].cost;

	// Leo's table
	document.getElementById("headTrip1Cost").innerHTML = teenPerks[27].cost;
	document.getElementById("headTrip2Cost").innerHTML = teenPerks[28].cost;
	document.getElementById("headTrip3Cost").innerHTML = teenPerks[29].cost;
	document.getElementById("quickFix1Cost").innerHTML = teenPerks[30].cost;
	document.getElementById("quickFix2Cost").innerHTML = teenPerks[31].cost;
	document.getElementById("quickFix3Cost").innerHTML = teenPerks[32].cost;
	document.getElementById("streetSmart1Cost").innerHTML = teenPerks[33].cost;
	document.getElementById("streetSmart2Cost").innerHTML = teenPerks[34].cost;
	document.getElementById("streetSmart3Cost").innerHTML = teenPerks[35].cost;

	// Gloria's table
	document.getElementById("friendZone1Cost").innerHTML = teenPerks[36].cost;
	document.getElementById("friendZone2Cost").innerHTML = teenPerks[37].cost;
	document.getElementById("friendZone3Cost").innerHTML = teenPerks[38].cost;
	document.getElementById("lightningFast1Cost").innerHTML = teenPerks[39].cost;
	document.getElementById("lightningFast2Cost").innerHTML = teenPerks[40].cost;
	document.getElementById("lightningFast3Cost").innerHTML = teenPerks[41].cost;
	document.getElementById("teamSpirit1Cost").innerHTML = teenPerks[42].cost;
	document.getElementById("teamSpirit2Cost").innerHTML = teenPerks[43].cost;
	document.getElementById("teamSpirit3Cost").innerHTML = teenPerks[44].cost;
}

// calculates perk costs once a new perk/tier is selected
function perk1Change() {
	var perk1Cost = 0;
	var slot1Cost = document.getElementById("slot1Cost");

	var perk1 = getPerk1();
	
	// get and assign the object for the slot 1 perk
	if(perk1.name === "empty1") {
		slot1Cost.innerHTML = 0;
	}
	else{
		slot1Cost.innerHTML = perk1.cost;
	}
	
	checkDuplicates(); 
	findOptimal();
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk2 costs once a new perk/tier is selected
function perk2Change() {
	var perk2Cost = 0;
	var slot2Cost = document.getElementById("slot2Cost");

	var perk2 = getPerk2();
	
	// get and assign the object for the slot 1 perk
	if(perk2.name === "empty2") {
		slot2Cost.innerHTML = 0;
	}
	else{
		slot2Cost.innerHTML = perk2.cost;
	}
	
	checkDuplicates(); 
	findOptimal();
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk3 costs once a new perk/tier is selected
function perk3Change() {
	var perk3Cost = 0;
	var slot3Cost = document.getElementById("slot3Cost");

	var perk3 = getPerk3();
	
	// get and assign the object for the slot3 perk
	if(perk3.name === "empty3") {
		slot3Cost.innerHTML = 0;
	}
	else{
		slot3Cost.innerHTML = perk3.cost;
	}
	
	checkDuplicates(); 
	findOptimal();
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk costs once a new perk/tier is selected
function perk4Change() {
	var perk4Cost = 0;
	var slot4Cost = document.getElementById("slot4Cost");

	var perk4 = getPerk4();
	
	// get and assign the object for the slot4 perk
	if(perk4.name === "empty4") {
		slot4Cost.innerHTML = 0;
	}
	else{
		slot4Cost.innerHTML = perk4.cost;
	}
	
	checkDuplicates(); 
	findOptimal();
	
	// todo: add in function that calculates the optimal teen
}

// calculates perk costs once a new perk/tier is selected
function perk5Change() {
	var perk5Cost = 0;
	var slot5Cost = document.getElementById("slot5Cost");

	var perk5 = getPerk5();
	
	// get and assign the object for the slot5 perk
	if(perk5.name === "empty5") {
		slot5Cost.innerHTML = 0;
	}
	else{
		slot5Cost.innerHTML = perk5.cost;
	}
	
	checkDuplicates(); 
	findOptimal();
	
	// todo: add in function that calculates the optimal teen
}

// check for duplicate perks
function checkDuplicates() {
	var perkArr = [];
	
	var perk1 = document.getElementById("perk1Name").value;
	if(perk1 === "--None--") {
		perk1 = "default1";
	}
	perkArr.push(perk1);
	
	var perk2 = document.getElementById("perk2Name").value;
	if(perk2 === "--None--") {
		perk2 = "default2";
	}
	perkArr.push(perk2);
	
	var perk3 = document.getElementById("perk3Name").value;
	if(perk3 === "--None--") {
		perk3 = "default3";
	}
	perkArr.push(perk3);
	
	var perk4 = document.getElementById("perk4Name").value;
	if(perk4 === "--None--") {
		perk4 = "default4";
	}
	perkArr.push(perk4);
	
	var perk5 = document.getElementById("perk5Name").value;
	if(perk5 === "--None--") {
		perk5 = "default5";
	}
	perkArr.push(perk5);
	
	var duplicate_bool = perkArr.some(x => perkArr.indexOf(x) !== perkArr.lastIndexOf(x));
	
	let duplicateHeader = document.getElementById("duplicateHeader");
	if(duplicate_bool) {
		duplicateHeader.innerHTML = "Error: Duplicate Perks";
	}
	else {
		duplicateHeader.innerHTML = "No Duplicate Perks ✓";
	}
}

// run optimization on all teens
function findOptimal() {
	checkInputs();
	
	var jess = calcJess();
	var faith = calcFaith();
	var brett = calcBrett();
	var leo = calcLeo();
	var gloria = calcGloria();
	
	var teenArr = []; //push teens who can afford the loadout
	var otherTeenArr = []; //push teens who can't afford the loadout
	
	// run a check to see if the teens can afford the loadout
	if(jess.loadoutCost <= jess.availPoints){
		teenArr.push(jess);
	}
	else{
		otherTeenArr.push(jess);
	}
	if(faith.loadoutCost <= faith.availPoints){
		teenArr.push(faith);
	}
	else{
		otherTeenArr.push(faith);
	}
	if(brett.loadoutCost <= brett.availPoints){
		teenArr.push(brett);
	}
	else{
		otherTeenArr.push(brett);
	}
	if(leo.loadoutCost <= leo.availPoints){
		teenArr.push(leo);
	}
	else{
		otherTeenArr.push(leo);
	}
	if(gloria.loadoutCost <= gloria.availPoints){
		teenArr.push(gloria);
	}
	else{
		otherTeenArr.push(gloria);
	}
	
	// sort the teens according to two conditions
	// 1: can they afford the loadout?
	// 2: smallest loadout cost is the most optimal
	var teenArrSorted = teenArr.sort((a,b) => a.loadoutCost - b.loadoutCost);
	var otherTeenArrSorted = otherTeenArr.sort((a,b) => a.loadoutCost - b.loadoutCost);
	for(i=0; i<otherTeenArrSorted.length; i++){
		teenArrSorted.push(otherTeenArrSorted[i]);
	}
	
	// get IDs from the optimal Teen table
	var optimalTeen = document.getElementById("optimalTeen");
	var optimalTeen_ppUsed = document.getElementById("optimalTeen_ppUsed");
	var optimalTeen_ppLeft = document.getElementById("optimalTeen_ppLeft");
	
	var secondTeen = document.getElementById("secondTeen");
	var secondTeen_ppUsed = document.getElementById("secondTeen_ppUsed");
	var secondTeen_ppLeft = document.getElementById("secondTeen_ppLeft");
	
	var thirdTeen = document.getElementById("thirdTeen");
	var thirdTeen_ppUsed = document.getElementById("thirdTeen_ppUsed");
	var thirdTeen_ppLeft = document.getElementById("thirdTeen_ppLeft");
	
	var fourthTeen = document.getElementById("fourthTeen");
	var fourthTeen_ppUsed = document.getElementById("fourthTeen_ppUsed");
	var fourthTeen_ppLeft = document.getElementById("fourthTeen_ppLeft");
	
	var fifthTeen = document.getElementById("fifthTeen");
	var fifthTeen_ppUsed = document.getElementById("fifthTeen_ppUsed");
	var fifthTeen_ppLeft = document.getElementById("fifthTeen_ppLeft");
	
	// post the values to the optimal Teen table
	optimalTeen.innerHTML = teenArrSorted[0].name;
	optimalTeen_ppUsed.innerHTML = teenArrSorted[0].loadoutCost;
	optimalTeen_ppLeft.innerHTML = teenArrSorted[0].availPoints - teenArrSorted[0].loadoutCost;
	if((teenArrSorted[0].availPoints - teenArrSorted[0].loadoutCost) < 0){
		optimalTeen_ppLeft.style.color = "red";
	}
	else {
		optimalTeen_ppLeft.style.color = "white";
	}
	
	secondTeen.innerHTML = teenArrSorted[1].name;
	secondTeen_ppUsed.innerHTML = teenArrSorted[1].loadoutCost;
	secondTeen_ppLeft.innerHTML = teenArrSorted[1].availPoints - teenArrSorted[1].loadoutCost;
	if((teenArrSorted[1].availPoints - teenArrSorted[1].loadoutCost) < 0){
		secondTeen_ppLeft.style.color = "red";
	}
	else {
		secondTeen_ppLeft.style.color = "white";
	}
	
	thirdTeen.innerHTML = teenArrSorted[2].name;
	thirdTeen_ppUsed.innerHTML = teenArrSorted[2].loadoutCost;
	thirdTeen_ppLeft.innerHTML = teenArrSorted[2].availPoints - teenArrSorted[2].loadoutCost;
	if((teenArrSorted[2].availPoints - teenArrSorted[2].loadoutCost) < 0){
		thirdTeen_ppLeft.style.color = "red";
	}
	else {
		thirdTeen_ppLeft.style.color = "white";
	}
	
	fourthTeen.innerHTML = teenArrSorted[3].name;
	fourthTeen_ppUsed.innerHTML = teenArrSorted[3].loadoutCost;
	fourthTeen_ppLeft.innerHTML = teenArrSorted[3].availPoints - teenArrSorted[3].loadoutCost;
	if((teenArrSorted[3].availPoints - teenArrSorted[3].loadoutCost) < 0){
		fourthTeen_ppLeft.style.color = "red";
	}
	else {
		fourthTeen_ppLeft.style.color = "white";
	}
	
	fifthTeen.innerHTML = teenArrSorted[4].name;
	fifthTeen_ppUsed.innerHTML = teenArrSorted[4].loadoutCost;
	fifthTeen_ppLeft.innerHTML = teenArrSorted[4].availPoints - teenArrSorted[4].loadoutCost;
	if((teenArrSorted[4].availPoints - teenArrSorted[4].loadoutCost) < 0){
		fifthTeen_ppLeft.style.color = "red";
	}
	else {
		fifthTeen_ppLeft.style.color = "white";
	}
}

// calculate Jess' perk loadout
function calcJess() {
	var jessPerkPoints = document.getElementById("jessPerkPointsNum").value;
	var jessDiscount = document.getElementById("jessDiscountNum").value;
	let jessDiscountPerks = [teenPerks[0].name, teenPerks[3].name, teenPerks[6].name];
	var jessDiscountables = 0;
	
	var perk1 = getPerk1();
	var perk2 = getPerk2();
	var perk3 = getPerk3();
	var perk4 = getPerk4();
	var perk5 = getPerk5();
	let perkArr = [perk1, perk2, perk3, perk4, perk5];
	
	// check if the equipped perks can be discounted
	for(i=0; i<5; i++) {
		var currPerk = perkArr[i];
		if(jessDiscountPerks.includes(currPerk.name)) {
			jessDiscountables++;
		}
	}
	jessDiscount = Math.min(jessDiscountables, jessDiscount)*3;
	
	var jessLoadoutCost = perk1.cost + perk2.cost + perk3.cost + perk4.cost + perk5.cost - jessDiscount;
	var jess = {name:"Jess", loadoutCost:jessLoadoutCost, availPoints:jessPerkPoints};
	
	return jess;
}

// calculate Faith's perk loadout
function calcFaith() {
	var faithPerkPoints = document.getElementById("faithPerkPointsNum").value;
	var faithDiscount = document.getElementById("faithDiscountNum").value;
	let faithDiscountPerks = [teenPerks[9].name, teenPerks[12].name, teenPerks[15].name];
	var faithDiscountables = 0;
	
	var perk1 = getPerk1();
	var perk2 = getPerk2();
	var perk3 = getPerk3();
	var perk4 = getPerk4();
	var perk5 = getPerk5();
	let perkArr = [perk1, perk2, perk3, perk4, perk5];
	
	// check if the equipped perks can be discounted
	for(i=0; i<5; i++) {
		var currPerk = perkArr[i];
		if(faithDiscountPerks.includes(currPerk.name)) {
			faithDiscountables++;
		}
	}
	faithDiscount = Math.min(faithDiscountables, faithDiscount)*3;
	
	var faithLoadoutCost = perk1.cost + perk2.cost + perk3.cost + perk4.cost + perk5.cost - faithDiscount;
	var faith = {name:"Faith", loadoutCost:faithLoadoutCost, availPoints:faithPerkPoints};
	
	return faith;
}

// calculate Brett's perk loadout
function calcBrett() {
	var brettPerkPoints = document.getElementById("brettPerkPointsNum").value;
	var brettDiscount = document.getElementById("brettDiscountNum").value;
	let brettDiscountPerks = [teenPerks[18].name, teenPerks[21].name, teenPerks[24].name];
	var brettDiscountables = 0;
	
	var perk1 = getPerk1();
	var perk2 = getPerk2();
	var perk3 = getPerk3();
	var perk4 = getPerk4();
	var perk5 = getPerk5();
	let perkArr = [perk1, perk2, perk3, perk4, perk5];
	
	// check if the equipped perks can be discounted
	for(i=0; i<5; i++) {
		var currPerk = perkArr[i];
		if(brettDiscountPerks.includes(currPerk.name)) {
			brettDiscountables++;
		}
	}
	brettDiscount = Math.min(brettDiscountables, brettDiscount)*3;
	
	var brettLoadoutCost = perk1.cost + perk2.cost + perk3.cost + perk4.cost + perk5.cost - brettDiscount;
	var brett = {name:"Brett", loadoutCost:brettLoadoutCost, availPoints:brettPerkPoints};
	
	return brett;
}

// calculate Leo's perk loadout
function calcLeo() {
	var leoPerkPoints = document.getElementById("leoPerkPointsNum").value;
	var leoDiscount = document.getElementById("leoDiscountNum").value;
	let leoDiscountPerks = [teenPerks[27].name, teenPerks[30].name, teenPerks[33].name];
	var leoDiscountables = 0;
	
	var perk1 = getPerk1();
	var perk2 = getPerk2();
	var perk3 = getPerk3();
	var perk4 = getPerk4();
	var perk5 = getPerk5();
	let perkArr = [perk1, perk2, perk3, perk4, perk5];
	
	// check if the equipped perks can be discounted
	for(i=0; i<5; i++) {
		var currPerk = perkArr[i];
		if(leoDiscountPerks.includes(currPerk.name)) {
			leoDiscountables++;
		}
	}
	leoDiscount = Math.min(leoDiscountables, leoDiscount)*3;
	
	var leoLoadoutCost = perk1.cost + perk2.cost + perk3.cost + perk4.cost + perk5.cost - leoDiscount;
	var leo = {name:"Leo", loadoutCost:leoLoadoutCost, availPoints:leoPerkPoints};
	
	return leo;
}

// calculate Gloria's perk loadout
function calcGloria() {
	var gloriaPerkPoints = document.getElementById("gloriaPerkPointsNum").value;
	var gloriaDiscount = document.getElementById("gloriaDiscountNum").value;
	let gloriaDiscountPerks = [teenPerks[36].name, teenPerks[39].name, teenPerks[42].name];
	var gloriaDiscountables = 0;
	
	var perk1 = getPerk1();
	var perk2 = getPerk2();
	var perk3 = getPerk3();
	var perk4 = getPerk4();
	var perk5 = getPerk5();
	let perkArr = [perk1, perk2, perk3, perk4, perk5];
	
	// check if the equipped perks can be discounted
	for(i=0; i<5; i++) {
		var currPerk = perkArr[i];
		if(gloriaDiscountPerks.includes(currPerk.name)) {
			gloriaDiscountables++;
		}
	}
	gloriaDiscount = Math.min(gloriaDiscountables, gloriaDiscount)*3;
	
	var gloriaLoadoutCost = perk1.cost + perk2.cost + perk3.cost + perk4.cost + perk5.cost - gloriaDiscount;
	var gloria = {name:"Gloria", loadoutCost:gloriaLoadoutCost, availPoints:gloriaPerkPoints};
	
	return gloria;
}

// get perk1 (object with attributes for name, tier, costs, and Teen)
function getPerk1() {
	var perk1Name = document.getElementById("perk1Name").value;
	var perk1Tier = document.getElementById("perk1Tier").value;
	
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
	
	var perk1;
	if(perk1Name === "--None--"){
		let emptyPerk = new Perk("empty1", 1, 0, "none");
		return emptyPerk;
	}
	else {
		perk1 = teenPerks.filter(perk => perk.name === perk1Name);
		perk1 = perk1.filter(perk => perk.tier == perk1Tier);
		// console.log(perk1);
		perk1 = perk1[0];
		
		return perk1;
	}
}

// get perk2 (object with attributes for name, tier, costs, and Teen)
function getPerk2() {
	var perk2Name = document.getElementById("perk2Name").value;
	var perk2Tier = document.getElementById("perk2Tier").value;
	
	// convert perk 1's tier
	if(perk2Tier === "Tier I") {
		perk2Tier = 1;
	}
	else if(perk2Tier === "Tier II") {
		perk2Tier = 2;
	}
	else if(perk2Tier === "Tier III") {
		perk2Tier = 3;
	}
	
	var perk2;
	if(perk2Name === "--None--"){
		let emptyPerk = new Perk("empty2", 1, 0, "none");
		return emptyPerk;
	}
	else {
		perk2 = teenPerks.filter(perk => perk.name === perk2Name);
		perk2 = perk2.filter(perk => perk.tier == perk2Tier);
		// console.log(perk2);
		perk2 = perk2[0];
		
		return perk2;
	}
}

// get perk3 (object with attributes for name, tier, costs, and Teen)
function getPerk3() {
	var perk3Name = document.getElementById("perk3Name").value;
	var perk3Tier = document.getElementById("perk3Tier").value;
	
	// convert perk 1's tier
	if(perk3Tier === "Tier I") {
		perk3Tier = 1;
	}
	else if(perk3Tier === "Tier II") {
		perk3Tier = 2;
	}
	else if(perk3Tier === "Tier III") {
		perk3Tier = 3;
	}
	
	var perk3;
	if(perk3Name === "--None--"){
		let emptyPerk = new Perk("empty3", 1, 0, "none");
		return emptyPerk;
	}
	else {
		perk3 = teenPerks.filter(perk => perk.name === perk3Name);
		perk3 = perk3.filter(perk => perk.tier == perk3Tier);
		// console.log(perk3);
		perk3 = perk3[0];
		
		return perk3;
	}
}

// get perk4 (object with attributes for name, tier, costs, and Teen)
function getPerk4() {
	var perk4Name = document.getElementById("perk4Name").value;
	var perk4Tier = document.getElementById("perk4Tier").value;
	
	// convert perk 1's tier
	if(perk4Tier === "Tier I") {
		perk4Tier = 1;
	}
	else if(perk4Tier === "Tier II") {
		perk4Tier = 2;
	}
	else if(perk4Tier === "Tier III") {
		perk4Tier = 3;
	}
	
	var perk4;
	if(perk4Name === "--None--"){
		let emptyPerk = new Perk("empty4", 1, 0, "none");
		return emptyPerk;
	}
	else {
		perk4 = teenPerks.filter(perk => perk.name === perk4Name);
		perk4 = perk4.filter(perk => perk.tier == perk4Tier);
		// console.log(perk4);
		perk4 = perk4[0];
		
		return perk4;
	}
}

// get perk5 (object with attributes for name, tier, costs, and Teen)
function getPerk5() {
	var perk5Name = document.getElementById("perk5Name").value;
	var perk5Tier = document.getElementById("perk5Tier").value;
	
	// convert perk 1's tier
	if(perk5Tier === "Tier I") {
		perk5Tier = 1;
	}
	else if(perk5Tier === "Tier II") {
		perk5Tier = 2;
	}
	else if(perk5Tier === "Tier III") {
		perk5Tier = 3;
	}
	
	var perk5;
	if(perk5Name === "--None--"){
		let emptyPerk = new Perk("empty5", 1, 0, "none");
		return emptyPerk;
	}
	else {
		perk5 = teenPerks.filter(perk => perk.name === perk5Name);
		perk5 = perk5.filter(perk => perk.tier == perk5Tier);
		// console.log(perk5);
		perk5 = perk5[0];
		
		return perk5;
	}
}

function checkInputs() {
	var jessPerkPoints = document.getElementById("jessPerkPointsNum");
	var jessDiscount = document.getElementById("jessDiscountNum");
	
	var faithPerkPoints = document.getElementById("faithPerkPointsNum");
	var faithDiscount = document.getElementById("faithDiscountNum");
	
	var brettPerkPoints = document.getElementById("brettPerkPointsNum");
	var brettDiscount = document.getElementById("brettDiscountNum");
	
	var leoPerkPoints = document.getElementById("leoPerkPointsNum");
	var leoDiscount = document.getElementById("leoDiscountNum");
	
	var gloriaPerkPoints = document.getElementById("gloriaPerkPointsNum");
	var gloriaDiscount = document.getElementById("gloriaDiscountNum");
	
	// check Jess
	if(jessPerkPoints.value > 30){
		jessPerkPoints.value = 30;
	}
	else if(jessPerkPoints.value < 4){
		jessPerkPoints.value = 4;
	}
	if(jessDiscount.value > 3){
		jessDiscount.value = 3;
	}
	else if(jessDiscount.value < 0){
		jessDiscount.value = 0;
	}
	
	// check Faith
	if(faithPerkPoints.value > 30){
		faithPerkPoints.value = 30;
	}
	else if(faithPerkPoints.value < 4){
		faithPerkPoints.value = 4;
	}
	if(faithDiscount.value > 3){
		faithDiscount.value = 3;
	}
	else if(faithDiscount.value < 0){
		faithDiscount.value = 0;
	}
	
	// check Brett
	if(brettPerkPoints.value > 30){
		brettPerkPoints.value = 30;
	}
	else if(brettPerkPoints.value < 4){
		brettPerkPoints.value = 4;
	}
	if(brettDiscount.value > 3){
		brettDiscount.value = 3;
	}
	else if(brettDiscount.value < 0){
		brettDiscount.value = 0;
	}
	
	// check Leo
	if(leoPerkPoints.value > 30){
		leoPerkPoints.innerHTML = 30;
	}
	else if(leoPerkPoints.value < 4){
		leoPerkPoints.innerHTML = 4;
	}
	if(leoDiscount.value > 3){
		leoDiscount.innerHTML = 3;
	}
	else if(leoDiscount.value < 0){
		leoDiscount.innerHTML = 0;
	}
	
	// check Gloria
	if(gloriaPerkPoints.value > 30){
		gloriaPerkPoints.innerHTML = 30;
	}
	else if(gloriaPerkPoints.value < 4){
		gloriaPerkPoints.innerHTML = 4;
	}
	if(gloriaDiscount.value > 3){
		gloriaDiscount.innerHTML = 3;
	}
	else if(gloriaDiscount.value < 0){
		gloriaDiscount.innerHTML = 0;
	}
}




















