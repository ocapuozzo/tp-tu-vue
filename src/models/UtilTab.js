export default class UtilTab {

	static toHtmlTab(arr, maxRows) {
		if (arr && !maxRows) {
			// ...
		}
		return `
        <table>
         <tbody>
          <tr>
            <td>testA</td>
          </tr>
          <tr>
            <td>testB</td>
          </tr>
          <tr>
            <td>testC</td>
          </tr>
          <tr>
            <td>testD</td>
          </tr>
          <tr>
            <td>testE</td>
          </tr>
         </tbody>
        </table>         
        `
	}
}