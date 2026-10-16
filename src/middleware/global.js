const MONTH_ABV = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getMonthAbv = (monthNumber) => {
    return MONTH_ABV[monthNumber - 1] || '';
};

const setLocalVariables = (req, res, next) => {
    // Make NODE_ENV available to all templates
    res.locals.NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

    // Make any query parameters available to all templates
    res.locals.query = req.query;

    // Make month an abv instead of number
    res.locals.getMonthAbv = getMonthAbv;

    next();
};

export default setLocalVariables;