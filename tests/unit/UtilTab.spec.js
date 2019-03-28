import UtilTab from '@/models/UtilTab.js'

test('Exemple de test d\'une fonction', () => {
    const tab = ['testA', 'testB']
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testA</td>')
    expect(UtilTab.toHtmlTab(tab, 2)).toMatch('<td>testB</td>')
})


