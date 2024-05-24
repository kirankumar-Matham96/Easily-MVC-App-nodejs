async function getJob(id) {
  await fetch("/jobs/" + id);
}
