class youtube {
  constructor(key) {
    this.key = key
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
  }

  // 가장 인기있는 비디오들을 받아옵니다.
  async mostPopularVideo() {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
        this.requestOptions
      )
      const result_1 = await response.json()
      return result_1.items
    } catch (error) {
      return console.log('error', error)
    }
  }

  // 비디오 찾기 기능
  async searchVideo(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=vidoe&key=${this.key}`,
      this.requestOptions
    )
    const result_1 = await response.json()
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }))
    // item을 받아와서 id를 덮어줍니다.
  }
}

export default youtube
