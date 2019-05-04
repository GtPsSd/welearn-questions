import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CustomAnswer extends Component<any, any> {
    public static propTypes = {
        item: PropTypes.string.isRequired,
        i: PropTypes.number.isRequired,
        onAdd: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }

    selection = () => {
        let {selected} = this.state;
        selected = !selected;
        if (selected) {
            this.props.onAdd(this.props.i);
        } else {
            this.props.onRemove(this.props.i);
        }
        this.setState({selected: selected});
    };

    render() {

        const {item, i} = this.props;
        const {selected} = this.state;
        return (
            <div onClick={() => this.selection()}
                 className={"low-rounded col-12 btn btn-outline-" + (selected ? "primary" : "black")}
                 key={item}>
                <div className="row">
                    <div className={"border col-1 low-rounded "}><span>{i + 1}</span></div>
                    <div className="col-9 offset-1">
                        <span className="text-center">
                            {item}
                        </span>
                    </div>
                </div>


            </div>

        );
    }
}


class CustomQuestion extends Component<any, any> {


    public static propTypes = {
        question: PropTypes.any.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            answered: [],
        };
        this.removeAnswer = this.removeAnswer.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
    }

    addAnswer = (i) => {
        let answered = this.state.answered.slice();

        if (answered.indexOf(i) !== -1) {
            answered.push(i);
            this.setState({answered: answered});
        }
    };
    removeAnswer = (i) => {
        let answered = this.state.answered.slice();

        for (var j = 0; j < answered.length; j++) {
            if (answered[j] === i) {
                answered.splice(j, 1);
                return;
            }
        }

    };

    render() {

        const {question} = this.props;
        return (
            <div className="container question-container">

                <div className="row question">
                   <span>
                        {question.question}
                    </span>
                </div>

                {question.answers.map((item, i) =>
                    (
                        <div className="row">
                            <CustomAnswer item={item} i={i} onRemove={(j) => this.removeAnswer(j)}
                                          onAdd={(j) => this.addAnswer(j)}/>

                        </div>
                    )
                )}


            </div>


        );
    }

}

export default CustomQuestion;



