var canvas = document.getElementById('cvs'),
    c = canvas.getContext('2d'),
    ocan = document.createElement("canvas"),
    oc = ocan.getContext('2d');
ocan.width=canvas.width;
ocan.height=canvas.height;
var offx = canvas.offsetLeft;
var offy = canvas.offsetTop;
var lastX = 0,lastY=0;
var active = 0;
// sets the ammount of elements
// var elems = 100;

var boxes = new Array();

// loop and creates 30 random boxes, 70 random circles
// for(var i=1;i<elems;i++){
//   if(i<30){
//   boxes[i]=new uiBox(i,Math.random()*600+50,Math.random()*400+20,Math.random()*200+10,Math.random()*150+10,randomColor());
//   boxes[i].draw();
//   }
//   else {
//   boxes[i]=new uiCircle(i,Math.random()*800+50,Math.random()*400+20,Math.random()*50+5,randomColor());
//   boxes[i].draw();
//   }
// }

$(document).ready(function(){
  $('#cvs').mousemove(function(e){
    var x = e.pageX-offx;
    var y = e.pageY-offy;
    var act = getID(x,y);
    
     var fly = $('#flyover');
    if(act>0){
      fly.css('opacity',1.);
      fly.css('top',e.pageY+5+'px');
      fly.css('left',e.pageX+20+'px');
      fly.text("ID:"+act);
    }
  else $('#flyover').css('opacity',0.);
                        
  });
$('#cvs').mousedown(function(e){
  var x = e.pageX-offx;
  var y = e.pageY-offy;
  active = getID(x,y);
  lastX = x;
  lastY = y;
  if(active>0){
  if (boxes[active].isCorner(x,y)==1){
    $(window).bind("mousemove",function(e){
        var x = e.pageX-offx;
        var y = e.pageY-offy;
      if(active>0){
      if(active<30){
        boxes[active].w += x-lastX;
        if(boxes[active].w<5) boxes[active].w = 5;
        boxes[active].h += y-lastY;
        if(boxes[active].h<5) boxes[active].h = 5;
      }
      else {
        boxes[active].r += x-lastX;
        if(boxes[active].r<5) boxes[active].r = 5;
      }
        lastX = x;
        lastY = y;
        oc.clearRect(0,0,1200,800);
        c.clearRect(0,0,1200,800);
        for(var i=1;i<elems;i++){
          boxes[i].draw();
        }
      }
    });
  }
  else {
        $(window).bind("mousemove",function(e){
        var x = e.pageX-offx;
        var y = e.pageY-offy;
        if(active>0){
          boxes[active].x+=x-lastX;
          boxes[active].y+=y-lastY;
        }
        lastX = x;
        lastY = y;
        oc.clearRect(0,0,1200,800);
        c.clearRect(0,0,1200,800);
        for(var i=1;i<elems;i++){
          boxes[i].draw();
        }
    });
  }
  }
  $(window).bind('mouseup',function() {
      $(this).unbind('mousemove');
      active = 0;
      oc.clearRect(0,0,1200,800);
      c.clearRect(0,0,1200,800);
      for(var i=1;i<elems;i++){
          boxes[i].draw();
      }
  });
});
});

function getID(x,y){
   var p = oc.getImageData(x, y, 1, 1).data;
  //use blue channel as reference to
  //see if it's a fuzzy edge pixel
  if(p[2]==255) return p[0];
  else return 0;
}

function randomColor(){
    var cc = new Array();
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    return "#"+((r << 16) | (g << 8) | b).toString(16);
}


// used to create boxes
// function uiBox(id,x,y,w,h,color){
//   this.x = x;
//   this.y = y;
//   this.w = w;
//   this.h = h;
//   this.color = color;
//   this.id = id;
//   this.draw = function(){
//     c.fillStyle = this.color;
//     oc.fillStyle = 'rgb('+this.id+',0,255)';
//     c.fillRect(this.x,this.y,this.w,this.h);
//     oc.fillRect(this.x,this.y,this.w,this.h);
//   }
//   this.isCorner = function(l,t){
//     var checkx = l > (this.x+this.w-10);
//     var checky = t > (this.y+this.h-10);
//     return (checkx&&checky);
//   }
// }

// used to create circles
// function uiCircle(id,x,y,r,color){
//   this.x = x;
//   this.y = y;
//   this.r = r;
//   this.color = color;
//   this.id = id;
//   this.draw = function(){
//     c.fillStyle = this.color;
//     oc.fillStyle = 'rgb('+this.id+',0,255)';
//     c.beginPath();
//     oc.beginPath();
//     c.arc(this.x,this.y,this.r, 0, 2 * Math.PI, false);
//     oc.arc(this.x,this.y,this.r, 0, 2 * Math.PI, false);
//     c.closePath();
//     oc.closePath();
//     c.fill();
//     oc.fill();
//   }
//   this.isCorner = function(l,t){
//     var checkx = l > (this.x+this.r-10);
//     return (checkx);
//   }
// }