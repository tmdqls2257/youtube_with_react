# 🛠️ Technologies used

- React.js
- CSS#
- VsCode
- PostCSS
- axios

# goal

유튜브 api를 가져와 동영상을 직접 유튜브처럼 기능할 수 있는 사이트를 만들어 봅니다.

# Getting Start

1. npm i
2. npm start

Open http://localhost:3000 to view it in the browser.

---

## 시작하면 가장 인기있는 영상들이 불러옵니다.

```js
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
```

## 동영상 서치 기능

```js
  async searchVideo(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=vidoe&key=${this.key}`,
      this.requestOptions
    )
    const result_1 = await response.json()
    return result_1.items.map(item => ({ ...item, id: item.id.videoId }))
    // item을 받아와서 id를 덮어줍니다.
  }
```
