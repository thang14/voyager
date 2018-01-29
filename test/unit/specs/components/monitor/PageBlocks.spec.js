import setup from '../../../helpers/vuex-setup'
import htmlBeautify from 'html-beautify'
import PageBlocks from 'renderer/components/monitor/PageBlocks'

describe('PageBlocks', () => {
  let wrapper, store
  let {mount} = setup()

  beforeEach(() => {
    let instance = mount(PageBlocks, {
      stubs: {
        'modal-search': '<modal-search />'
      }
    })
    wrapper = instance.wrapper
    store = instance.store

    store.commit('setSearchQuery', ['blocks', ''])

    wrapper.update()
  })

  it('has the expected html structure', () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it('should show the search on click', () => {
    wrapper.vm.setSearch(true)
    expect(store.commit).toHaveBeenCalledWith('setSearchVisible', ['blocks', true])
  })
})
