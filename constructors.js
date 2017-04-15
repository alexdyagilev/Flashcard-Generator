
function BasicCard(front, back){
    this.front = front,
    this.back = back
}

function ClozeCard(text, cloze){
	this.text = text,
	this.cloze = cloze,
	this.showCloze = function(){
		if(text.includes(cloze)){
			console.log("Cloze text: " + cloze);
			return cloze;
		}
		else{
			console.log("Error: Cloze is not part of full text");
		}
	};
	this.showPartial = function(){
		if(text.includes(cloze)){
			var partial = text.replace(cloze, " ... ");
			console.log("Partial text: " + partial);
			return partial;
		}
		else {
			console.log("Error: Cloze is not part of full text");
		}

	};
	this.showFull = function(){
		if(text.includes(cloze)){
			console.log("Full text: " + text);
			return text;
		}
		else {
			console.log("Error: Cloze is not part of full text");
		}
	};
}
