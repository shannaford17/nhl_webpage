const express = require('express')
const router = express.Router()

router.get('/weeklySchedule', (req, res) => {
    
    fetch('https://api-web.nhle.com/v1/club-schedule/NJD/week/now')
        .then((res) => {
            if (res) {
                return res.json()
            }
        })
        .then((data) => {
            res.send(data)
        })    
})

router.get('/remainingSchedule', (req, res) => {
    
    fetch('https://api-web.nhle.com/v1/club-schedule-season/NJD/now')
        .then((res) => {
            if (res) {
                return res.json()
            }
        })
        .then((data) => {
            res.send(data)
        })    
})

module.exports = router