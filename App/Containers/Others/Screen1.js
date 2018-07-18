import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ListView } from 'react-native'
import { Images } from '../../Themes'

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    apartData = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10',
      'Item 11',
      'Item 12',
      'Item 13',
      'Item 14',
      'Item 15',
      'Item 16',
      'Item 17',
      'Item 18',
      'Item 19',
      'Item 20',
    ];
    apartDataHolder = [
      'Holder 1',
      'Holder 2',
      'Holder 3',
      'Holder 4',
      'Holder 5',
      'Holder 6',
      'Holder 7',
      'Holder 8',
      'Holder 9',
      'Holder 10',
      'Holder 11',
      'Holder 12',
      'Holder 13',
      'Holder 14',
      'Holder 15',
      'Holder 16',
      'Holder 17',
      'Holder 18',
      'Holder 19',
      'Holder 20',
    ];

    this.state = {
      dataSource: ds.cloneWithRows(apartData),
      isApart: true, isHolder: false
    };
  }

  ListViewItemSeparatorLine = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  OpenSecondActivity(rowData) {
    console.log("click");
    this.props.navigation.navigate('screen2', { data: rowData });
  }
  showAparts = () => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(apartData),
      isApart: true,
      isHolder: false
    })
  }

  showApartsHolders = () => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(apartDataHolder),
      isApart: false,
      isHolder: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnFrame}>
          <TouchableOpacity
            onPress={this.showAparts}
            style={styles.btn_top}>
            <Text>Apartments</Text>
            <Text>(Apartment)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.showApartsHolders}
            style={styles.btn_top}>
            <Text>Apartment Holders</Text>
            <Text>(Apartment)</Text>
          </TouchableOpacity>
        </View>
        {this.state.isApart &&
          <View>
            <TouchableOpacity style={styles.daterange}>
              <Text>Date Range</Text>
              <Text>01.01.2018 - 01.02.2018</Text>
            </TouchableOpacity>
            <ListView
              dataSource={this.state.dataSource}
              renderSeparator={this.ListViewItemSeparatorLine}
              renderRow={
                (rowData) =>
                  <View style={styles.row_item}>
                    <Image source={Images.home_red} style={{ width: 40, height: 40 }} />
                    <View style={styles.text_view}>
                      <Text style={styles.row_text} onPress={this.OpenSecondActivity.bind(this, rowData)}>{rowData}</Text>
                    </View>
                  </View>
              }
            />
          </View>
        }
        {this.state.isHolder &&
          <View>
            <TouchableOpacity style={styles.daterange}>
              <Text>Date Range</Text>
              <Text>01.01.2018 - 01.02.2018</Text>
            </TouchableOpacity>
            <ListView
              dataSource={this.state.dataSource}
              renderSeparator={this.ListViewItemSeparatorLine}
              renderRow={
                (rowData) =>
                  <View style={styles.row_item}>
                    {/* <Image source={Images.home_red} style={{ width: 40, height: 40 }} /> */}
                    <View style={styles.text_view}>
                      <Text style={styles.row_text} onPress={this.OpenSecondActivity.bind(this, rowData)}>{rowData}</Text>
                    </View>
                  </View>
              }
            />
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list_container: {
    flex: 1
  },
  btnFrame: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  daterange: {
    backgroundColor: '#c5c2d4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  btn_top: {
    flex: 0.5,
    backgroundColor: '#289880',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  row_item: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  row_text: {
    marginLeft: 20,
    fontSize: 20
  },
  text_view: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
