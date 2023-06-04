		function wiki(search){
			let l="https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + search + "&limit=10";
	  	
			const request = new Request(l, {
			method: "GET",mode: 'cors',
		});

		fetch(request)
			.then((response) => {
				if (response.status === 200) {
						
					response.json().then(function(data){
						 html = "";console.log(data);
						for(let i=0;i<data[1].length;i++)
						{
							html += "<a onclick='openM(event,this);return false;' href='" + data[3][i] + "'><span class='badge'>" + data[1][i] + "</span></a>";
						}
						document.getElementById("suggestions").innerHTML=html;
					});
			  }else {
					throw new Error("Something went wrong on API server!");
				}
			})/*
			.then((response) => {
				console.debug(response);
				// …
			})*/
			.catch((error) => {
				console.error(error);
			});
			
			
		}
