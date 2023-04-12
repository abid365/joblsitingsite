// add data to  local storage
function setJobToLocalStorage(job){
    // get existing job data
    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // add new job to exixting new data
    existingJobs.push(job);

    // save updated job data back to local storage
    localStorage.setItem("jobs", JSON.stringify(existingJobs));
}

export default setJobToLocalStorage;