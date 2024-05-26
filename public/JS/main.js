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
    const res = await fetch("/job/delete/" + id, { method: "delete" });
    if (res.ok) {
      // location.redirect("/jobs");
      location.href = "/jobs";
    }
  }
}
