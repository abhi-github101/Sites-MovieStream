    var more=0;
function loadCarousel(){
var carousel_content='';
for(var a=0;a<5;a++){//for three carousel items
switch(a){
case 0: carousel_content+='<div class="carousel-item active" align="center" style="background-color:transparent"><div class="row">';
break;
case 1: carousel_content+='<div class="carousel-item" align="center" style="background-color:transparent"><div class="row">';
break;
case 2: carousel_content+='<div class="carousel-item" align="center" style="background-color:transparent"><div class="row">';
break;
case 3: carousel_content+='<div class="carousel-item" align="center" style="background-color:transparent"><div class="row">';
break;
case 4: carousel_content+='<div class="carousel-item" align="center" style="background-color:transparent"><div class="row">';
break;
}
var invar=(a+1)*5;//loop invariant
for(var i=a*5;i<invar;i++){
for(var j=0;j<movieContent.length;j++){
if(movieContent[j].mid==latestMovies[i]){
var c=i%5;
switch(c){
case 3:
carousel_content+='<div class="carousel-lend-poster" style=""><img width="280px" height="410px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 1:
carousel_content+='<div class="carousel-lside-poster" style=""><img width="300px" height="430px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 0:
carousel_content+='<div class="carousel-center-poster" style=""><img width="320px" height="450px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 2:
carousel_content+='<div class="carousel-rside-poster" style=""><img width="300px" height="430px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 4:
carousel_content+='<div class="carousel-rend-poster" style=""><img width="280px" height="410px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
}
}
}
}
carousel_content+='</div></div>';
}
document.getElementById("carousel-holder").innerHTML=carousel_content;

var container_content='<div class="jumbotron p-3 p-md-5 text-white rounded" style="background:url(resources/blue-abs.jpg);margin-bottom:30px"><div class="col-md-6 px-0"><h1 class="display-4 font-italic">HOLLYWOOD MOVIE PREMIERS</h1><p class="lead my-3">Action, Adventure, Sci-Fi, Crime...</p><p class="lead mb-0"><a href="#container" class="text-white font-weight-bold">WATCH NOW...</a></p></div></div>';
container_content+=loadContent();
container_content+='<nav id="blog-pag" class="blog-pagination" align="center"><a id="pag-btn" class="btn pag-btn" onclick="loadMore()">Load More</a></nav>';
		       
document.getElementById("container").innerHTML=container_content;

$(function(){$('[data-toggle="popover"]').popover();});
$('.popover-dismiss').popover({
  trigger: 'focus'
})
}

function loadMore(){
var container_content=loadContent();
if(20*more<=movieContent.length){
container_content+='<nav id="blog-pag" class="blog-pagination" align="center"><a id="pag-btn" class="btn" onclick="loadMore()">Load More</a></nav>';
}
		       
$("#blog-pag").replaceWith(container_content);
}

function loadContent(){
var container_content='';
var invar=(more+1)*20;
for(var i=20*more;i<invar&&i<movieContent.length;i++){
if(i%2==0){
container_content+='<div class="row mb-2">';
}
for(var j=0;j<movieContent.length;j++){
if(movieContent[j].mid==latestMovies[i]){
container_content+='<div class="col-md-6"><div class="card flex-md-row mb-4 box-shadow h-md-280"><div class="card-body d-flex flex-column align-items-start"><strong class="d-inline-block mb-2 text-primary">'+movieContent[j].genre+'</strong><h3 class="mb-0"><a class="text-dark" href="">'+movieContent[j].title+'</a></h3><div class="mb-1 text-muted">'+movieContent[j].year+' | IMDB: ';
                if(movieContent[j].imdb>=6.5){
                    container_content+='<strong class="text-success">'+movieContent[j].imdb+'</strong></div>';
                }else if(movieContent[j].imdb<5){
                    container_content+='<strong class="text-danger">'+movieContent[j].imdb+'</strong></div>';
                }else{
                    container_content+='<strong class="text-muted">'+movieContent[j].imdb+'</strong></div>';
                }
       if(movieContent[j].rated=="R"){
           container_content+='<div class="mb-1 text-danger">'+movieContent[j].rated+'</div>';
       }else if(movieContent[j].rated=="M"){
           container_content+='<div class="mb-1 text-warning">'+movieContent[j].rated+'</div>';
       }else if(movieContent[j].rated=="PG-13"||movieContent[j].rated=="PG"||movieContent[j].rated=="G"){
           container_content+='<div class="mb-1 text-info">'+movieContent[j].rated+'</div>';
       }
        container_content+='<p class="card-text mb-auto"><b class="text-secondary">Cast:</b> '+movieContent[j].cast+'</p></div><img class="card-img-right flex-auto d-none d-md-block" style="width: 200px; height: 280px;" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-holder-rendered="true"></div></div>';
}
}
if((i+1)>movieContent.length){
container_content+='</div>';
}else if(i%2!=0){
container_content+='</div>';
}
}

more++;
return container_content;
}

