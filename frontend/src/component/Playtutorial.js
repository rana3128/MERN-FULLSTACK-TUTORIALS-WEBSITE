import React from 'react';
import YouTube from 'react-youtube';
export default class Playtutorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tlink: this.props.match.params.tylink,
            text: 'sda',
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.tylink !== prevProps.match.params.tylink) {
            this.setState({
                tlink: this.props.match.params.tylink
            })
        }
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        const videoid = this.props.match.params.tylink;

        return(
            <div className="container" >
                <YouTube
                    videoId={videoid}
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}