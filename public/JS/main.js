async function getJob(id) {
  await fetch("/jobs/" + id);
}

function isLoggedin(userEmail) {
  if (userEmail) {
    location.href = "/jobs";
  }
}
