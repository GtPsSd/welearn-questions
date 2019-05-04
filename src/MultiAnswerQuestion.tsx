import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MultiAnswerQuestion extends Component<any, any> {


    public static propTypes = {
        question: PropTypes.any.isRequired,
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


                {question.answers.map((item) =>
                    (
                        <div className="row answer" key={item}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id={item} value={item}/>
                                <label className="custom-control-label" htmlFor={item}>
                                    {item}
                                </label>
                            </div>
                        </div>
                    )
                )}


            </div>


        );
    }

}

export default MultiAnswerQuestion;



