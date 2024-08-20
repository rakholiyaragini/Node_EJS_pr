const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    res.render('index.ejs')

})

router.get('/4_col_wide', (req, res) => {
    
    res.render('pages/4_col_wide.ejs')
})

router.get('/about_us', (req, res) => {
    
    res.render('pages/about_us.ejs')
})

router.get('/accordian', (req, res) => {
    
    res.render('pages/accordian.ejs')
})

router.get('/blog_left', (req, res) => {
    
    res.render('pages/blog_left.ejs')
})

router.get('/blog_right', (req, res) => {
    
    res.render('pages/blog_right.ejs')
})

router.get('/blog_without_sidebar', (req, res) => {
    
    res.render('pages/blog_without_sidebar.ejs')
})

router.get('/cart', (req, res) => {
    
    res.render('pages/cart.ejs')
})

router.get('/clients', (req, res) => {
    
    res.render('pages/clients.ejs')
})

router.get('/countdown', (req, res) => {
    
    res.render('pages/countdown.ejs')
})

router.get('/gallery-2-col', (req, res) => {
    
    res.render('pages/gallery-2-col.ejs')
})

router.get('/gallery-3-col', (req, res) => {
    
    res.render('pages/gallery-3-col.ejs')
})

router.get('/gallery-4-col', (req, res) => {
    
    res.render('pages/gallery-4-col.ejs')
})

router.get('/juice_bar', (req, res) => {
    
    res.render('pages/juice_bar.ejs')
})

router.get('/our_team', (req, res) => {
    
    res.render('pages/our_team.ejs')
})

router.get('/our_menu', (req, res) => {
    
    res.render('pages/our_menu.ejs')
})

router.get('/pricing', (req, res) => {
    
    res.render('pages/pricing.ejs')
})

router.get('/progress', (req, res) => {
    
    res.render('pages/progress.ejs')
})

router.get('/shop_with_sidebar', (req, res) => {
    
    res.render('pages/shop_with_sidebar.ejs')
})

router.get('/shop_single', (req, res) => {
    
    res.render('pages/shop_single.ejs')
})

router.get('/team', (req, res) => {
    
    res.render('pages/team.ejs')
})

router.get('/smoothie_home', (req, res) => {
    
    res.render('pages/smoothie_home.ejs')
})
router .get('/verticle slider', (req, res) => {

    res.render('pages/verticle slider.ejs')
})

router.get('/what_we_do', (req, res) => {
    
    res.render('pages/what_we_do.ejs')
})

router.get('/testimionals', (req, res) => {
    
    res.render('pages/testimionals.ejs')
})

module.exports = router;