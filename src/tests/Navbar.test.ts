import { mount, flushPromises } from '@vue/test-utils'
import Vue3TouchEvents from 'vue3-touch-events'
import router from '@/router'
import store, { key } from '@/store'
import Navbar from '@/components/Navbar'

test('Navbar dropdown', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(Navbar, {
    global: { plugins: [router, [store, key], Vue3TouchEvents] }
  })
  expect(wrapper.html()).toContain('Sångboken')

  await wrapper.find('[data-test="navbarShowSettingsButton"]').trigger('click')
  await flushPromises()
  expect(wrapper.find('.component-settings').exists())

  await wrapper.find('[data-test="navbarHideSettingsButton"]').trigger('click')
  await flushPromises()
  expect(wrapper.find('.component-settings').exists()).toBe(false)
})

test('Chapter back-button test', async () => {
  global.history.state.back = null

  router.replace('/chapter/0')
  await flushPromises()

  const wrapper = mount(Navbar, {
    global: { plugins: [router, [store, key], Vue3TouchEvents] }
  })
  await wrapper.find('[data-test="navbarBackButton"]').trigger('click')
  await flushPromises()
  expect(router.currentRoute.value.name).toContain('Home')

  router.back()
  await flushPromises()
})

test('Song back-button test', async () => {
  global.history.state.back = null

  router.replace('/chapter/0/song/0')
  await flushPromises()

  const wrapper = mount(Navbar, {
    global: { plugins: [router, [store, key], Vue3TouchEvents] }
  })
  await wrapper.find('[data-test="navbarBackButton"]').trigger('click')
  await flushPromises()
  expect(router.currentRoute.value.name).toContain('Chapter')

  router.back()
  await flushPromises()
})

test('Search back-button test', async () => {
  global.history.state.back = null

  router.replace('/search/test')
  await flushPromises()

  const wrapper = mount(Navbar, {
    global: { plugins: [router, [store, key], Vue3TouchEvents] }
  })
  await wrapper.find('[data-test="navbarBackButton"]').trigger('click')
  await flushPromises()
  expect(router.currentRoute.value.name).toContain('Home')

  router.back()
  await flushPromises()
})

// TODO: Add test for going back from the list view.
