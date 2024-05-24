async function getJob(id) {
  console.log({ id });
  await fetch("/jobs/" + id);
  // location.href = "/jobs/" + id;
}
