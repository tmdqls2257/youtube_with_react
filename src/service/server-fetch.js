class youtube {
  constructor(key){
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopularVideo(){
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOptions);
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async searchVideo(query){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=vidoe&key=${this.key}`, this.requestOptions);
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
      // item을 받아와서 id를 덮어줍니다.
  }
}

export default youtube;