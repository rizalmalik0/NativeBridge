import React, { Component } from 'react';
import { Alert, NativeModules, View } from 'react-native';

import { Button, Card, CardItem, Input } from './common';
import ProgressBar from './ProgressBar';

const HelloManager = NativeModules.HelloManager;

class MainScene extends Component {
    state = { input: '', loading: false };

    onToast() {
        const { input } = this.state;

        HelloManager.alert(input);
    }

    onCallback() {
        const { input } = this.state;

        HelloManager.showError(input, (text) => Alert.alert('Alert', text));
    }

    onComponent() {
        const { loading } = this.state;

        this.setState({ loading: !loading });
    }

    renderNativeComponent() {
        const { loading } = this.state;

        // this.setState({ loading: !loading });

        if (loading) {
            return (
                <CardItem>
                    <ProgressBar progress={0} indeterminate={false} style={styles.progressBar} />
                </CardItem>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        label='Input'
                        value={this.state.input}
                        onChangeText={(text) => this.setState({ input: text })}
                    />
                </CardItem>
                <CardItem>
                    <Button onPress={this.onToast.bind(this)}>Native Modules Toast</Button>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onCallback.bind(this)}>Native Modules Callback</Button>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onComponent.bind(this)}>Native UI Component</Button>
                </CardItem>
                {this.renderNativeComponent()}
            </Card>
        );
    }

}

const styles = {
    progressBar: {
        height: 50,
        flex: 1,
        margin: 10,
        // width: Dimensions.get('window').width - 2 * 20,
    },
};

export default MainScene;
