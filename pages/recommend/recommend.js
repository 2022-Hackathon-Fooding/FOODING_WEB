function array_change(radio) {
  var array_str="";
  var array=[];
  radio.forEach(node=>{
    if(node.checked) {
      for(var i = 0; i < radio.length; i++) {
        if(i!=parseInt(node.value)-1){
          array_str+="0";
          } else {
            array_str+="1";
          }
          }
      }
  })
  array=array_str.split("")
  return array;
}
function array_change1(radio) {
  var array_str="";
  var array=[];
  radio.forEach(node=>{
    if(node.checked) {
      for(var i = 0; i < radio.length; i++) {
        if(i!=parseInt(node.value)-1){
          array.push(0);
          } else {
          array.push(1);
          }
        }
    }
  })
  return array;
}
function result() {
  var radio=[];
  var name_list=["age","sex","time","feeling","weather"];
  // 각 radio 태그의 이름 속성값 접근
  for(var i = 0; i<5; i++) {
    radio[i]=document.getElementsByName(name_list[i]);
  }
  var result_array=[];
  // 각 radio 선택에 따라 Array가 출력. 출력된 4개의 array concat으로 하나의 array 만들기
  result_array = array_change1(radio[0]).concat(array_change1(radio[1]),array_change1(radio[2]),
                                              array_change1(radio[3]),array_change1(radio[4]))
  //tensor로 변환
  tensor_array=tf.tensor(result_array)
  const Model_path = "./tensorflowjs/model.json";
  //모델 만들기
  const model = tf.loadLayersModel(Model_path);
  //배열 형태 변경
  t1 = tf.reshape(tensor_array,[1,-1]);
  //학습
  tf.loadLayersModel(Model_path).then(function(model) {
    prediction = model.predict(t1);
    prediction.array().then(array => {
      var max = array[0][0];
      var cnt = 0;
      var taste=['달콤한 맛','매콤한 맛','짭짤한 맛'];
      for(var i=1;i<3;i++) {
        if(max<array[0][i]) {
        max=array[0][i];
        cnt=i;
      }    
    }
    console.log(`cnt : ${cnt}, max : ${max}`);
    var str = `${taste[cnt]} [${max}]`;
    // document.getElementById("result").innerHTML = str;
    alert(str+"\n"+"[마라탕, 떡볶이, 짬뽕, 매운탕, 닭발, 쭈꾸미, 라면, 불닭 볶음면, 김치 만두, 쫄면, 제육 볶음]");
    })
  })
}