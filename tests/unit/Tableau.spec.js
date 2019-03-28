import {shallowMount}  from '@vue/test-utils'
import Tableau from '@/components/Tableau.vue'

describe('Tableau.vue exemple de test', () => {
  it('renders props._data when passed', () => {
    const _tab = ['testA', 'testB']
    const wrapper = shallowMount(Tableau, {
      propsData: { _tab }
    })
    
    // un helper Jest pour Vue
    // https://vue-test-utils.vuejs.org/guides/#getting-started
    expect(wrapper.html()).toContain('<td>testA</td>')
    expect(wrapper.html()).toContain('<td>testB</td>')
    expect(wrapper.html()).not.toContain('<td>...</td>')
  })
})


