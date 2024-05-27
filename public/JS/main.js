/*********************************************************************
 * Purpose      : Controls the client side operations
 *
 * @description
 *
 * @file        : public/JS/main.js
 * @overview    : controls the redirection and confirmations
 * @module      : this is necessary to run the job search app without any issues
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 *********************************************************************/

/**
 * To get the job details.
 * @param {job id} id 
 */
async function getJob(id) {
  await fetch("/jobs/" + id);
}

/**
 * To redirect to the '/jobs' endpoint when the user loggedin.
 * @param {loggedin user email} userEmail 
 */
function isLoggedin(userEmail) {
  if (userEmail) {
    location.href = "/jobs";
  }
}

/**
 * To confirm before deleting the job post.
 * @param {job id} id 
 */
async function confirmDelete(id) {
  const responseFromUser = confirm("Do you want to delete this post?");
  if (responseFromUser) {
    const res = await fetch("/jobs/delete/" + id, { method: "DELETE" });
    console.log(res);
    if (res.ok) {
      location.href = "/jobs";
    } else {
      location.href = "/error-deletion";
    }
  }
}
