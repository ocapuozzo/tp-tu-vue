import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Tableau from '@/components/Tableau.vue'
import C from '@/models/C.js'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Tableau.vue exemple de test', () => {
  it('renders props._data when passed', () => {
    const _tab = ['A']
    const wrapper = shallowMount(Tableau, {
      propsData: { _tab }
    })
    //console.log(wrapper.text())
    expect(wrapper.text()).toMatch('Tableau')
  })
})

test('Exemple de test d\'une fonction', () => {
    const tab = [1,2,3]
    expect(C.nMax(tab)).toEqual(1)
})


