import axios from 'axios'

class youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: key },
    })
  }

  async mostPopularVideo() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    })
    return response.data
  }

  async searchVideo(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    })
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }))
  }
}

export default youtube
