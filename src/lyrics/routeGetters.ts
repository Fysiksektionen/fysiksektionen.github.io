
import { RouteLocationNormalized } from 'vue-router'
import store from '@/store'
import { chapters, getChapterByStringIndex, Chapter, Song, getSongByStringIndex, getSongsByStringIndices } from '.'

// TODO: Move elsewhere
export function param2int(s: string | string[]): number { return parseInt((typeof s === 'string') ? s : s[0]) }

// TODO: Perhaps move to router or something. I don't really want this file to rely on store

export function getSongFromRoute(route: RouteLocationNormalized): Song | undefined {
  switch (route.name) {
  case 'SongByIndex':
    return getSongByStringIndex(route.params.songIndex as string)
    break
  case 'SongByChapterIndex': {
    const ch = getChapterByStringIndex(route.params.chapterIndex as string)
    if (ch) { return ch.songs[param2int(route.params.songId)] }
    break
  }
  case 'SongFromList': {
    const list = store.state.lists[param2int(route.params.listId)]
    if (list !== undefined) {
      const song = getSongByStringIndex(list.songs[param2int(route.params.songId)])
      if (song) return song
    }
    break
  }
  case 'Song':
    return chapters[param2int(route.params.chapterId)].songs[param2int(route.params.songId)] as Song
    break
  default:
    alert('Något gick snett. Du får gärna upplysa sångboksansvarig eller webmaster om detta.\nFel: Kan inte avgöra sång för ruttnamn: ' + (route.name && route.name.toString()))
    break
  }
}

export function getChapterFromRoute(route: RouteLocationNormalized): Chapter | undefined {
  switch (route.name) {
  case 'SongByIndex':
    return undefined
  case 'SongByChapterIndex':
    return getChapterByStringIndex(route.params.chapterIndex as string)
  case 'Song':
    return chapters[param2int(route.params.chapterId)]
  case 'SongFromList': {
    const list = store.state.lists[param2int(route.params.listId)]
    return {
      chapter: list.name,
      prefix: route.params.listId as string, // TODO: This is ugly-redirected by the router as of now.
      songs: getSongsByStringIndices(list.songs),
      path: `/list/${route.params.listId}`
    }
  }
  case 'Chapter':
    return chapters[param2int(route.params.cid)]
  case 'ChapterByIndex':
    return getChapterByStringIndex(route.params.chapterIndex as string)
  default:
    console.error('getChapter called for unknown route: ' + (route.name?.toString()))
    return undefined
  }
}

// Returns undefined if no next song could be found. Returns false if the song is the first/last, etc.
export function getOffsetSongFromRoute(route: RouteLocationNormalized, offset: 1 | -1): undefined | false | { song: Song, chapterPath: string, index: number } {
  if (route.name === 'SongByIndex') return undefined

  const chapter = getChapterFromRoute(route)
  const songId = param2int(route.params.songId as string)
  if (!chapter) return undefined

  // const chapterId = (route.name === 'Song') ? (route.params.chapterId as string || chapter.prefix) : chapter.prefix

  if ((songId + offset > chapter.songs.length - 1) || (songId + offset < 0)) return false

  return {
    song: chapter.songs[songId + offset],
    chapterPath: chapter.path,
    index: songId + offset
  }
}
