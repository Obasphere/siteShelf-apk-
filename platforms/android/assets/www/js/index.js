let shelf = document.getElementById("shelf")

function addPage(){
	
	if ((shelf.children).length == 12){
		return;
	};
	
	let title_value = document.getElementById("title").value;
	let title = document.createElement("h3");
	title.innerHTML = title_value;
	
	let newpage = document.createElement("div");
	let size = document.getElementById("size").value;
	let color = document.getElementById("color").value;
	
	newpage.setAttribute("class", "page " + size + " " + color);
	
	let link = document.createElement("a");
	let link_value = document.getElementById("url").value;
	link.target = "_blank"
	link.href = link_value;
	
	newpage.appendChild(title)
	link.appendChild(newpage);
	
	shelf.appendChild(link);
	
}

function removePage(){
	shelf.removeChild(shelf.lastChild);
}