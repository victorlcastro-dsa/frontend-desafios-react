import PropTypes from 'prop-types';
import { QuizContext } from './quizContext';

const QuizProvider = ({ children }) => {
    const value = { name: 'Quiz'}
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default QuizProvider;