//imports
const request = require('request')
const cheerio = require('cheerio')

//addresses
const firstURL = 'http://www.phpbb.com/community/viewtopic.php?f=46&t=2159437'
const secondURL = 'https://www.vbulletin.com/forum/showthread.php/404497-www-vs-non-www-URL-causing-site-not-to-login'

//first request
request(`${firstURL}`, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        $('.postbody div .content').each((index, element) => {
            const node = $(element).text()
            console.log(`${index + 1}. ${node}`)
        })
    } else {
        console.log('There is a problem with the first url')
    }
})

//second request
request(`${secondURL}`, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        let texts = []
        const $ = cheerio.load(html)
        $('.js-post__content-text').each((index, element) => {
            let node = $(element).text().replace(/\s\s\s+/g, ' ')
            console.log(`${index + 1}. ${node}`, '\n')
        })
    } else {
        console.log('There is a problem with the second url')
    }
})
