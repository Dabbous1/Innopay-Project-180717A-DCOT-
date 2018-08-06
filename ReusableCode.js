export default class TabsExample extends Component {
	render() {
		return (
			<Tabs>
				<Tab heading="Tab1">
					<TabA />
				</Tab>
				<Tab heading="Tab2">
					<TabB />
				</Tab>
			</Tabs>
		);
	}
}

// {
//   "presets": ["babel-preset-expo"],
//   "env": {
//     "development": {
//       "plugins": [
//       ["module-alias", [
//         { "src": "./src/components/common/consumer", "expose": "common/consumer" },
//         { "src": "./src/components/screens/consumer", "expose":"screens/consumer" },
//         { "src": "./src/components/common", "expose": "common" },
//         { "src": "./src/components/screens", "expose": "screens" },
//         { "innopay-project": "./Routes", "expose" :"Routes" },
//         { "src": "npm:lodash", "expose": "underscore" }
//       ]]
//     ]
//     }
//   }
// }
