import cx from 'classnames';
import {Component} from 'react';

export default class LikeButton extends Component {
    state = {
        count: 100,
        liked: false
    }

    updateState = () => {
        let {count, liked} = this.state
        liked = !liked
        count = liked ? count + 1 : count - 1
        this.setState({liked, count})
    }

    render() {
        const {count, liked} = this.state

        return (
            <>
                <button onClick={this.updateState}
                        className={cx('like-button', {'liked': liked})}>
                    Like | <span className="likes-counter">{count}</span>
                </button>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
