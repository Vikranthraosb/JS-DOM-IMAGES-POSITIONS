
function breakingbad(){
var bx1=document.querySelector("#box1")
var img1= document.querySelector("#box1 img")
 
bx1.addEventListener("mousemove", function(dets){
img1.style.left=dets.x +"px"
img1.style.top=dets.y +"px"
})
bx1.addEventListener("mouseenter", function(dets){
    img1.style.opacity=0.8
})
bx1.addEventListener("mouseleave", function(dets){
    img1.style.opacity=0
})
}
breakingbad();
function bcs(){
    var bx2=document.querySelector("#box2")
    var img2= document.querySelector("#box2 img")
    
    bx2.addEventListener("mousemove", function(dets){
        img2.style.left = dets.clientX - bx2.offsetLeft + "px";
        img2.style.top = dets.clientY - bx2.offsetTop + "px";
    })
    bx2.addEventListener("mouseenter", function(){
        img2.style.opacity=0.8
       

    })
    bx2.addEventListener("mouseleave", function(){
        img2.style.opacity=0
    })
}
bcs();
function fightclub(){
    function fightclub() {
        var bx3 = document.querySelector("#box3");
        var img3 = document.querySelector("#box3 img");
    
        bx3.addEventListener("mousemove", function (dets) {
            // Update the image position to follow the mouse pointer
            img3.style.left = dets.clientX - bx3.offsetLeft + "px";
            img3.style.top = dets.clientY - bx3.offsetTop + "px";
        });
    
        bx3.addEventListener("mouseenter", function () {
            img3.style.opacity = 0.8;
        });
    
        bx3.addEventListener("mouseleave", function () {
            img3.style.opacity = 0; // Keep the image visible
        });
    }
    
    fightclub();
    

}
fightclub();
function got(){
var bx4=document.querySelector("#box4")
var img4= document.querySelector("#box4 img")

bx4.addEventListener("mousemove", function(dets){
    img4.style.left = dets.clientX - bx4.offsetLeft + "px";
    img4.style.top = dets.clientY - bx4.offsetTop + "px";
})
bx4.addEventListener("mouseenter", function(dets){
    img4.style.opacity=0.8
})
bx4.addEventListener("mouseleave", function(dets){
    img4.style.opacity=0
})
        

}
got()
function hotd(){
var bx5=document.querySelector("#box5")
var img5= document.querySelector("#box5 img")
    
bx5.addEventListener("mousemove", function(dets){
    img5.style.left = dets.clientX - bx5.offsetLeft + "px";
    img5.style.top = dets.clientY - bx5.offsetTop + "px";
    })
    bx5.addEventListener("mouseenter", function(dets){
        img5.style.opacity=0.8
    })
    bx5.addEventListener("mouseleave", function(dets){
        img5.style.opacity=0
    })

}
hotd();

// we can do all at once by for each loop ( refer the video )
