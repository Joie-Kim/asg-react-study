export const checkImageUrl = (url: string | undefined) => {
  //   console.log('check image url', url);
  if (url === undefined) return '';

  //   let imgUrl = '';

  const http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  /** 트랜잭셕이 성공적으로 완료됐을 때 이벤트 리스너 */
  //   http.onload = () => {
  //     imgUrl = http.status === 200 ? url : '';
  //   };
  http.send();

  //   return imgUrl;
  return http.status === 200 ? url : '';
};
