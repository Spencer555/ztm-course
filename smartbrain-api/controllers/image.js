const handleImage = (req, res, db) =>  {
    if(!req.body.id){
        return res.status(400).json('Incorrect form submission')
    }
    const id = req.body.id.toString();
    db('users').where('id', '=', id)
        .increment('entries', 1).returning('entries')
        .then(entries => {
            res.json(entries[0].entries)
        }).catch(err => res.status(400).json('unable to register'))

}

module.exports= {
    handleImage:handleImage
}
