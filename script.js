var xhr = new XMLHttpRequest();
//to define method and url
var method = "GET";
var url = "https://restcountries.com/v3.1/all";
//open the request
xhr.open(method,url);
xhr.onload = function(){
    if(xhr.status === 200)
    {
        console.log(xhr.responsetext);
    
    var countriesDetail = JSON.parse(xhr.responseText);
    for ( i = 0; i< countriesDetail.length; i++)
    {
        console.log(countriesDetail[i].flags);
		
    }
	}
    else
    {
        console.log("request failed",xhr.status);
    }
}
xhr.send();