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

