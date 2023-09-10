
document.getElementById("subscribers").addEventListener("click", async () => {
  const response = await fetch("https://fancy-nougat-d79c80.netlify.app/subscribers");
  const data = await response.json();
  console.log(data)
  const ele = document.getElementById("result");
  ele.innerHTML = ""

  for (let i = 0; i < data.length; i++) {
    const pr = document.createElement("p");
    pr.innerText = `Name :${data[i].name}, Subscribed-Channel :${data[i].subscribedChannel}, Subscribed-Date : ${data[i].subscribedDate}`;
    ele.appendChild(pr);
  }
});

document
  .getElementById("subscribersByName")
  .addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/subscribers/names");
    const data = await response.json();
    const ele = document.getElementById("result");
    ele.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
      const pr = document.createElement("p");
      pr.innerText = `Name :${data[i].name}, Subscribed-Channel :${data[i].subscribedChannel}`;
      ele.appendChild(pr);
    }
  });

const form = document.getElementById("subscribersById");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);
  const id = obj.subscriberId;
  const response = await fetch(`http://localhost:3000/subscribers/${id}`);
  const data = await response.json();
  console.log(data)
  const ele = document.getElementById("result");
  ele.innerHTML = ""
  const pr = document.createElement("p");
  if(data.name){
    pr.innerText = `Name :${data.name}, Subscribed-Channel :${data.subscribedChannel}, Subscribed-Date:${data.subscribedDate}`
  }else{
    pr.innerText = data.message
  }
  ele.appendChild(pr);
});