function loadGenre(genre){
    //console.log(genre);
    more=0;
    $(".navbar-nav li").removeClass("active");
    $("#nav-"+genre.toLowerCase()).addClass("active");
    var index=0;
    for(var x=0;x<genreMovies.length;x++){
        if(genreMovies[x].genre.toUpperCase()==genre){
        index=x;
        break;
        }
    }

  var carousel_content='';
if(genre!="SPORT"&&genre!="WESTERN"){
  for(var a=0;a<3;a++){//for three carousel items
switch(a){
case 0: carousel_content+='<div class="carousel-item active" align="center" style="background-color:transparent"><div class="row">';
break;
case 1: carousel_content+='<div class="carousel-item" align="center" style="background-color:transparent"><div class="row">';
break;
case 2: carousel_content+='<div class="carousel-item" align="center" style="background-color:transparent"><div class="row">';
break;
}
var invar=(a+1)*5;//loop invariant
for(var i=a*5;i<invar;i++){
for(var j=0;j<movieContent.length;j++){
if(movieContent[j].mid==genreMovies[index].mids[i]){
var c=i%5;
switch(c){
case 3:
carousel_content+='<div class="carousel-lend-poster" style=""><img width="280px" height="410px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 1:
carousel_content+='<div class="carousel-lside-poster" style=""><img width="300px" height="430px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 0:
carousel_content+='<div class="carousel-center-poster" style=""><img width="320px" height="450px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 2:
carousel_content+='<div class="carousel-rside-poster" style=""><img width="300px" height="430px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
case 4:
carousel_content+='<div class="carousel-rend-poster" style=""><img width="280px" height="410px" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="'+movieContent[j].title+' ('+movieContent[j].year+')"></div>';
break;
}
}
}
}
carousel_content+='</div></div>';
}
}
document.getElementById("carousel-holder").innerHTML=carousel_content;
var jumboGenreTitle='';
var jumboGenreContent='';
var jumboGenreLink='WATCH';
switch(genre){
case "ACTION": 
        jumboGenreTitle=genre+' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "ADVENTURE":
        jumboGenreTitle=genre+' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "ANIMATION":
        jumboGenreTitle=genre+' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "BIOGRAPHY":
        jumboGenreTitle=genre+' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "COMEDY":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "CRIME":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "DRAMA":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "FAMILY":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "FANTASY":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "HISTORY":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "HORROR":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "MYSTERY":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "MUSIC":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "ROMANCE":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "THRILLER":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "SCI-FI":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "SPORT":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;
case "WESTERN":
        jumboGenreTitle=genre+ ' MOVIES';
        jumboGenreContent='';
        jumboGenreLink='WATCH';
    break;    
}
var container_content='<div class="jumbotron p-3 p-md-5 text-white rounded" style="background:url(resources/blue-abs.jpg);margin-bottom:30px"><div class="col-md-6 px-0"><h1 class="display-4 font-italic">'+jumboGenreTitle+'</h1><p class="lead my-3">'+jumboGenreContent+'</p><p class="lead mb-0"><a href="#container" class="text-white font-weight-bold">'+jumboGenreLink+'</a></p></div></div>';

container_content+=loadGenreContent(genre);

        if(20*more<=genreMovies[index].mids.length){
container_content+='<nav id="blog-pag" class="blog-pagination" align="center"><a id="pag-btn" class="btn pag-btn" onclick="loadGenreMore(\''+genre+'\')">Load More</a></nav>';
}		       
document.getElementById("container").innerHTML=container_content;
  
}

function loadGenreMore(genre){
var index=0;
for(var x=0;x<genreMovies.length;x++){
        if(genreMovies[x].genre.toUpperCase()==genre){
        index=x;
        break;
    }
}
var container_content=loadGenreContent(genre);
if(20*more<=genreMovies[index].mids.length){
container_content+='<nav id="blog-pag" class="blog-pagination" align="center"><a id="pag-btn" class="btn" onclick="loadGenreMore(\''+genre+'\')">Load More</a></nav>';
}
		       
$("#blog-pag").replaceWith(container_content);
 
}

function loadGenreContent(genre){
var index=0;
for(var x=0;x<genreMovies.length;x++){
        if(genreMovies[x].genre.toUpperCase()==genre){
        index=x;
        break;
    }
}
var container_content='';
var invar=(more+1)*20;
for(var i=20*more;i<invar&&i<genreMovies[index].mids.length;i++){
if(i%2==0){
container_content+='<div class="row mb-2">';
}

for(var j=0;j<movieContent.length;j++){
if(movieContent[j].mid==genreMovies[index].mids[i]){
container_content+='<div class="col-md-6"><div class="card flex-md-row mb-4 box-shadow h-md-280"><div class="card-body d-flex flex-column align-items-start"><strong class="d-inline-block mb-2 text-primary">'+movieContent[j].genre+'</strong><h3 class="mb-0"><a class="text-dark" href="">'+movieContent[j].title+'</a></h3><div class="mb-1 text-muted">'+movieContent[j].year+' | IMDB: ';
                if(movieContent[j].imdb>=6.5){
                    container_content+='<strong class="text-success">'+movieContent[j].imdb+'</strong></div>';
                }else if(movieContent[j].imdb<5){
                    container_content+='<strong class="text-danger">'+movieContent[j].imdb+'</strong></div>';
                }else{
                    container_content+='<strong class="text-muted">'+movieContent[j].imdb+'</strong></div>';
                }
       if(movieContent[j].rated=="R"){
           container_content+='<div class="mb-1 text-danger">'+movieContent[j].rated+'</div>';
       }else if(movieContent[j].rated=="M"){
           container_content+='<div class="mb-1 text-warning">'+movieContent[j].rated+'</div>';
       }else if(movieContent[j].rated=="PG-13"||movieContent[j].rated=="PG"||movieContent[j].rated=="G"){
           container_content+='<div class="mb-1 text-info">'+movieContent[j].rated+'</div>';
       }
        container_content+='<p class="card-text mb-auto"><b class="text-secondary">Cast:</b> '+movieContent[j].cast+'</p></div><img class="card-img-right flex-auto d-none d-md-block" style="width: 200px; height: 280px;" src="../../Pictures/Movies Poster/'+movieContent[j].title+' ('+movieContent[j].year+').jpg" data-holder-rendered="true"></div></div>';
}
}
if((i+1)>genreMovies[index].mids.length){
container_content+='</div>';
}else if(i%2!=0){
container_content+='</div>';
}
}

more++;
return container_content;
 
}
