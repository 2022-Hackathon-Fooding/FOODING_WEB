// function getLocation(next) {
//   if (navigator.geolocation) {
//     // GPS를 지원하면
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         console.log(position.coords.latitude + ' ' + position.coords.longitude);
//       },
//       function (error) {
//         console.error(error);
//       },
//       {
//         enableHighAccuracy: false,
//         maximumAge: 0,
//         timeout: Infinity,
//       },
//     );
//   } else {
//     alert('GPS를 지원하지 않습니다');
//   }
// }

// function mapUI(next) {
//   var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
//   console.log(lat);
//   var options = {
//     //지도를 생성할 때 필요한 기본 옵션
//     //center: new kakao.maps.LatLng(33.450701, 126.570667), //임시 데이터
//     center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
//     level: 3, //지도의 레벨(확대, 축소 정도)
//   };
//   var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// }
