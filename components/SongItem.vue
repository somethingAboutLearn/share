<template>
  <div class="song-item">
    <div class="song">
      <img :src="pic" />
    </div>
    <div class="des">
      <span>{{song}}</span>
      <span>{{singer}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongItem',
  props: {
    pic: {
      type: String,
      default: ''
    },
    song: {
      type: String,
      default: '歌曲名称'
    },
    singer: {
      type: String,
      default: '歌手名称'
    }
  }
}
</script>

<style lang="scss" scoped>
.song-item {
  .song {
    width: 100%;
    img {
      display: block;
      max-width: 100%;
      margin: auto;
    }
  }
  .des {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
