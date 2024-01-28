import parse from 'html-react-parser';

const safelySetInnerHTML = (input = '') => {
    return parse(input.replace(/\n/g, '<br>'));
};

export default safelySetInnerHTML;