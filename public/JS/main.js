async function getJob(id) {
  await fetch("/jobs/" + id);
}

function isLoggedin(userEmail) {
  if (userEmail) {
    location.href = "/jobs";
  }
}

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
