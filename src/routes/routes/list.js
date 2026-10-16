import { getFilteredBySeasonRegion, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res, next) => {
    try {
        const regions = await getListOfRegions();
        const routes = await getFilteredBySeasonRegion(req.query);
        const seasons = await getListOfSeasons();

        res.render('routes/list', { 
            title: 'Scenic Train Routes',
            regions,
            routes,
            seasons,
            query: req.query || {}
        });
    } catch (err) {
        console.error('Error in list controller:', err);
        next(err);
    }
};