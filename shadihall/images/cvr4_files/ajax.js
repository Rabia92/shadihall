
var xmlHttp;

function ab()
{ 

xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="ajaxsendab.php";



xmlHttp.open("GET",url,true);
xmlHttp.onreadystatechange=function(){
if (xmlHttp.readyState==4)
	{ 
		
		
		
	}
}

xmlHttp.send(null);
}


function wallpaper_view(id)
{ 

xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="ajaxsendview.php";
url=url+"?id="+id;


xmlHttp.open("GET",url,true);
xmlHttp.onreadystatechange=function(){
if (xmlHttp.readyState==4)
	{ 
		
		
		
	}
}

xmlHttp.send(null);
}

function getcategories(id, x)
{ 

xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="ajaxgetcategories.php";
url=url+"?id="+id;
url=url+"&x="+x;

xmlHttp.open("GET",url,true);
xmlHttp.onreadystatechange=function(){
if (xmlHttp.readyState==4)
	{ 
		document.getElementById("IEsux"+x).innerHTML=xmlHttp.responseText;
		
		
	}
}

xmlHttp.send(null);
}

function getcategories2(id, x)
{ 

xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="ajaxgetcategories2.php";
url=url+"?id="+id;
url=url+"&x="+x;

xmlHttp.open("GET",url,true);
xmlHttp.onreadystatechange=function(){
if (xmlHttp.readyState==4)
	{ 
		document.getElementById("IEsux"+x).innerHTML=xmlHttp.responseText;
		
		
	}
}

xmlHttp.send(null);
}

function getpassword(id)
{ 

xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="ajaxgetpassword.php";
url=url+"?id="+id;


xmlHttp.open("GET",url,true);

xmlHttp.onreadystatechange=function(){
	
if (xmlHttp.readyState==4)
	{ 
		document.getElementById("pw").innerHTML=xmlHttp.responseText;
		//document.getElementById("pw").innerHTML="doh2";
		
	}
}
xmlHttp.send(null);
}


function vote(vote, picture_id, picture_user_id)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="postrating.php";
var params="vote="+vote+"&picture_id="+picture_id+"&picture_user_id="+picture_user_id;

xmlHttp.onreadystatechange=stateChanged;
xmlHttp.open("POST",url,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
xmlHttp.send(params);
}

function stateChanged() 
{ 
	if (xmlHttp.readyState==4)
	{ 
		document.getElementById("star_rating").innerHTML=xmlHttp.responseText;
		document.getElementById("vote_form").innerHTML='<span class="fontSmall">Thank you for your vote</span>';
	}
}


function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}
