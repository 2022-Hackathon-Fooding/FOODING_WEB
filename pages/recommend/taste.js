function random_show_spicy() {
  var random;
  var src_img =["https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/spicy1.jpg?alt=media&token=234ef7e6-b7ba-4912-a0b5-15804f7641b3",
              "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/spicy2.jpg?alt=media&token=ae039f2f-cb71-4b82-8c76-8dd6744b2799",
              "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/spicy3.jpg?alt=media&token=391f1ab8-bcc5-476d-96e0-835f29661a8c"]
  var src_name=["회덮밥","라면","떡볶이"];
  
  var random = Math.floor(Math.random()*3);
  document.getElementById("food_img1").src=src_img[random];
  document.getElementById("food_name1").innerHTML = src_name[random];
  random = Math.floor(Math.random()*3);
  document.getElementById("food_img2").src=src_img[random];
  document.getElementById("food_name2").innerHTML = src_name[random];
  random = Math.floor(Math.random()*3);
  document.getElementById("food_img3").src=src_img[random];
  document.getElementById("food_name3").innerHTML = src_name[random];
  console.log(random)
}
function random_show_savory() {
  var random;
  var src_img =["https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/savory1.jpg?alt=media&token=7e4ba19e-f64c-486a-89f8-1eed64e6482d",
              "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/savory2.jpg?alt=media&token=65947fea-16dc-4466-aae3-942f3b4896c7",
              "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/savory3.jpg?alt=media&token=ca221f08-f3a3-40df-a904-b4e4fe17eb65",
             "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/savory4.jpg?alt=media&token=403dc06e-4f44-4292-a481-739ab86ceff4",
                "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/savory5.jpg?alt=media&token=147029ae-cc63-441e-8f69-ade77647a14b"]
  var src_name=["칼국수","돼지고기","감자탕","냉면","피자"];
  
  var random = Math.floor(Math.random()*5);
  document.getElementById("food_img1").src=src_img[random];
  document.getElementById("food_name1").innerHTML = src_name[random];
  random = Math.floor(Math.random()*5);
  document.getElementById("food_img2").src=src_img[random];
  document.getElementById("food_name2").innerHTML = src_name[random];
  random = Math.floor(Math.random()*5);
  document.getElementById("food_img3").src=src_img[random];
  document.getElementById("food_name3").innerHTML = src_name[random];
  console.log(random)
}
function random_show_sweet() {
  var random;
  var src_img =["https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/sweet1.jpg?alt=media&token=1898793c-ccc2-451e-ae10-6f42a2b02450",
              "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/sweet2.jpg?alt=media&token=ad158ea6-d339-4240-869d-9d1086e61a48",
              "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/sweet3.jpg?alt=media&token=687704c8-c3ec-44e2-997a-31f73b74df52",
             "https://firebasestorage.googleapis.com/v0/b/hekaton-be17b.appspot.com/o/sweet4.jpg?alt=media&token=eddb4426-74bf-4c84-9505-35bf5ad0b0ef"
                ]
  var src_name=["녹차빙수","초코음료","초코케이크","망고빙수",];
  
  var random = Math.floor(Math.random()*4);
  document.getElementById("food_img1").src=src_img[random];
  document.getElementById("food_name1").innerHTML = src_name[random];
  random = Math.floor(Math.random()*4);
  document.getElementById("food_img2").src=src_img[random];
  document.getElementById("food_name2").innerHTML = src_name[random];
  random = Math.floor(Math.random()*4);
  document.getElementById("food_img3").src=src_img[random];
  document.getElementById("food_name3").innerHTML = src_name[random];
  console.log(random)
}