const jobmodel = require("../Models/jobmodel")
const bcrypt = require('bcrypt')


const jobPage = function (req, res, next) {
    res.render('company/addjob')
    // console.log(req.body);
}

const addJob = async function (req, res, next) {
    if (req.session.company) {
        req.body.companyId = req.session.company._id
        req.body.companyName = req.session.company.empName
        req.body.datePosted = new Date().toDateString()
        await jobmodel.create(req.body)
        res.redirect('company/home')
    } else {
        res.redirect('/company/login')
    }
}

const companyJobView = async (req, res, next) => {
    if (req.session.company) {
        let jobs = await jobmodel.find({ companyId: req.session.company._id })
        res.render("company/viewjobs", { jobs })
    } else {
        res.redirect('/company/login')
    }

}
const userJobView = async (req, res, next) => {
    let jobs = await jobmodel.find({ status: 'posted' })
    res.render('user/viewjobs', { jobs })

}

const deleteJob = async function (req, res, next) {

    const jobDelete = await jobmodel.findOneAndDelete({ _id: req.params.id })

    res.redirect('/company/viewjobs')
}


const jobEditPage =async  function (req, res, next) {
    const job =await jobmodel.findOne({ _id: req.params.id })
    console.log("job", job)
    res.render('company/editjob', { job })

}

const editJob = async function (req, res, next) {
    const jobEdit = await jobmodel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.redirect('/company/viewjobs')
}

module.exports = { jobPage, addJob, companyJobView, userJobView, deleteJob, jobEditPage, editJob }